// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

/**
 * @title SimpleSwap
 * @notice A simple swap contract for EdgeSwap DEX on Sepolia testnet
 * @dev Supports ETH and ERC20 token swaps with configurable exchange rates
 */
contract SimpleSwap is Ownable, ReentrancyGuard {
    using SafeERC20 for IERC20;

    // Supported tokens
    IERC20 public immutable usdc;
    IERC20 public immutable dai;

    // Exchange rates (scaled by 1e18 for precision)
    // Rate = how many output tokens per 1 input token (in wei/smallest unit)
    uint256 public ethToUsdcRate = 2500 * 1e6; // 1 ETH = 2500 USDC (6 decimals)
    uint256 public ethToDaiRate = 2500 * 1e18; // 1 ETH = 2500 DAI (18 decimals)
    uint256 public usdcToDaiRate = 1e18; // 1 USDC = 1 DAI (adjusted for decimals)

    // Fee in basis points (100 = 1%)
    uint256 public swapFee = 30; // 0.3%

    // Events
    event Swap(
        address indexed user,
        address indexed tokenIn,
        address indexed tokenOut,
        uint256 amountIn,
        uint256 amountOut
    );
    event RateUpdated(string pair, uint256 newRate);
    event LiquidityAdded(address indexed token, uint256 amount);
    event LiquidityRemoved(address indexed token, uint256 amount);
    event FeeUpdated(uint256 newFee);

    constructor(address _usdc, address _dai) Ownable(msg.sender) {
        usdc = IERC20(_usdc);
        dai = IERC20(_dai);
    }

    // ============ SWAP FUNCTIONS ============

    /**
     * @notice Swap ETH for USDC
     */
    function swapETHForUSDC() external payable nonReentrant {
        require(msg.value > 0, "Must send ETH");
        
        uint256 amountOut = calculateOutput(msg.value, ethToUsdcRate, 18, 6);
        amountOut = applyFee(amountOut);
        
        require(usdc.balanceOf(address(this)) >= amountOut, "Insufficient USDC liquidity");
        
        usdc.safeTransfer(msg.sender, amountOut);
        
        emit Swap(msg.sender, address(0), address(usdc), msg.value, amountOut);
    }

    /**
     * @notice Swap ETH for DAI
     */
    function swapETHForDAI() external payable nonReentrant {
        require(msg.value > 0, "Must send ETH");
        
        uint256 amountOut = calculateOutput(msg.value, ethToDaiRate, 18, 18);
        amountOut = applyFee(amountOut);
        
        require(dai.balanceOf(address(this)) >= amountOut, "Insufficient DAI liquidity");
        
        dai.safeTransfer(msg.sender, amountOut);
        
        emit Swap(msg.sender, address(0), address(dai), msg.value, amountOut);
    }

    /**
     * @notice Swap USDC for ETH
     * @param amountIn Amount of USDC to swap
     */
    function swapUSDCForETH(uint256 amountIn) external nonReentrant {
        require(amountIn > 0, "Amount must be > 0");
        
        // Calculate ETH output (inverse rate)
        uint256 amountOut = (amountIn * 1e18) / ethToUsdcRate;
        amountOut = (amountOut * 1e12); // Adjust for USDC 6 decimals to ETH 18 decimals
        amountOut = applyFee(amountOut);
        
        require(address(this).balance >= amountOut, "Insufficient ETH liquidity");
        
        usdc.safeTransferFrom(msg.sender, address(this), amountIn);
        
        (bool success, ) = payable(msg.sender).call{value: amountOut}("");
        require(success, "ETH transfer failed");
        
        emit Swap(msg.sender, address(usdc), address(0), amountIn, amountOut);
    }

    /**
     * @notice Swap DAI for ETH
     * @param amountIn Amount of DAI to swap
     */
    function swapDAIForETH(uint256 amountIn) external nonReentrant {
        require(amountIn > 0, "Amount must be > 0");
        
        // Calculate ETH output (inverse rate)
        uint256 amountOut = (amountIn * 1e18) / ethToDaiRate;
        amountOut = applyFee(amountOut);
        
        require(address(this).balance >= amountOut, "Insufficient ETH liquidity");
        
        dai.safeTransferFrom(msg.sender, address(this), amountIn);
        
        (bool success, ) = payable(msg.sender).call{value: amountOut}("");
        require(success, "ETH transfer failed");
        
        emit Swap(msg.sender, address(dai), address(0), amountIn, amountOut);
    }

    /**
     * @notice Swap USDC for DAI
     * @param amountIn Amount of USDC to swap
     */
    function swapUSDCForDAI(uint256 amountIn) external nonReentrant {
        require(amountIn > 0, "Amount must be > 0");
        
        // 1 USDC = 1 DAI (adjust decimals: 6 -> 18)
        uint256 amountOut = amountIn * 1e12;
        amountOut = applyFee(amountOut);
        
        require(dai.balanceOf(address(this)) >= amountOut, "Insufficient DAI liquidity");
        
        usdc.safeTransferFrom(msg.sender, address(this), amountIn);
        dai.safeTransfer(msg.sender, amountOut);
        
        emit Swap(msg.sender, address(usdc), address(dai), amountIn, amountOut);
    }

    /**
     * @notice Swap DAI for USDC
     * @param amountIn Amount of DAI to swap
     */
    function swapDAIForUSDC(uint256 amountIn) external nonReentrant {
        require(amountIn > 0, "Amount must be > 0");
        
        // 1 DAI = 1 USDC (adjust decimals: 18 -> 6)
        uint256 amountOut = amountIn / 1e12;
        amountOut = applyFee(amountOut);
        
        require(usdc.balanceOf(address(this)) >= amountOut, "Insufficient USDC liquidity");
        
        dai.safeTransferFrom(msg.sender, address(this), amountIn);
        usdc.safeTransfer(msg.sender, amountOut);
        
        emit Swap(msg.sender, address(dai), address(usdc), amountIn, amountOut);
    }

    // ============ VIEW FUNCTIONS ============

    /**
     * @notice Get quote for a swap
     */
    function getQuote(
        address tokenIn,
        address tokenOut,
        uint256 amountIn
    ) external view returns (uint256 amountOut) {
        if (tokenIn == address(0)) {
            // ETH -> Token
            if (tokenOut == address(usdc)) {
                amountOut = calculateOutput(amountIn, ethToUsdcRate, 18, 6);
            } else if (tokenOut == address(dai)) {
                amountOut = calculateOutput(amountIn, ethToDaiRate, 18, 18);
            }
        } else if (tokenOut == address(0)) {
            // Token -> ETH
            if (tokenIn == address(usdc)) {
                amountOut = (amountIn * 1e18 * 1e12) / ethToUsdcRate;
            } else if (tokenIn == address(dai)) {
                amountOut = (amountIn * 1e18) / ethToDaiRate;
            }
        } else if (tokenIn == address(usdc) && tokenOut == address(dai)) {
            amountOut = amountIn * 1e12;
        } else if (tokenIn == address(dai) && tokenOut == address(usdc)) {
            amountOut = amountIn / 1e12;
        }
        
        amountOut = applyFee(amountOut);
    }

    /**
     * @notice Get contract's liquidity balances
     */
    function getLiquidity() external view returns (uint256 ethBalance, uint256 usdcBalance, uint256 daiBalance) {
        ethBalance = address(this).balance;
        usdcBalance = usdc.balanceOf(address(this));
        daiBalance = dai.balanceOf(address(this));
    }

    // ============ ADMIN FUNCTIONS ============

    /**
     * @notice Add ETH liquidity
     */
    function addETHLiquidity() external payable onlyOwner {
        require(msg.value > 0, "Must send ETH");
        emit LiquidityAdded(address(0), msg.value);
    }

    /**
     * @notice Add token liquidity
     */
    function addTokenLiquidity(address token, uint256 amount) external onlyOwner {
        require(token == address(usdc) || token == address(dai), "Unsupported token");
        IERC20(token).safeTransferFrom(msg.sender, address(this), amount);
        emit LiquidityAdded(token, amount);
    }

    /**
     * @notice Remove ETH liquidity
     */
    function removeETHLiquidity(uint256 amount) external onlyOwner {
        require(address(this).balance >= amount, "Insufficient balance");
        (bool success, ) = payable(owner()).call{value: amount}("");
        require(success, "Transfer failed");
        emit LiquidityRemoved(address(0), amount);
    }

    /**
     * @notice Remove token liquidity
     */
    function removeTokenLiquidity(address token, uint256 amount) external onlyOwner {
        require(token == address(usdc) || token == address(dai), "Unsupported token");
        IERC20(token).safeTransfer(owner(), amount);
        emit LiquidityRemoved(token, amount);
    }

    /**
     * @notice Update exchange rates
     */
    function updateRates(uint256 _ethToUsdc, uint256 _ethToDai) external onlyOwner {
        if (_ethToUsdc > 0) {
            ethToUsdcRate = _ethToUsdc;
            emit RateUpdated("ETH/USDC", _ethToUsdc);
        }
        if (_ethToDai > 0) {
            ethToDaiRate = _ethToDai;
            emit RateUpdated("ETH/DAI", _ethToDai);
        }
    }

    /**
     * @notice Update swap fee
     */
    function updateFee(uint256 _fee) external onlyOwner {
        require(_fee <= 1000, "Fee too high"); // Max 10%
        swapFee = _fee;
        emit FeeUpdated(_fee);
    }

    // ============ INTERNAL FUNCTIONS ============

    function calculateOutput(
        uint256 amountIn,
        uint256 rate,
        uint8 decimalsIn,
        uint8 decimalsOut
    ) internal pure returns (uint256) {
        // Normalize to 18 decimals, apply rate, then convert to output decimals
        uint256 normalized = amountIn * (10 ** (18 - decimalsIn));
        uint256 output = (normalized * rate) / 1e18;
        return output / (10 ** (18 - decimalsOut));
    }

    function applyFee(uint256 amount) internal view returns (uint256) {
        return amount - (amount * swapFee / 10000);
    }

    // Allow contract to receive ETH
    receive() external payable {}
}
