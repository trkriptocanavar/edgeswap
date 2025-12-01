import React, { useMemo, useState, useEffect, useCallback } from "react";

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

const POPULAR_POOLS = [
  {
    id: 1,
    pair: ["ETH", "USDC"] as const,
    fee: "0.3%",
    tvl: "$245.2M",
    vol: "$42.1M",
    apr: "12.4%",
  },
  {
    id: 2,
    pair: ["WBTC", "ETH"] as const,
    fee: "0.05%",
    tvl: "$128.5M",
    vol: "$18.5M",
    apr: "8.1%",
  },
  {
    id: 3,
    pair: ["USDC", "DAI"] as const,
    fee: "0.01%",
    tvl: "$85.1M",
    vol: "$55.2M",
    apr: "3.2%",
  },
  {
    id: 4,
    pair: ["ETH", "DAI"] as const,
    fee: "0.3%",
    tvl: "$62.4M",
    vol: "$11.8M",
    apr: "10.1%",
  },
];

const LAUNCHPAD_PROJECTS = [
  {
    id: 1,
    name: "MARU AI Perps",
    symbol: "MARU",
    chain: "EdgeX L2",
    status: "ongoing" as const, // upcoming | ended
    saleType: "Public Sale",
    raiseTarget: 250_000,
    raiseSoFar: 142_300,
    price: 0.035,
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
    chain: "EdgeX L2",
    status: "upcoming" as const,
    saleType: "Guaranteed Allocation",
    raiseTarget: 500_000,
    raiseSoFar: 0,
    price: 0.12,
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
    chain: "EdgeX L2",
    status: "ended" as const,
    saleType: "Fair Launch",
    raiseTarget: 150_000,
    raiseSoFar: 167_420,
    price: 0.22,
    paymentTokens: ["ETH"],
    startAt: "2024-11-01 15:00 UTC",
    endAt: "2024-11-02 15:00 UTC",
    tags: ["Derivatives", "Vaults"],
    kyc: false,
    audit: true,
  },
];

type ActiveTab = "swap" | "limit" | "liquidity";
type NavItem = "Trade" | "Pools" | "Portfolio" | "Launchpad" | "Bridge";
type Transaction = {
  id: string;
  type: "Swap" | "Liquidity" | "Faucet" | "Bridge";
  desc: string;
  amount: string;
  token: string;
  status: "Success" | "Pending" | "Failed";
  timestamp: number;
  hash?: string;
};

// Fallback Prices if API fails
const INITIAL_PRICES: Record<string, number> = {
  ETH: 3050.24,
  USDC: 1.0,
  DAI: 1.0,
  WBTC: 64250.5,
};

// ADRESLER (Sepolia)
const USDC_ADDRESS = "0x24D824fd9Bd01c1f694c85f26161d88Cb1fAe50F";
const DAI_ADDRESS = "0xb1E77a6Ef72A1fB0233B884EE6A8efD98bB080cB";
const FAUCET_ADDRESS = "0x1198eBcEB99c01cCF103528F67D6Cf83A45F11Db";
// Safe pool address for swaps (not burn address)
const SWAP_POOL_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const TOKEN_ADDRESSES: Record<string, string> = {
  USDC: USDC_ADDRESS,
  DAI: DAI_ADDRESS,
  WBTC: "0x92f3B59a79bFf5dc60c0d59eA13a44D082B2bdFC",
  ETH: "",
};

// ABIs
const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function decimals() view returns (uint8)",
  "function allowance(address owner, address spender) view returns (uint256)",
];
const FAUCET_ABI = ["function claim(address token) external"];

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
  },
} as const;

/* ========= CHART DATA ========= */

const CHART_PATHS = {
  "1H": "M0,380 L0,320 C50,310 150,340 250,330 C350,320 450,300 550,310 C650,320 750,290 800,280 Z",
  "1D":
    "M0,380 L0,320 C100,350 200,250 300,280 C400,310 500,150 600,180 C700,210 800,50 800,380 Z",
  "1D_Line":
    "M0,320 C100,350 200,250 300,280 C400,310 500,150 600,180 C700,210 800,50",
  "1W":
    "M0,380 L0,200 C100,180 200,220 300,200 C400,180 500,100 600,120 C700,140 800,80 800,380 Z",
  "1W_Line":
    "M0,200 C100,180 200,220 300,200 C400,180 500,100 600,120 C700,140 800,80",
  "1M":
    "M0,380 L0,150 C100,250 200,300 300,250 C400,200 500,250 600,300 C700,280 800,150 800,380 Z",
  "1M_Line":
    "M0,150 C100,250 200,300 300,250 C400,200 500,250 600,300 C700,280 800,150",
};

