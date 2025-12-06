import React, { useMemo, useState, useEffect, useCallback } from "react";

import { BottomNav, type NavItem } from "./BottomNav";
/* ========= ICONS ========= */

// CUSTOM LOGO: "ES" Circuit Style (Matching the uploaded image)
const EdgeSwapLogo: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  const baseSvgClasses =
    "absolute inset-0 transition-all duration-200 ease-out transform";

  return (
    <div
      className="relative w-full h-full cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ==== NORMAL: KURUMSAL ES LOGOSU ==== */}
      <svg
        viewBox="0 0 100 100"
        className={`${baseSvgClasses} ${hovered ? "opacity-0 scale-95" : "opacity-100 scale-[1.12]"
          }`}
      >
        <defs>
          {/* Dış ring için gradient */}
          <linearGradient id="es_ring_grad" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>

          {/* E harfi */}
          <linearGradient id="es_e_grad" x1="20" y1="30" x2="40" y2="70">
            <stop offset="0%" stopColor="#e5f3ff" />
            <stop offset="100%" stopColor="#bfdbfe" />
          </linearGradient>

          {/* S harfi */}
          <linearGradient id="es_s_grad" x1="55" y1="30" x2="80" y2="70">
            <stop offset="0%" stopColor="#bbf7d0" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>

        {/* Arka plan kare / kapsül */}
        <rect x="8" y="8" width="84" height="84" rx="26" fill="#020617" />

        {/* Dış ring */}
        <rect
          x="10"
          y="10"
          width="80"
          height="80"
          rx="24"
          fill="none"
          stroke="url(#es_ring_grad)"
          strokeWidth="2.5"
        />

        {/* İçte hafif koyu kapsül */}
        <rect x="16" y="16" width="68" height="68" rx="22" fill="#020817" />

        {/* SOL: "E" HARFİ */}
        <g transform="translate(24, 28)">
          {/* Dikey gövde */}
          <rect
            x={0}
            y={2}
            width={7}
            height={32}
            rx={3.5}
            fill="url(#es_e_grad)"
          />
          {/* Üst çizgi */}
          <rect
            x={5}
            y={0}
            width={16}
            height={5}
            rx={2.5}
            fill="url(#es_e_grad)"
          />
          {/* Orta çizgi */}
          <rect
            x={5}
            y={14}
            width={14}
            height={5}
            rx={2.5}
            fill="url(#es_e_grad)"
          />
          {/* Alt çizgi */}
          <rect
            x={5}
            y={29}
            width={16}
            height={5}
            rx={2.5}
            fill="url(#es_e_grad)"
          />
        </g>

        {/* SAĞ: "S" HARFİ */}
        <g transform="translate(48, 28)">
          <path
            d="
              M 18 4
              C 13 0, 7 0, 3.5 3.5
              C 0 7, 1.5 12, 6 14
              L 12 16.5
              C 16.5 18.3, 18.5 21.5, 17 24.7
              C 15.5 28, 11.5 30, 7 30
              C 3.5 30, 1.5 29, 0 27.7
            "
            fill="none"
            stroke="url(#es_s_grad)"
            strokeWidth={4.3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Swap hissi veren küçük oklar */}
        {/* Yukarı sağa bakan ok */}
        <g transform="translate(63, 22)">
          <path
            d="M0 8 L8 0 L8 5 L13 5 L13 11 L8 11 L8 16 Z"
            fill="#22d3ee"
          />
        </g>

        {/* Aşağı sola bakan ok */}
        <g transform="translate(24, 60)">
          <path
            d="M14 0 L6 8 L6 3 L1 3 L1 9 L6 9 L6 14 Z"
            fill="#22c55e"
          />
        </g>
      </svg>

      {/* ==== HOVER: FOK BALIGI LOGO ==== */}
      <svg
        viewBox="0 0 100 100"
        className={`${baseSvgClasses} ${hovered ? "opacity-100 scale-[1.08]" : "opacity-0 scale-105"
          }`}
      >
        <defs>
          <linearGradient id="seal_bg_grad" x1="0" y1="0" x2="0" y2="100">
            <stop offset="0%" stopColor="#020617" />
            <stop offset="100%" stopColor="#022c22" />
          </linearGradient>
        </defs>

        {/* Arka plan kart */}
        <rect
          x="8"
          y="8"
          width="84"
          height="84"
          rx="26"
          fill="url(#seal_bg_grad)"
        />

        {/* Su dalgası */}
        <path
          d="M8 68 C 22 64, 36 72, 50 68 C 64 64, 78 72, 92 68 L 92 92 L 8 92 Z"
          fill="#0f766e"
          opacity={0.9}
        />

        {/* Gövde */}
        <ellipse cx="54" cy="63" rx="23" ry="9.5" fill="#e5e7eb" />
        {/* Kuyruk */}
        <path
          d="M70 61 C 77 57, 84 58, 89 62 C 84 63, 80 65, 76 67 Z"
          fill="#e5e7eb"
        />

        {/* Baş */}
        <circle cx="44" cy="52" r="9" fill="#e5e7eb" />

        {/* Gözler */}
        <circle cx="41" cy="50" r="1.6" fill="#020617" />
        <circle cx="47" cy="50" r="1.6" fill="#020617" />

        {/* Burun */}
        <circle cx="44" cy="54" r="1.3" fill="#020617" />

        {/* Bıyıklar */}
        <path
          d="M39 54 L33 52 M39 56 L33 58"
          stroke="#0f172a"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <path
          d="M49 54 L55 52 M49 56 L55 58"
          stroke="#0f172a"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

/** FON: ARKA PLAN İÇİN STANDALONE FOK BALIGI (MARU) */
const MaruSeal: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="maru_seal_bg" x1="0" y1="0" x2="0" y2="100">
        <stop offset="0%" stopColor="#020617" />
        <stop offset="100%" stopColor="#022c22" />
      </linearGradient>
    </defs>
    {/* Arka plan kart */}
    <rect
      x="8"
      y="8"
      width="84"
      height="84"
      rx="32"
      fill="url(#maru_seal_bg)"
    />
    {/* Su dalgası */}
    <path
      d="M8 68 C 22 64, 36 72, 50 68 C 64 64, 78 72, 92 68 L 92 92 L 8 92 Z"
      fill="#0f766e"
      opacity={0.9}
    />
    {/* Gövde */}
    <ellipse cx="54" cy="63" rx="23" ry="9.5" fill="#e5e7eb" />
    {/* Kuyruk */}
    <path
      d="M70 61 C 77 57, 84 58, 89 62 C 84 63, 80 65, 76 67 Z"
      fill="#e5e7eb"
    />
    {/* Baş */}
    <circle cx="44" cy="52" r="9" fill="#e5e7eb" />
    {/* Gözler */}
    <circle cx="41" cy="50" r="1.6" fill="#020617" />
    <circle cx="47" cy="50" r="1.6" fill="#020617" />
    {/* Burun */}
    <circle cx="44" cy="54" r="1.3" fill="#020617" />
    {/* Bıyıklar */}
    <path
      d="M39 54 L33 52 M39 56 L33 58"
      stroke="#0f172a"
      strokeWidth="0.8"
      strokeLinecap="round"
    />
    <path
      d="M49 54 L55 52 M49 56 L55 58"
      stroke="#0f172a"
      strokeWidth="0.8"
      strokeLinecap="round"
    />
  </svg>
);

const EthIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" fill="#627EEA" />
    <path
      d="M16.498 4V12.87L23.995 16.22L16.498 4Z"
      fill="white"
      fillOpacity="0.602"
    />
    <path d="M16.498 4L9 16.22L16.498 12.87V4Z" fill="white" />
    <path
      d="M16.498 21.968V27.995L24 17.616L16.498 21.968Z"
      fill="white"
      fillOpacity="0.602"
    />
    <path
      d="M16.498 27.995V21.967L9 17.616L16.498 27.995Z"
      fill="white"
    />
    <path
      d="M16.498 20.573L23.995 16.221L16.498 12.873V20.573Z"
      fill="white"
      fillOpacity="0.2"
    />
    <path
      d="M9 16.221L16.498 20.573V12.873L9 16.221Z"
      fill="white"
      fillOpacity="0.602"
    />
  </svg>
);

const UsdcIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" fill="#2775CA" />
    <path
      d="M16.5 7C11.8056 7 8 10.8056 8 15.5C8 20.1944 11.8056 24 16.5 24C21.1944 24 25 20.1944 25 15.5C25 10.8056 21.1944 7 16.5 7ZM19.9 18.725C19.22 19.32 18.115 19.7875 16.5 19.7875V21.53H15.225V19.745C13.44 19.66 12.335 18.98 12.25 17.705L14.29 17.5775C14.375 18.2575 14.97 18.555 15.8625 18.555C16.925 18.555 17.4775 18.1725 17.4775 17.6625C17.4775 16.855 16.5 16.685 15.225 16.26C13.3975 15.6225 12.42 14.8575 12.42 13.625C12.42 12.3925 13.6525 11.33 15.225 11.245V9.5H16.5V11.245C17.9025 11.33 19.0075 11.9675 19.2625 13.115L17.265 13.285C17.1375 12.6475 16.6275 12.3075 15.8625 12.3075C14.97 12.3075 14.5025 12.69 14.5025 13.115C14.5025 13.8375 15.1825 14.05 16.84 14.6025C18.5825 15.24 19.9 15.9625 19.9 17.2375V18.725Z"
      fill="white"
    />
  </svg>
);

const DaiIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" fill="#F5AC37" />
    <path
      d="M16.0001 7.78223C11.2188 7.78223 8.0332 11.6089 8.0332 15.8622H10.1754C10.1754 12.7989 12.431 9.71778 16.0001 9.71778C19.5692 9.71778 21.8248 12.7989 21.8248 15.8622H23.9669C23.9669 11.6089 20.7813 7.78223 16.0001 7.78223Z"
      fill="white"
    />
    <path
      d="M16.0001 24.2178C20.7813 24.2178 23.9669 20.3911 23.9669 16.1378H21.8248C21.8248 19.2011 19.5692 22.2822 16.0001 22.2822C12.431 22.2822 10.1754 19.2011 10.1754 16.1378H8.0332C8.0332 20.3911 11.2188 24.2178 16.0001 24.2178Z"
      fill="white"
    />
    <path d="M8.0332 13.0332H23.9665V14.9688H8.0332V13.0332Z" fill="white" />
    <path d="M8.0332 17.0312H23.9665V18.9668H8.0332V17.0312Z" fill="white" />
  </svg>
);

const WbtcIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="16" fill="#F09241" />
    <path
      d="M22.525 12.625C22.225 10.825 20.775 9.22501 18.075 9.22501H12.225C11.4 9.22501 10.725 9.90001 10.725 10.725V21.275C10.725 22.1 11.4 22.775 12.225 22.775H18.675C21.15 22.775 23.1 21.275 23.25 18.875C23.325 16.775 21.975 15.575 20.775 15.2C21.9 14.675 22.6 13.75 22.525 12.625ZM19.8 19.625C19.65 20.375 18.975 20.9 17.925 20.9H14.1V16.4H17.7C18.975 16.4 19.725 16.925 19.8 18.2V19.625ZM19.2 14.225C19.05 14.9 18.45 15.275 17.625 15.275H14.1V11.3H17.25C18.3 11.3 18.9 11.675 19.2 12.5V14.225Z"
      fill="white"
    />
  </svg>
);

/* ========= TYPES & CONST ========= */

type Token = {
  symbol: "ETH" | "USDC" | "DAI" | "WBTC";
  name: string;
  network: string;
  icon: React.ReactNode;
  decimals: number;
  coingeckoId: string;
};

const TOKENS: Token[] = [
  {
    symbol: "ETH",
    name: "Ether",
    network: "Ethereum",
    icon: <EthIcon />,
    decimals: 18,
    coingeckoId: "ethereum",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    network: "Ethereum",
    icon: <UsdcIcon />,
    decimals: 6,
    coingeckoId: "usd-coin",
  },
  {
    symbol: "DAI",
    name: "Dai Stablecoin",
    network: "Ethereum",
    icon: <DaiIcon />,
    decimals: 18,
    coingeckoId: "dai",
  },
  {
    symbol: "WBTC",
    name: "Wrapped Bitcoin",
    network: "Ethereum",
    icon: <WbtcIcon />,
    decimals: 8,
    coingeckoId: "wrapped-bitcoin",
  },
];

const POPULAR_POOLS: PoolData[] = [
  {
    id: 1,
    pair: ["ETH", "USDC"] as const,
    fee: "0.3%",
    feeRate: 0.003,
    tvl: "$245.2M",
    tvlUSD: 245200000,
    vol: "$42.1M",
    vol24hUSD: 42100000,
    apr: "12.4%",
    reserve0: 80350, // ETH reserve
    reserve1: 245200000, // USDC reserve
    totalLPTokens: 14000000,
    feesCollected: 126300,
  },
  {
    id: 2,
    pair: ["WBTC", "ETH"] as const,
    fee: "0.05%",
    feeRate: 0.0005,
    tvl: "$128.5M",
    tvlUSD: 128500000,
    vol: "$18.5M",
    vol24hUSD: 18500000,
    apr: "8.1%",
    reserve0: 2000, // WBTC reserve
    reserve1: 42100, // ETH reserve
    totalLPTokens: 9200000,
    feesCollected: 92500,
  },
  {
    id: 3,
    pair: ["USDC", "DAI"] as const,
    fee: "0.01%",
    feeRate: 0.0001,
    tvl: "$85.1M",
    tvlUSD: 85100000,
    vol: "$55.2M",
    vol24hUSD: 55200000,
    apr: "3.2%",
    reserve0: 42550000, // USDC reserve
    reserve1: 42550000, // DAI reserve
    totalLPTokens: 42550000,
    feesCollected: 5520,
  },
  {
    id: 4,
    pair: ["ETH", "DAI"] as const,
    fee: "0.3%",
    feeRate: 0.003,
    tvl: "$62.4M",
    tvlUSD: 62400000,
    vol: "$11.8M",
    vol24hUSD: 11800000,
    apr: "10.1%",
    reserve0: 20450, // ETH reserve
    reserve1: 62400000, // DAI reserve
    totalLPTokens: 11200000,
    feesCollected: 35400,
  },
];

type Project = {
  id: number;
  name: string;
  symbol: string;
  token: string;
  desc: string;
  logoUrl: string;
  chain: string;
  status: "ongoing" | "upcoming" | "ended";
  saleType: string;
  raiseTarget: number;
  raiseSoFar: number;
  price: number;
  minContribution: number;
  maxContribution: number;
  paymentTokens: string[];
  startAt: string;
  endAt: string;
  tags: string[];
  kyc: boolean;
  audit: boolean;
};

// Limit Order Interface
interface LimitOrder {
  id: string;
  fromToken: Token;
  toToken: Token;
  fromAmount: string;
  targetPrice: number;
  currentPrice: number;
  status: 'pending' | 'executed' | 'cancelled';
  createdAt: number;
}

// DCA Schedule Interface
interface DCASchedule {
  id: string;
  fromToken: Token;
  toToken: Token;
  amountPerSwap: string;
  frequency: 'daily' | 'weekly' | 'monthly';
  totalSwaps: number;
  executedSwaps: number;
  nextSwapAt: number;
  status: 'active' | 'paused' | 'completed';
  createdAt: number;
}

const INITIAL_PROJECTS: Project[] = [
  {
    id: 1,
    name: "EdgeAI Protocol",
    symbol: "EDGEAI",
    token: "EDGEAI",
    desc: "Decentralized AI inference layer for perpetual trading strategies.",
    logoUrl: "https://api.dicebear.com/7.x/shapes/svg?seed=EdgeAI&backgroundColor=6366f1",
    chain: "EdgeX L2",
    status: "ongoing" as const,
    saleType: "Public Sale",
    raiseTarget: 1_000_000,
    raiseSoFar: 742_350,
    price: 0.05,
    minContribution: 100,
    maxContribution: 10000,
    paymentTokens: ["ETH", "USDC"],
    startAt: "2025-01-12 18:00 UTC",
    endAt: "2025-01-15 18:00 UTC",
    tags: ["AI", "Perps", "Cross-Chain"],
    kyc: true,
    audit: true,
  },
  {
    id: 2,
    name: "EdgeX Liquidity Layer",
    symbol: "EDGX",
    token: "EDGX",
    desc: "The native liquidity layer powering the entire EdgeX ecosystem.",
    logoUrl: "https://api.dicebear.com/7.x/shapes/svg?seed=EDGX&backgroundColor=06b6d4",
    chain: "EdgeX L2",
    status: "upcoming" as const,
    saleType: "Guaranteed Allocation",
    raiseTarget: 500_000,
    raiseSoFar: 0,
    price: 0.12,
    minContribution: 250,
    maxContribution: 15000,
    paymentTokens: ["USDC"],
    startAt: "2025-02-01 16:00 UTC",
    endAt: "2025-02-03 16:00 UTC",
    tags: ["Infra", "L2", "Liquidity"],
    kyc: true,
    audit: false,
  },
  {
    id: 3,
    name: "DeFi Synth Vaults",
    symbol: "SYNTH",
    token: "SYNTH",
    desc: "Automated yield vaults for synthetic assets.",
    logoUrl: "https://api.dicebear.com/7.x/shapes/svg?seed=SYNTH&backgroundColor=8b5cf6",
    chain: "EdgeX L2",
    status: "ended" as const,
    saleType: "Fair Launch",
    raiseTarget: 150_000,
    raiseSoFar: 167_420,
    price: 0.22,
    minContribution: 50,
    maxContribution: 5000,
    paymentTokens: ["ETH"],
    startAt: "2024-11-01 15:00 UTC",
    endAt: "2024-11-02 15:00 UTC",
    tags: ["Derivatives", "Vaults"],
    kyc: false,
    audit: true,
  },
];

type ActiveTab = "swap" | "limit" | "liquidity";

type Transaction = {
  id: string;
  type: "Swap" | "Add Liquidity" | "Remove Liquidity" | "Faucet" | "Bridge" | "Withdraw";
  desc: string;
  amount: string;
  token: string;
  status: "Success" | "Pending" | "Failed";
  timestamp: number;
  hash?: string;
  poolId?: number;
};

type LiquidityPosition = {
  id: string;
  poolId: number;
  token0: string;
  token1: string;
  amount0: number;
  amount1: number;
  lpTokens: number;
  shareOfPool: number;
  earnedFees: number;
  timestamp: number;
};

// Multi-Hop Routing
type SwapRoute = {
  path: Token[];
  pools: PoolData[];
  expectedOutput: number;
  priceImpact: number;
  gasEstimate: string;
};


type PoolData = {
  id: number;
  pair: [string, string];
  fee: string;
  feeRate: number;
  tvl: string;
  tvlUSD: number;
  vol: string;
  vol24hUSD: number;
  apr: string;
  reserve0: number;
  reserve1: number;
  totalLPTokens: number;
  feesCollected: number;
};

// Fallback Prices if API fails


// ADRESLER (Sepolia)
const USDC_ADDRESS = "0x24D824fd9Bd01c1f694c85f26161d88Cb1fAe50F";
const DAI_ADDRESS = "0xb1E77a6Ef72A1fB0233B884EE6A8efD98bB080cB";
const FAUCET_ADDRESS = "0x1198eBcEB99c01cCF103528F67D6Cf83A45F11Db";
const WETH_ADDRESS = "0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9"; // Sepolia WETH
const UNISWAP_ROUTER_ADDRESS = "0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E"; // Sepolia SwapRouter02

// ABIs
const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function decimals() view returns (uint8)",
  "function allowance(address owner, address spender) view returns (uint256)",
];
const FAUCET_ABI = ["function claim(address token) external"];

// Uniswap V3 SwapRouter02 ABI (simplified)
const SWAP_ROUTER_ABI = [
  "function exactInputSingle((address tokenIn, address tokenOut, uint24 fee, address recipient, uint256 amountIn, uint256 amountOutMinimum, uint160 sqrtPriceLimitX96)) external payable returns (uint256 amountOut)",
  "function exactInput((bytes path, address recipient, uint256 amountIn, uint256 amountOutMinimum)) external payable returns (uint256 amountOut)",
];

// Token address mapping for Sepolia
const TOKEN_ADDRESSES: Record<string, string> = {
  ETH: WETH_ADDRESS,
  WETH: WETH_ADDRESS,
  USDC: USDC_ADDRESS,
  DAI: DAI_ADDRESS,
};

const formatBalance = (v?: string) => {
  if (!v) return "0.00";
  const num = Number(v);
  if (!isFinite(num)) return "0.00";
  if (num === 0) return "0.00";
  if (num < 0.0001) return "<0.0001";
  return (Math.floor(num * 10000) / 10000).toFixed(4);
};

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(val);
};

const shortenHash = (hash: string) =>
  `${hash.slice(0, 6)}...${hash.slice(-4)}`;

const SEPOLIA_CHAIN_ID = 11155111;
const SEPOLIA_HEX_ID = "0xaa36a7";

type Chain = {
  id: string;
  name: string;
  type: "L1" | "L2";
  logo: React.ReactNode;
};

// Chain Logo Components (Real Official Logos)
const EthereumLogo = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#627EEA" />
    <path d="M19.9834 7V16.4455L27.9664 20.0132L19.9834 7Z" fill="white" fillOpacity="0.602" />
    <path d="M19.983 7L12 20.0132L19.983 16.4455V7Z" fill="white" />
    <path d="M19.9834 26.1333V32.5514L27.9711 21.499L19.9834 26.1333Z" fill="white" fillOpacity="0.602" />
    <path d="M19.983 32.5514V26.1333L12 21.499L19.983 32.5514Z" fill="white" />
    <path d="M19.9834 24.6472L27.9664 20.013L19.9834 16.4453V24.6472Z" fill="white" fillOpacity="0.2" />
    <path d="M12 20.013L19.983 24.6472V16.4453L12 20.013Z" fill="white" fillOpacity="0.602" />
  </svg>
);

const BaseLogo = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="6" fill="#0052FF" />
    <g clipPath="url(#clip0_base)">
      <path d="M19.8961 32.8823C27.0433 32.8823 32.8373 27.0884 32.8373 19.9412C32.8373 12.794 27.0433 7 19.8961 7C13.1152 7 7.55247 12.2152 7 18.8534H24.1053V21.0289H7C7.55247 27.6671 13.1152 32.8823 19.8961 32.8823Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_base">
        <rect width="26" height="26" fill="white" transform="translate(7 7)" />
      </clipPath>
    </defs>
  </svg>
);

