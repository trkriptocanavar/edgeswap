// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// ============ MOCK USDC ============
contract MockUSDC {
    string public name = "USD Coin";
    string public symbol = "USDC";
    uint8 public decimals = 6;
    uint256 public totalSupply;
    
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    
    // Herkes kendine mint yapabilir (testnet için)
    function mint(uint256 amount) external {
        balanceOf[msg.sender] += amount;
        totalSupply += amount;
        emit Transfer(address(0), msg.sender, amount);
    }
    
    function transfer(address to, uint256 amount) external returns (bool) {
        require(balanceOf[msg.sender] >= amount, "Insufficient balance");
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
        emit Transfer(msg.sender, to, amount);
        return true;
    }
    
    function approve(address spender, uint256 amount) external returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }
    
    function transferFrom(address from, address to, uint256 amount) external returns (bool) {
        require(balanceOf[from] >= amount, "Insufficient balance");
        require(allowance[from][msg.sender] >= amount, "Insufficient allowance");
        
        balanceOf[from] -= amount;
        balanceOf[to] += amount;
        allowance[from][msg.sender] -= amount;
        
        emit Transfer(from, to, amount);
        return true;
    }
}

// ============ MOCK DAI ============
contract MockDAI {
    string public name = "Dai Stablecoin";
    string public symbol = "DAI";
    uint8 public decimals = 18;
    uint256 public totalSupply;
    
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    
    // Herkes kendine mint yapabilir (testnet için)
    function mint(uint256 amount) external {
        balanceOf[msg.sender] += amount;
        totalSupply += amount;
        emit Transfer(address(0), msg.sender, amount);
    }
    
    function transfer(address to, uint256 amount) external returns (bool) {
        require(balanceOf[msg.sender] >= amount, "Insufficient balance");
        balanceOf[msg.sender] -= amount;
        balanceOf[to] += amount;
        emit Transfer(msg.sender, to, amount);
        return true;
    }
    
    function approve(address spender, uint256 amount) external returns (bool) {
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }
    
    function transferFrom(address from, address to, uint256 amount) external returns (bool) {
        require(balanceOf[from] >= amount, "Insufficient balance");
        require(allowance[from][msg.sender] >= amount, "Insufficient allowance");
        
        balanceOf[from] -= amount;
        balanceOf[to] += amount;
        allowance[from][msg.sender] -= amount;
        
        emit Transfer(from, to, amount);
        return true;
    }
}