/* ========= APP ========= */

function App() {
  const [activeNav, setActiveNav] = useState<NavItem>("Trade");
  const [activeTab, setActiveTab] = useState<ActiveTab>("swap");

  // Language State
  const [lang, setLang] = useState<"en" | "tr" | "zh" | "ko" | "ja">("en");
  const t = TRANSLATIONS[lang];

  // Chart State
  const [chartTimeframe, setChartTimeframe] = useState<
    "1H" | "1D" | "1W" | "1M"
  >("1D");

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

  // Live Market State
  const [prices, setPrices] = useState(INITIAL_PRICES);

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
  const [_isAddingLiquidity, _setIsAddingLiquidity] = useState(false);
  const [userPositions, _setUserPositions] = useState<any[]>([]);

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
  }, [ethBalance, usdcBalance, daiBalance, transactions]);

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
          setPrices((prev) => ({
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
  useEffect(() => {
    if (account && ethersLoaded) {
      fetchBalances();
    }
  }, [account, chainId, ethersLoaded]); // fetchBalances is stable due to useCallback

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
    if (!account || !fromAmount) return;
    if (chainId !== SEPOLIA_CHAIN_ID) return switchNetwork();
    if (parseFloat(ethBalance) < 0.0001) {
      return addToast("Insufficient ETH for gas fees.", "error");
    }

    setIsSwapping(true);
    try {
      const provider = getProvider();
      const signer = await provider.getSigner();

      // Virtual balance check
      const currentBal =
        fromToken.symbol === "ETH"
          ? ethBalance
          : fromToken.symbol === "USDC"
            ? usdcBalance
            : daiBalance;

      if (parseFloat(currentBal || "0") < parseFloat(fromAmount)) {
        throw new Error(`Insufficient ${fromToken.symbol} balance.`);
      }

      let isSimulation = false;
      let realBalance = BigInt(0);
      let amountIn: bigint;
      const decimals = fromToken.decimals;

      if (fromToken.symbol === "ETH") {
        realBalance = await provider.getBalance(account);
        // @ts-ignore
        amountIn = (window as any).ethers.parseUnits(fromAmount, 18);
      } else {
        const tokenAddress = TOKEN_ADDRESSES[fromToken.symbol];
        if (!tokenAddress) throw new Error("Unsupported token");
        // @ts-ignore
        const tokenContract = new (window as any).ethers.Contract(
          tokenAddress,
          ERC20_ABI,
          signer
        );

        realBalance = await tokenContract.balanceOf(account);

        try {
          // @ts-ignore
          amountIn = (window as any).ethers.parseUnits(fromAmount, decimals);
        } catch {
          // @ts-ignore
          amountIn = (window as any).ethers.parseUnits(fromAmount, 18);
        }
      }

      // If insufficient real balance, use simulation
      // @ts-ignore
      if (realBalance < amountIn) {
        console.log("Insufficient on-chain balance. Using simulation mode.");
        isSimulation = true;
      }

      let txHash = "";

      if (isSimulation) {
        // Simulate transaction
        await new Promise((resolve) => setTimeout(resolve, 1500));
        txHash = "0xSIM_" + Math.random().toString(36).substr(2, 10).toUpperCase();
        addToast(t.toast.demo, "info");
      } else {
        // Real blockchain transaction to SAFE pool address (not burn)
        let tx;
        if (fromToken.symbol === "ETH") {
          tx = await signer.sendTransaction({
            to: SWAP_POOL_ADDRESS, // Safe pool address
            value: amountIn,
            gasLimit: 100000,
          });
        } else {
          const tokenAddress = TOKEN_ADDRESSES[fromToken.symbol];
          // @ts-ignore
          const tokenContract = new (window as any).ethers.Contract(
            tokenAddress,
            ERC20_ABI,
            signer
          );
          tx = await tokenContract.transfer(SWAP_POOL_ADDRESS, amountIn, {
            gasLimit: 150000,
          });
        }
        txHash = tx.hash;
      }

      // === OPTIMISTIC UI UPDATE ===
      const amountFloat = parseFloat(fromAmount);
      const toAmountFloat = parseFloat(toAmount || "0");

      if (fromToken.symbol === "ETH") {
        setEthBalance((prev) =>
          Math.max(0, parseFloat(prev) - amountFloat).toFixed(4)
        );
      } else if (fromToken.symbol === "USDC") {
        setUsdcBalance((prev) =>
          Math.max(0, parseFloat(prev) - amountFloat).toFixed(4)
        );
      } else if (fromToken.symbol === "DAI") {
        setDaiBalance((prev) =>
          Math.max(0, parseFloat(prev) - amountFloat).toFixed(4)
        );
      }

      if (toToken.symbol === "ETH") {
        setEthBalance((prev) =>
          (parseFloat(prev) + toAmountFloat).toFixed(4)
        );
      } else if (toToken.symbol === "USDC") {
        setUsdcBalance((prev) =>
          (parseFloat(prev) + toAmountFloat).toFixed(4)
        );
      } else if (toToken.symbol === "DAI") {
        setDaiBalance((prev) =>
          (parseFloat(prev) + toAmountFloat).toFixed(4)
        );
      }

      setLastTxHash(txHash);
      addTransaction({
        type: "Swap",
        desc: `Swap ${fromToken.symbol} for ${toToken.symbol}`,
        amount: fromAmount,
        token: fromToken.symbol,
        hash: txHash,
      });

      addToast(t.toast.swapSuccess, "success");

      if (!isSimulation) {
        const p = getProvider();
        await p.waitForTransaction(txHash);
        fetchBalances();
      }
    } catch (err: any) {
      console.error(err);
      if (err.code === "ACTION_REJECTED") {
        addToast(t.toast.rejected, "info");
      } else {
        addToast("Swap failed. " + (err.reason || err.message), "error");
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

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value);
    const num = Number(value);
    if (!value || isNaN(num) || num <= 0) {
      setToAmount("");
      return;
    }
    const fp = prices[fromToken.symbol];
    const tp = prices[toToken.symbol];
    const out = (num * fp) / tp;
    setToAmount(out.toFixed(4));
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
      className="min-h-screen bg-[#020308] text-slate-100 font-sans selection:bg-emerald-400/30 relative overflow-hidden"
      onClick={closeAllDropdowns}
    >
      {/* EDGE X — arka plan ve glow katmanı */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Ana zemin */}
        <div className="absolute inset-0 bg-[#020308]" />

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
          className="absolute inset-y-[12%] right-[18px] w-[2px]
                     bg-gradient-to-b from-transparent via-cyan-300/70 to-transparent
                     opacity-60 animate-pulse"
          style={{ animationDuration: "6.5s", animationDelay: "1.6s" }}
        />
        <div
          className="absolute top-0 left-[15%] right-[15%] h-[2px]
                     bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent
                     opacity-60 animate-pulse"
          style={{ animationDuration: "5.5s", animationDelay: "0.9s" }}
        />

        {/* Mesh + grid + vignette + noise */}
        <div
          className="absolute inset-0 opacity-[0.09]
                     bg-[radial-gradient(circle_at_30%_35%,rgba(34,197,94,0.16),transparent_58%),
                         radial-gradient(circle_at_70%_70%,rgba(6,182,212,0.12),transparent_58%)]"
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
            className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg shadow-black/50 border backdrop-blur-xl animate-in slide-in-from-right-full duration-300 ${toast.type === "success"
              ? "bg-[#050b14]/90 border-cyan-500/30 text-cyan-400"
              : toast.type === "error"
                ? "bg-[#050b14]/90 border-rose-500/30 text-rose-400"
                : "bg-[#050b14]/90 border-purple-500/30 text-purple-300"
              }`}
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
              {(["Trade", "Pools", "Portfolio", "Launchpad", "Bridge"] as NavItem[]).map(
                (item) => {
                  const navKey = item.toLowerCase() as "trade" | "pools" | "portfolio" | "launchpad" | "bridge";
                  return (
                    <button
                      key={item}
                      onClick={() => setActiveNav(item)}
                      className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-200 ${activeNav === item
                        ? "text-white bg-gradient-to-r from-cyan-500/25 to-violet-500/25 border border-cyan-500/40 shadow-[0_0_18px_rgba(34,211,238,0.35)]"
                        : "text-slate-400 hover:text-cyan-300 hover:bg-white/5"
                        }`}
                    >
                      {t.nav[navKey]}
                    </button>
                  );
                }
              )}
            </div>
          </div>

          {/* SAĞ: DİL + NETWORK + CÜZDAN + RESET */}
          <div className="flex items-center gap-2 sm:gap-3">
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
              className="text-[10px] font-semibold text-slate-300 hover:text-cyan-400 px-2.5 py-1.5 border border-white/10 rounded-lg bg-[#050910] uppercase tracking-[0.22em]"
            >
              {lang.toUpperCase()}
            </button>

            {/* Network Badge */}
            <button
              onClick={switchNetwork}
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#050910] border border-white/5 hover:border-cyan-500/40 transition text-[11px] font-mono"
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
                className="px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs uppercase tracking-[0.18em] hover:from-cyan-400 hover:to-blue-500 transition shadow-lg shadow-cyan-500/25 border border-white/10 disabled:opacity-60"
              >
                {isConnecting ? t.wallet.connecting : t.wallet.connect}
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  disconnectWallet();
                }}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#050910] border border-cyan-500/30 hover:border-violet-500/50 transition text-[11px] font-mono shadow-[0_0_14px_rgba(34,211,238,0.3)]"
              >
                <div className="w-4 h-4 rounded-md bg-gradient-to-tr from-cyan-400 to-violet-500" />
                <span className="text-cyan-100">
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
          <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-6">
            {/* ÜST GRID: CHART + SWAP */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-6 lg:gap-8 animate-in fade-in slide-in-from-bottom-6 duration-500">
              {/* LEFT: CHART SECTION */}
              <div className="hidden lg:flex flex-col bg-[#050910]/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                {/* Chart Header */}
                <div className="px-5 py-4 border-b border-white/5 flex justify-between items-center bg-black/40">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      <div className="w-9 h-9 rounded-full border-4 border-[#050910] shadow-md bg-[#0b1220] flex items-center justify-center">
                        {fromToken.icon}
                      </div>
                      <div className="w-9 h-9 rounded-full border-4 border-[#050910] shadow-md bg-[#0b1220] flex items-center justify-center">
                        {toToken.icon}
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white flex items-center gap-2">
                        {fromToken.symbol}
                        <span className="text-slate-600">/</span>
                        {toToken.symbol}
                        <span className="text-[9px] font-semibold text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/25 uppercase tracking-[0.16em]">
                          V3 CORE
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-2xl font-mono text-white font-semibold tracking-tight">
                          {rateText.split("=")[1]}
                        </span>
                        <span className="text-lime-400 text-[11px] font-semibold bg-lime-500/10 px-1.5 py-0.5 rounded-full border border-lime-500/30 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                          +1.24%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1.5 bg-[#050910] px-1.5 py-1 rounded-xl border border-white/5">
                    {["1H", "1D", "1W", "1M"].map((tf) => (
                      <button
                        key={tf}
                        onClick={() => setChartTimeframe(tf as any)}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wide transition ${chartTimeframe === tf
                          ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/40"
                          : "text-slate-500 hover:text-slate-200 hover:bg-white/5"
                          }`}
                      >
                        {tf}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Chart Visual */}
                <div className="flex-1 relative cursor-crosshair overflow-hidden">
                  {/* Background grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between py-8 px-6 opacity-[0.04] pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-full h-px bg-cyan-400" />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex justify-between py-6 px-6 opacity-[0.04] pointer-events-none">
                    {[...Array(7)].map((_, i) => (
                      <div key={i} className="h-full w-px bg-violet-400" />
                    ))}
                  </div>

                  <svg
                    className="w-full h-full absolute inset-0"
                    viewBox="0 0 800 400"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="chartGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#22c1c3"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#1d2a3f"
                          stopOpacity="0"
                        />
                      </linearGradient>
                      <filter
                        id="chartGlow"
                        x="-20%"
                        y="-20%"
                        width="140%"
                        height="140%"
                      >
                        <feGaussianBlur
                          stdDeviation="4"
                          result="coloredBlur"
                        />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <path
                      d={CHART_PATHS[chartTimeframe] || CHART_PATHS["1D"]}
                      fill="url(#chartGradient)"
                    />
                    <path
                      d={
                        CHART_PATHS[
                        `${chartTimeframe}_Line` as keyof typeof CHART_PATHS
                        ] || CHART_PATHS["1D_Line"]
                      }
                      fill="none"
                      stroke="#22d3ee"
                      strokeWidth="2"
                      strokeLinecap="round"
                      filter="url(#chartGlow)"
                    />
                  </svg>

                  {/* Price line badge */}
                  <div className="absolute top-[14%] right-4 flex items-center gap-2">
                    <div className="w-24 h-px bg-cyan-500/40" />
                    <div className="bg-cyan-500 text-black text-[10px] font-semibold px-2 py-0.5 rounded shadow-[0_0_12px_rgba(34,211,238,0.7)]">
                      {rateText.split("=")[1]}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="h-10 border-t border-white/5 bg-[#030711] flex items-center px-5 gap-6 text-[10px] text-slate-500 font-mono">
                  <span>
                    O: <span className="text-cyan-100/80">3012.45</span>
                  </span>
                  <span>
                    H: <span className="text-cyan-100/80">3088.12</span>
                  </span>
                  <span>
                    L: <span className="text-cyan-100/80">2995.00</span>
                  </span>
                  <span>
                    C: <span className="text-cyan-100/80">3050.24</span>
                  </span>
                  <span className="ml-auto flex items-center gap-1 text-emerald-400/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live feed
                  </span>
                </div>
              </div>

              {/* RIGHT: SWAP INTERFACE */}
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl border border-white/10 bg-[#050910]/95 backdrop-blur-xl p-5 lg:p-6 shadow-2xl flex flex-col relative overflow-hidden">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-400 opacity-70" />

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
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsSettingsOpen(!isSettingsOpen);
                        }}
                        className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-300 bg-[#050910] px-2.5 py-1.5 rounded-lg border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300 transition"
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
                      className="absolute top-16 right-4 bg-[#131823] border border-white/10 rounded-xl p-4 z-50 shadow-2xl w-64 animate-in fade-in zoom-in-95 duration-200"
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
                            className={`flex-1 py-2 rounded-lg text-xs font-bold transition border ${slippage === val
                              ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/50"
                              : "bg-black/40 text-slate-400 border-white/5 hover:border-white/20"
                              }`}
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
                              ~$0.45{" "}
                              <span className="text-slate-500">
                                (~12 Gwei)
                              </span>
                            </span>
                          </div>
                          <div className="flex justify-between text-slate-400">
                            <span className="flex items-center gap-1">
                              Price Impact
                            </span>
                            <span className="text-lime-400 font-medium font-mono">
                              {"< 0.01%"}
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
                        </div>
                      )}

                      {/* ACTION BUTTON */}
                      <div className="mt-auto pt-6">
                        <button
                          onClick={handleSwap}
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
                  ) : (
                    <div className="h-96 flex flex-col items-center justify-center text-slate-500 text-sm">
                      <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-4 text-3xl border border-white/5">
                        🚧
                      </div>
                      <span className="font-bold text-white text-lg">
                        Limit Orders
                      </span>
                      <span className="text-xs mt-2 text-slate-400 max-w-[200px] text-center">
                        Professional limit orders and stop-losses coming soon to
                        EdgeSwap Pro.
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ALT STATS BAR — grafiğin ve sayfanın altını doldurur */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#050910]/80 backdrop-blur-xl px-5 py-4 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-70 pointer-events-none" />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-semibold">
                      Network TVL
                    </div>
                    <div className="mt-1 text-xl font-bold text-white">
                      {formatCurrency(425_000_000)}
                    </div>
                  </div>
                  <span className="px-2 py-0.5 text-[11px] rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
                    +3.2% 24h
                  </span>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#050910]/80 backdrop-blur-xl px-5 py-4 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/5 to-transparent opacity-70 pointer-events-none" />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-semibold">
                      24h Volume
                    </div>
                    <div className="mt-1 text-xl font-bold text-white">
                      {formatCurrency(68_420_000)}
                    </div>
                  </div>
                  <div className="flex flex-col items-end text-[11px] text-slate-400 font-mono">
                    <span>Swaps: 18,421</span>
                    <span>Avg size: $3,712</span>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#050910]/80 backdrop-blur-xl px-5 py-4 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/5 opacity-70 pointer-events-none" />
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-semibold">
                      Your Session
                    </div>
                    <div className="mt-1 text-xl font-bold text-white font-mono">
                      {transactions.length} tx
                    </div>
                  </div>
                  <div className="flex flex-col items-end text-[11px] text-slate-400 font-mono">
                    <span>Last gas: ~12 gwei</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============ POOLS VIEW ============ */}
        {activeNav === "Pools" && (
          <PoolsView
            t={t}
            userPositions={userPositions}
            onAddLiquidity={() => {
              setActiveNav("Trade");
              setActiveTab("swap");
            }}
          />
        )}

        {/* ============ PORTFOLIO VIEW ============ */}
        {activeNav === "Portfolio" && (
          <PortfolioView
            t={t}
            balances={balancesBySymbol}
            transactions={transactions}
            onClaim={handleClaim}
            isClaimingUsdc={isClaimingUsdc}
            isClaimingDai={isClaimingDai}
          />
        )}

        {activeNav === "Launchpad" && <LaunchpadView t={t} />}

        {/* ============ BRIDGE VIEW ============ */}
        {activeNav === "Bridge" && (
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
        )}
      </main>

      {(isFromOpen || isToOpen) && (
        <TokenModal
          onClose={closeAllDropdowns}
          tokens={filteredTokens}
          onSelect={isFromOpen ? setFromToken : setToToken}
          search={tokenSearch}
          setSearch={setTokenSearch}
        />
      )}
    </div>
  );
};


// --- SUB COMPONENTS ---

const PoolsView: React.FC<{
  t: typeof TRANSLATIONS[keyof typeof TRANSLATIONS];
  userPositions: any[];
  onAddLiquidity: () => void;
}> = ({ t, userPositions, onAddLiquidity }) => (
  <div className="w-full max-w-5xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    {/* Header Title */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-6 bg-[#080c14]/80 backdrop-blur-xl rounded-2xl border border-white/5 relative overflow-hidden shadow-2xl group hover:border-cyan-500/20 transition-colors">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-emerald-500/10 opacity-30 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />
      <div>
        <h2 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
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
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold text-sm uppercase tracking-wide transition shadow-lg shadow-cyan-500/20 flex items-center gap-2 group relative overflow-hidden"
        >
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
        {userPositions.map((pos: any, idx: number) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-[#0b0f16] border border-white/5 hover:border-purple-500/30 transition-all group relative overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-50 pointer-events-none" />
            <div className="flex justify-between items-center mb-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-[#0b0f16] bg-[#151b26] flex items-center justify-center text-cyan-400 shadow-sm">
                    {TOKENS.find((t) => t.symbol === pos.pair[0])?.icon}
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-[#0b0f16] bg-[#151b26] flex items-center justify-center text-purple-400 shadow-sm">
                    {TOKENS.find((t) => t.symbol === pos.pair[1])?.icon}
                  </div>
                </div>
                <span className="font-bold text-white">
                  {pos.pair[0]}/{pos.pair[1]}
                </span>
              </div>
              <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20 animate-pulse">
                Active
              </span>
            </div>
            <div className="flex justify-between text-sm text-slate-400 relative z-10">
              <div className="flex flex-col gap-1">
                <span>Pooled {pos.pair[0]}:</span>
                <span className="text-white font-mono font-medium">
                  {formatBalance(pos.amountA)}
                </span>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <span>Pooled {pos.pair[1]}:</span>
                <span className="text-white font-mono font-medium">
                  {formatBalance(pos.amountB)}
                </span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-sm relative z-10">
              <span className="text-slate-400 flex items-center gap-1">
                APR:{" "}
                <span className="text-lime-400 font-bold">
                  {pos.apr}
                </span>
              </span>
              <button className="text-cyan-400 hover:text-cyan-300 font-bold text-xs uppercase tracking-wide hover:underline">
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

// PORTFOLIO
const PortfolioView: React.FC<{
  t: typeof TRANSLATIONS[keyof typeof TRANSLATIONS];
  balances: Record<string, string>;
  transactions: Transaction[];
  onClaim: (token: "USDC" | "DAI") => void;
  isClaimingUsdc: boolean;
  isClaimingDai: boolean;
}> = ({
  t,
  balances,
  transactions,
  onClaim,
  isClaimingUsdc,
  isClaimingDai,
}) => {
    const totalBalance = Object.entries(balances).reduce(
      (acc, [symbol, bal]) => {
        const price =
          symbol === "ETH" ? 3050.24 : symbol === "WBTC" ? 64250.5 : 1;
        return acc + parseFloat(bal as string) * price;
      },
      0
    );

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
                }).format(totalBalance)}
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
                    <div className="w-12 h-12 rounded-xl bg-[#151b26] flex items-center justify-center shadow-inner border border-white/5 group-hover/asset:border-cyan-500/20 transition-colors">
                      <div className="w-7 h-7">{token?.icon}</div>
                    </div>
                    <div>
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
                  </div>
                );
              })}
          </div>
        </div>

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
                          : tx.type === "Liquidity"
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
                        {tx.type === "Liquidity" && (
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
const LaunchpadView: React.FC<{
  t: typeof TRANSLATIONS[keyof typeof TRANSLATIONS];
}> = ({ t }) => {
  const ongoing = LAUNCHPAD_PROJECTS.filter((p) => p.status === "ongoing");
  const upcoming = LAUNCHPAD_PROJECTS.filter((p) => p.status === "upcoming");
  const ended = LAUNCHPAD_PROJECTS.filter((p) => p.status === "ended");

  const formatUsd = (val: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);

  const calcProgress = (p: (typeof LAUNCHPAD_PROJECTS)[number]) =>
    Math.min(100, (p.raiseSoFar / p.raiseTarget) * 100 || 0);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Üst Hero / Özellikler */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050910]/90 backdrop-blur-2xl p-6 md:p-8 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-emerald-500/10 opacity-60 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-72 h-72 bg-cyan-500/25 blur-[130px] rounded-full opacity-70" />
        <div className="absolute -bottom-32 -left-16 w-64 h-64 bg-purple-500/25 blur-[120px] rounded-full opacity-60" />

        <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/40 border border-emerald-400/40 text-[11px] text-emerald-300 font-semibold uppercase tracking-[0.22em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              EdgeX Launchpad
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-2">
              {t.launchpad.title}
            </h1>
            <p className="text-sm md:text-[13px] text-slate-300 max-w-xl">
              {t.launchpad.subtitle}
            </p>

            <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-3 text-[11px] text-slate-300">
              <div className="flex flex-col gap-1">
                <span className="uppercase tracking-[0.18em] text-slate-500 font-semibold">
                  {t.launchpad.totalRaise}
                </span>
                <span className="text-lg font-bold text-white">
                  {formatUsd(
                    LAUNCHPAD_PROJECTS.reduce(
                      (acc, p) => acc + p.raiseSoFar,
                      0
                    )
                  )}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="uppercase tracking-[0.18em] text-slate-500 font-semibold">
                  {t.launchpad.activeUpcoming}
                </span>
                <span className="text-lg font-bold text-cyan-300">
                  {ongoing.length} {t.launchpad.active} • {upcoming.length} {t.launchpad.upcoming}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="uppercase tracking-[0.18em] text-slate-500 font-semibold">
                  Güven Katmanı
                </span>
                <span className="text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                  KYC / Audit / Liquidity Lock
                </span>
              </div>
            </div>
          </div>

          {/* Sağda küçük “Tier Card” */}
          <div className="w-full max-w-xs rounded-2xl bg-black/40 border border-white/10 p-4 flex flex-col gap-3 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-semibold">
                EdgeX Tiers
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 font-semibold">
                Coming Soon
              </span>
            </div>
            <div className="space-y-2 text-[11px]">
              <div className="flex justify-between items-center">
                <span className="text-slate-300 flex items-center gap-1">
                  🟢 Nova
                  <span className="text-slate-500">(Starter)</span>
                </span>
                <span className="text-slate-200 font-mono">250 EDGX</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300 flex items-center gap-1">
                  🔵 Plasma
                  <span className="text-slate-500">(Priority)</span>
                </span>
                <span className="text-slate-200 font-mono">2,500 EDGX</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300 flex items-center gap-1">
                  🟣 Quantum
                  <span className="text-slate-500">(Guaranteed)</span>
                </span>
                <span className="text-slate-200 font-mono">15,000 EDGX</span>
              </div>
            </div>
            <button className="mt-1 w-full py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-[11px] font-semibold text-white uppercase tracking-[0.16em] hover:from-cyan-400 hover:to-purple-400 transition shadow-lg shadow-cyan-500/30">
              Tier yapısı yakında
            </button>
          </div>
        </div>
      </div>

      {/* Aktif Satışlar */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-200 uppercase tracking-[0.18em]">
            Aktif Satışlar
          </h2>
          <span className="text-[11px] text-slate-500">
            {ongoing.length === 0
              ? "Şu anda aktif satış yok."
              : `${ongoing.length} aktif satış`}
          </span>
        </div>
        {ongoing.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/10 bg-[#050910]/80 p-6 text-center text-slate-500 text-sm">
            Yakında yeni projeler listelenecek. EdgeX Launchpad Twitter ve
            Discord duyurularını takip et.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ongoing.map((p) => {
              const progress = calcProgress(p);
              return (
                <div
                  key={p.id}
                  className="relative overflow-hidden rounded-2xl border border-cyan-500/25 bg-[#050910]/90 backdrop-blur-xl p-5 shadow-xl hover:border-cyan-400/60 hover:shadow-cyan-500/30 transition-all group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-transparent to-purple-500/10 opacity-70 pointer-events-none" />
                  <div className="relative z-10 flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-base font-bold text-white">
                            {p.name}
                          </h3>
                          <span className="text-[11px] font-bold text-slate-400 bg-black/40 border border-white/10 px-1.5 py-0.5 rounded-full">
                            {p.symbol}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-400">
                          <span className="px-2 py-0.5 rounded-full bg-black/40 border border-white/10">
                            {p.chain}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                            {p.saleType}
                          </span>
                          {p.kyc && (
                            <span className="px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-sky-400" />
                              KYC
                            </span>
                          )}
                          {p.audit && (
                            <span className="px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-purple-400" />
                              Audit
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right text-[11px] text-slate-400">
                        <div>Fiyat</div>
                        <div className="text-sm font-mono text-cyan-300">
                          {p.price.toFixed(3)} USDC
                        </div>
                        <div className="mt-1">
                          <span className="text-slate-500">Ödeme:</span>{" "}
                          <span className="text-slate-300">
                            {p.paymentTokens.join(", ")}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-1 space-y-1 text-[11px]">
                      <div className="flex justify-between text-slate-400">
                        <span>Raise</span>
                        <span className="font-mono text-slate-200">
                          {formatUsd(p.raiseSoFar)} / {formatUsd(p.raiseTarget)}
                        </span>
                      </div>
                      <div className="relative h-2 rounded-full bg-slate-900 overflow-hidden">
                        <div
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 shadow-[0_0_18px_rgba(34,211,238,0.8)]"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>İlerleme</span>
                        <span className="text-cyan-300 font-mono">
                          {progress.toFixed(1)}%
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-500 mt-1">
                        <span>Başlangıç</span>
                        <span className="text-slate-300">{p.startAt}</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Bitiş</span>
                        <span className="text-slate-300">{p.endAt}</span>
                      </div>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] text-slate-400">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full bg-[#050910] border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="mt-3 w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-[12px] font-semibold text-white uppercase tracking-[0.16em] hover:from-cyan-400 hover:to-violet-400 transition shadow-lg shadow-cyan-500/30">
                      Katıl (demo)
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Upcoming + Ended */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Upcoming */}
        <div className="rounded-2xl border border-white/10 bg-[#050910]/90 backdrop-blur-xl p-5 shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-300">
              Yaklaşan Projeler
            </h3>
            <span className="text-[11px] text-slate-500">
              {upcoming.length} proje
            </span>
          </div>
          <div className="space-y-3">
            {upcoming.length === 0 && (
              <div className="text-[12px] text-slate-500">
                Henüz planlanmış satış yok.
              </div>
            )}
            {upcoming.map((p) => (
              <div
                key={p.id}
                className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-cyan-500/40 transition flex flex-col gap-1.5"
              >
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">
                      {p.symbol}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {p.name}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-500/10 border border-amber-500/40 text-amber-300 font-semibold">
                    Yakında
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>{p.saleType}</span>
                  <span>{formatUsd(p.raiseTarget)} hedef</span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>Başlangıç</span>
                  <span className="text-slate-300">{p.startAt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ended */}
        <div className="rounded-2xl border border-white/10 bg-[#050910]/90 backdrop-blur-xl p-5 shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-slate-300">
              Tamamlanan Satışlar
            </h3>
            <span className="text-[11px] text-slate-500">
              {ended.length} proje
            </span>
          </div>
          <div className="space-y-3">
            {ended.length === 0 && (
              <div className="text-[12px] text-slate-500">
                Henüz tamamlanmış satış yok.
              </div>
            )}
            {ended.map((p) => (
              <div
                key={p.id}
                className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-emerald-500/40 transition flex flex-col gap-1.5"
              >
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">
                      {p.symbol}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {p.name}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 border border-emerald-500/40 text-emerald-300 font-semibold">
                    Tamamlandı
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Toplanan</span>
                  <span className="font-mono text-slate-100">
                    {formatUsd(p.raiseSoFar)}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>Satış tipi</span>
                  <span className="text-slate-300">{p.saleType}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// BRIDGE VIEW
const BridgeView: React.FC<{
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
}> = ({
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
}) => {
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
  };

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
            {tokens.slice(0, 4).map((t: any) => (
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
          {tokens.map((t: any) => (
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