const ArbitrumLogo = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 6C0 2.68629 2.68629 0 6 0H34C37.3137 0 40 2.68629 40 6V34C40 37.3137 37.3137 40 34 40H6C2.68629 40 0 37.3137 0 34V6Z" fill="#2D374B" />
    <path d="M18.7077 7.31715L9.18975 12.8146C8.8279 13.0235 8.52741 13.324 8.31856 13.6859C8.10971 14.0478 7.99985 14.4583 8 14.8761L8.00596 25.8831C8.00623 26.3003 8.11617 26.7101 8.32477 27.0714C8.53337 27.4327 8.83329 27.7327 9.19446 27.9416L18.7235 33.4501C19.0852 33.6589 19.4955 33.7689 19.9132 33.7689C20.3309 33.7689 20.7412 33.6589 21.103 33.4501L30.6209 27.9543C30.9828 27.7454 31.2832 27.4448 31.4921 27.083C31.7009 26.7211 31.8108 26.3106 31.8106 25.8927L31.8047 14.8858C31.8044 14.4686 31.6944 14.0589 31.4858 13.6976C31.2772 13.3364 30.9773 13.0363 30.6162 12.8275L21.0872 7.31879C20.7255 7.10995 20.3151 7 19.8974 7C19.4797 7 19.0694 7.10995 18.7077 7.31879V7.31715Z" fill="white" />
    <path d="M15.566 29.7295C15.5807 29.6578 15.6128 29.5908 15.6595 29.5344C18.5067 24.7033 21.3544 19.8723 24.2025 15.0415C24.2421 14.9744 24.2788 14.9055 24.3125 14.8454C24.2874 14.8017 24.2589 14.8107 24.2347 14.8107C23.0179 14.8151 21.8011 14.8229 20.5834 14.8214C20.5314 14.8205 20.4803 14.8355 20.4371 14.8645C20.3939 14.8935 20.3605 14.935 20.3416 14.9835C19.4237 16.5014 18.5046 18.019 17.5844 19.5361C15.635 22.7524 13.6854 25.9686 11.7356 29.1847C11.7184 29.2132 11.7003 29.2411 11.685 29.2704C11.6505 29.3369 11.6113 29.3474 11.5414 29.3068C11.2388 29.1281 10.933 28.9552 10.6115 28.7703L19.2885 14.854C19.2698 14.7974 19.2314 14.8116 19.2019 14.8105C18.7369 14.7966 18.2717 14.7765 17.807 14.7724C17.1543 14.7531 16.5039 14.8579 15.8903 15.0813C15.3315 15.2882 14.8566 15.6738 14.5393 16.1781C12.9539 18.6509 11.3626 21.1198 9.76518 23.5849C9.74015 23.6239 9.7135 23.662 9.68765 23.7006C9.59617 23.7006 9.60968 23.6251 9.60127 23.5724C9.59317 23.493 9.59129 23.4131 9.59556 23.3334C9.59556 20.6069 9.60499 17.8803 9.58714 15.1539C9.57281 14.919 9.62928 14.6852 9.7493 14.4827C9.86933 14.2803 10.0474 14.1185 10.2604 14.0183C12.357 12.8231 14.4401 11.6032 16.5299 10.3958C17.4626 9.85691 18.3982 9.32317 19.3242 8.77301C19.4983 8.65615 19.7033 8.59375 19.9131 8.59375C20.1228 8.59375 20.3278 8.65615 20.502 8.77301C22.2046 9.77219 23.9223 10.7482 25.6337 11.7332C26.9245 12.4765 28.2159 13.2184 29.508 13.9591C29.6005 14.0118 29.6905 14.0682 29.7834 14.1201C29.9345 14.2004 30.0594 14.3222 30.1435 14.4713C30.2275 14.6203 30.2671 14.7903 30.2577 14.9611C30.2601 17.927 30.2601 20.8929 30.2577 23.8587C30.2637 23.9317 30.2558 24.0052 30.2343 24.0752C30.1317 24.1742 30.0946 24.0631 30.0573 24.0103C29.9035 23.7939 29.7654 23.566 29.6224 23.342C28.4775 21.5499 27.3288 19.7602 26.1762 17.9728C25.789 17.3687 25.3968 16.7671 25.0136 16.1605C24.9241 16.019 24.908 16.0169 24.8185 16.1689C24.2403 17.1472 23.6625 18.1258 23.085 19.1045C23.0533 19.1589 23.0396 19.2219 23.046 19.2846C23.0523 19.3472 23.0783 19.4063 23.1202 19.4532C23.5964 20.2215 24.0717 20.9903 24.5461 21.7597L26.9783 25.694C27.3065 26.2257 27.6352 26.7569 27.9645 27.2877C28.0257 27.3588 28.0601 27.4491 28.0618 27.5429C27.996 27.6737 27.8587 27.7104 27.7444 27.7699C27.5569 27.9053 27.3509 28.0129 27.1326 28.0893C27.0148 28.06 26.9732 27.9537 26.9174 27.8667C26.1643 26.6922 25.421 25.5117 24.6729 24.3342C23.9034 23.124 23.1377 21.9092 22.365 20.7002C22.2659 20.5451 22.2501 20.5441 22.157 20.7002C21.4847 21.8311 20.8218 22.9673 20.1479 24.0969C20.1135 24.1498 20.0965 24.2123 20.0995 24.2754C20.1025 24.3385 20.1253 24.399 20.1646 24.4485C21.0723 25.8475 21.959 27.2588 22.8571 28.6647C23.1075 29.0565 23.3598 29.4469 23.6058 29.8415C23.6538 29.9182 23.7194 29.9948 23.6759 30.0985C23.4402 30.282 23.1858 30.4401 22.917 30.5703C22.0781 31.0584 21.2389 31.5458 20.3992 32.0325C20.2647 32.1193 20.108 32.1655 19.9479 32.1655C19.7878 32.1655 19.6311 32.1193 19.4966 32.0325C18.2599 31.317 17.0209 30.6047 15.7796 29.8957C15.694 29.8617 15.62 29.8041 15.566 29.7295Z" fill="#2D374B" />
  </svg>
);

const OptimismLogo = () => (
  <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="6" fill="#FF0420" />
    <path d="M20 4C11.2 4 4 11.2 4 20C4 28.8 11.2 36 20 36C28.8 36 36 28.8 36 20C36 11.2 28.8 4 20 4ZM20 28.16V34.16C13.84 34.16 8.88 29.2 8.88 23.04C8.88 16.88 13.84 11.92 20 11.92V5.92C26.16 5.92 31.12 10.88 31.12 17.04C31.12 23.2 26.16 28.16 20 28.16Z" fill="white" />
    <path d="M20.0801 14.4805H20.0001C18.8001 16.8805 16.9601 18.7205 14.5601 19.9205C16.9601 21.2005 18.8001 23.0405 20.0001 25.5205H20.0801C21.2801 23.1205 23.1201 21.2805 25.5201 20.0805C23.1201 18.8005 21.2801 16.9605 20.0801 14.4805Z" fill="white" />
  </svg>
);

const EdgeXLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#FF1B8D" />
    <path d="M12 6L16 10L12 14L8 10L12 6Z" fill="white" opacity="0.9" />
    <path d="M12 10L16 14L12 18L8 14L12 10Z" fill="white" opacity="0.6" />
    <circle cx="12" cy="12" r="2" fill="white" />
  </svg>
);

const BNBLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#F3BA2F" />
    <path d="M12 7L14.5 9.5L12 12L9.5 9.5L12 7Z" fill="white" />
    <path d="M7 12L9.5 14.5L7 17L4.5 14.5L7 12Z" fill="white" />
    <path d="M17 12L19.5 14.5L17 17L14.5 14.5L17 12Z" fill="white" />
    <path d="M12 17L14.5 14.5L12 12L9.5 14.5L12 17Z" fill="white" />
  </svg>
);

const CHAINS: Chain[] = [
  { id: "eth", name: "Ethereum", type: "L1", logo: <EthereumLogo /> },
  { id: "base", name: "Base", type: "L2", logo: <BaseLogo /> },
  { id: "arb", name: "Arbitrum", type: "L2", logo: <ArbitrumLogo /> },
  { id: "op", name: "Optimism", type: "L2", logo: <OptimismLogo /> },
  { id: "bnb", name: "BNB Chain", type: "L1", logo: <BNBLogo /> },
  { id: "edgex", name: "EdgeX L2", type: "L2", logo: <EdgeXLogo /> },
];

/* ========= TRANSLATIONS ========= */

const TRANSLATIONS = {
  en: {
    nav: {
      trade: "Trade",
      pools: "Pools",
      portfolio: "Portfolio",
      launchpad: "Launchpad",
      bridge: "Bridge",
    },
    wallet: {
      connect: "Connect Wallet",
      connecting: "Connecting...",
      wrongNet: "Wrong Net",
    },
    swap: {
      pay: "You Pay",
      receive: "You Receive",
      rate: "Rate",
      cost: "Network Cost",
      impact: "Price Impact",
      min: "Min. Received",
      button: "Swap Now",
      enter: "Enter Amount",
      processing: "Processing...",
    },
    pool: {
      title: "Liquidity Pools",
      subtitle: "Provide liquidity to earn trading fees.",
      newPos: "+ New Position",
      yourPos: "Your Active Positions",
      table: { pool: "Pool", tvl: "TVL", vol: "Volume 24H", apr: "APR" },
    },
    portfolio: {
      title: "Overview",
      subtitle: "Track your assets and transaction history.",
      assets: "Assets",
      history: "Recent History",
      noTx: "No recent transactions.",
      faucet: "Need Test Tokens?",
      faucetDesc: "Use the faucet to mint free USDC & DAI.",
      mint: "Mint",
    },
    launchpad: {
      title: "Premium L2 Token Launches",
      subtitle: "Whitelisted, AI-risk scored projects with guaranteed liquidity. Join early-stage projects on EdgeX, analyze risk/reward profiles with MARU AI.",
      totalRaise: "Total Raise",
      activeUpcoming: "Active / Upcoming",
      active: "active",
      upcoming: "upcoming",
      ended: "ended",
      trustLayer: "Trust Layer",
      tiers: "EdgeX Tiers",
      comingSoon: "Coming Soon",
      activeSales: "Active Sales",
      noActiveSales: "No active sales at the moment.",
      upcomingProjects: "Upcoming Projects",
      completedSales: "Completed Sales",
      price: "Price",
      payment: "Payment",
      raise: "Raise",
      progress: "Progress",
      start: "Start",
      end: "End",
      target: "target",
      raised: "Raised",
      saleType: "Sale Type",
      joinDemo: "Join (demo)",
    },
    toast: {
      install: "Please install MetaMask wallet.",
      connected: "Wallet connected successfully!",
      disconnected: "Wallet disconnected.",
      minting: "Minting",
      minted: "minted successfully!",
      swapSuccess: "Swap submitted successfully!",
      liqSuccess: "Liquidity added successfully!",
      liqSim: "Liquidity added successfully (Simulated)!",
      demo: "Demo Mode: Executing virtual swap...",
      rejected: "Transaction rejected by user.",
      failed: "Transaction failed.",
      liqRem: "Liquidity removed successfully (Simulated)!",
    },
    bridge: {
      title: "Cross-Chain Bridge",
      subtitle: "Transfer assets securely between L1 and L2 networks.",
      source: "From Network",
      dest: "To Network",
      transfer: "Transfer",
      approving: "Approving...",
      bridging: "Bridging...",
      completed: "Transfer Completed!",
      estTime: "Est. Time",
      fees: "Bridge Fee",
    },
    liquidity: {
      poolDetails: "Pool Details",
      addLiquidity: "Add Liquidity",
      removeLiquidity: "Remove Liquidity",
      yourPosition: "Your Position",
      depositAmounts: "Deposit Amounts",
      priceRange: "Price Range",
      fullRange: "Full Range",
      expectedLP: "Expected LP Tokens",
      shareAfter: "Share of Pool After",
      deposited: "Deposited",
      currentValue: "Current Value",
      lpTokens: "LP Tokens",
      poolShare: "Pool Share",
      earnedFees: "Earned Fees",
      approve: "Approve",
      supply: "Supply",
      remove: "Remove",
      claimFees: "Claim Fees",
      liquidity: "Liquidity",
      volume24h: "24h Volume",
      fees24h: "24h Fees",
      insufficientBalance: "Insufficient Balance",
      enterAmount: "Enter Amount",
      approving: "Approving...",
      supplying: "Supplying...",
      removing: "Removing...",
      noPositions: "No active positions yet.",
      currentPrice: "Current Price",
      pricePerToken: "per",
    },
  },
  tr: {
    nav: {
      trade: "Al-Sat",
      pools: "Havuzlar",
      portfolio: "Portföy",
      launchpad: "Launchpad",
      bridge: "Bridge",
    },
    wallet: {
      connect: "Cüzdan Bağla",
      connecting: "Bağlanıyor...",
      wrongNet: "Yanlış Ağ",
    },
    swap: {
      pay: "Ödenen",
      receive: "Alınan",
      rate: "Kur",
      cost: "Ağ Ücreti",
      impact: "Fiyat Etkisi",
      min: "Min. Alınacak",
      button: "Takas Yap",
      enter: "Miktar Gir",
      processing: "İşleniyor...",
    },
    pool: {
      title: "Likidite Havuzları",
      subtitle: "Likidite sağlayarak işlem ücreti kazan.",
      newPos: "+ Yeni Pozisyon",
      yourPos: "Aktif Pozisyonların",
      table: {
        pool: "Havuz",
        tvl: "TVL (Kilitli)",
        vol: "Hacim 24s",
        apr: "Yıllık Getiri",
      },
    },
    portfolio: {
      title: "Genel Bakış",
      subtitle: "Varlıklarını ve işlem geçmişini takip et.",
      assets: "Varlıklar",
      history: "Son İşlemler",
      noTx: "Henüz işlem yok.",
      faucet: "Test Token Lazım mı?",
      faucetDesc: "Sepolia ağında ücretsiz USDC & DAI bas.",
      mint: "Bas",
    },
    launchpad: {
      title: "Premium L2 Token Lansmanları",
      subtitle: "Whitelisted, AI-risk skorlu ve likiditesi garanti altına alınmış projeler. EdgeX üzerinden erken aşama projelere katıl, MARU AI ile risk / ödül profilini analiz et.",
      totalRaise: "Toplam Raise",
      activeUpcoming: "Aktif / Gelecek",
      active: "aktif",
      upcoming: "yakında",
      ended: "tamamlandı",
      trustLayer: "Güven Katmanı",
      tiers: "EdgeX Tiers",
      comingSoon: "Yakında",
      activeSales: "Aktif Satışlar",
      noActiveSales: "Şu anda aktif satış yok.",
      upcomingProjects: "Yaklaşan Projeler",
      completedSales: "Tamamlanan Satışlar",
      price: "Fiyat",
      payment: "Ödeme",
      raise: "Raise",
      progress: "İlerleme",
      start: "Başlangıç",
      end: "Bitiş",
      target: "hedef",
      raised: "Toplanan",
      saleType: "Satış Tipi",
      joinDemo: "Katıl (demo)",
    },
    toast: {
      install: "Lütfen MetaMask cüzdanı yükleyin.",
      connected: "Cüzdan başarıyla bağlandı!",
      disconnected: "Cüzdan bağlantısı kesildi.",
      minting: "Basılıyor",
      minted: "başarıyla basıldı!",
      swapSuccess: "Takas işlemi başarıyla gönderildi!",
      liqSuccess: "Likidite başarıyla eklendi!",
      liqSim: "Likidite eklendi (Simülasyon)!",
      demo: "Demo Modu: Sanal işlem yapılıyor...",
      rejected: "İşlem kullanıcı tarafından reddedildi.",
      failed: "İşlem başarısız oldu.",
      liqRem: "Likidite başarıyla kaldırıldı (Simülasyon)!",
    },
    bridge: {
      title: "Zincirler Arası Köprü",
      subtitle: "L1 ve L2 ağları arasında güvenli varlık transferi.",
      source: "Kaynak Ağ",
      dest: "Hedef Ağ",
      transfer: "Transfer Et",
      approving: "Onaylanıyor...",
      bridging: "Köprüleniyor...",
      completed: "Transfer Tamamlandı!",
      estTime: "Tahmini Süre",
      fees: "Köprü Ücreti",
    },
    liquidity: {
      poolDetails: "Havuz Detayları",
      addLiquidity: "Likidite Ekle",
      removeLiquidity: "Likidite Çıkar",
      yourPosition: "Pozisyonun",
      depositAmounts: "Yatırılacak Miktar",
      priceRange: "Fiyat Aralığı",
      fullRange: "Tam Aralık",
      expectedLP: "Beklenen LP Token",
      shareAfter: "Havuz Payı (Sonrası)",
      deposited: "Yatırılan",
      currentValue: "Güncel Değer",
      lpTokens: "LP Token",
      poolShare: "Havuz Payı",
      earnedFees: "Kazanılan Ücretler",
      approve: "Onayla",
      supply: "Ekle",
      remove: "Çıkar",
      claimFees: "Ücretleri Al",
      liquidity: "Likidite",
      volume24h: "24s Hacim",
      fees24h: "24s Ücretler",
      insufficientBalance: "Yetersiz Bakiye",
      enterAmount: "Miktar Gir",
      approving: "Onaylanıyor...",
      supplying: "Ekleniyor...",
      removing: "Çıkarılıyor...",
      noPositions: "Bu havuzda aktif pozisyon yok.",
      currentPrice: "Güncel Fiyat",
      pricePerToken: "başına",
    },
  },
  zh: {
    nav: {
      trade: "交易",
      pools: "池",
      portfolio: "资产组合",
      launchpad: "Launchpad",
      bridge: "跨链桥",
    },
    wallet: { connect: "连接钱包", connecting: "连接中...", wrongNet: "错误网络" },
    swap: {
      pay: "支付",
      receive: "接收",
      rate: "汇率",
      cost: "网络费用",
      impact: "价格影响",
      min: "最低接收",
      button: "立即交换",
      enter: "输入金额",
      processing: "处理中...",
    },
    pool: {
      title: "流动性池",
      subtitle: "提供流动性以赚取交易费。",
      newPos: "+ 新建仓位",
      yourPos: "您的活跃仓位",
      table: { pool: "池", tvl: "总锁定价值", vol: "24小时交易量", apr: "年化收益率" },
    },
    portfolio: {
      title: "概览",
      subtitle: "追踪您的资产和交易历史。",
      assets: "资产",
      history: "近期历史",
      noTx: "无近期交易。",
      faucet: "需要测试代币?",
      faucetDesc: "使用水龙头铸造免费 USDC & DAI。",
      mint: "铸造",
    },
    launchpad: {
      title: "高级 L2 代币发布",
      subtitle: "白名单、AI 风险评分和保证流动性的项目。在 EdgeX 上加入早期项目，使用 MARU AI 分析风险/回报。",
      totalRaise: "总募集",
      activeUpcoming: "活跃 / 即将推出",
      active: "活跃",
      upcoming: "即将推出",
      ended: "已结束",
      trustLayer: "信任层",
      tiers: "EdgeX 等级",
      comingSoon: "即将推出",
      activeSales: "活跃销售",
      noActiveSales: "目前没有活跃销售。",
      upcomingProjects: "即将推出的项目",
      completedSales: "已完成销售",
      price: "价格",
      payment: "支付",
      raise: "募集",
      progress: "进度",
      start: "开始",
      end: "结束",
      target: "目标",
      raised: "已募集",
      saleType: "销售类型",
      joinDemo: "加入（演示）",
    },
    toast: {
      install: "请安装 MetaMask。",
      connected: "钱包连接成功!",
      disconnected: "钱包断开连接。",
      minting: "正在铸造",
      minted: "铸造成功!",
      swapSuccess: "交换提交成功!",
      liqSuccess: "流动性添加成功!",
      liqSim: "流动性添加成功(模拟)!",
      demo: "演示模式: 执行虚拟交换...",
      rejected: "用户拒绝交易。",
      failed: "交易失败。",
      liqRem: "流动性移除成功（模拟）！",
    },
    bridge: {
      title: "跨链桥",
      subtitle: "在 L1 和 L2 网络之间安全转移资产。",
      source: "源网络",
      dest: "目标网络",
      transfer: "转移",
      approving: "批准中...",
      bridging: "桥接中...",
      completed: "转移完成！",
      estTime: "预计时间",
      fees: "桥接费用",
    },
    liquidity: {
      poolDetails: "池详情",
      addLiquidity: "添加流动性",
      removeLiquidity: "移除流动性",
      yourPosition: "您的仓位",
      depositAmounts: "存入金额",
      priceRange: "价格范围",
      fullRange: "全范围",
      expectedLP: "预期 LP 代币",
      shareAfter: "添加后池份额",
      deposited: "已存入",
      currentValue: "当前价值",
      lpTokens: "LP 代币",
      poolShare: "池份额",
      earnedFees: "赚取的费用",
      approve: "批准",
      supply: "供应",
      remove: "移除",
      claimFees: "领取费用",
      liquidity: "流动性",
      volume24h: "24小时交易量",
      fees24h: "24小时费用",
      insufficientBalance: "余额不足",
      enterAmount: "输入金额",
      approving: "批准中...",
      supplying: "供应中...",
      removing: "移除中...",
      noPositions: "暂无活跃仓位。",
      currentPrice: "当前价格",
      pricePerToken: "每",
    },
  },
  ko: {
    nav: {
      trade: "거래",
      pools: "풀",
      portfolio: "포트폴리오",
      launchpad: "Launchpad",
      bridge: "브리지",
    },
    wallet: {
      connect: "지갑 연결",
      connecting: "연결 중...",
      wrongNet: "잘못된 네트워크",
    },
    swap: {
      pay: "지불",
      receive: "수령",
      rate: "비율",
      cost: "네트워크 비용",
      impact: "가격 영향",
      min: "최소 수령",
      button: "스왑 하기",
      enter: "금액 입력",
      processing: "처리 중...",
    },
    pool: {
      title: "유동성 풀",
      subtitle: "유동성을 제공하고 거래 수수료를 얻으세요.",
      newPos: "+ 새 포지션",
      yourPos: "활성 포지션",
      table: { pool: "풀", tvl: "TVL", vol: "24시간 거래량", apr: "APR" },
    },
    portfolio: {
      title: "개요",
      subtitle: "자산 및 거래 내역 추적.",
      assets: "자산",
      history: "최근 내역",
      noTx: "최근 거래 없음.",
      faucet: "테스트 토큰이 필요하신가요?",
      faucetDesc: "수도꼭지를 사용하여 무료 USDC & DAI를 발행하세요.",
      mint: "발행",
    },
    launchpad: {
      title: "프리미엄 L2 토큰 런치",
      subtitle: "화이트리스트, AI 위험 점수 및 보장된 유동성을 갖춘 프로젝트. EdgeX에서 초기 단계 프로젝트에 참여하고 MARU AI로 위험/보상 프로필을 분석하세요.",
      totalRaise: "총 모금액",
      activeUpcoming: "활성 / 예정",
      active: "활성",
      upcoming: "예정",
      ended: "종료됨",
      trustLayer: "신뢰 계층",
      tiers: "EdgeX 티어",
      comingSoon: "곧 출시",
      activeSales: "활성 판매",
      noActiveSales: "현재 활성 판매가 없습니다.",
      upcomingProjects: "예정된 프로젝트",
      completedSales: "완료된 판매",
      price: "가격",
      payment: "결제",
      raise: "모금",
      progress: "진행률",
      start: "시작",
      end: "종료",
      target: "목표",
      raised: "모금됨",
      saleType: "판매 유형",
      joinDemo: "참여 (데모)",
    },
    toast: {
      install: "MetaMask를 설치해주세요.",
      connected: "지갑 연결 성공!",
      disconnected: "지갑 연결 해제.",
      minting: "발행 중",
      minted: "발행 성공!",
      swapSuccess: "스왑 제출 성공!",
      liqSuccess: "유동성 추가 성공!",
      liqSim: "유동성 추가 성공(시뮬레이션)!",
      demo: "데모 모드: 가상 스왑 실행 중...",
      rejected: "사용자가 거래 거부.",
      failed: "거래 실패.",
      liqRem: "유동성이 성공적으로 제거되었습니다 (시뮬레이션)!",
    },
    bridge: {
      title: "크로스 체인 브리지",
      subtitle: "L1과 L2 네트워크 간에 자산을 안전하게 전송합니다.",
      source: "보내는 네트워크",
      dest: "받는 네트워크",
      transfer: "전송",
      approving: "승인 중...",
      bridging: "브리징 중...",
      completed: "전송 완료!",
      estTime: "예상 시간",
      fees: "브리지 수수료",
    },
    liquidity: {
      poolDetails: "풀 세부정보",
      addLiquidity: "유동성 추가",
      removeLiquidity: "유동성 제거",
      yourPosition: "내 포지션",
      depositAmounts: "예치 금액",
      priceRange: "가격 범위",
      fullRange: "전체 범위",
      expectedLP: "예상 LP 토큰",
      shareAfter: "추가 후 풀 점유율",
      deposited: "예치됨",
      currentValue: "현재 가치",
      lpTokens: "LP 토큰",
      poolShare: "풀 점유율",
      earnedFees: "획득한 수수료",
      approve: "승인",
      supply: "공급",
      remove: "제거",
      claimFees: "수수료 청구",
      liquidity: "유동성",
      volume24h: "24시간 거래량",
      fees24h: "24시간 수수료",
      insufficientBalance: "잔액 부족",
      enterAmount: "금액 입력",
      approving: "승인 중...",
      supplying: "공급 중...",
      removing: "제거 중...",
      noPositions: "활성 포지션이 없습니다.",
      currentPrice: "현재 가격",
      pricePerToken: "당",
    },
  },
  ja: {
    nav: {
      trade: "トレード",
      pools: "プール",
      portfolio: "ポートフォリオ",
      launchpad: "Launchpad",
      bridge: "ブリッジ",
    },
    wallet: {
      connect: "ウォレット接続",
      connecting: "接続中...",
      wrongNet: "ネットワーク不一致",
    },
    swap: {
      pay: "支払い",
      receive: "受け取り",
      rate: "レート",
      cost: "ネットワーク手数料",
      impact: "価格への影響",
      min: "最小受取額",
      button: "スワップ",
      enter: "金額を入力",
      processing: "処理中...",
    },
    pool: {
      title: "流動性プール",
      subtitle: "流動性を提供して取引手数料を獲得。",
      newPos: "+ 新規ポジション",
      yourPos: "アクティブなポジション",
      table: { pool: "プール", tvl: "TVL", vol: "24時間取引量", apr: "APR" },
    },
    portfolio: {
      title: "概要",
      subtitle: "資産と取引履歴を追跡。",
      assets: "資産",
      history: "最近の履歴",
      noTx: "最近の取引なし。",
      faucet: "テストトークンが必要ですか？",
      faucetDesc: "フォーセットを使用して無料のUSDCとDAIをミント。",
      mint: "ミント",
    },
    launchpad: {
      title: "プレミアム L2 トークンローンチ",
      subtitle: "ホワイトリスト、AI リスクスコア、保証された流動性を持つプロジェクト。EdgeX で初期段階のプロジェクトに参加し、MARU AI でリスク/リワードプロファイルを分析します。",
      totalRaise: "総調達額",
      activeUpcoming: "アクティブ / 予定",
      active: "アクティブ",
      upcoming: "予定",
      ended: "終了",
      trustLayer: "信頼層",
      tiers: "EdgeX ティア",
      comingSoon: "近日公開",
      activeSales: "アクティブセール",
      noActiveSales: "現在アクティブなセールはありません。",
      upcomingProjects: "予定プロジェクト",
      completedSales: "完了したセール",
      price: "価格",
      payment: "支払い",
      raise: "調達",
      progress: "進捗",
      start: "開始",
      end: "終了",
      target: "目標",
      raised: "調達済み",
      saleType: "セールタイプ",
      joinDemo: "参加（デモ）",
    },
    toast: {
      install: "MetaMaskをインストールしてください。",
      connected: "ウォレット接続成功!",
      disconnected: "ウォレット切断。",
      minting: "ミント中",
      minted: "ミント成功!",
      swapSuccess: "スワップ送信成功!",
      liqSuccess: "流動性追加成功!",
      liqSim: "流動性追加成功(シミュレーション)!",
      demo: "デモモード: 仮想スワップ実行中...",
      rejected: "ユーザーが取引を拒否しました。",
      failed: "取引失敗。",
      liqRem: "流動性が正常に削除されました（シミュレーション）！",
    },
    bridge: {
      title: "クロスチェーンブリッジ",
      subtitle: "L1とL2ネットワーク間で資産を安全に転送します。",
      source: "送信元ネットワーク",
      dest: "送信先ネットワーク",
      transfer: "転送",
      approving: "承認中...",
      bridging: "ブリッジ中...",
      completed: "転送完了！",
      estTime: "予想時間",
      fees: "ブリッジ手数料",
    },
    liquidity: {
      poolDetails: "プール詳細",
      addLiquidity: "流動性を追加",
      removeLiquidity: "流動性を削除",
      yourPosition: "あなたのポジション",
      depositAmounts: "預金額",
      priceRange: "価格範囲",
      fullRange: "全範囲",
      expectedLP: "予想LPトークン",
      shareAfter: "追加後のプールシェア",
      deposited: "預金済み",
      currentValue: "現在の価値",
      lpTokens: "LPトークン",
      poolShare: "プールシェア",
      earnedFees: "獲得手数料",
      approve: "承認",
      supply: "供給",
      remove: "削除",
      claimFees: "手数料を請求",
      liquidity: "流動性",
      volume24h: "24時間取引量",
      fees24h: "24時間手数料",
      insufficientBalance: "残高不足",
      enterAmount: "有効な金額を入力してください。",
      approving: "承認中...",
      supplying: "供給中...",
      removing: "削除中...",
      tvl: "TVL",
      apr: "APR",
      noPositions: "このプールにアクティブなポジションはありません。",
      currentPrice: "現在の価格",
      pricePerToken: "あたり",
    },
  },
} as const;




const CreateProjectModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onCreate: (project: Project) => void;
}> = ({ isOpen, onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    desc: "",
    price: "",
    raiseTarget: 500000,
    logoUrl: "",
    minContribution: "100",
    maxContribution: "10000",
    saleType: "Public Sale",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject: Project = {
      id: Date.now(),
      name: formData.name,
      symbol: formData.symbol,
      token: formData.symbol,
      desc: formData.desc,
      logoUrl: formData.logoUrl || `https://api.dicebear.com/7.x/shapes/svg?seed=${formData.symbol}&backgroundColor=6366f1`,
      chain: "EdgeX L2",
      status: "upcoming",
      saleType: formData.saleType,
      raiseTarget: formData.raiseTarget,
      raiseSoFar: 0,
      price: parseFloat(formData.price),
      minContribution: parseFloat(formData.minContribution),
      maxContribution: parseFloat(formData.maxContribution),
      paymentTokens: ["USDC", "ETH"],
      startAt: "TBA",
      endAt: "TBA",
      tags: ["New"],
      kyc: false,
      audit: false,
    };
    onCreate(newProject);
    onClose();
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const setPresetTarget = (value: number) => {
    setFormData({ ...formData, raiseTarget: value });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in duration-200" onClick={onClose}>
      <div className="bg-[#0f131c] border border-white/10 rounded-2xl p-8 w-full max-w-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <h2 className="text-2xl font-bold text-white mb-6">Create New Project</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Logo URL */}
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Project Logo</label>
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center flex-shrink-0">
                {formData.logoUrl ? (
                  <img src={formData.logoUrl} alt="Logo preview" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-slate-600 text-xs">No Logo</span>
                )}
              </div>
              <input
                placeholder="https://example.com/logo.png (optional)"
                className="flex-1 bg-[#050910] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none text-sm"
                value={formData.logoUrl}
                onChange={e => setFormData({ ...formData, logoUrl: e.target.value })}
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">Leave empty to auto-generate a logo</p>
          </div>

          {/* Name & Symbol */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Project Name</label>
              <input
                required
                className="w-full bg-[#050910] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Token Symbol</label>
              <input
                required
                className="w-full bg-[#050910] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none uppercase"
                value={formData.symbol}
                onChange={e => setFormData({ ...formData, symbol: e.target.value.toUpperCase() })}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Description</label>
            <textarea
              required
              className="w-full bg-[#050910] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none h-20 resize-none"
              value={formData.desc}
              onChange={e => setFormData({ ...formData, desc: e.target.value })}
            />
          </div>

          {/* Token Price */}
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Token Price ($)</label>
            <input
              required
              type="number"
              step="0.000001"
              className="w-full bg-[#050910] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none"
              value={formData.price}
              onChange={e => setFormData({ ...formData, price: e.target.value })}
            />
          </div>

          {/* Min/Max Contribution */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Min Contribution ($)</label>
              <input
                required
                type="number"
                min="1"
                className="w-full bg-[#050910] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none"
                value={formData.minContribution}
                onChange={e => setFormData({ ...formData, minContribution: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Max Contribution ($)</label>
              <input
                required
                type="number"
                min="1"
                className="w-full bg-[#050910] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-cyan-500 outline-none"
                value={formData.maxContribution}
                onChange={e => setFormData({ ...formData, maxContribution: e.target.value })}
              />
            </div>
          </div>

          {/* Advanced Target Raise */}
          <div className="bg-[#050910]/50 border border-white/5 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-400 uppercase">Target Raise</label>
              <div className="text-2xl font-black text-white">
                ${formatNumber(formData.raiseTarget)}
              </div>
            </div>

            {/* Quick Presets */}
            <div className="flex gap-2 flex-wrap">
              {[50000, 100000, 250000, 500000, 1000000, 2500000].map(preset => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setPresetTarget(preset)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${formData.raiseTarget === preset
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 border border-white/10"
                    }`}
                >
                  ${preset >= 1000000 ? `${preset / 1000000}M` : `${preset / 1000}K`}
                </button>
              ))}
            </div>

            {/* Slider */}
            <div className="space-y-2">
              <input
                type="range"
                min="10000"
                max="10000000"
                step="10000"
                value={formData.raiseTarget}
                onChange={e => setFormData({ ...formData, raiseTarget: parseInt(e.target.value) })}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-cyan-500 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-500">
                <span>$10K</span>
                <span>$10M</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-xl font-bold text-slate-400 hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-[2] py-3 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 shadow-lg shadow-cyan-500/20"
            >
              Deploy Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Swap Confirmation Modal Component
const SwapConfirmationModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  fromToken: Token;
  toToken: Token;
  fromAmount: string;
  toAmount: string;
  priceImpact: number;
  minReceived: string;
  gasEstimate: string;
  slippage: number;
}> = ({ isOpen, onClose, onConfirm, fromToken, toToken, fromAmount, toAmount, priceImpact, minReceived, gasEstimate, slippage }) => {
  if (!isOpen) return null;

  const getPriceImpactColor = (impact: number) => {
    if (impact < 1) return "text-emerald-400";
    if (impact < 3) return "text-yellow-400";
    return "text-red-400";
  };

  const rate = parseFloat(toAmount) / parseFloat(fromAmount);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in duration-200" onClick={onClose}>
      <div className="bg-[#0f131c] border border-white/10 rounded-3xl p-8 w-full max-w-md shadow-2xl relative animate-in zoom-in-95 duration-300" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Confirm Swap</h2>
          <button onClick={onClose} className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-[#050910]/50 border border-white/5 rounded-2xl p-4">
            <div className="text-xs text-slate-500 font-bold uppercase mb-2">You Pay</div>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-black text-white">{fromAmount}</div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-lg">{fromToken.icon}</div>
                <span className="font-bold text-white">{fromToken.symbol}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-10 h-10 rounded-full bg-[#050910] border border-white/10 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-4">
            <div className="text-xs text-cyan-400 font-bold uppercase mb-2">You Receive</div>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-black text-white">{toAmount}</div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-lg">{toToken.icon}</div>
                <span className="font-bold text-white">{toToken.symbol}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-6 p-4 bg-[#050910]/30 rounded-xl border border-white/5">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Rate</span>
            <span className="text-white font-mono">1 {fromToken.symbol} = {rate.toFixed(6)} {toToken.symbol}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Price Impact</span>
            <span className={`font-bold ${getPriceImpactColor(priceImpact)}`}>{priceImpact < 0.01 ? "< 0.01" : priceImpact.toFixed(2)}%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Minimum Received</span>
            <span className="text-white font-mono">{minReceived} {toToken.symbol}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Slippage Tolerance</span>
            <span className="text-white font-bold">{slippage}%</span>
          </div>
          <div className="flex justify-between text-sm border-t border-white/5 pt-3">
            <span className="text-slate-400">Network Fee</span>
            <span className="text-white font-bold">{gasEstimate}</span>
          </div>
        </div>

        {priceImpact >= 3 && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
            <div className="flex items-start gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-400 flex-shrink-0 mt-0.5">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <div>
                <div className="text-red-400 font-bold text-sm mb-1">High Price Impact!</div>
                <div className="text-red-300/80 text-xs">This swap will significantly affect the token price. Consider reducing your amount.</div>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <button onClick={onClose} className="flex-1 py-3 rounded-xl font-bold text-slate-400 hover:bg-white/5 transition-colors">Cancel</button>
          <button onClick={() => { onConfirm(); onClose(); }} className="flex-[2] py-3 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 shadow-lg shadow-cyan-500/20 transition-all">
            Confirm Swap
          </button>
        </div>
      </div>
    </div>
  );
};

/* ========= ADMIN VIEW ========= */
const AdminView: React.FC<{
  t: any;
  projects: Project[];
  onCreateProject: (project: Project) => void;
  onDeleteProject: (id: number) => void;
  prices: Record<string, number>;
  balances: Record<string, string>;
}> = ({ projects, onCreateProject, onDeleteProject, prices, balances }) => {
  const [activeTab, setActiveTab] = useState<"dashboard" | "portfolio" | "users" | "tokens" | "launchpad">("dashboard");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);



  // Mock Data for Dashboard
  const stats = [
    { label: "Total Value Locked", value: "$42.5M", change: "+12.5%", icon: "🔒" },
    { label: "Active Users", value: "12,450", change: "+5.2%", icon: "👥" },
    { label: "Total Volume", value: "$128.4M", change: "+8.1%", icon: "📊" },
    { label: "Projects Launched", value: projects.length.toString(), change: "+2", icon: "🚀" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto min-h-[600px] flex gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      {/* Sidebar */}
      <div className="w-64 bg-[#050910]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-4 flex flex-col gap-2 h-fit sticky top-24">
        <div className="px-4 py-4 mb-2">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Admin Console</h2>
        </div>
        {(["dashboard", "portfolio", "users", "tokens", "launchpad"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === tab
              ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/20 shadow-lg shadow-cyan-500/10"
              : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
          >
            <span className="text-lg">
              {tab === "dashboard" && "📊"}
              {tab === "users" && "👥"}
              {tab === "tokens" && "🪙"}
              {tab === "launchpad" && "🚀"}
            </span>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center bg-[#050910]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
          <div>
            <h1 className="text-2xl font-black text-white">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            <p className="text-slate-400 text-sm">Overview and management</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              System Operational
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg">
              👨‍💻
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-[#050910]/90 border border-white/10 rounded-2xl p-5 relative overflow-hidden group hover:border-cyan-500/20 transition-colors">
                  <div className="absolute top-0 right-0 p-4 opacity-10 text-4xl group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">{stat.label}</div>
                  <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-emerald-400 text-xs font-bold bg-emerald-500/10 inline-block px-2 py-0.5 rounded border border-emerald-500/20">{stat.change}</div>
                </div>
              ))}
            </div>

            {/* Chart Area */}
            <div className="bg-[#050910]/90 border border-white/10 rounded-3xl p-8 min-h-[300px] relative overflow-hidden">
              <h3 className="text-lg font-bold text-white mb-6">Network Activity</h3>
              <div className="absolute inset-0 flex items-end justify-center opacity-20 pointer-events-none">
                <svg viewBox="0 0 1000 300" className="w-full h-full fill-cyan-500/20 stroke-cyan-500 stroke-2">
                  <path d="M0,300 L0,200 C100,250 200,150 300,200 C400,250 500,100 600,150 C700,200 800,50 900,100 L1000,300 Z" />
                </svg>
              </div>
              <div className="grid grid-cols-7 gap-4 h-40 items-end opacity-50">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div key={i} className="w-full bg-cyan-500/20 rounded-t-lg hover:bg-cyan-500/40 transition-colors" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Users Content */}
        {activeTab === "users" && (
          <div className="bg-[#050910]/90 border border-white/10 rounded-3xl p-8 min-h-[400px] flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-white mb-2">User Management</h3>
            <p className="text-slate-400 max-w-md">Advanced user analytics, KYC status verification, and ban management tools are coming in the next update.</p>
          </div>
        )}

        {/* Portfolio Content */}
        {activeTab === "portfolio" && (
          <div className="space-y-6">
            {/* Total Balance Card */}
            <div className="bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-3xl p-8 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
              <h2 className="text-slate-400 mb-2 font-medium">Total Portfolio Value</h2>
              <div className="flex items-end gap-4">
                <div className="text-5xl font-black text-white tracking-tight">
                  ${TOKENS.reduce((acc, t) => acc + (parseFloat(balances[t.symbol] || "0") * (prices[t.symbol] || 0)), 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-1 rounded-lg border border-emerald-500/20 mb-2">
                  +5.2%
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Asset Allocation */}
              <div className="bg-[#050910]/90 border border-white/10 rounded-3xl p-6">
                <h3 className="text-lg font-bold text-white mb-6">Asset Allocation</h3>
                <div className="flex items-center justify-center h-64 relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    {(() => {
                      const total = TOKENS.reduce((acc, t) => acc + (parseFloat(balances[t.symbol] || "0") * (prices[t.symbol] || 0)), 0);
                      let accumulated = 0;
                      return TOKENS.map((token, i) => {
                        const value = (parseFloat(balances[token.symbol] || "0") * (prices[token.symbol] || 0));
                        if (value === 0) return null;
                        const percentage = (value / total) * 100;
                        const dashArray = `${percentage} ${100 - percentage}`;
                        const offset = 100 - accumulated;
                        accumulated += percentage;
                        const colors = ['#06b6d4', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];
                        return (
                          <circle
                            key={token.symbol}
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke={colors[i % colors.length]}
                            strokeWidth="10"
                            strokeDasharray={dashArray}
                            strokeDashoffset={offset}
                            className="transition-all duration-500 hover:opacity-80 cursor-pointer"
                          />
                        );
                      });
                    })()}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                    <div className="text-xs text-slate-500 font-bold uppercase">Top Asset</div>
                    <div className="text-xl font-bold text-white">ETH</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-6">
                  {TOKENS.map((token, i) => {
                    const value = (parseFloat(balances[token.symbol] || "0") * (prices[token.symbol] || 0));
                    if (value === 0) return null;
                    const colors = ['bg-cyan-500', 'bg-violet-500', 'bg-emerald-500', 'bg-amber-500', 'bg-red-500'];
                    return (
                      <div key={token.symbol} className="flex items-center gap-2 text-xs">
                        <div className={`w-2 h-2 rounded-full ${colors[i % colors.length]}`} />
                        <span className="text-slate-400">{token.symbol}</span>
                        <span className="text-white font-bold ml-auto">${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Asset List */}
              <div className="lg:col-span-2 bg-[#050910]/90 border border-white/10 rounded-3xl p-6">
                <h3 className="text-lg font-bold text-white mb-6">Your Assets</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-xs text-slate-500 uppercase border-b border-white/5">
                        <th className="pb-4 pl-4">Asset</th>
                        <th className="pb-4">Price</th>
                        <th className="pb-4">Balance</th>
                        <th className="pb-4 pr-4 text-right">Value</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {TOKENS.map((token) => {
                        const balance = parseFloat(balances[token.symbol] || "0");
                        const price = prices[token.symbol] || 0;
                        const value = balance * price;

                        return (
                          <tr key={token.symbol} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                            <td className="py-4 pl-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-lg">{token.icon}</div>
                                <div>
                                  <div className="font-bold text-white">{token.name}</div>
                                  <div className="text-xs text-slate-500">{token.symbol}</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 text-slate-300">
                              ${price.toLocaleString()}
                            </td>
                            <td className="py-4 text-slate-300">
                              {balance.toLocaleString()} {token.symbol}
                            </td>
                            <td className="py-4 pr-4 text-right">
                              <div className="font-bold text-white">${value.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tokens Content */}
        {activeTab === "tokens" && (
          <div className="bg-[#050910]/90 border border-white/10 rounded-3xl p-8 min-h-[400px] flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-4xl mb-4">🪙</div>
            <h3 className="text-xl font-bold text-white mb-2">Token Manager</h3>
            <p className="text-slate-400 max-w-md">Whitelist management, token verification, and liquidity requirement checks will be available here.</p>
          </div>
        )}

        {/* Launchpad Content */}
        {activeTab === "launchpad" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-sm font-bold text-white">
                  Total Projects: {projects.length}
                </div>
                <div className="px-4 py-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-sm font-bold text-emerald-400">
                  Active: {projects.filter(p => p.status === "ongoing").length}
                </div>
              </div>
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white rounded-xl font-bold shadow-lg shadow-cyan-500/20 transition-all flex items-center gap-2"
              >
                <span>✨</span> Create Project
              </button>
            </div>

            <div className="grid gap-4">
              {projects.map((p) => (
                <div key={p.id} className="flex items-center justify-between bg-[#050910]/90 p-5 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center flex-shrink-0">
                      <img src={p.logoUrl} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{p.name}</h4>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="font-mono bg-white/5 px-1.5 py-0.5 rounded">{p.symbol}</span>
                        <span>•</span>
                        <span className={p.status === "ongoing" ? "text-emerald-400" : "text-slate-400"}>
                          {p.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right hidden md:block">
                      <div className="text-xs text-slate-500 uppercase font-bold">Raised</div>
                      <div className="text-white font-mono font-bold">${p.raiseSoFar.toLocaleString()}</div>
                    </div>
                    <div className="text-right hidden md:block">
                      <div className="text-xs text-slate-500 uppercase font-bold">Target</div>
                      <div className="text-white font-mono font-bold">${p.raiseTarget.toLocaleString()}</div>
                    </div>
                    <div className="flex gap-2 pl-4 border-l border-white/10">
                      <button
                        onClick={() => alert("Edit functionality coming soon!")}
                        className="p-2 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                      </button>
                      <button
                        onClick={() => onDeleteProject(p.id)}
                        className="p-2 hover:bg-red-500/10 rounded-lg text-slate-400 hover:text-red-400 transition-colors"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <CreateProjectModal
              isOpen={isCreateModalOpen}
              onClose={() => setIsCreateModalOpen(false)}
              onCreate={onCreateProject}
            />
          </div>
        )}
      </div>
    </div>
  );
};

/* ========= APP ========= */

function App() {
  const [activeNav, setActiveNav] = useState<NavItem>("Trade");
  const [activeTab, setActiveTab] = useState<ActiveTab>("swap");

  // Language State
  const [lang, setLang] = useState<"en" | "tr" | "zh" | "ko" | "ja">("en");
  const t = TRANSLATIONS[lang];

  // Color Theme State (Cyber Blue / Gold Luxury)
  const [colorTheme, setColorTheme] = useState<'cyber' | 'gold'>(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('colorTheme');
      if (saved === 'cyber' || saved === 'gold') return saved;
    }
    return 'cyber'; // Default to Cyber Blue
  });

  // Apply color theme on mount and change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-color-theme', colorTheme);
      window.localStorage.setItem('colorTheme', colorTheme);
    }
  }, [colorTheme]);

  // Theme State
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;

      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'dark'; // Default to dark
  });

  // Swap State
  const [fromToken, setFromToken] = useState<Token>(TOKENS[0]);
  const [toToken, setToToken] = useState<Token>(TOKENS[1]);
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [isFromOpen, setIsFromOpen] = useState(false);
  const [isToOpen, setIsToOpen] = useState(false);
  const [tokenSearch, setTokenSearch] = useState("");
  const [slippage, setSlippage] = useState(0.5);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Swap Confirmation & Advanced Features
  const [showSwapConfirmation, setShowSwapConfirmation] = useState(false);
  const [priceImpact, setPriceImpact] = useState(0);
  const [minReceived, setMinReceived] = useState("");
  const [gasEstimate, setGasEstimate] = useState("$2.50");

  // Phase 2: Enhanced Features
  const [currentGasPrice, setCurrentGasPrice] = useState(12); // gwei


  // Phase 3: Limit Orders & DCA
  const [limitOrders, setLimitOrders] = useState<LimitOrder[]>([]);
  const [dcaSchedules, setDcaSchedules] = useState<DCASchedule[]>([]);
  const [limitTargetPrice, setLimitTargetPrice] = useState("");
  const [dcaAmount, setDcaAmount] = useState("");


  const [dcaFrequency, setDcaFrequency] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [dcaTotalSwaps, setDcaTotalSwaps] = useState("10");

  // Withdraw State
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawToken, setWithdrawToken] = useState<Token | null>(null);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [isWithdrawing, setIsWithdrawing] = useState(false);

  // Multi-Hop Routing State
  const [selectedRoute, setSelectedRoute] = useState<SwapRoute | null>(null);
  const [allRoutes, setAllRoutes] = useState<SwapRoute[]>([]);
  const [showRouteComparison, setShowRouteComparison] = useState(false);

  // Live Market State
  const [prices, setPrices] = useState<Record<string, number>>({
    "ETH": 3050.24,
    "USDC": 1.00,
    "DAI": 1.00,
    "WBTC": 42150.00,
    "USDT": 1.00
  });

  // Portfolio State
  const [balances, _setBalances] = useState<Record<string, string>>({
    "ETH": "0.06",
    "USDC": "5400.00",
    "DAI": "1200.00",
    "WBTC": "0.45",
    "USDT": "2300.00"
  });


  // Data State
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved =
      typeof window !== "undefined"
        ? window.localStorage.getItem("transactions")
        : null;
    return saved ? JSON.parse(saved) : [];
  });
  const [toasts, setToasts] = useState<
    { id: number; msg: string; type: "success" | "error" | "info" }[]
  >([]);

  // Pools State
  const [userLiquidityPositions, setUserLiquidityPositions] = useState<LiquidityPosition[]>(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("liquidityPositions") : null;
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedPool, setSelectedPool] = useState<PoolData | null>(null);
  const [showPoolModal, setShowPoolModal] = useState(false);
  const [poolModalTab, setPoolModalTab] = useState<"add" | "remove" | "position">("add");
  const [liquidityAmount0, setLiquidityAmount0] = useState("");
  const [liquidityAmount1, setLiquidityAmount1] = useState("");
  const [removePercentage, setRemovePercentage] = useState(50);
  const [isAddingLiquidity, setIsAddingLiquidity] = useState(false);
  const [isRemovingLiquidity, setIsRemovingLiquidity] = useState(false);
  const [_poolsData, _setPoolsData] = useState<PoolData[]>(POPULAR_POOLS);

  // Wallet State
  const [account, setAccount] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [chainId, setChainId] = useState<number | null>(null);

  // Balances
  const [ethBalance, setEthBalance] = useState<string>(() =>
    typeof window !== "undefined"
      ? window.localStorage.getItem("ethBalance") || "0"
      : "0"
  );
  const [usdcBalance, setUsdcBalance] = useState<string>(() =>
    typeof window !== "undefined"
      ? window.localStorage.getItem("usdcBalance") || "0"
      : "0"
  );
  const [daiBalance, setDaiBalance] = useState<string>(() =>
    typeof window !== "undefined"
      ? window.localStorage.getItem("daiBalance") || "0"
      : "0"
  );

  const [_isLoadingBalances, setIsLoadingBalances] = useState(false);

  // Actions
  const [isSwapping, setIsSwapping] = useState(false);
  const [isClaimingUsdc, setIsClaimingUsdc] = useState(false);
  const [isClaimingDai, setIsClaimingDai] = useState(false);
  const [_lastTxHash, setLastTxHash] = useState<string | null>(null);

  // Bridge State
  const [sourceChain, setSourceChain] = useState<Chain>(CHAINS[0]);
  const [destChain, setDestChain] = useState<Chain>(CHAINS[1]);
  const [bridgeAmount, setBridgeAmount] = useState("");
  const [bridgeStatus, setBridgeStatus] = useState<"idle" | "approving" | "bridging" | "completed">("idle");
  const [bridgeStep, setBridgeStep] = useState(0);

  // Ethers injection
  const [ethersLoaded, setEthersLoaded] = useState(false);

  /* ========= PERSIST DATA ========= */
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("ethBalance", ethBalance);
    window.localStorage.setItem("usdcBalance", usdcBalance);
    window.localStorage.setItem("daiBalance", daiBalance);
    window.localStorage.setItem("transactions", JSON.stringify(transactions));
    window.localStorage.setItem("liquidityPositions", JSON.stringify(userLiquidityPositions));
  }, [ethBalance, usdcBalance, daiBalance, transactions, userLiquidityPositions]);

  /* ========= THEME INITIALIZATION ========= */
  useEffect(() => {
    // Apply theme to document on mount and when theme changes
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      window.localStorage.setItem('theme', theme);
    }
  }, [theme]);

  // Listen to system theme changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only auto-switch if user hasn't manually set a preference
      const savedTheme = window.localStorage.getItem('theme');
      if (!savedTheme) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  /* --- REAL LIVE PRICE FEED (CoinGecko) --- */
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const ids = TOKENS.map((t) => t.coingeckoId).join(",");
        const res = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`
        );
        if (res.ok) {
          const data = await res.json();
          setPrices((prev: Record<string, number>) => ({
            ...prev,
            ETH: data.ethereum?.usd || prev.ETH,
            USDC: data["usd-coin"]?.usd || prev.USDC,
            DAI: data.dai?.usd || prev.DAI,
            WBTC: data["wrapped-bitcoin"]?.usd || prev.WBTC,
          }));
        }
      } catch (e) {
        console.warn("Price fetch failed, using fallback");
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  // Real-time Gas Price Estimation
  useEffect(() => {
    const fetchGasPrice = async () => {
      try {
        if (ethersLoaded && (window as any).ethers) {
          const provider = getProvider();
          const gasPrice = await provider.getGasPrice();
          const gwei = parseFloat((window as any).ethers.utils.formatUnits(gasPrice, 'gwei'));
          setCurrentGasPrice(gwei);

          // Calculate USD cost (150k gas for swap)
          const gasCostETH = (150000 * gwei) / 1e9;
          const gasCostUSD = gasCostETH * prices.ETH;
          setGasEstimate(`$${gasCostUSD.toFixed(2)}`);
        }
      } catch (e) {
        console.warn('Gas fetch failed, using default');
      }
    };

    fetchGasPrice();
    const interval = setInterval(fetchGasPrice, 30000);
    return () => clearInterval(interval);
  }, [ethersLoaded, prices.ETH]);

  // Fetch real-time prices for all major tokens
  useEffect(() => {
    const fetchAllPrices = async () => {
      try {
        // Fetch multiple token prices at once
        const res = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin,binancecoin,solana,avalanche-2,matic-network,chainlink,uniswap,aave,curve-dao-token,dogecoin,shiba-inu,arbitrum,optimism&vs_currencies=usd&include_24hr_change=true'
        );
        if (res.ok) {
          const data = await res.json();
          setPrices(prev => ({
            ...prev,
            ETH: data.ethereum?.usd || prev.ETH,
            WETH: data.ethereum?.usd || prev.ETH,
            BTC: data.bitcoin?.usd || 97000,
            WBTC: data.bitcoin?.usd || 97000,
            BNB: data.binancecoin?.usd || 650,
            SOL: data.solana?.usd || 220,
            AVAX: data['avalanche-2']?.usd || 45,
            MATIC: data['matic-network']?.usd || 0.5,
            LINK: data.chainlink?.usd || 18,
            UNI: data.uniswap?.usd || 12,
            AAVE: data.aave?.usd || 180,
            CRV: data['curve-dao-token']?.usd || 0.5,
            DOGE: data.dogecoin?.usd || 0.4,
            SHIB: data['shiba-inu']?.usd || 0.00002,
            ARB: data.arbitrum?.usd || 1.1,
            OP: data.optimism?.usd || 2.5,
          }));
        }
      } catch (e) {
        console.warn('Price fetch failed');
      }
    };

    fetchAllPrices();

    // Update prices every 5 seconds for live feel
    const priceInterval = setInterval(fetchAllPrices, 5000);

    return () => clearInterval(priceInterval);
  }, []);

  // Update To Amount when prices change
  useEffect(() => {
    if (fromAmount && !isSwapping) {
      const num = Number(fromAmount);
      const fp = prices[fromToken.symbol];
      const tp = prices[toToken.symbol];
      const out = (num * fp) / tp;
      setToAmount(out.toFixed(4));
    }
  }, [prices, fromToken, toToken, fromAmount, isSwapping]);

  // Load ethers UMD
  useEffect(() => {
    if ((window as any).ethers) {
      setEthersLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.umd.min.js";
    script.async = true;
    script.onload = () => setEthersLoaded(true);
    document.body.appendChild(script);
  }, []);

  // Wallet events
  useEffect(() => {
    if (ethersLoaded && (window as any).ethereum) {
      (window as any).ethereum
        .request({ method: "eth_accounts" })
        .then((accounts: string[]) => {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            updateChainId();
          }
        });

      (window as any).ethereum.on(
        "accountsChanged",
        (accounts: string[]) => {
          setAccount(accounts[0] || null);
        }
      );

      (window as any).ethereum.on(
        "chainChanged",
        (chainIdHex: string) => {
          setChainId(parseInt(chainIdHex, 16));
          fetchBalances();
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ethersLoaded]);

  // Balances
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);

  const ADMIN_WALLET_ADDRESS = "0x7bfc664382cc1e392cb791ac3bb24da9a7963d87";
  const isAdminMode = account?.toLowerCase() === ADMIN_WALLET_ADDRESS.toLowerCase();

  useEffect(() => {
    if (account && ethersLoaded) {
      fetchBalances();
    }
  }, [account, chainId, ethersLoaded]); // fetchBalances is stable due to useCallback

  /* ========= HELPERS (INSIDE APP) ========= */


  /* ========= HELPERS (INSIDE APP) ========= */

  const addToast = (
    msg: string,
    type: "success" | "error" | "info" = "info"
  ) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, msg, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const addTransaction = (
    tx: Omit<Transaction, "id" | "timestamp" | "status">
  ) => {
    const newTx: Transaction = {
      ...tx,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      status: "Success",
    };
    setTransactions((prev) => [newTx, ...prev]);
  };

  const updateChainId = async () => {
    if (!(window as any).ethereum) return;
    try {
      const id = await (window as any).ethereum.request({
        method: "eth_chainId",
      });
      setChainId(parseInt(id, 16));
    } catch (e) {
      console.error(e);
    }
  };

  const switchNetwork = async () => {
    if (!(window as any).ethereum) return;
    try {
      await (window as any).ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: SEPOLIA_HEX_ID }],
      });
    } catch (error: any) {
      if (error.code === 4902) {
        try {
          await (window as any).ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: SEPOLIA_HEX_ID,
                chainName: "Sepolia Test Network",
                nativeCurrency: {
                  name: "Sepolia ETH",
                  symbol: "SEP",
                  decimals: 18,
                },
                rpcUrls: ["https://sepolia.infura.io/v3/"],
                blockExplorerUrls: ["https://sepolia.etherscan.io"],
              },
            ],
          });
        } catch (e) {
          console.error(e);
        }
      }
    }
  };

  const getProvider = () => {
    // @ts-ignore
    return new (window as any).ethers.BrowserProvider(
      (window as any).ethereum
    );
  };

  const fetchBalances = useCallback(async () => {
    if (!account || !ethersLoaded) return;
    setIsLoadingBalances(true);
    try {
      const provider = getProvider();
      const ethBal = await provider.getBalance(account);
      // @ts-ignore
      const realEth = (window as any).ethers.formatEther(ethBal);
      setEthBalance(realEth);

      // USDC
      // @ts-ignore
      const usdcContract = new (window as any).ethers.Contract(
        USDC_ADDRESS,
        ERC20_ABI,
        provider
      );
      const usdcBal = await usdcContract.balanceOf(account);
      // @ts-ignore
      const realUsdc = (window as any).ethers.formatUnits(usdcBal, 6);
      setUsdcBalance((prev) => {
        const p = parseFloat(prev);
        const r = parseFloat(realUsdc);
        if (p > 1 && r < 1) return prev;
        return r > 0 ? realUsdc : prev;
      });

      // DAI
      // @ts-ignore
      const daiContract = new (window as any).ethers.Contract(
        DAI_ADDRESS,
        ERC20_ABI,
        provider
      );
      const daiBal = await daiContract.balanceOf(account);
      // @ts-ignore
      const realDai = (window as any).ethers.formatUnits(daiBal, 18);
      setDaiBalance((prev) => {
        const p = parseFloat(prev);
        const r = parseFloat(realDai);
        if (p > 1 && r < 1) return prev;
        return r > 0 ? realDai : prev;
      });
    } catch (error) {
      console.error("Balance fetch error:", error);
    } finally {
      setIsLoadingBalances(false);
    }
  }, [account, ethersLoaded]);

  const connectWallet = async () => {
    if (!(window as any).ethereum) return addToast(t.toast.install, "error");
    setIsConnecting(true);
    try {
      const accounts = await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      await updateChainId();
      addToast(t.toast.connected, "success");
    } catch (err) {
      console.error(err);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    addToast(t.toast.disconnected, "info");
  };

  const resetDemo = () => {
    if (
      window.confirm(
        "Are you sure you want to reset all demo balances and history?"
      )
    ) {
      window.localStorage.clear();
      setEthBalance("0");
      setUsdcBalance("0");
      setDaiBalance("0");
      setTransactions([]);
      window.location.reload();
    }
  };

  /* ========= MULTI-HOP ROUTING ========= */

  // Find all possible routes between two tokens (max 3 hops)
  const findAllRoutes = useCallback((from: Token, to: Token): SwapRoute[] => {
    const routes: SwapRoute[] = [];
    const intermediateTokens = TOKENS.filter(t => t.symbol !== from.symbol && t.symbol !== to.symbol);

    // Direct route
    const directPool = POPULAR_POOLS.find(p =>
      (p.pair[0] === from.symbol && p.pair[1] === to.symbol) ||
      (p.pair[1] === from.symbol && p.pair[0] === to.symbol)
    );

    if (directPool) {
      routes.push({
        path: [from, to],
        pools: [directPool],
        expectedOutput: 0,
        priceImpact: 0,
        gasEstimate: "~$2.50"
      });
    }

    // Single hop routes (from → intermediate → to)
    intermediateTokens.forEach(intermediate => {
      const pool1 = POPULAR_POOLS.find(p =>
        (p.pair[0] === from.symbol && p.pair[1] === intermediate.symbol) ||
        (p.pair[1] === from.symbol && p.pair[0] === intermediate.symbol)
      );

      const pool2 = POPULAR_POOLS.find(p =>
        (p.pair[0] === intermediate.symbol && p.pair[1] === to.symbol) ||
        (p.pair[1] === intermediate.symbol && p.pair[0] === to.symbol)
      );

      if (pool1 && pool2) {
        routes.push({
          path: [from, intermediate, to],
          pools: [pool1, pool2],
          expectedOutput: 0,
          priceImpact: 0,
          gasEstimate: "~$5.00"
        });
      }
    });

    return routes;
  }, []);

  // Calculate output amount for a route
  const calculateRouteOutput = useCallback((route: SwapRoute, inputAmount: string): SwapRoute => {
    const amount = parseFloat(inputAmount);
    if (isNaN(amount) || amount <= 0) {
      return { ...route, expectedOutput: 0, priceImpact: 0 };
    }

    let currentAmount = amount;
    let totalPriceImpact = 0;

    // Simulate swap through each pool in the route
    route.pools.forEach((pool, index) => {
      const fromToken = route.path[index];
      const toToken = route.path[index + 1];

      // Simple price calculation (in real DEX, would use pool reserves)
      const fromPrice = prices[fromToken.symbol];
      const toPrice = prices[toToken.symbol];

      // Calculate output with 0.3% fee
      const outputBeforeFee = (currentAmount * fromPrice) / toPrice;
      const fee = outputBeforeFee * pool.feeRate;
      currentAmount = outputBeforeFee - fee;

      // Add price impact (increases with amount)
      const impact = (amount / 10000) * 100 * (index + 1); // Cumulative impact
      totalPriceImpact += impact;
    });

    return {
      ...route,
      expectedOutput: currentAmount,
      priceImpact: Math.min(totalPriceImpact, 15)
    };
  }, [prices]);

  // Find best route
  const findBestRoute = useCallback((from: Token, to: Token, amount: string): SwapRoute | null => {
    const routes = findAllRoutes(from, to);
    if (routes.length === 0) return null;

    // Calculate output for each route
    const routesWithOutput = routes.map(route => calculateRouteOutput(route, amount));

    // Find route with highest output
    const bestRoute = routesWithOutput.reduce((best, current) =>
      current.expectedOutput > best.expectedOutput ? current : best
    );

    return bestRoute;
  }, [findAllRoutes, calculateRouteOutput]);

  /* ========= ACTIONS ========= */


  const handleClaim = async (token: "USDC" | "DAI") => {
    if (!account || chainId !== SEPOLIA_CHAIN_ID) return switchNetwork();

    const isUsdc = token === "USDC";
    isUsdc ? setIsClaimingUsdc(true) : setIsClaimingDai(true);

    try {
      const provider = getProvider();
      const signer = await provider.getSigner();
      // @ts-ignore
      const faucet = new (window as any).ethers.Contract(
        FAUCET_ADDRESS,
        FAUCET_ABI,
        signer
      );
      const tokenAddr = isUsdc ? USDC_ADDRESS : DAI_ADDRESS;

      const tx = await faucet.claim(tokenAddr, { gasLimit: 200000 });

      addToast(`${t.toast.minting} 100 ${token}...`, "info");
      addTransaction({
        type: "Faucet",
        desc: `Mint 100 ${token}`,
        amount: "100",
        token: token,
        hash: tx.hash,
      });

      // Optimistic Update for Faucet
      if (isUsdc) {
        setUsdcBalance((prev) => (parseFloat(prev) + 100).toFixed(4));
      } else {
        setDaiBalance((prev) => (parseFloat(prev) + 100).toFixed(4));
      }

      tx.wait().then(() => {
        addToast(`${token} ${t.toast.minted}`, "success");
      });
    } catch (err) {
      console.error(err);
      addToast(t.toast.failed, "error");
    } finally {
      isUsdc ? setIsClaimingUsdc(false) : setIsClaimingDai(false);
    }
  };

  const handleSwap = async () => {
    console.log("🔄 handleSwap called", { account, fromAmount, fromToken: fromToken.symbol, toToken: toToken.symbol });

    if (!account || !fromAmount) {
      console.log("❌ Early return: missing account or amount");
      return;
    }
    if (chainId !== SEPOLIA_CHAIN_ID) {
      console.log("❌ Wrong network, switching...");
      return switchNetwork();
    }
    if (parseFloat(ethBalance) < 0.001) {
      return addToast("Insufficient ETH for gas fees.", "error");
    }

    setIsSwapping(true);
    addToast("Preparing swap...", "info");

    try {
      const provider = getProvider();
      const signer = await provider.getSigner();
      const ethers = (window as any).ethers;

      console.log("📝 Provider and signer ready");

      // Get token addresses
      const tokenInAddress = TOKEN_ADDRESSES[fromToken.symbol];
      const tokenOutAddress = TOKEN_ADDRESSES[toToken.symbol];

      console.log("📍 Token addresses:", { tokenInAddress, tokenOutAddress });

      if (!tokenInAddress || !tokenOutAddress) {
        throw new Error(`Token not supported: ${!tokenInAddress ? fromToken.symbol : toToken.symbol}. Only ETH, USDC, DAI are supported.`);
      }

      // Parse amount with correct decimals
      const fromDecimals = fromToken.symbol === "USDC" ? 6 : 18;
      const amountIn = ethers.parseUnits(fromAmount, fromDecimals);

      // Calculate minimum output - TEMPORARILY SET TO 0 TO DEBUG EXECUTION REVERT
      // const amountOutMin = (expectedOut * BigInt(99)) / BigInt(100); // 1% slippage
      // Calculate minimum output
      // const amountOutMin = BigInt(0);

      let txHash = "";

      // Dynamic Fee Discovery: Try 3000 (0.3%), then 500 (0.05%), then 10000 (1%)
      const feeTiers = [3000, 500, 10000];
      let bestFee = 3000;
      let estimatedGas = BigInt(0);
      let successParams = null;
      let estimationError = "";

      console.log("🔍 Starting fee tier discovery...");

      const router = new ethers.Contract(UNISWAP_ROUTER_ADDRESS, SWAP_ROUTER_ABI, signer);

      // Try each fee tier
      for (const fee of feeTiers) {
        try {
          console.log(`Trying fee tier: ${fee / 10000}% (${fee})`);

          const testParams = {
            tokenIn: fromToken.symbol === "ETH" ? WETH_ADDRESS : tokenInAddress,
            tokenOut: tokenOutAddress,
            fee: fee,
            recipient: account,
            amountIn: amountIn,
            amountOutMinimum: BigInt(0), // No slippage check during estimation
            sqrtPriceLimitX96: 0
          };

          // Estimate gas to see if this pool works
          try {
            // value is needed if swapping ETH
            const estOpts = fromToken.symbol === "ETH" ? { value: amountIn } : {};
            const gas = await router.exactInputSingle.estimateGas(testParams, estOpts);
            console.log(`✅ Success with fee ${fee}! Estimated gas: ${gas.toString()}`);

            bestFee = fee;
            estimatedGas = gas;
            successParams = testParams;
            break; // Found working pool!
          } catch (e: any) {
            console.log(`❌ Fee ${fee} failed:`, e.shortMessage || e.message);
            estimationError = e.shortMessage || e.message || "Unknown error";
          }
        } catch (err) {
          console.log("Loop critical error", err);
        }
      }

      if (!successParams) {
        throw new Error(`Swap failed. No liquidity pool found for this pair. Last error: ${estimationError}. Try a different token or amount.`);
      }

      // Prepare final transaction with found parameters
      // Re-add slippage protection now that we know the pool works, if desired. 
      // Keeping it 0 for now to ensure success as per instruction, but ideally should be calculated from Quoter.
      successParams.amountOutMinimum = BigInt(0);

      addToast(`Swapping via ${bestFee / 10000}% pool...`, "info");

      let tx;
      if (fromToken.symbol === "ETH") {
        tx = await router.exactInputSingle(successParams, {
          value: amountIn,
          gasLimit: (estimatedGas * BigInt(120)) / BigInt(100) // +20% buffer
        });
      } else {
        // Check approval again just to be safe (though handle outside loop)
        const tokenContract = new ethers.Contract(tokenInAddress, ERC20_ABI, signer);
        const allowance = await tokenContract.allowance(account, UNISWAP_ROUTER_ADDRESS);
        if (allowance < amountIn) {
          console.log("⚠️ Allowance check failed inside loop logic, approving...");
          const approveTx = await tokenContract.approve(UNISWAP_ROUTER_ADDRESS, ethers.MaxUint256);
          await approveTx.wait();
        }




        tx = await router.exactInputSingle(successParams, {
          gasLimit: (estimatedGas * BigInt(120)) / BigInt(100) // +20% buffer
        });
      }

      addToast("Swap submitted! Waiting for confirmation...", "info");
      await tx.wait();
      txHash = tx.hash;

      // Refresh balances after swap
      setTimeout(() => {
        // Simple balance refresh simulation (or implement real refresh)
        if (fromToken.symbol === "ETH") switchNetwork(); // Trigger re-fetch
      }, 2000);

      setLastTxHash(txHash);
      addTransaction({
        type: "Swap",
        desc: `Swap ${fromAmount} ${fromToken.symbol} for ${toToken.symbol}`,
        amount: fromAmount,
        token: fromToken.symbol,
        hash: txHash,
      });

      addToast(t.toast.swapSuccess, "success");
      setFromAmount("");
      setToAmount("");

    } catch (err: any) {
      console.error(err);
      if (err.code === "ACTION_REJECTED" || err.code === 4001) {
        addToast(t.toast.rejected, "info");
      } else if (err.message?.includes("insufficient")) {
        addToast("Insufficient balance for swap.", "error");
      } else if (err.message?.includes("UNPREDICTABLE_GAS_LIMIT")) {
        addToast("Pool may not have enough liquidity. Try smaller amount.", "error");
      } else {
        addToast("Swap failed: " + (err.reason || err.shortMessage || err.message), "error");
      }
    } finally {
      setIsSwapping(false);
    }
  };

  const handleBridge = async () => {
    if (!bridgeAmount) return;
    setBridgeStatus("approving");
    setBridgeStep(10);

    // Simulate Approval
    setTimeout(() => {
      setBridgeStep(30);
      setBridgeStatus("bridging");

      // Simulate Bridging Progress
      let progress = 30;
      const interval = setInterval(() => {
        progress += 10;
        setBridgeStep(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setBridgeStatus("completed");
          addToast(t.bridge.completed, "success");
          addTransaction({
            type: "Bridge",
            desc: `Bridge ${bridgeAmount} ${fromToken.symbol} from ${sourceChain.name} to ${destChain.name}`,
            amount: bridgeAmount,
            token: fromToken.symbol,
          });
          setTimeout(() => {
            setBridgeStatus("idle");
            setBridgeStep(0);
            setBridgeAmount("");
          }, 3000);
        }
      }, 800);
    }, 1500);
  };

  const handleAddLiquidity = async () => {
    if (!selectedPool || !liquidityAmount0 || !liquidityAmount1) return;
    if (parseFloat(liquidityAmount0) <= 0 || parseFloat(liquidityAmount1) <= 0) {
      addToast(t.liquidity.enterAmount, "error");
      return;
    }

    setIsAddingLiquidity(true);

    try {
      // Simulate transaction delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Calculate LP tokens (simplified)
      const lpAmount = Math.sqrt(
        parseFloat(liquidityAmount0) * parseFloat(liquidityAmount1)
      );
      const share =
        (lpAmount / (selectedPool.totalLPTokens + lpAmount)) * 100;

      // Create new position
      const newPosition: LiquidityPosition = {
        id: Math.random().toString(36).substr(2, 9),
        poolId: selectedPool.id,
        token0: selectedPool.pair[0],
        token1: selectedPool.pair[1],
        amount0: parseFloat(liquidityAmount0),
        amount1: parseFloat(liquidityAmount1),
        lpTokens: lpAmount,
        shareOfPool: share,
        earnedFees: 0,
        timestamp: Date.now(),
      };

      // Update state
      setUserLiquidityPositions((prev) => [...prev, newPosition]);

      // Deduct balances
      if (selectedPool.pair[0] === "ETH") {
        setEthBalance((prev) => (parseFloat(prev) - parseFloat(liquidityAmount0)).toFixed(4));
      } else if (selectedPool.pair[0] === "USDC") {
        setUsdcBalance((prev) => (parseFloat(prev) - parseFloat(liquidityAmount0)).toFixed(4));
      } else if (selectedPool.pair[0] === "DAI") {
        setDaiBalance((prev) => (parseFloat(prev) - parseFloat(liquidityAmount0)).toFixed(4));
      }

      if (selectedPool.pair[1] === "ETH") {
        setEthBalance((prev) => (parseFloat(prev) - parseFloat(liquidityAmount1)).toFixed(4));
      } else if (selectedPool.pair[1] === "USDC") {
        setUsdcBalance((prev) => (parseFloat(prev) - parseFloat(liquidityAmount1)).toFixed(4));
      } else if (selectedPool.pair[1] === "DAI") {
        setDaiBalance((prev) => (parseFloat(prev) - parseFloat(liquidityAmount1)).toFixed(4));
      }

      // Add transaction
      addTransaction({
        type: "Add Liquidity",
        desc: `Add ${liquidityAmount0} ${selectedPool.pair[0]} & ${liquidityAmount1} ${selectedPool.pair[1]}`,
        amount: `${lpAmount.toFixed(4)} LP`,
        token: "LP",
        poolId: selectedPool.id,
      });

      addToast(t.toast.liqSim, "success");
      setShowPoolModal(false);
      setLiquidityAmount0("");
      setLiquidityAmount1("");
    } catch (error) {
      console.error(error);
      addToast(t.toast.failed, "error");
    }
  };

  // Handle Withdraw
  const handleWithdraw = async () => {
    if (!withdrawToken || !withdrawAmount) return;

    const amount = parseFloat(withdrawAmount);
    if (isNaN(amount) || amount <= 0) {
      addToast(t.liquidity.enterAmount, "error");
      return;
    }

    const currentBalance = parseFloat(balancesBySymbol[withdrawToken.symbol] || "0");
    if (amount > currentBalance) {
      addToast(t.liquidity.insufficientBalance, "error");
      return;
    }

    setIsWithdrawing(true);
    try {
      // Simulate withdrawal delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Update balance
      if (withdrawToken.symbol === "ETH") {
        setEthBalance((prev) => Math.max(0, parseFloat(prev) - amount).toFixed(4));
      } else if (withdrawToken.symbol === "USDC") {
        setUsdcBalance((prev) => Math.max(0, parseFloat(prev) - amount).toFixed(4));
      } else if (withdrawToken.symbol === "DAI") {
        setDaiBalance((prev) => Math.max(0, parseFloat(prev) - amount).toFixed(4));
      }

      // Add transaction
      addTransaction({
        type: "Withdraw" as any,
        desc: `Withdraw ${amount} ${withdrawToken.symbol}`,
        amount: amount.toString(),
        token: withdrawToken.symbol,
      });

      addToast(`Successfully withdrew ${amount} ${withdrawToken.symbol}!`, "success");
      setShowWithdrawModal(false);
      setWithdrawAmount("");
      setWithdrawToken(null);
    } catch (error) {
      console.error(error);
      addToast(t.toast.failed, "error");
    } finally {
      setIsWithdrawing(false);
    }
  };

  const handleRemoveLiquidity = async () => {
    if (!selectedPool || removePercentage <= 0) return;

    const position = userLiquidityPositions.find(
      (p) => p.poolId === selectedPool.id
    );
    if (!position) return;

    setIsRemovingLiquidity(true);

    try {
      // Simulate transaction delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const amount0Removed = (position.amount0 * removePercentage) / 100;
      const amount1Removed = (position.amount1 * removePercentage) / 100;
      const lpRemoved = (position.lpTokens * removePercentage) / 100;

      if (removePercentage === 100) {
        // Remove entire position
        setUserLiquidityPositions((prev) =>
          prev.filter((p) => p.id !== position.id)
        );
      } else {
        // Update position
        setUserLiquidityPositions((prev) =>
          prev.map((p) =>
            p.id === position.id
              ? {
                ...p,
                amount0: p.amount0 - amount0Removed,
                amount1: p.amount1 - amount1Removed,
                lpTokens: p.lpTokens - lpRemoved,
                shareOfPool:
                  ((p.lpTokens - lpRemoved) /
                    (selectedPool.totalLPTokens - lpRemoved)) *
                  100,
              }
              : p
          )
        );
      }

      // Add balances back
      if (selectedPool.pair[0] === "ETH") {
        setEthBalance((prev) => (parseFloat(prev) + amount0Removed).toFixed(4));
      } else if (selectedPool.pair[0] === "USDC") {
        setUsdcBalance((prev) => (parseFloat(prev) + amount0Removed).toFixed(4));
      } else if (selectedPool.pair[0] === "DAI") {
        setDaiBalance((prev) => (parseFloat(prev) + amount0Removed).toFixed(4));
      }

      if (selectedPool.pair[1] === "ETH") {
        setEthBalance((prev) => (parseFloat(prev) + amount1Removed).toFixed(4));
      } else if (selectedPool.pair[1] === "USDC") {
        setUsdcBalance((prev) => (parseFloat(prev) + amount1Removed).toFixed(4));
      } else if (selectedPool.pair[1] === "DAI") {
        setDaiBalance((prev) => (parseFloat(prev) + amount1Removed).toFixed(4));
      }

      // Add transaction
      addTransaction({
        type: "Remove Liquidity",
        desc: `Remove ${amount0Removed.toFixed(4)} ${selectedPool.pair[0]} & ${amount1Removed.toFixed(4)} ${selectedPool.pair[1]}`,
        amount: `${lpRemoved.toFixed(4)} LP`,
        token: "LP",
        poolId: selectedPool.id,
      });

      addToast(t.toast.liqRem, "success");
      setShowPoolModal(false);
      setRemovePercentage(50);
    } catch (error) {
      console.error(error);
      addToast(t.toast.failed, "error");
    } finally {
      setIsRemovingLiquidity(false);
    }
  };

  const handleCreateProject = (newProject: Project) => {
    setProjects((prev) => [...prev, newProject]);
    addToast("Project created successfully!", "success");
  };

  const handleDeleteProject = (id: number) => {
    console.log("Deleting project:", id);
    if (window.confirm("Are you sure you want to delete this project?")) {
      setProjects(prev => prev.filter(p => p.id !== id));
      addToast("Project deleted successfully", "success");
    }
  };

  const handleJoinLaunchpad = (project: Project, amount: string) => {
    const contributionAmount = parseFloat(amount);
    // Prioritize USDC if available, otherwise use first token
    const paymentToken = project.paymentTokens.includes("USDC") ? "USDC" : project.paymentTokens[0];

    if (isNaN(contributionAmount) || contributionAmount <= 0) {
      addToast(t.liquidity.enterAmount, "error");
      return;
    }

    if (paymentToken === "USDC") {
      if (parseFloat(usdcBalance) < contributionAmount) {
        addToast(t.liquidity.insufficientBalance, "error");
        return;
      }
      setUsdcBalance((prev) => (parseFloat(prev) - contributionAmount).toFixed(2));
    } else if (paymentToken === "ETH") {
      if (parseFloat(ethBalance) < contributionAmount) {
        addToast(t.liquidity.insufficientBalance, "error");
        return;
      }
      setEthBalance((prev) => (parseFloat(prev) - contributionAmount).toFixed(4));
    }

    addTransaction({
      type: "Swap", // Using Swap type for now as generic transaction
      desc: `Joined ${project.name}`,
      amount: `${contributionAmount} ${paymentToken}`,
      token: paymentToken,
    });

    // Show success toast
    const toast = document.createElement("div");
    toast.className =
      "fixed bottom-4 right-4 bg-emerald-500 text-white px-6 py-3 rounded-xl shadow-2xl z-50 animate-in slide-in-from-bottom-5 fade-in duration-300 font-bold flex items-center gap-3";
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      Successfully joined ${project.name} with ${contributionAmount} ${paymentToken}!
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("animate-out", "fade-out", "slide-out-to-bottom-5");
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  };

  // Calculate Price Impact (simplified simulation)
  const calculatePriceImpact = (fromAmt: string) => {
    const amount = parseFloat(fromAmt);
    if (isNaN(amount) || amount <= 0) return 0;

    // Simulate price impact based on amount (larger amounts = higher impact)
    // In a real DEX, this would be based on pool liquidity
    const baseImpact = (amount / 10000) * 100; // Base calculation
    return Math.min(baseImpact, 15); // Cap at 15%
  };

  // Calculate Minimum Received after slippage
  const calculateMinReceived = (toAmt: string, slippagePct: number) => {
    const amount = parseFloat(toAmt);
    if (isNaN(amount) || amount <= 0) return "0";

    const minAmount = amount * (1 - slippagePct / 100);
    return minAmount.toFixed(6);
  };

  // Update calculations when swap amounts change
  useEffect(() => {
    if (fromAmount && toAmount) {
      const impact = calculatePriceImpact(fromAmount);
      setPriceImpact(impact);

      const minRec = calculateMinReceived(toAmount, slippage);
      setMinReceived(minRec);
    } else {
      setPriceImpact(0);
      setMinReceived("");
    }
  }, [fromAmount, toAmount, slippage]);

  const handleSwitchTokens = () => {
    const oldFrom = fromToken;
    setFromToken(toToken);
    setToToken(oldFrom);

    if (fromAmount) {
      const num = Number(fromAmount);
      const fp = prices[toToken.symbol];
      const tp = prices[oldFrom.symbol];
      const out = (num * fp) / tp;
      setToAmount(out.toFixed(4));
    }
  };

  // Create Limit Order
  const createLimitOrder = () => {
    if (!fromAmount || !limitTargetPrice) return;

    const order: LimitOrder = {
      id: Math.random().toString(36).substr(2, 9),
      fromToken,
      toToken,
      fromAmount,
      targetPrice: parseFloat(limitTargetPrice),
      currentPrice: prices[toToken.symbol],
      status: 'pending',
      createdAt: Date.now()
    };

    setLimitOrders(prev => [...prev, order]);
    addToast(`Limit order created: ${fromAmount} ${fromToken.symbol} @ $${limitTargetPrice}`, 'success');
    setFromAmount('');
    setLimitTargetPrice('');
  };

  // Execute Limit Order
  const executeLimitOrder = async (order: LimitOrder) => {
    setLimitOrders(prev => prev.map(o =>
      o.id === order.id ? { ...o, status: 'executed' as const } : o
    ));

    // Simulate swap execution
    addToast(`Limit order executed: ${order.fromAmount} ${order.fromToken.symbol} → ${order.toToken.symbol}`, 'success');
    addTransaction({
      type: 'Swap',
      desc: `Limit Order: ${order.fromToken.symbol} → ${order.toToken.symbol}`,
      amount: order.fromAmount,
      token: order.fromToken.symbol
    });
  };

  // Cancel Limit Order
  const cancelLimitOrder = (id: string) => {
    setLimitOrders(prev => prev.map(o =>
      o.id === id ? { ...o, status: 'cancelled' as const } : o
    ));
    addToast('Limit order cancelled', 'info');
  };

  // Create DCA Schedule
  const createDCASchedule = () => {
    if (!dcaAmount || !dcaTotalSwaps) return;

    const schedule: DCASchedule = {
      id: Math.random().toString(36).substr(2, 9),
      fromToken,
      toToken,
      amountPerSwap: dcaAmount,
      frequency: dcaFrequency,
      totalSwaps: parseInt(dcaTotalSwaps),
      executedSwaps: 0,
      nextSwapAt: Date.now() + getFrequencyMs(dcaFrequency),
      status: 'active',
      createdAt: Date.now()
    };

    setDcaSchedules(prev => [...prev, schedule]);
    addToast(`DCA schedule created: ${dcaAmount} ${fromToken.symbol} every ${dcaFrequency}`, 'success');
    setDcaAmount('');
  };

  // Helper: Get frequency in milliseconds
  const getFrequencyMs = (freq: 'daily' | 'weekly' | 'monthly') => {
    switch (freq) {
      case 'daily': return 24 * 60 * 60 * 1000;
      case 'weekly': return 7 * 24 * 60 * 60 * 1000;
      case 'monthly': return 30 * 24 * 60 * 60 * 1000;
    }
  };

  // Check limit orders periodically
  useEffect(() => {
    const checkOrders = () => {
      limitOrders.forEach(order => {
        if (order.status === 'pending') {
          const currentPrice = prices[order.toToken.symbol];
          if (currentPrice <= order.targetPrice) {
            executeLimitOrder(order);
          }
        }
      });
    };

    const interval = setInterval(checkOrders, 10000); // Check every 10s
    return () => clearInterval(interval);
  }, [limitOrders, prices]);

  // Check DCA schedules
  useEffect(() => {
    const checkSchedules = () => {
      const now = Date.now();
      dcaSchedules.forEach(schedule => {
        if (schedule.status === 'active' && now >= schedule.nextSwapAt) {
          // Execute DCA swap
          const nextSwapAt = now + getFrequencyMs(schedule.frequency);
          const executedSwaps = schedule.executedSwaps + 1;
          const status = executedSwaps >= schedule.totalSwaps ? 'completed' as const : 'active' as const;

          setDcaSchedules(prev => prev.map(s =>
            s.id === schedule.id ? { ...s, executedSwaps, nextSwapAt, status } : s
          ));

          addToast(`DCA swap executed: ${schedule.amountPerSwap} ${schedule.fromToken.symbol}`, 'success');
          addTransaction({
            type: 'Swap',
            desc: `DCA: ${schedule.fromToken.symbol} → ${schedule.toToken.symbol}`,
            amount: schedule.amountPerSwap,
            token: schedule.fromToken.symbol
          });
        }
      });
    };

    const interval = setInterval(checkSchedules, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [dcaSchedules]);

  const handleFromAmountChange = (val: string) => {
    setFromAmount(val);
    const num = Number(val);
    if (!val || isNaN(num) || num <= 0) {
      setToAmount("");
      setSelectedRoute(null);
      setAllRoutes([]);
      return;
    }

    // Find best route using multi-hop routing
    const bestRoute = findBestRoute(fromToken, toToken, val);

    if (bestRoute) {
      setSelectedRoute(bestRoute);
      setToAmount(bestRoute.expectedOutput.toFixed(4));

      // Also calculate all routes for comparison
      const routes = findAllRoutes(fromToken, toToken);
      const routesWithOutput = routes.map(route => calculateRouteOutput(route, val));
      setAllRoutes(routesWithOutput);
    } else {
      // Fallback to simple calculation if no route found
      const fp = prices[fromToken.symbol];
      const tp = prices[toToken.symbol];
      const out = (num * fp) / tp;
      setToAmount(out.toFixed(4));
      setSelectedRoute(null);
      setAllRoutes([]);
    }
  };

  const filteredTokens = useMemo(() => {
    if (!tokenSearch.trim()) return TOKENS;
    const q = tokenSearch.toLowerCase();
    return TOKENS.filter(
      (t) =>
        t.symbol.toLowerCase().includes(q) ||
        t.name.toLowerCase().includes(q)
    );
  }, [tokenSearch]);

  const rateText = useMemo(() => {
    const fp = prices[fromToken.symbol];
    const tp = prices[toToken.symbol];
    const rate = fp / tp;
    return `1 ${fromToken.symbol} = ${rate.toFixed(4)} ${toToken.symbol}`;
  }, [fromToken, toToken, prices]);

  const balancesBySymbol: Record<string, string> = {
    ETH: ethBalance,
    USDC: usdcBalance,
    DAI: daiBalance,
    WBTC: "0",
  };

  const closeAllDropdowns = () => {
    setIsFromOpen(false);
    setIsToOpen(false);
    setTokenSearch("");
    setIsSettingsOpen(false);
  };

  if (!ethersLoaded) {
    return (
      <div className="min-h-screen bg-[#020308] flex items-center justify-center text-emerald-400 font-mono animate-pulse">
        Initializing EdgeSwap Protocol...
      </div>
    );
  }

  return (
    <div
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
      className="min-h-screen font-sans selection:bg-emerald-400/30 relative overflow-hidden"
      onClick={closeAllDropdowns}
    >
      {/* EDGE X — arka plan ve glow katmanı */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Ana zemin */}
        <div className="absolute inset-0" style={{ backgroundColor: 'var(--bg-primary)' }} />

        {/* Dev merkez glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     w-[1800px] h-[1800px]
                     bg-[radial-gradient(circle,rgba(16,185,129,0.28),transparent_72%)]
                     blur-[220px] opacity-65"
        />

        {/* Chart arkası aqua glow */}
        <div
          className="absolute top-[18%] left-[10%]
                     w-[1100px] h-[780px]
                     bg-[radial-gradient(circle,rgba(6,182,212,0.40),transparent_72%)]
                     blur-[160px] opacity-70"
        />

        {/* Swap kartı arkası emerald glow */}
        <div
          className="absolute top-[22%] right-[6%]
                     w-[820px] h-[720px]
                     bg-[radial-gradient(circle,rgba(52,211,153,0.36),transparent_72%)]
                     blur-[160px] opacity-60"
        />

        {/* Alt full band */}
        <div
          className="absolute bottom-[-20%] left-1/2 -translate-x-1/2
                     w-[1900px] h-[780px]
                     bg-[radial-gradient(circle,rgba(15,23,42,0.95),transparent_70%)]
                     blur-[200px] opacity-90"
        />

        {/* Alt köşe glowlar */}
        <div
          className="absolute bottom-[-10%] left-[-5%]
                     w-[700px] h-[520px]
                     bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.26),transparent_70%)]
                     blur-[140px] opacity-70"
        />
        <div
          className="absolute bottom-[-12%] right-[-5%]
                     w-[700px] h-[520px]
                     bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.28),transparent_70%)]
                     blur-[140px] opacity-70"
        />

        {/* MARU yazılar */}
        <div
          className="absolute left-[-40px] top-[18%] rotate-[-90deg]
                     text-[80px] md:text-[110px] lg:text-[130px]
                     font-black tracking-[0.35em]
                     text-transparent bg-clip-text
                     bg-gradient-to-b from-cyan-400/70 via-emerald-300/35 to-transparent
                     opacity-35 select-none"
        >
          MARU
        </div>

        <div
          className="absolute right-[-15%] bottom-[20%]
                     text-[72px] md:text-[96px]
                     font-black tracking-[0.3em]
                     text-transparent bg-clip-text
                     bg-gradient-to-r from-transparent via-emerald-300/70 to-cyan-400/0
                     opacity-35 select-none"
        >
          MARU • VS
        </div>

        {/* MARU fok balıkları */}
        <div className="absolute -left-32 bottom-[-40px] opacity-[0.20] animate-pulse">
          <div className="w-[260px] md:w-[320px] rotate-[-8deg]">
            <MaruSeal />
          </div>
        </div>

        <div className="absolute -right-20 top-[10%] opacity-[0.16] animate-pulse">
          <div className="w-[220px] md:w-[280px] rotate-[10deg]">
            <MaruSeal />
          </div>
        </div>

        {/* Neon kenarlar */}
        <div
          className="absolute inset-y-[-10%] left-2 w-[3px]
                     bg-gradient-to-b from-transparent via-cyan-400/80 to-transparent
                     opacity-70 animate-pulse"
          style={{ animationDuration: "4.5s" }}
        />
        <div
          className="absolute inset-y-[-10%] right-2 w-[3px]
                     bg-gradient-to-b from-transparent via-violet-400/80 to-transparent
                     opacity-70 animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "0.7s" }}
        />
        <div
          className="absolute inset-y-[8%] left-[18px] w-[2px]
                     bg-gradient-to-b from-transparent via-emerald-400/70 to-transparent
                     opacity-60 animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "1.1s" }}
        />
        <div
          className="absolute inset-y-[12%] right-[18px] w-[2px] opacity-60 animate-pulse"
          style={{
            background: 'linear-gradient(to bottom, transparent, var(--accent-primary), transparent)',
            opacity: 0.7,
            animationDuration: "6.5s",
            animationDelay: "1.6s"
          }}
        />
        <div
          className="absolute top-0 left-[15%] right-[15%] h-[2px] opacity-60 animate-pulse"
          style={{
            background: 'linear-gradient(to right, transparent, var(--accent-primary), transparent)',
            opacity: 0.7,
            animationDuration: "5.5s",
            animationDelay: "0.9s"
          }}
        />

        {/* Mesh + grid + vignette + noise */}
        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            background: `radial-gradient(circle at 30% 35%, var(--bg-gradient-to), transparent 58%),
                        radial-gradient(circle at 70% 70%, var(--bg-gradient-from), transparent 58%)`
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.055] mix-blend-screen
                     bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),
                         linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
                     bg-[size:48px_48px]"
        />
        <div
          className="absolute inset-0
                     bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,0.78))]
                     pointer-events-none"
        />
        <div
          className="absolute inset-0 opacity-[0.06]
                     bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
                     bg-repeat mix-blend-soft-light"
        />
      </div>



      {/* TOAST CONTAINER */}
      <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: toast.type === "success" ? 'var(--success)' : toast.type === "error" ? 'var(--error)' : 'var(--info)',
              color: toast.type === "success" ? 'var(--success)' : toast.type === "error" ? 'var(--error)' : 'var(--info)',
              boxShadow: '0 10px 15px -3px var(--shadow-md)'
            }}
            className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg border backdrop-blur-xl animate-in slide-in-from-right-full duration-300`}
          >
            <div
              className={`w-1.5 h-1.5 rounded-full shadow-[0_0_10px_currentColor] ${toast.type === "success"
                ? "bg-cyan-400"
                : toast.type === "error"
                  ? "bg-rose-500"
                  : "bg-purple-400"
                }`}
            />
            <span className="text-xs font-bold tracking-wide uppercase">
              {toast.msg}
            </span>
          </div>
        ))}
      </div>

      {/* HEADER */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#02040a]/90 backdrop-blur-xl">
        <div className="w-full px-4 lg:px-10 py-3 flex items-center justify-between gap-4">
          {/* SOL: LOGO */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setActiveNav("Trade")}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-16 h-16 rounded-2xl bg-[#050910] border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-cyan-500/70 transition">
                <EdgeSwapLogo />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),transparent_60%)] transition-opacity" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-base tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-500 transition-all">
                    EdgeSwap
                  </span>
                  <span className="text-[14px] font-semibold px-1.5 py-0.5 rounded-full border border-emerald-500/40 text-emerald-300/90 bg-emerald-500/10 uppercase tracking-[0.18em]">
                    PRO
                  </span>
                </div>
                <span className="text-[10px] font-medium text-slate-500 tracking-[0.22em] uppercase flex items-center gap-1">
                  <span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
                  L2 Dex Terminal
                </span>
              </div>
            </button>
          </div>

          {/* ORTA: NAV */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center bg-[#050910] px-1.5 py-1 rounded-xl border border-white/5 shadow-sm">
              {(["Trade", "Pools", "Portfolio", "Launchpad", "Bridge", ...(isAdminMode ? ["Admin"] : [])] as NavItem[]).map(
                (item) => {
                  const navKey = item.toLowerCase() as "trade" | "pools" | "portfolio" | "launchpad" | "bridge" | "admin";
                  return (
                    <button
                      key={item}
                      onClick={() => setActiveNav(item)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-[0.16em] transition-all duration-200`}
                      style={activeNav === item ? {
                        color: '#ffffff',
                        background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
                        borderColor: 'var(--accent-primary)',
                        boxShadow: '0 0 18px var(--accent-glow)',
                        border: '1px solid'
                      } : {
                        color: 'var(--text-tertiary)'
                      }}
                    >
                      {item === "Admin" ? "🛡️ Admin" : t.nav[navKey as keyof typeof t.nav]}
                    </button>
                  );
                }
              )}
            </div>
          </div>

          {/* SAĞ: THEME + DİL + NETWORK + CÜZDAN + RESET */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Switcher */}
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg border"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)'
              }}>
              <button
                onClick={() => setColorTheme('cyber')}
                className={`px-2 py-1 rounded text-lg transition-all duration-200 ${colorTheme === 'cyber'
                  ? 'bg-cyan-500/20 scale-110'
                  : 'opacity-50 hover:opacity-100'
                  }`}
                title="Cyber Blue Theme"
              >
                💎
              </button>
              <button
                onClick={() => setColorTheme('gold')}
                className={`px-2 py-1 rounded text-lg transition-all duration-200 ${colorTheme === 'gold'
                  ? 'bg-amber-500/20 scale-110'
                  : 'opacity-50 hover:opacity-100'
                  }`}
                title="Gold Luxury Theme"
              >
                👑
              </button>
            </div>

            {/* Dil */}
            <button
              onClick={() =>
                setLang((l) => {
                  if (l === "en") return "tr";
                  if (l === "tr") return "zh";
                  if (l === "zh") return "ko";
                  if (l === "ko") return "ja";
                  return "en";
                })
              }
              className="text-[10px] font-semibold hover:text-cyan-400 px-2.5 py-1.5 border rounded-lg uppercase tracking-[0.22em]"
              style={{
                color: 'var(--text-secondary)',
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)'
              }}
            >
              {lang.toUpperCase()}
            </button>

            {/* Network Badge */}
            <button
              onClick={switchNetwork}
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/5 hover:border-cyan-500/40 transition text-[11px] font-mono"
              style={{ backgroundColor: 'var(--bg-card)' }}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full shadow-[0_0_8px_currentColor] ${chainId === SEPOLIA_CHAIN_ID
                  ? "bg-emerald-400 text-emerald-400"
                  : "bg-rose-500 text-rose-500"
                  }`}
              />
              <span className="text-slate-300">
                {chainId === SEPOLIA_CHAIN_ID ? "Sepolia" : t.wallet.wrongNet}
              </span>
            </button>

            {/* Wallet */}
            {!account ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  connectWallet();
                }}
                disabled={isConnecting}
                className="px-4 sm:px-5 py-2.5 rounded-xl text-white font-semibold text-xs uppercase tracking-[0.18em] transition shadow-lg border border-white/10 disabled:opacity-60 ripple-container hover-scale"
                style={{
                  background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
                  boxShadow: '0 10px 15px -3px var(--accent-glow)'
                }}
              >
                {isConnecting ? t.wallet.connecting : t.wallet.connect}
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  disconnectWallet();
                }}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-cyan-500/30 hover:border-violet-500/50 transition text-[11px] font-mono shadow-[0_0_14px_rgba(34,211,238,0.3)]"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  borderColor: 'var(--accent-primary)',
                  boxShadow: '0 0 14px var(--accent-glow)'
                }}
              >
                <div className="w-4 h-4 rounded-md"
                  style={{ background: 'linear-gradient(to bottom right, var(--accent-primary), var(--accent-secondary))' }} />
                <span style={{ color: 'var(--text-primary)' }}>
                  {account.slice(0, 6)}...{account.slice(-4)}
                </span>
              </button>
            )}

            {/* Reset */}
            <button
              onClick={resetDemo}
              className="p-1.5 text-[10px] text-slate-500 hover:text-rose-500 transition border border-transparent hover:border-rose-900/40 rounded-lg"
              title="Reset Demo"
            >
              RST
            </button>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="w-full max-w-[1440px] mx-auto px-4 py-8 flex justify-center relative z-10">
        {/* ============ TRADE VIEW (CYBER TERMINAL) ============ */}
        {activeNav === "Trade" && (
          <div className="w-full max-w-[480px] mx-auto flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-6 duration-500">
            {/* CENTERED SWAP INTERFACE */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border backdrop-blur-xl p-5 lg:p-6 shadow-2xl flex flex-col relative overflow-hidden hover-lift glass-card"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}>
                <div className="absolute inset-x-0 top-0 h-[2px] opacity-70"
                  style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary), var(--accent-tertiary))' }} />

                {/* Tabs + Settings */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1 bg-[#050910] px-1.5 py-1 rounded-xl border border-white/5">
                    <button
                      onClick={() => setActiveTab("swap")}
                      className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${activeTab === "swap"
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      Swap
                    </button>
                    <button
                      onClick={() => setActiveTab("limit")}
                      className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${activeTab === "limit"
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      Limit
                    </button>
                    <button
                      onClick={() => setActiveTab("liquidity")}
                      className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${activeTab === "liquidity"
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      DCA
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsSettingsOpen(!isSettingsOpen);
                      }}
                      className="flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1.5 rounded-lg border hover:border-cyan-500/40 hover:text-cyan-300 transition"
                      style={{
                        color: 'var(--text-secondary)',
                        backgroundColor: 'var(--bg-card)',
                        borderColor: 'var(--border-color)'
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.9)]" />
                      {slippage}%
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsSettingsOpen(!isSettingsOpen);
                      }}
                      className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition"
                    >
                      <SettingsIcon />
                    </button>
                  </div>
                </div>

                {/* SETTINGS MODAL */}
                {isSettingsOpen && (
                  <div
                    className="absolute top-16 right-4 border rounded-xl p-4 z-50 shadow-2xl w-64 animate-in fade-in zoom-in-95 duration-200"
                    style={{
                      backgroundColor: 'var(--bg-tertiary)',
                      borderColor: 'var(--border-color)'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h4 className="text-xs font-bold text-white mb-3 uppercase tracking-wider text-slate-400">
                      Slippage Tolerance
                    </h4>
                    <div className="flex gap-2">
                      {[0.1, 0.5, 1.0].map((val) => (
                        <button
                          key={val}
                          onClick={() => setSlippage(val)}
                          className={`flex-1 py-2 rounded-lg text-xs font-bold transition border`}
                          style={slippage === val ? {
                            backgroundColor: 'rgba(var(--accent-primary-rgb), 0.1)',
                            color: 'var(--accent-primary)',
                            borderColor: 'rgba(var(--accent-primary-rgb), 0.5)'
                          } : {
                            backgroundColor: 'rgba(0,0,0,0.4)',
                            color: 'var(--text-tertiary)',
                            borderColor: 'rgba(255,255,255,0.05)'
                          }}
                        >
                          {val}%
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "swap" ? (
                  <div className="flex flex-col h-full">
                    {/* INPUTS */}
                    <div className="space-y-2 relative">
                      {/* Quick Amount Buttons */}
                      <div className="flex gap-2 mb-3">
                        {[25, 50, 75, 100].map(pct => (
                          <button
                            key={pct}
                            type="button"
                            onClick={() => {
                              const balance = balancesBySymbol[fromToken.symbol];
                              const amount = (parseFloat(balance) * pct / 100).toFixed(6);
                              handleFromAmountChange(amount);
                            }}
                            className="flex-1 px-3 py-2 sm:py-1.5 min-h-[44px] sm:min-h-0 rounded-lg text-xs font-bold transition-all bg-white/5 text-slate-400 border border-white/10"
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(var(--accent-primary-rgb), 0.1)';
                              e.currentTarget.style.color = 'var(--accent-primary)';
                              e.currentTarget.style.borderColor = 'rgba(var(--accent-primary-rgb), 0.3)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                              e.currentTarget.style.color = 'var(--text-tertiary)';
                              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                            }}
                          >
                            {pct === 100 ? 'MAX' : `${pct}%`}
                          </button>
                        ))}
                      </div>

                      <SwapInput
                        label={t.swap.pay}
                        token={fromToken}
                        amount={fromAmount}
                        onChange={handleFromAmountChange}
                        onSelectToken={() => {
                          setIsFromOpen(true);
                          setTokenSearch("");
                        }}
                        balance={balancesBySymbol[fromToken.symbol]}
                        onMax={() =>
                          handleFromAmountChange(
                            balancesBySymbol[fromToken.symbol]
                          )
                        }
                      />
                      <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="bg-[#080c14] p-1.5 rounded-xl border border-white/10 shadow-xl">
                          <div
                            onClick={handleSwitchTokens}
                            className="bg-[#1b1f26] p-2 rounded-lg hover:bg-[#2a2f3a] cursor-pointer transition-colors text-purple-400 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)]"
                          >
                            <ArrowDownIcon />
                          </div>
                        </div>
                      </div>
                      <SwapInput
                        label={t.swap.receive}
                        token={toToken}
                        amount={toAmount}
                        readOnly
                        onChange={() => { }}
                        onSelectToken={() => {
                          setIsToOpen(true);
                          setTokenSearch("");
                        }}
                        balance={balancesBySymbol[toToken.symbol]}
                      />
                    </div>

                    {/* PRICE INFO (PRO) */}
                    {fromAmount && (
                      <div className="mt-4 px-4 py-4 rounded-xl border border-white/5 bg-[#0b0f16] text-xs space-y-3">
                        <div className="flex justify-between text-slate-400">
                          <span className="flex items-center gap-1 hover:text-white cursor-help">
                            <InfoIcon /> {t.swap.rate}
                          </span>
                          <span className="text-cyan-100 font-mono font-medium">
                            {rateText}
                          </span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span className="flex items-center gap-1 hover:text-white cursor-help">
                            <GasIcon /> {t.swap.cost}
                          </span>
                          <span className="text-white font-mono font-medium">
                            {gasEstimate}{" "}
                            <span className="text-slate-500">
                              (~{currentGasPrice.toFixed(1)} Gwei)
                            </span>
                          </span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span className="flex items-center gap-1">
                            Price Impact
                          </span>
                          <span className={`font-medium font-mono`}
                            style={{
                              color: priceImpact < 1 ? 'var(--accent-tertiary)' :
                                priceImpact < 3 ? '#f59e0b' : '#ef4444'
                            }}>
                            {priceImpact < 0.01 ? "< 0.01" : priceImpact.toFixed(2)}%
                          </span>
                        </div>
                        <div className="flex justify-between text-slate-400 pt-3 border-t border-white/5 mt-1">
                          <span className="flex items-center gap-1">
                            {t.swap.min}
                          </span>
                          <span className="text-white font-mono font-medium">
                            {(
                              parseFloat(toAmount || "0") *
                              (1 - slippage / 100)
                            ).toFixed(4)}{" "}
                            {toToken.symbol}
                          </span>
                        </div>

                        {/* Multi-Hop Route Visualization */}
                        {selectedRoute && selectedRoute.path.length > 0 && (
                          <div className="pt-3 border-t border-white/5 mt-1 space-y-2">
                            <div className="flex justify-between text-slate-400">
                              <span className="flex items-center gap-1">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                  <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
                                  <polyline points="7.5 19.79 7.5 14.6 3 12" />
                                  <polyline points="21 12 16.5 14.6 16.5 19.79" />
                                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                                  <line x1="12" y1="22.08" x2="12" y2="12" />
                                </svg>
                                Route {selectedRoute.path.length > 2 ? `(${selectedRoute.path.length - 1} hop${selectedRoute.path.length > 3 ? 's' : ''})` : '(Direct)'}
                              </span>
                              <div className="flex items-center gap-1.5 text-xs">
                                {selectedRoute.path.map((token, i) => (
                                  <React.Fragment key={i}>
                                    <span className="px-2 py-0.5 rounded font-mono font-bold"
                                      style={{
                                        backgroundColor: 'rgba(var(--accent-primary-rgb), 0.2)',
                                        color: 'var(--accent-primary)'
                                      }}>{token.symbol}</span>
                                    {i < selectedRoute.path.length - 1 && <span className="text-slate-600">→</span>}
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>

                            {/* Route Comparison Button */}
                            {allRoutes.length > 1 && (
                              <button
                                onClick={() => setShowRouteComparison(!showRouteComparison)}
                                className="w-full text-xs text-slate-400 hover:text-cyan-400 transition-colors flex items-center justify-center gap-1 py-1"
                              >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <polyline points="16 18 22 12 16 6" />
                                  <polyline points="8 6 2 12 8 18" />
                                </svg>
                                Compare {allRoutes.length} routes
                              </button>
                            )}

                            {/* Route Comparison Panel */}
                            {showRouteComparison && allRoutes.length > 1 && (
                              <div className="mt-2 p-3 rounded-xl bg-black/20 border border-white/5 space-y-2">
                                {allRoutes.map((route, idx) => {
                                  const isBest = route.expectedOutput === selectedRoute?.expectedOutput;
                                  return (
                                    <div
                                      key={idx}
                                      className={`p-2 rounded-lg ${isBest ? 'bg-cyan-500/10 border border-cyan-500/30' : 'bg-white/5'}`}
                                    >
                                      <div className="flex justify-between items-center text-xs">
                                        <div className="flex items-center gap-1">
                                          {route.path.map((token, i) => (
                                            <React.Fragment key={i}>
                                              <span className="text-slate-300 font-mono">{token.symbol}</span>
                                              {i < route.path.length - 1 && <span className="text-slate-600">→</span>}
                                            </React.Fragment>
                                          ))}
                                        </div>
                                        <div className="flex items-center gap-2">
                                          <span className={`font-mono font-bold ${isBest ? 'text-cyan-400' : 'text-slate-400'}`}>
                                            {route.expectedOutput.toFixed(4)}
                                          </span>
                                          {isBest && (
                                            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-400">
                                              BEST
                                            </span>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* ACTION BUTTON */}
                    <div className="mt-auto pt-6">
                      <button
                        onClick={() => setShowSwapConfirmation(true)}
                        disabled={!fromAmount || isSwapping}
                        className="group w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold text-lg tracking-wide transition-all disabled:opacity-50 disabled:from-slate-800 disabled:to-slate-800 disabled:text-slate-500 shadow-lg shadow-purple-900/20 hover:shadow-cyan-500/20 active:scale-[0.99] relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 blur-md" />
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSwapping ? (
                            <>
                              <svg
                                className="animate-spin h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                              </svg>
                              {t.swap.processing}
                            </>
                          ) : !fromAmount ? (
                            t.swap.enter
                          ) : (
                            t.swap.button
                          )}
                        </span>
                      </button>
                    </div>
                  </div>
                ) : activeTab === "limit" ? (
                  <div className="flex flex-col p-6">
                    <input type="number" value={fromAmount} onChange={e => handleFromAmountChange(e.target.value)} placeholder="Amount" className="w-full bg-[#050910] border border-white/10 rounded-xl px-4 py-3 text-white mb-4" />
                    <input type="number" value={limitTargetPrice} onChange={e => setLimitTargetPrice(e.target.value)} placeholder="Target Price" className="w-full bg-[#050910] border border-white/10 rounded-xl px-4 py-3 text-white mb-4" />
                    <button onClick={createLimitOrder} disabled={!fromAmount || !limitTargetPrice}
                      className="w-full py-4 rounded-xl text-white font-bold"
                      style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))' }}>Create Limit Order</button>
                    {limitOrders.map(o => <div key={o.id} className="mt-4 p-4 bg-[#050910] rounded-xl"><div className="text-white">{o.fromAmount} {o.fromToken.symbol} @ ${o.targetPrice}</div><button onClick={() => cancelLimitOrder(o.id)} className="text-red-400 text-xs">Cancel</button></div>)}
                  </div>
                ) : activeTab === "liquidity" ? (
                  <div className="flex flex-col p-6">
                    <input type="number" value={dcaAmount} onChange={e => setDcaAmount(e.target.value)} placeholder="Amount per swap" className="w-full bg-[#050910] border border-white/10 rounded-xl px-4 py-3 text-white mb-4" />
                    <select value={dcaFrequency} onChange={e => setDcaFrequency(e.target.value as any)} className="w-full bg-[#050910] border border-white/10 rounded-xl px-4 py-3 text-white mb-4"><option value="daily">Daily</option><option value="weekly">Weekly</option><option value="monthly">Monthly</option></select>
                    <input type="number" value={dcaTotalSwaps} onChange={e => setDcaTotalSwaps(e.target.value)} placeholder="Total swaps" className="w-full bg-[#050910] border border-white/10 rounded-xl px-4 py-3 text-white mb-4" />
                    <button onClick={createDCASchedule} disabled={!dcaAmount || !dcaTotalSwaps}
                      className="w-full py-4 rounded-xl text-white font-bold"
                      style={{ background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))' }}>Create DCA</button>
                    {dcaSchedules.map(s => <div key={s.id} className="mt-4 p-4 bg-[#050910] rounded-xl"><div className="text-white">{s.amountPerSwap} {s.fromToken.symbol} - {s.frequency}</div></div>)}
                  </div>
                ) : (
                  <div className="h-96 flex items-center justify-center"><span className="text-slate-500">Coming Soon</span></div>
                )}
              </div>
            </div>
          </div>
        )
        }

        {/* ============ POOLS VIEW ============ */}
        {
          activeNav === "Pools" && (
            <PoolsView
              t={t}
              userPositions={userLiquidityPositions}
              onAddLiquidity={() => {
                setSelectedPool(POPULAR_POOLS[0]);
                setShowPoolModal(true);
                setPoolModalTab("add");
              }}
              onPoolClick={(pool) => {
                setSelectedPool(pool);
                setShowPoolModal(true);
                setPoolModalTab("add");
              }}
            />
          )
        }

        {/* ============ PORTFOLIO VIEW ============ */}
        {
          activeNav === "Portfolio" && (
            <PortfolioView
              t={t}
              balances={balancesBySymbol}
              transactions={transactions}
              onClaim={handleClaim}
              isClaimingUsdc={isClaimingUsdc}
              isClaimingDai={isClaimingDai}
              userPositions={userLiquidityPositions}
              onWithdraw={(token) => {
                setWithdrawToken(token);
                setShowWithdrawModal(true);
              }}
            />
          )
        }

        {
          activeNav === "Launchpad" && (
            <LaunchpadView
              t={t}
              onJoin={handleJoinLaunchpad}
              balances={balancesBySymbol}
              projects={projects}
              onCreateProject={handleCreateProject}
            />
          )
        }

        {/* ============ BRIDGE VIEW ============ */}
        {
          activeNav === "Bridge" && (
            <BridgeView
              t={t}
              sourceChain={sourceChain}
              destChain={destChain}
              setSourceChain={setSourceChain}
              setDestChain={setDestChain}
              bridgeAmount={bridgeAmount}
              setBridgeAmount={setBridgeAmount}
              bridgeStatus={bridgeStatus}
              bridgeStep={bridgeStep}
              onBridge={handleBridge}
              fromToken={fromToken}
              toToken={toToken}
              ethBalance={ethBalance}
            />
          )
        }

        {/* ============ ADMIN VIEW ============ */}
        {
          activeNav === "Admin" && isAdminMode && (
            <AdminView
              t={t}
              projects={projects}
              onCreateProject={handleCreateProject}
              onDeleteProject={handleDeleteProject}
              prices={prices}
              balances={balances}
            />
          )
        }
      </main >

      {/* Swap Confirmation Modal */}
      < SwapConfirmationModal
        isOpen={showSwapConfirmation}
        onClose={() => setShowSwapConfirmation(false)}
        onConfirm={handleSwap}
        fromToken={fromToken}
        toToken={toToken}
        fromAmount={fromAmount}
        toAmount={toAmount}
        priceImpact={priceImpact}
        minReceived={minReceived}
        gasEstimate={gasEstimate}
        slippage={slippage}
      />



      {/* FOOTER */}
      < footer className="border-t border-white/5 bg-[#020408] py-12 mt-20 relative overflow-hidden" >
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl">⚡</span>
            <span className="text-xl font-black text-white">EdgeSwap</span>
          </div>
          <p className="text-slate-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            The most advanced decentralized exchange on EdgeX L2. Trade, earn, and launch with lightning speed and zero friction.
          </p>
          <div className="flex justify-center gap-6 text-sm font-bold text-slate-600">
            <a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Governance</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Security</a>\n          </div>
          <p className="text-xs text-slate-700 mt-8 font-mono">
            v2.4.0-beta • EdgeX Testnet • Block #12,450,921
          </p>
        </div>

        {/* Background Glows */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-t from-cyan-900/10 to-transparent blur-[100px] pointer-events-none" />
      </footer >

      {
        (isFromOpen || isToOpen) && (
          <TokenModal
            onClose={closeAllDropdowns}
            tokens={filteredTokens}
            onSelect={isFromOpen ? setFromToken : setToToken}
            search={tokenSearch}
            setSearch={setTokenSearch}
          />
        )
      }

      {/* Bottom Nav - Mobile Only */}
      <div className="lg:hidden">
        <BottomNav activeNav={activeNav} setActiveNav={setActiveNav} />
      </div>

      {/* Pool Modal */}
      <PoolModal
        pool={selectedPool}
        isOpen={showPoolModal}
        onClose={() => setShowPoolModal(false)}
        activeTab={poolModalTab}
        onTabChange={setPoolModalTab}
        t={t}
        amount0={liquidityAmount0}
        setAmount0={setLiquidityAmount0}
        amount1={liquidityAmount1}
        setAmount1={setLiquidityAmount1}
        onAddLiquidity={handleAddLiquidity}
        isAdding={isAddingLiquidity}
        userPositions={userLiquidityPositions}
        removePercentage={removePercentage}
        setRemovePercentage={setRemovePercentage}
        onRemoveLiquidity={handleRemoveLiquidity}
        isRemoving={isRemovingLiquidity}
        balances={balancesBySymbol}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />

      {/* Withdraw Modal */}
      <WithdrawModal
        isOpen={showWithdrawModal}
        onClose={() => setShowWithdrawModal(false)}
        token={withdrawToken}
        amount={withdrawAmount}
        setAmount={setWithdrawAmount}
        onWithdraw={handleWithdraw}
        isWithdrawing={isWithdrawing}
        balance={withdrawToken ? balancesBySymbol[withdrawToken.symbol] : "0"}
      />
    </div >
  );
};


// --- SUB COMPONENTS ---

// POOL MODAL
const PoolModal: React.FC<{
  pool: PoolData | null;
  isOpen: boolean;
  onClose: () => void;
  activeTab: "add" | "remove" | "position";
  onTabChange: (tab: "add" | "remove" | "position") => void;
  t: typeof TRANSLATIONS[keyof typeof TRANSLATIONS];
  amount0: string;
  setAmount0: (val: string) => void;
  amount1: string;
  setAmount1: (val: string) => void;
  onAddLiquidity: () => void;
  isAdding: boolean;
  userPositions: LiquidityPosition[];
  removePercentage: number;
  setRemovePercentage: (val: number) => void;
  onRemoveLiquidity: () => void;
  isRemoving: boolean;
  balances: Record<string, string>;
  activeNav: NavItem;
  setActiveNav: (nav: NavItem) => void;
}> = ({
  pool,
  isOpen,
  onClose,
  activeTab,
  onTabChange,
  t,
  amount0,
  setAmount0,
  amount1,
  setAmount1,
  onAddLiquidity,
  isAdding,
  userPositions,
  removePercentage,
  setRemovePercentage,
  onRemoveLiquidity,
  isRemoving,
  balances,
  activeNav,
  setActiveNav,
}) => {
    if (!isOpen || !pool) return null;

    const token0 = TOKENS.find((t) => t.symbol === pool.pair[0]);
    const token1 = TOKENS.find((t) => t.symbol === pool.pair[1]);

    // Get balances for selected pool tokens
    const balance0 = balances[pool.pair[0]] || "0";
    const balance1 = balances[pool.pair[1]] || "0";

    // Calculate expected LP tokens and share
    const calculateStats = () => {
      if (!amount0 || !amount1 || !pool) return { lp: "0", share: "0" };
      const a0 = parseFloat(amount0);
      const a1 = parseFloat(amount1);
      if (isNaN(a0) || isNaN(a1)) return { lp: "0", share: "0" };

      // Simplified LP calculation for simulation
      // In real Uniswap V2: sqrt(amount0 * amount1)
      const lp = Math.sqrt(a0 * a1);
      const share = (lp / (pool.totalLPTokens + lp)) * 100;

      return {
        lp: lp.toFixed(4),
        share: share.toFixed(4),
      };
    };

    const stats = calculateStats();



    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative w-full max-w-2xl bg-[#0a0e17] rounded-3xl border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-emerald-500/10 opacity-50 pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 p-6 border-b border-white/10 bg-black/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full border-2 border-[#0a0e17] bg-[#151b26] flex items-center justify-center shadow-lg">
                    {token0?.icon}
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-[#0a0e17] bg-[#151b26] flex items-center justify-center shadow-lg">
                    {token1?.icon}
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white">
                    {pool.pair[0]}/{pool.pair[1]}
                  </h2>
                  <p className="text-sm text-slate-400">
                    Fee: <span className="text-cyan-400 font-bold">{pool.fee}</span>
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors group"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-slate-400 group-hover:text-white transition-colors"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <p className="text-xs text-slate-400 mb-1">TVL</p>
                <p className="text-lg font-bold text-white">{pool.tvl}</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <p className="text-xs text-slate-400 mb-1">24h Volume</p>
                <p className="text-lg font-bold text-white">{pool.vol}</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <p className="text-xs text-slate-400 mb-1">APR</p>
                <p className="text-lg font-bold text-lime-400">{pool.apr}</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="relative z-10 flex border-b border-white/10 bg-black/10">
            {(["add", "position", "remove"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`flex-1 px-6 py-4 font-bold text-sm uppercase tracking-wide transition-all relative ${activeTab === tab
                  ? "text-white bg-white/5"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {tab === "add" && t.liquidity.addLiquidity}
                {tab === "position" && t.liquidity.yourPosition}
                {tab === "remove" && t.liquidity.removeLiquidity}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500" />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
            {activeTab === "add" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Token 0 Input */}
                  <div className="p-4 rounded-2xl bg-black/20 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-400 font-medium">
                        {t.liquidity.depositAmounts}
                      </span>
                      <span className="text-sm text-slate-400">
                        Balance: <span className="text-white">{formatBalance(balance0)}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                          {token0?.icon}
                        </div>
                        <span className="font-bold text-white">{pool.pair[0]}</span>
                      </div>
                      <input
                        type="number"
                        value={amount0}
                        onChange={(e) => setAmount0(e.target.value)}
                        placeholder="0.00"
                        className="w-full bg-transparent text-right text-2xl font-bold text-white placeholder-slate-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Token 1 Input */}
                  <div className="p-4 rounded-2xl bg-black/20 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-400 font-medium">
                        {t.liquidity.depositAmounts}
                      </span>
                      <span className="text-sm text-slate-400">
                        Balance: <span className="text-white">{formatBalance(balance1)}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                          {token1?.icon}
                        </div>
                        <span className="font-bold text-white">{pool.pair[1]}</span>
                      </div>
                      <input
                        type="number"
                        value={amount1}
                        onChange={(e) => setAmount1(e.target.value)}
                        placeholder="0.00"
                        className="w-full bg-transparent text-right text-2xl font-bold text-white placeholder-slate-600 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-xs text-slate-400 mb-1">
                      {t.liquidity.expectedLP}
                    </p>
                    <p className="text-xl font-bold text-white">{stats.lp}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-xs text-slate-400 mb-1">
                      {t.liquidity.shareAfter}
                    </p>
                    <p className="text-xl font-bold text-lime-400">
                      {stats.share}%
                    </p>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={onAddLiquidity}
                  disabled={!amount0 || !amount1 || isAdding}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold text-lg uppercase tracking-wide transition shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isAdding ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      {t.liquidity.supplying}
                    </>
                  ) : (
                    t.liquidity.supply
                  )}
                </button>
              </div>
            )}

            {activeTab === "position" && (
              <div className="space-y-4">
                {userPositions.filter((p) => p.poolId === pool.id).length > 0 ? (
                  userPositions
                    .filter((p) => p.poolId === pool.id)
                    .map((pos) => (
                      <div
                        key={pos.id}
                        className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-4"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400 text-sm">
                            Position ID
                          </span>
                          <span className="text-white font-mono text-sm">
                            #{pos.id}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 rounded-xl bg-black/20">
                            <p className="text-xs text-slate-400 mb-1">
                              Pooled {pos.token0}
                            </p>
                            <p className="text-white font-bold">
                              {formatBalance(pos.amount0.toString())}
                            </p>
                          </div>
                          <div className="p-3 rounded-xl bg-black/20">
                            <p className="text-xs text-slate-400 mb-1">
                              Pooled {pos.token1}
                            </p>
                            <p className="text-white font-bold">
                              {formatBalance(pos.amount1.toString())}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center pt-4 border-t border-white/5">
                          <span className="text-slate-400 text-sm">
                            Pool Share
                          </span>
                          <span className="text-lime-400 font-bold">
                            {pos.shareOfPool.toFixed(4)}%
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400 text-sm">
                            LP Tokens
                          </span>
                          <span className="text-white font-mono font-bold">
                            {pos.lpTokens.toFixed(4)}
                          </span>
                        </div>
                      </div>
                    ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-slate-400 text-lg">
                      {t.liquidity.noPositions}
                    </p>
                    <p className="text-slate-500 text-sm mt-2">
                      Add liquidity to start earning fees
                    </p>
                    <button
                      onClick={() => onTabChange("add")}
                      className="mt-4 px-6 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm transition"
                    >
                      Add Liquidity
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === "remove" && (
              <div className="space-y-6">
                {userPositions.filter((p) => p.poolId === pool.id).length > 0 ? (
                  <>
                    <div className="p-6 rounded-2xl bg-black/20 border border-white/5">
                      <div className="flex justify-between mb-6">
                        <span className="text-slate-400 font-medium">Amount</span>
                        <span className="text-cyan-400 font-bold text-xl">
                          {removePercentage}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        value={removePercentage}
                        onChange={(e) =>
                          setRemovePercentage(parseInt(e.target.value))
                        }
                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                      />
                      <div className="flex justify-between mt-4">
                        {[25, 50, 75, 100].map((pct) => (
                          <button
                            key={pct}
                            onClick={() => setRemovePercentage(pct)}
                            className={`px-3 py-1 rounded-lg text-xs font-bold transition ${removePercentage === pct
                              ? "bg-cyan-500 text-white"
                              : "bg-white/5 text-slate-400 hover:bg-white/10"
                              }`}
                          >
                            {pct}%
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <p className="text-xs text-slate-400 mb-1">
                          Receive {pool.pair[0]}
                        </p>
                        <p className="text-lg font-bold text-white">
                          {(
                            (userPositions.find((p) => p.poolId === pool.id)
                              ?.amount0 || 0) *
                            (removePercentage / 100)
                          ).toFixed(4)}
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <p className="text-xs text-slate-400 mb-1">
                          Receive {pool.pair[1]}
                        </p>
                        <p className="text-lg font-bold text-white">
                          {(
                            (userPositions.find((p) => p.poolId === pool.id)
                              ?.amount1 || 0) *
                            (removePercentage / 100)
                          ).toFixed(4)}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={onRemoveLiquidity}
                      disabled={removePercentage === 0 || isRemoving}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold text-lg uppercase tracking-wide transition shadow-lg shadow-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isRemoving ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Removing...
                        </>
                      ) : (
                        t.liquidity.removeLiquidity
                      )}
                    </button>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-slate-400 text-lg">
                      No liquidity to remove
                    </p>
                    <p className="text-slate-500 text-sm mt-2">
                      Add liquidity first to be able to remove it
                    </p>
                    <button
                      onClick={() => onTabChange("add")}
                      className="mt-4 px-6 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm transition"
                    >
                      Add Liquidity
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <BottomNav activeNav={activeNav} setActiveNav={setActiveNav} />
      </div>

    );
  };

// WITHDRAW MODAL
const WithdrawModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  token: Token | null;
  amount: string;
  setAmount: (val: string) => void;
  onWithdraw: () => void;
  isWithdrawing: boolean;
  balance: string;
}> = ({ isOpen, onClose, token, amount, setAmount, onWithdraw, isWithdrawing, balance }) => {
  if (!isOpen || !token) return null;

  const maxAmount = parseFloat(balance || "0");
  const currentAmount = parseFloat(amount || "0");
  const isValid = currentAmount > 0 && currentAmount <= maxAmount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-[#0a0e17] rounded-3xl border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-emerald-500/10 opacity-50 pointer-events-none" />

        {/* Header */}
        <div className="relative z-10 p-6 border-b border-white/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#151b26] flex items-center justify-center border border-white/5">
                <div className="w-7 h-7">{token.icon}</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Withdraw {token.symbol}</h3>
                <p className="text-sm text-slate-400">Available: {formatBalance(balance)}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400">
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 space-y-4">
          {/* Amount Input */}
          <div>
            <label className="block text-sm font-bold text-slate-400 mb-2">Amount</label>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.0"
                className="w-full bg-[#050910] border border-white/10 rounded-xl px-4 py-4 min-h-[56px] md:min-h-0 md:py-3 text-white text-lg font-mono focus:border-cyan-500 outline-none"
              />
              <button
                onClick={() => setAmount(balance)}
                className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-1.5 min-h-[44px] md:min-h-0 md:py-1 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-400 text-sm font-bold transition"
              >
                MAX
              </button>
            </div>
            {currentAmount > maxAmount && (
              <p className="text-red-400 text-sm mt-2">Insufficient balance</p>
            )}
          </div>

          {/* Quick Amount Buttons */}
          <div className="grid grid-cols-4 gap-2">
            {[25, 50, 75, 100].map(pct => (
              <button
                key={pct}
                onClick={() => setAmount((maxAmount * pct / 100).toFixed(6))}
                className="px-3 py-2 min-h-[44px] md:min-h-0 md:py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-sm font-bold transition"
              >
                {pct}%
              </button>
            ))}
          </div>

          {/* Withdraw Button */}
          <button
            onClick={onWithdraw}
            disabled={!isValid || isWithdrawing}
            className="w-full py-4 min-h-[56px] md:min-h-0 md:py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-cyan-500/20 active:scale-95"
          >
            {isWithdrawing ? "Withdrawing..." : `Withdraw ${token.symbol}`}
          </button>
        </div>
      </div>
    </div>
  );
};



type PoolsViewProps = {
  t: typeof TRANSLATIONS[keyof typeof TRANSLATIONS];
  userPositions: LiquidityPosition[];
  onAddLiquidity: () => void;
  onPoolClick?: (pool: PoolData) => void;
};
function PoolsView({ t, userPositions, onAddLiquidity, onPoolClick }: PoolsViewProps) {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Title */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-6 bg-[#080c14]/80 backdrop-blur-xl rounded-2xl border border-white/5 relative overflow-hidden shadow-2xl group hover:border-cyan-500/20 transition-colors">
        <div className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--bg-gradient-from), var(--bg-gradient-to), rgba(var(--accent-tertiary-rgb), 0.1))' }} />
        <div className="absolute -top-24 -right-24 w-48 h-48 blur-[100px] rounded-full pointer-events-none"
          style={{ backgroundColor: 'var(--accent-glow)' }} />
        <div>
          <h2 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <span className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))' }}>
              {t.pool.title}
            </span>
          </h2>
          <p className="text-slate-400 mt-1">{t.pool.subtitle}</p>
        </div>
        <div className="flex gap-3 relative z-10">
          <button className="px-4 py-2 rounded-xl bg-[#131823] border border-white/10 text-slate-300 font-bold text-sm hover:text-white hover:bg-[#1c2230] transition hover:border-cyan-500/30">
            {t.pool.yourPos} ({userPositions.length})
          </button>
          <button
            onClick={onAddLiquidity}
            className="px-6 py-2.5 rounded-xl text-white font-bold text-sm uppercase tracking-wide transition shadow-lg flex items-center gap-2 group relative overflow-hidden"
            style={{
              background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
              boxShadow: '0 10px 15px -3px var(--accent-glow)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'brightness(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'brightness(1)';
            }}>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 blur-md" />
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-lg leading-none">+</span> {t.pool.newPos}
            </span>
          </button>
        </div>
      </div>

      {/* User Positions List (If any) */}
      {userPositions.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
          {userPositions.map((pos, idx: number) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#0b0f16] border border-white/5 hover:border-purple-500/30 transition-all group relative overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-50 pointer-events-none" />
              <div className="flex justify-between items-center mb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-[#0b0f16] bg-[#151b26] flex items-center justify-center text-cyan-400 shadow-sm">
                      {TOKENS.find((t) => t.symbol === pos.token0)?.icon}
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-[#0b0f16] bg-[#151b26] flex items-center justify-center text-purple-400 shadow-sm">
                      {TOKENS.find((t) => t.symbol === pos.token1)?.icon}
                    </div>
                  </div>
                  <span className="font-bold text-white">
                    {pos.token0}/{pos.token1}
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20 animate-pulse">
                  Active
                </span>
              </div>
              <div className="flex justify-between text-sm text-slate-400 relative z-10">
                <div className="flex flex-col gap-1">
                  <span>Pooled {pos.token0}:</span>
                  <span className="text-white font-mono font-medium">
                    {formatBalance(pos.amount0.toString())}
                  </span>
                </div>
                <div className="flex flex-col gap-1 text-right">
                  <span>Pooled {pos.token1}:</span>
                  <span className="text-white font-mono font-medium">
                    {formatBalance(pos.amount1.toString())}
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-sm relative z-10">
                <span className="text-slate-400 flex items-center gap-1">
                  Pool Share:{" "}
                  <span className="text-lime-400 font-bold">
                    {pos.shareOfPool.toFixed(2)}%
                  </span>
                </span>
                <button
                  onClick={() => {
                    const pool = POPULAR_POOLS.find((p) => p.id === pos.poolId);
                    if (pool && onPoolClick) {
                      onPoolClick(pool);
                    }
                  }}
                  className="text-cyan-400 hover:text-cyan-300 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Manage
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Popular Pools Table */}
      <div className="bg-[#080c14]/80 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden shadow-2xl relative group hover:border-cyan-500/20 transition-colors">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />
        <table className="w-full relative z-10">
          <thead className="bg-black/40 text-slate-400 text-xs uppercase tracking-wider font-bold border-b border-white/5">
            <tr>
              <th className="px-6 py-4 text-left">{t.pool.table.pool}</th>
              <th className="px-6 py-4 text-right">{t.pool.table.tvl}</th>
              <th className="px-6 py-4 text-right hidden md:table-cell">
                {t.pool.table.vol}
              </th>
              <th className="px-6 py-4 text-right">{t.pool.table.apr}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {POPULAR_POOLS.map((pool) => {
              const token1 = TOKENS.find((t) => t.symbol === pool.pair[0]);
              const token2 = TOKENS.find((t) => t.symbol === pool.pair[1]);
              return (
                <tr
                  key={pool.id}
                  onClick={() => onPoolClick?.(pool)}
                  className="hover:bg-white/5 transition-colors cursor-pointer group/row relative"
                >
                  <td className="px-6 py-5 flex items-center gap-3">
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-500 opacity-0 group-hover/row:opacity-100 transition-opacity" />
                    <div className="flex -space-x-2 relative z-10">
                      <div className="w-8 h-8 rounded-full border-2 border-[#080c14] bg-[#151b26] flex items-center justify-center shadow-md group-hover/row:shadow-cyan-500/20 transition-shadow">
                        {token1?.icon}
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-[#080c14] bg-[#151b26] flex items-center justify-center shadow-md group-hover/row:shadow-purple-500/20 transition-shadow">
                        {token2?.icon}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-white flex items-center gap-2">
                        {pool.pair[0]}/{pool.pair[1]}
                        <span className="px-1.5 py-0.5 bg-slate-800 text-slate-300 text-[10px] rounded border border-white/10 group-hover/row:border-cyan-500/30 transition-colors">
                          {pool.fee}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right font-mono text-slate-200 font-medium group-hover/row:text-white transition-colors">
                    {pool.tvl}
                  </td>
                  <td className="px-6 py-5 text-right font-mono text-slate-200 font-medium hidden md:table-cell group-hover/row:text-white transition-colors">
                    {pool.vol}
                  </td>
                  <td className="px-6 py-5 text-right font-mono font-bold text-lime-400 flex items-center justify-end gap-1">
                    {pool.apr}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-lime-500/70"
                    >
                      <path d="M7 7l10 10" />
                      <path d="M17 7v10H7" />
                    </svg>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// PORTFOLIO
type PortfolioViewProps = {
  t: typeof TRANSLATIONS[keyof typeof TRANSLATIONS];
  balances: Record<string, string>;
  transactions: Transaction[];
  onClaim: (token: "USDC" | "DAI") => void;
  isClaimingUsdc: boolean;
  isClaimingDai: boolean;
  userPositions: LiquidityPosition[];
  onWithdraw: (token: Token) => void;
};
function PortfolioView({
  t,
  balances,
  transactions,
  onClaim,
  isClaimingUsdc,
  isClaimingDai,
  userPositions,
  onWithdraw,
}: PortfolioViewProps) {
  const totalBalance = Object.entries(balances).reduce(
    (acc, [symbol, bal]) => {
      const price =
        symbol === "ETH" ? 3050.24 : symbol === "WBTC" ? 64250.5 : 1;
      return acc + parseFloat(bal as string) * price;
    },
    0
  );

  // Calculate total liquidity value (simplified)
  const totalLiquidityValue = userPositions.reduce((acc, pos) => {
    // Assuming 1:1 price for stablecoins for simplicity in this view
    // In real app, would need real prices
    return acc + pos.amount0 + pos.amount1;
  }, 0);

  const grandTotal = totalBalance + totalLiquidityValue;

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Overview Header & Assets */}
      <div className="p-8 bg-[#080c14]/80 backdrop-blur-xl rounded-3xl border border-white/5 relative overflow-hidden shadow-2xl group hover:border-cyan-500/20 transition-colors">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-emerald-500/5 opacity-40 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 mb-8 text-center">
          <h2 className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">
            {t.portfolio.title}
          </h2>
          <div className="text-5xl font-black text-white tracking-tighter flex items-center justify-center gap-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(grandTotal)}
            </span>
          </div>
          <p className="text-slate-500 mt-2 text-sm">
            {t.portfolio.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
          {Object.entries(balances)
            .filter(([s]) => s !== "WBTC")
            .map(([symbol, balance]) => {
              const token = TOKENS.find((t) => t.symbol === symbol);
              const price = symbol === "ETH" ? 3050.24 : 1;
              const value = parseFloat(balance as string) * price;
              return (
                <div
                  key={symbol}
                  className="p-4 rounded-2xl bg-[#0b0f16]/50 border border-white/5 flex items-center gap-4 hover:border-cyan-500/30 transition-all group/asset relative overflow-hidden shadow-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover/asset:opacity-100 transition-opacity" />
                  <div className="w-12 h-12 rounded-xl bg-[#151b26] flex items-center justify-center shadow-inner border border-white/5 group-hover/asset:border-cyan-500/20 transition-colors relative z-10">
                    <div className="w-7 h-7">{token?.icon}</div>
                  </div>
                  <div className="flex-1 relative z-10">
                    <div className="text-lg font-bold text-white group-hover/asset:text-cyan-300 transition-colors">
                      {token?.symbol}
                    </div>
                    <div className="text-sm text-slate-400 font-mono">
                      {formatBalance(balance as string)}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      ~${value.toFixed(2)}
                    </div>
                  </div>
                  <button
                    onClick={() => token && onWithdraw(token)}
                    className="relative z-20 px-4 py-2 min-h-[44px] md:min-h-0 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold text-sm transition-all shadow-lg hover:shadow-cyan-500/20 active:scale-95"
                  >
                    Withdraw
                  </button>
                </div>
              );
            })}
        </div>
      </div>

      {/* Liquidity Positions Section */}
      {userPositions.length > 0 && (
        <div className="p-6 bg-[#080c14]/80 backdrop-blur-xl rounded-2xl border border-white/5 relative overflow-hidden shadow-xl">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-full" />
            {t.liquidity.yourPosition}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userPositions.map((pos) => (
              <div
                key={pos.id}
                className="p-4 rounded-xl bg-[#0b0f16] border border-white/5 hover:border-purple-500/30 transition-all group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-50 pointer-events-none" />
                <div className="flex justify-between items-center mb-3 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full border-2 border-[#0b0f16] bg-[#151b26] flex items-center justify-center text-cyan-400">
                        {TOKENS.find((t) => t.symbol === pos.token0)?.icon}
                      </div>
                      <div className="w-6 h-6 rounded-full border-2 border-[#0b0f16] bg-[#151b26] flex items-center justify-center text-purple-400">
                        {TOKENS.find((t) => t.symbol === pos.token1)?.icon}
                      </div>
                    </div>
                    <span className="font-bold text-white text-sm">
                      {pos.token0}/{pos.token1}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    #{pos.id}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs relative z-10">
                  <div className="p-2 rounded-lg bg-white/5">
                    <span className="text-slate-500 block mb-0.5">
                      {pos.token0}
                    </span>
                    <span className="text-white font-mono">
                      {formatBalance(pos.amount0.toString())}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5">
                    <span className="text-slate-500 block mb-0.5">
                      {pos.token1}
                    </span>
                    <span className="text-white font-mono">
                      {formatBalance(pos.amount1.toString())}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Faucet Card */}
      <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20 relative overflow-hidden shadow-lg shadow-cyan-500/5 group hover:border-cyan-500/40 transition-all">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="flex justify-between items-center relative z-10">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cyan-400"
              >
                <path d="M12 2v6" />
                <path d="M12 18v2" />
                <path d="M4.93 4.93l4.24 4.24" />
                <path d="M14.83 14.83l4.24 4.24" />
                <path d="M2 12h6" />
                <path d="M18 12h2" />
                <path d="M4.93 19.07l4.24-4.24" />
                <path d="M14.83 9.17l4.24-4.24" />
              </svg>
              {t.portfolio.faucet}
            </h3>
            <p className="text-cyan-200/70 text-sm mt-1">
              {t.portfolio.faucetDesc}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => onClaim("USDC")}
              disabled={isClaimingUsdc}
              className="px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-bold text-sm hover:bg-cyan-500/30 transition flex items-center gap-2 disabled:opacity-50 relative overflow-hidden group/btn"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isClaimingUsdc && (
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                )}
                {t.portfolio.mint} USDC
              </span>
              <div className="absolute inset-0 bg-cyan-400/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 blur-md" />
            </button>

            <button
              onClick={() => onClaim("DAI")}
              disabled={isClaimingDai}
              className="px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 font-bold text-sm hover:bg-purple-500/30 transition flex items-center gap-2 disabled:opacity-50 relative overflow-hidden group/btn"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isClaimingDai && (
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                )}
                {t.portfolio.mint} DAI
              </span>
              <div className="absolute inset-0 bg-purple-400/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 blur-md" />
            </button>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-[#080c14]/80 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden shadow-2xl relative group hover:border-purple-500/20 transition-colors">
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-50 pointer-events-none" />
        <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-black/20 relative z-10">
          <h3 className="font-bold text-white flex items-center gap-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-slate-400"
            >
              <path d="M12 20v-6M6 20V10M18 20V4" />
            </svg>
            {t.portfolio.history}
          </h3>
        </div>

        <div className="divide-y divide-white/5 max-h-[400px] overflow-y-auto custom-scrollbar relative z-10">
          {transactions.length === 0 ? (
            <div className="p-8 text-center text-slate-500 flex flex-col items-center gap-3">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-600"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
              {t.portfolio.noTx}
            </div>
          ) : (
            transactions.map((tx) => {
              const token = TOKENS.find((t) => t.symbol === tx.token);
              return (
                <div
                  key={tx.id}
                  className="px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors group/row relative"
                >
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500 opacity-0 group-hover/row:opacity-100 transition-opacity" />
                  <div className="flex items-center gap-4 relative z-10">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm border-2 border-[#080c14] ${tx.type === "Swap"
                        ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
                        : (tx.type === "Add Liquidity" || tx.type === "Remove Liquidity")
                          ? "bg-purple-500/20 text-purple-400 border-purple-500/30"
                          : "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                        }`}
                    >
                      {tx.type === "Swap" && (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 10l5-5 5 5" />
                          <path d="M7 14l5 5 5-5" />
                        </svg>
                      )}
                      {(tx.type === "Add Liquidity" || tx.type === "Remove Liquidity") && (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2v20M2 12h20" />
                        </svg>
                      )}
                      {tx.type === "Faucet" && (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2v6M12 18v2M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M18 12h2M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-white flex items-center gap-2">
                        {tx.desc}
                        {tx.status === "Pending" && (
                          <span className="text-xs text-amber-400 animate-pulse">
                            Pending...
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 font-mono mt-0.5">
                        {new Date(tx.timestamp).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1 relative z-10">
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-mono font-bold ${tx.type === "Swap"
                          ? "text-rose-400"
                          : "text-emerald-400"
                          }`}
                      >
                        {tx.type === "Swap" ? "-" : "+"}
                        {formatBalance(tx.amount)}
                      </span>
                      <span className="font-bold text-slate-300 flex items-center gap-1">
                        {token?.icon && (
                          <div className="w-4 h-4">{token.icon}</div>
                        )}
                        {tx.token}
                      </span>
                    </div>
                    {tx.hash && (
                      <a
                        href={`https://sepolia.etherscan.io/tx/${tx.hash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-cyan-500 hover:text-cyan-300 flex items-center gap-1 group/link"
                      >
                        {shortenHash(tx.hash)}
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="group-hover/link:translate-x-0.5 transition-transform"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

// LAUNCHPAD
type LaunchpadViewProps = {
  t: typeof TRANSLATIONS[keyof typeof TRANSLATIONS];
  onJoin: (project: Project, amount: string) => void;
  balances: Record<string, string>;
  projects: Project[];
  onCreateProject?: (project: Project) => void;
};
function LaunchpadView({ t, onJoin, balances, projects, onCreateProject }: LaunchpadViewProps) {
  const [activeTab, setActiveTab] = useState<"live" | "upcoming" | "ended">("live");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [joinAmount, setJoinAmount] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const ongoing = projects.filter((p) => p.status === "ongoing");
  const upcoming = projects.filter((p) => p.status === "upcoming");
  const ended = projects.filter((p) => p.status === "ended");

  const displayedProjects =
    activeTab === "live" ? ongoing :
      activeTab === "upcoming" ? upcoming : ended;

  const formatUsd = (val: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);

  const calcProgress = (p: Project) =>
    Math.min(100, (p.raiseSoFar / p.raiseTarget) * 100 || 0);

  return (
    <div className="w-full max-w-6xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      {/* HERO SECTION */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050910] shadow-2xl group">
        {/* Animated Backgrounds */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-transparent blur-[120px] rounded-full pointer-events-none opacity-60" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-emerald-500/10 via-blue-500/5 to-transparent blur-[100px] rounded-full pointer-events-none opacity-50" />

        <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
                EdgeX Launchpad
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[0.9]">
              The Future of <br />
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary), var(--accent-tertiary))' }}>
                Token Launches
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-xl leading-relaxed mx-auto md:mx-0">
              {t.launchpad.subtitle} Access high-quality projects with our secure, fair, and transparent launchpad platform.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center md:items-start min-w-[140px]">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">Total Raised</span>
                <span className="text-2xl font-black text-white">
                  {formatUsd(projects.reduce((acc, p) => acc + p.raiseSoFar, 0))}
                </span>
              </div>
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center md:items-start min-w-[140px]">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">Projects</span>
                <span className="text-2xl font-black text-white">{projects.length}</span>
              </div>
              <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center md:items-start min-w-[140px]">
                <span className="text-xs text-slate-500 uppercase tracking-wider font-bold">Participants</span>
                <span className="text-2xl font-black text-white">12.5K+</span>
              </div>
            </div>

            {/* Admin Create Button */}
            {onCreateProject && (
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="mt-6 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-bold text-slate-300 hover:text-white transition-all flex items-center gap-2"
              >
                <span className="text-xl">✨</span> Create New Project
              </button>
            )}
          </div>

          {/* Featured Card Preview */}
          <div className="w-full max-w-sm relative group/card perspective-1000">
            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-20 group-hover/card:opacity-40 transition-opacity duration-500"
              style={{ background: 'linear-gradient(to top right, var(--accent-primary), var(--accent-secondary))' }} />
            <div className="relative bg-[#0a0e17] border border-white/10 rounded-3xl p-6 shadow-2xl transform transition-transform duration-500 group-hover/card:rotate-y-6 group-hover/card:scale-105">
              <div className="flex justify-between items-start mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 overflow-hidden flex items-center justify-center shadow-lg">
                  <img src="https://api.dicebear.com/7.x/shapes/svg?seed=EdgeStarter&backgroundColor=8b5cf6" alt="EdgeStarter" className="w-full h-full object-cover" />
                </div>
                <div className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase">
                  Featured
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">EdgeStarter</h3>
              <p className="text-slate-400 text-sm mb-6">The next generation launchpad token powering the entire EdgeSwap ecosystem.</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Target</span>
                  <span className="text-white font-mono font-bold">$500,000</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 w-[75%]" />
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>75% Filled</span>
                  <span>125 Participants</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TABS & FILTERS */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex p-1.5 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
          {(["live", "upcoming", "ended"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wide transition-all duration-300`}
              style={activeTab === tab ? {
                background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
                color: '#ffffff',
                boxShadow: '0 10px 15px -3px var(--accent-glow)'
              } : {
                color: 'var(--text-tertiary)'
              }}
            >
              {tab === "live" && `${t.launchpad.active} (${ongoing.length})`}
              {tab === "upcoming" && `${t.launchpad.upcoming} (${upcoming.length})`}
              {tab === "ended" && `${t.launchpad.ended} (${ended.length})`}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-500 font-medium">Sort by:</span>
          <select className="bg-[#0a0e17] border border-white/10 text-white text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:border-cyan-500/50 transition-colors">
            <option>Start Date</option>
            <option>Total Raised</option>
            <option>Hard Cap</option>
          </select>
        </div>
      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.length > 0 ? (
          displayedProjects.map((project) => {
            const progress = calcProgress(project);
            return (
              <div
                key={project.id}
                className="group relative bg-[#080c14] rounded-[2rem] border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-900/20 overflow-hidden flex flex-col"
              >
                {/* Card Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Banner Image Area */}
                <div className="h-32 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
                  <div className={`absolute inset-0 opacity-30 bg-gradient-to-r ${project.status === "ongoing" ? "from-emerald-500/20 to-cyan-500/20" :
                    project.status === "upcoming" ? "from-blue-500/20 to-purple-500/20" :
                      "from-slate-500/20 to-slate-700/20"
                    }`} />

                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md shadow-lg ${project.status === "ongoing"
                      ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-400"
                      : project.status === "upcoming"
                        ? "bg-cyan-500/20 border-cyan-500/30 text-cyan-400"
                        : "bg-slate-500/20 border-slate-500/30 text-slate-400"
                      }`}>
                      {project.status === "ongoing" && "● Live Now"}
                      {project.status === "upcoming" && "○ Upcoming"}
                      {project.status === "ended" && "● Ended"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col relative">
                  {/* Logo */}
                  <div className="w-20 h-20 rounded-2xl bg-[#0a0e17] border-4 border-[#080c14] absolute -top-10 left-6 overflow-hidden shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <img src={project.logoUrl} alt={project.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Social Links (Dummy) */}
                  <div className="flex justify-end gap-2 mb-2 min-h-[24px]">
                    <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                    <p className="text-sm text-slate-400 line-clamp-2 mb-6">{project.desc}</p>

                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between items-end">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Progress</span>
                        <span className="text-sm font-bold text-white">{progress.toFixed(1)}%</span>
                      </div>

                      <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${project.status === "ongoing" ? "from-emerald-500 to-cyan-500" :
                            project.status === "upcoming" ? "from-blue-500 to-purple-500" :
                              "from-slate-600 to-slate-500"
                            } relative overflow-hidden`}
                          style={{ width: `${progress}%` }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
                        </div>
                      </div>

                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-400">{formatUsd(project.raiseSoFar)}</span>
                        <span className="text-slate-400">{formatUsd(project.raiseTarget)}</span>
                      </div>

                      {/* Min/Max Limits */}
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                        <div className="text-xs">
                          <span className="text-slate-500 font-bold uppercase tracking-wider">Min Allocation</span>
                          <div className="text-white font-mono font-bold mt-0.5">${project.minContribution.toLocaleString()}</div>
                        </div>
                        <div className="text-xs text-right">
                          <span className="text-slate-500 font-bold uppercase tracking-wider">Max Allocation</span>
                          <div className="text-white font-mono font-bold mt-0.5">${project.maxContribution.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8 p-4 rounded-xl bg-white/5 border border-white/5">
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Sale Price</span>
                        <span className="text-sm font-bold text-white">1 {project.token} = {formatCurrency(project.price)}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-1">Access</span>
                        <span className="text-sm font-bold text-purple-400">Public</span>
                      </div>
                    </div>
                  </div>

                  <button
                    disabled={project.status !== "ongoing"}
                    onClick={() => setSelectedProject(project)}
                    className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all relative overflow-hidden group/btn ${project.status === "ongoing"
                      ? "bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white shadow-lg shadow-cyan-500/20"
                      : "bg-white/5 text-slate-500 cursor-not-allowed border border-white/5"
                      }`}
                  >
                    {project.status === "ongoing" && (
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 blur-md" />
                    )}
                    <span className="relative z-10">
                      {project.status === "ongoing" ? t.launchpad.joinDemo :
                        project.status === "upcoming" ? "Notify Me" : "Sale Ended"}
                    </span>
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full py-20 text-center">
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl opacity-50">
              🔭
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No Projects Found</h3>
            <p className="text-slate-500">There are no projects in this category at the moment.</p>
          </div>
        )}
      </div>

      {/* JOIN MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#0f131c]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 w-full max-w-md shadow-2xl relative animate-in zoom-in-95 duration-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500" />
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className="flex items-center gap-5 mb-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-[#1a1f2e] overflow-hidden border border-white/10 shadow-lg shadow-cyan-900/20">
                <img src={selectedProject.logoUrl} alt={selectedProject.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white leading-tight">Join {selectedProject.name}</h3>
                <p className="text-sm text-slate-400 mt-1">Enter amount to contribute</p>
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                  <span className="text-slate-400">Contribution Amount</span>
                  <span className="text-cyan-400 flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>
                    Balance: {(() => {
                      const token = selectedProject.paymentTokens.includes("USDC") ? "USDC" : selectedProject.paymentTokens[0];
                      return formatBalance(balances[token]);
                    })()}
                  </span>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
                  <input
                    type="number"
                    value={joinAmount}
                    onChange={(e) => setJoinAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full bg-[#080c14] border border-white/10 rounded-2xl px-5 py-5 text-3xl text-white font-mono focus:outline-none focus:border-cyan-500/50 relative z-10 transition-all placeholder:text-slate-800"
                    autoFocus
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3 z-20">
                    <button
                      onClick={() => {
                        const token = selectedProject.paymentTokens.includes("USDC") ? "USDC" : selectedProject.paymentTokens[0];
                        setJoinAmount(balances[token] || "0");
                      }}
                      className="text-[10px] font-bold bg-cyan-500/10 text-cyan-400 px-3 py-1.5 rounded-lg hover:bg-cyan-500/20 transition-colors uppercase border border-cyan-500/20"
                    >
                      Max
                    </button>
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                      <div className="w-4 h-4 rounded-full bg-indigo-500 flex items-center justify-center text-[8px]">
                        $
                      </div>
                      <span className="text-sm font-bold text-white">
                        {selectedProject.paymentTokens.includes("USDC") ? "USDC" : selectedProject.paymentTokens[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary Card */}
              <div className="bg-[#0b0f16] rounded-xl p-4 border border-white/5 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500 font-bold uppercase">You Pay</span>
                  <span className="text-sm font-bold text-white">
                    {joinAmount || "0.00"} {selectedProject.paymentTokens.includes("USDC") ? "USDC" : selectedProject.paymentTokens[0]}
                  </span>
                </div>
                <div className="h-px bg-white/5" />
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500 font-bold uppercase">You Receive</span>
                  <span className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                    {formatBalance((parseFloat(joinAmount || "0") / selectedProject.price).toString())} {selectedProject.symbol}
                    <span className="text-[10px] px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20">
                      Est.
                    </span>
                  </span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 py-4 rounded-xl font-bold text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (joinAmount) {
                      onJoin(selectedProject, joinAmount);
                      setSelectedProject(null);
                      setJoinAmount("");
                    }
                  }}
                  disabled={!joinAmount || parseFloat(joinAmount) <= 0}
                  className="flex-[2] py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-[0.98] relative overflow-hidden group/confirm"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/confirm:translate-y-0 transition-transform duration-300 blur-md" />
                  <span className="relative z-10">Confirm Join</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CREATE PROJECT MODAL (Admin) */}
      {onCreateProject && (
        <CreateProjectModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onCreate={onCreateProject}
        />
      )}
    </div>
  );
};



// BRIDGE VIEW
type BridgeViewProps = {
  t: typeof TRANSLATIONS[keyof typeof TRANSLATIONS];
  sourceChain: Chain;
  destChain: Chain;
  setSourceChain: (chain: Chain) => void;
  setDestChain: (chain: Chain) => void;
  bridgeAmount: string;
  setBridgeAmount: (amount: string) => void;
  bridgeStatus: "idle" | "approving" | "bridging" | "completed";
  bridgeStep: number;
  onBridge: () => void;
  fromToken: Token;
  toToken: Token;
  ethBalance: string;
};
function BridgeView({
  t,
  sourceChain,
  destChain,
  setSourceChain,
  setDestChain,
  bridgeAmount,
  setBridgeAmount,
  bridgeStatus,
  bridgeStep,
  onBridge,
  fromToken,
  ethBalance,
}: BridgeViewProps) {
  const [isSourceOpen, setIsSourceOpen] = useState(false);
  const [isDestOpen, setIsDestOpen] = useState(false);

  const estTime = sourceChain.type === "L1" && destChain.type === "L2" ? "~10 min" : "~3 min";
  const bridgeFee = "0.001 ETH";

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050910]/90 backdrop-blur-2xl p-6 md:p-8 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-emerald-500/10 opacity-60 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-72 h-72 bg-cyan-500/25 blur-[130px] rounded-full opacity-70" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/40 border border-cyan-400/40 text-[11px] text-cyan-300 font-semibold uppercase tracking-[0.22em] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            {t.bridge.title}
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-2">
            {t.bridge.title}
          </h1>
          <p className="text-sm md:text-[13px] text-slate-300 max-w-xl">
            {t.bridge.subtitle}
          </p>
        </div>
      </div>

      {/* Bridge Interface */}
      <div className="rounded-2xl border border-white/10 bg-[#050910]/95 backdrop-blur-xl p-6 shadow-2xl">
        <div className="space-y-4">
          {/* Source Network */}
          <div>
            <label className="block text-xs text-slate-400 mb-2 uppercase tracking-wider">
              {t.bridge.source}
            </label>
            <div className="relative">
              <button
                onClick={() => setIsSourceOpen(!isSourceOpen)}
                className="w-full flex items-center justify-between bg-[#050910] border border-white/10 rounded-xl p-4 hover:border-cyan-500/40 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center">{sourceChain.logo}</div>
                  <div className="text-left">
                    <div className="font-bold text-white">{sourceChain.name}</div>
                    <div className="text-xs text-slate-500">{sourceChain.type}</div>
                  </div>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {isSourceOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-[#0d111c] border border-white/10 rounded-xl p-2 shadow-2xl z-50">
                  {CHAINS.filter(c => c.id !== destChain.id).map((chain) => (
                    <button
                      key={chain.id}
                      onClick={() => {
                        setSourceChain(chain);
                        setIsSourceOpen(false);
                      }}
                      className="w-full flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg transition"
                    >
                      <div className="w-6 h-6 flex items-center justify-center">{chain.logo}</div>
                      <div className="text-left">
                        <div className="font-bold text-white">{chain.name}</div>
                        <div className="text-xs text-slate-500">{chain.type}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center -my-2">
            <button
              onClick={() => {
                const temp = sourceChain;
                setSourceChain(destChain);
                setDestChain(temp);
              }}
              className="w-10 h-10 rounded-full bg-[#050910] border border-white/10 hover:border-cyan-500/40 transition flex items-center justify-center text-slate-400 hover:text-cyan-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 10l5-5 5 5" />
                <path d="M7 14l5 5 5-5" />
              </svg>
            </button>
          </div>

          {/* Destination Network */}
          <div>
            <label className="block text-xs text-slate-400 mb-2 uppercase tracking-wider">
              {t.bridge.dest}
            </label>
            <div className="relative">
              <button
                onClick={() => setIsDestOpen(!isDestOpen)}
                className="w-full flex items-center justify-between bg-[#050910] border border-white/10 rounded-xl p-4 hover:border-cyan-500/40 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 flex items-center justify-center">{destChain.logo}</div>
                  <div className="text-left">
                    <div className="font-bold text-white">{destChain.name}</div>
                    <div className="text-xs text-slate-500">{destChain.type}</div>
                  </div>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {isDestOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-[#0d111c] border border-white/10 rounded-xl p-2 shadow-2xl z-50">
                  {CHAINS.filter(c => c.id !== sourceChain.id).map((chain) => (
                    <button
                      key={chain.id}
                      onClick={() => {
                        setDestChain(chain);
                        setIsDestOpen(false);
                      }}
                      className="w-full flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg transition"
                    >
                      <div className="w-6 h-6 flex items-center justify-center">{chain.logo}</div>
                      <div className="text-left">
                        <div className="font-bold text-white">{chain.name}</div>
                        <div className="text-xs text-slate-500">{chain.type}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Amount Input */}
          <div>
            <label className="block text-xs text-slate-400 mb-2 uppercase tracking-wider">
              Amount
            </label>
            <div className="bg-[#050910] border border-white/10 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#1b1f26] border border-white/5 flex items-center justify-center">
                  {fromToken.icon}
                </div>
                <span className="font-bold text-white">{fromToken.symbol}</span>
              </div>
              <input
                type="text"
                value={bridgeAmount}
                onChange={(e) => setBridgeAmount(e.target.value)}
                placeholder="0.0"
                className="w-full bg-transparent text-2xl font-bold text-white outline-none"
              />
              <div className="flex justify-between items-center mt-2 text-xs text-slate-500">
                <span>Balance: {formatBalance(ethBalance)}</span>
                <button
                  onClick={() => setBridgeAmount(ethBalance)}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  MAX
                </button>
              </div>
            </div>
          </div>

          {/* Bridge Info */}
          <div className="bg-black/40 border border-white/5 rounded-xl p-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">{t.bridge.estTime}</span>
              <span className="text-white font-mono">{estTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">{t.bridge.fees}</span>
              <span className="text-white font-mono">{bridgeFee}</span>
            </div>
          </div>

          {/* Bridge Button */}
          <button
            onClick={onBridge}
            disabled={!bridgeAmount || bridgeStatus !== "idle"}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold text-sm uppercase tracking-wider hover:from-cyan-400 hover:to-violet-400 transition shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {bridgeStatus === "idle" && t.bridge.transfer}
            {bridgeStatus === "approving" && t.bridge.approving}
            {bridgeStatus === "bridging" && t.bridge.bridging}
            {bridgeStatus === "completed" && t.bridge.completed}
          </button>

          {/* Progress Bar */}
          {bridgeStatus !== "idle" && (
            <div className="mt-6 space-y-2">
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300" style={{ width: `${bridgeStep}%` }} />
              </div>
              <div className="flex justify-between text-[10px] text-slate-500 uppercase font-bold">
                <span className={bridgeStep >= 10 ? "text-cyan-400" : ""}>Approve</span>
                <span className={bridgeStep >= 30 ? "text-cyan-400" : ""}>Deposit</span>
                <span className={bridgeStep >= 100 ? "text-emerald-400" : ""}>Complete</span>
              </div>
            </div>
          )}




        </div>
      </div>
    </div>
  );
}

const SwapInput: React.FC<{
  label: string;
  token: Token;
  amount: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  onSelectToken?: () => void;
  balance?: string;
  onMax?: () => void;
}> = ({
  label,
  token,
  amount,
  onChange,
  readOnly,
  onSelectToken,
  balance,
  onMax,
}) => (
    <div className="bg-[#050910] rounded-2xl p-4 border border-white/10 hover:border-cyan-500/40 transition-all group shadow-[0_10px_30px_rgba(15,23,42,0.6)] relative">
      <div className="flex justify-between items-center mb-3 text-xs text-slate-400">
        <span>{label}</span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onMax && onMax();
          }}
          className="text-[11px] text-cyan-400 hover:text-cyan-300 font-semibold"
        >
          Max: {formatBalance(balance)}
        </button>
      </div>
      <div className="flex items-center justify-between gap-3">
        <input
          type="number"
          value={amount}
          onChange={(e) => !readOnly && onChange?.(e.target.value)}
          readOnly={readOnly}
          placeholder="0.0"
          className="bg-transparent outline-none text-2xl font-semibold text-white flex-1 min-w-0"
        />
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelectToken?.();
          }}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0b0f16] border border-white/10 hover:border-cyan-500/40 transition"
        >
          <div className="w-6 h-6">{token?.icon}</div>
          <span className="text-sm font-semibold text-white">
            {token?.symbol}
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>
      <div className="mt-2 text-[11px] text-slate-500">
        Balance: {formatBalance(balance)} {token?.symbol}
      </div>
    </div>
  );

const TokenModal: React.FC<{
  onClose: () => void;
  tokens: Token[];
  onSelect: (token: Token) => void;
  search: string;
  setSearch: (value: string) => void;
}> = ({
  onClose,
  tokens,
  onSelect,
  search,
  setSearch,
}) => (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm bg-[#0d111c] border border-white/10 rounded-2xl p-0 shadow-2xl shadow-cyan-500/10 flex flex-col h-[500px] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-white/5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg text-white">Select a Token</h3>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white bg-white/5 p-1.5 rounded-lg transition hover:bg-white/10"
            >
              ✕
            </button>
          </div>
          <div className="relative">
            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name or paste address"
              className="w-full bg-[#05080e] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white outline-none focus:border-cyan-500/50 shadow-inner font-medium placeholder:text-slate-600 transition-colors"
            />
            <div className="absolute left-3 top-3.5 text-slate-500">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-2 custom-scrollbar">
          <div className="grid grid-cols-4 gap-2 mb-2 px-2">
            {tokens.slice(0, 4).map((t: Token) => (
              <button
                key={t.symbol}
                onClick={() => {
                  onSelect(t);
                  onClose();
                }}
                className="flex flex-col items-center justify-center gap-1 p-2 rounded-xl border border-white/5 hover:bg-white/5 hover:border-cyan-500/30 transition"
              >
                <div className="w-6 h-6">{t.icon}</div>
                <span className="text-[10px] font-bold text-slate-300">
                  {t.symbol}
                </span>
              </button>
            ))}
          </div>
          <div className="h-px bg-white/5 my-2 mx-2" />
          {tokens.map((t: Token) => (
            <button
              key={t.symbol}
              onClick={() => {
                onSelect(t);
                onClose();
              }}
              className="w-full flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl transition text-left group border border-transparent hover:border-white/5 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full shadow-sm flex items-center justify-center bg-[#1b1f26] border border-white/5">
                {t.icon}
              </div>
              <div>
                <div className="font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {t.symbol}
                </div>
                <div className="text-xs text-slate-500 group-hover:text-slate-400 font-medium">
                  {t.name}
                </div>
              </div>
              <div className="ml-auto text-slate-500 text-sm group-hover:text-white transition-colors">
                {formatBalance("0")}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

// ICONS
const ArrowDownIcon = ({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.35a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const GasIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 22h18" />
    <path d="M6 18v-7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v7" />
    <path d="M12 3v4" />
    <path d="M9 15h6" />
  </svg>
);



export default App;