// ============ SIMPLE SWAP ============
contract EdgeSwap {
    address public owner;
    address public usdc;
    address public dai;
    
    // 1 ETH = 2500 USD (yaklaşık)
    uint256 public ethPrice = 2500;
    
    // Fee: 0.3%
    uint256 public feePercent = 30; // basis points (30 = 0.3%)
    
    event Swap(address indexed user, address tokenIn, address tokenOut, uint256 amountIn, uint256 amountOut);
    event LiquidityAdded(address indexed token, uint256 amount);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }
    
    constructor(address _usdc, address _dai) {
        owner = msg.sender;
        usdc = _usdc;
        dai = _dai;
    }
    
    // ========== SWAP FUNCTIONS ==========
    
    // ETH -> USDC
    function swapETHForUSDC() external payable {
        require(msg.value > 0, "Send ETH");
        
        // 1 ETH = 2500 USDC (6 decimals)
        uint256 amountOut = (msg.value * ethPrice * 1e6) / 1e18;
        amountOut = applyFee(amountOut);
        
        require(MockUSDC(usdc).balanceOf(address(this)) >= amountOut, "Low liquidity");
        MockUSDC(usdc).transfer(msg.sender, amountOut);
        
        emit Swap(msg.sender, address(0), usdc, msg.value, amountOut);
    }
    
    // ETH -> DAI
    function swapETHForDAI() external payable {
        require(msg.value > 0, "Send ETH");
        
        // 1 ETH = 2500 DAI (18 decimals)
        uint256 amountOut = (msg.value * ethPrice);
        amountOut = applyFee(amountOut);
        
        require(MockDAI(dai).balanceOf(address(this)) >= amountOut, "Low liquidity");
        MockDAI(dai).transfer(msg.sender, amountOut);
        
        emit Swap(msg.sender, address(0), dai, msg.value, amountOut);
    }
    
    // USDC -> ETH
    function swapUSDCForETH(uint256 amountIn) external {
        require(amountIn > 0, "Amount = 0");
        
        // USDC to ETH
        uint256 amountOut = (amountIn * 1e18) / (ethPrice * 1e6);
        amountOut = applyFee(amountOut);
        
        require(address(this).balance >= amountOut, "Low ETH liquidity");
        
        MockUSDC(usdc).transferFrom(msg.sender, address(this), amountIn);
        payable(msg.sender).transfer(amountOut);
        
        emit Swap(msg.sender, usdc, address(0), amountIn, amountOut);
    }
    
    // DAI -> ETH
    function swapDAIForETH(uint256 amountIn) external {
        require(amountIn > 0, "Amount = 0");
        
        // DAI to ETH
        uint256 amountOut = (amountIn * 1e18) / (ethPrice * 1e18);
        amountOut = applyFee(amountOut);
        
        require(address(this).balance >= amountOut, "Low ETH liquidity");
        
        MockDAI(dai).transferFrom(msg.sender, address(this), amountIn);
        payable(msg.sender).transfer(amountOut);
        
        emit Swap(msg.sender, dai, address(0), amountIn, amountOut);
    }
    
    // USDC -> DAI
    function swapUSDCForDAI(uint256 amountIn) external {
        require(amountIn > 0, "Amount = 0");
        
        // 1 USDC = 1 DAI (adjust decimals 6 -> 18)
        uint256 amountOut = amountIn * 1e12;
        amountOut = applyFee(amountOut);
        
        require(MockDAI(dai).balanceOf(address(this)) >= amountOut, "Low DAI liquidity");
        
        MockUSDC(usdc).transferFrom(msg.sender, address(this), amountIn);
        MockDAI(dai).transfer(msg.sender, amountOut);
        
        emit Swap(msg.sender, usdc, dai, amountIn, amountOut);
    }
    
    // DAI -> USDC
    function swapDAIForUSDC(uint256 amountIn) external {
        require(amountIn > 0, "Amount = 0");
        
        // 1 DAI = 1 USDC (adjust decimals 18 -> 6)
        uint256 amountOut = amountIn / 1e12;
        amountOut = applyFee(amountOut);
        
        require(MockUSDC(usdc).balanceOf(address(this)) >= amountOut, "Low USDC liquidity");
        
        MockDAI(dai).transferFrom(msg.sender, address(this), amountIn);
        MockUSDC(usdc).transfer(msg.sender, amountOut);
        
        emit Swap(msg.sender, dai, usdc, amountIn, amountOut);
    }
    
    // ========== LIQUIDITY ==========
    
    function addETHLiquidity() external payable onlyOwner {
        emit LiquidityAdded(address(0), msg.value);
    }
    
    function addUSDCLiquidity(uint256 amount) external onlyOwner {
        MockUSDC(usdc).transferFrom(msg.sender, address(this), amount);
        emit LiquidityAdded(usdc, amount);
    }
    
    function addDAILiquidity(uint256 amount) external onlyOwner {
        MockDAI(dai).transferFrom(msg.sender, address(this), amount);
        emit LiquidityAdded(dai, amount);
    }
    
    // ========== WITHDRAW (ADMIN) ==========
    
    function withdrawETH(uint256 amount) external onlyOwner {
        require(address(this).balance >= amount, "Low balance");
        payable(owner).transfer(amount);
    }
    
    function withdrawAllETH() external onlyOwner {
        payable(owner).transfer(address(this).balance);
    }
    
    function withdrawUSDC(uint256 amount) external onlyOwner {
        MockUSDC(usdc).transfer(owner, amount);
    }
    
    function withdrawDAI(uint256 amount) external onlyOwner {
        MockDAI(dai).transfer(owner, amount);
    }
    
    // ========== VIEW ==========
    
    function getLiquidity() external view returns (uint256 ethBal, uint256 usdcBal, uint256 daiBal) {
        ethBal = address(this).balance;
        usdcBal = MockUSDC(usdc).balanceOf(address(this));
        daiBal = MockDAI(dai).balanceOf(address(this));
    }
    
    function getQuote(address tokenIn, address tokenOut, uint256 amountIn) external view returns (uint256) {
        uint256 amountOut;
        
        if (tokenIn == address(0) && tokenOut == usdc) {
            amountOut = (amountIn * ethPrice * 1e6) / 1e18;
        } else if (tokenIn == address(0) && tokenOut == dai) {
            amountOut = amountIn * ethPrice;
        } else if (tokenIn == usdc && tokenOut == address(0)) {
            amountOut = (amountIn * 1e18) / (ethPrice * 1e6);
        } else if (tokenIn == dai && tokenOut == address(0)) {
            amountOut = amountIn / ethPrice;
        } else if (tokenIn == usdc && tokenOut == dai) {
            amountOut = amountIn * 1e12;
        } else if (tokenIn == dai && tokenOut == usdc) {
            amountOut = amountIn / 1e12;
        }
        
        return applyFee(amountOut);
    }
    
    // ========== ADMIN ==========
    
    function updateEthPrice(uint256 _price) external onlyOwner {
        ethPrice = _price;
    }
    
    function applyFee(uint256 amount) internal view returns (uint256) {
        return amount - (amount * feePercent / 10000);
    }
    
    receive() external payable {}
}
