import React, { useMemo, useState, useEffect } from "react";

/* ========= ICONS & ASSETS ========= */

// CUSTOM LOGO: "ES" Circuit Style
const EdgeSwapLogo: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const baseSvgClasses = "absolute inset-0 transition-all duration-300 ease-out transform";

  return (
    <div className="relative w-full h-full cursor-pointer" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <svg viewBox="0 0 100 100" className={`${baseSvgClasses} ${hovered ? "opacity-0 scale-90 blur-sm" : "opacity-100 scale-100"}`}>
        <defs>
          <linearGradient id="es_ring_grad" x1="0" y1="0" x2="100" y2="100"><stop offset="0%" stopColor="#0ea5e9" /><stop offset="50%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#10b981" /></linearGradient>
          <linearGradient id="es_e_grad" x1="20" y1="30" x2="40" y2="70"><stop offset="0%" stopColor="#e5f3ff" /><stop offset="100%" stopColor="#bfdbfe" /></linearGradient>
          <linearGradient id="es_s_grad" x1="55" y1="30" x2="80" y2="70"><stop offset="0%" stopColor="#bbf7d0" /><stop offset="100%" stopColor="#22c55e" /></linearGradient>
        </defs>
        <rect x="8" y="8" width="84" height="84" rx="26" fill="#020617" />
        <rect x="10" y="10" width="80" height="80" rx="24" fill="none" stroke="url(#es_ring_grad)" strokeWidth="2.5" />
        <rect x="16" y="16" width="68" height="68" rx="22" fill="#020817" />
        <g transform="translate(24, 28)">
          <rect x={0} y={2} width={7} height={32} rx={3.5} fill="url(#es_e_grad)" />
          <rect x={5} y={0} width={16} height={5} rx={2.5} fill="url(#es_e_grad)" />
          <rect x={5} y={14} width={14} height={5} rx={2.5} fill="url(#es_e_grad)" />
          <rect x={5} y={29} width={16} height={5} rx={2.5} fill="url(#es_e_grad)" />
        </g>
        <g transform="translate(48, 28)">
          <path d="M 18 4 C 13 0, 7 0, 3.5 3.5 C 0 7, 1.5 12, 6 14 L 12 16.5 C 16.5 18.3, 18.5 21.5, 17 24.7 C 15.5 28, 11.5 30, 7 30 C 3.5 30, 1.5 29, 0 27.7" fill="none" stroke="url(#es_s_grad)" strokeWidth={4.3} strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g transform="translate(63, 22)">
          <path d="M0 8 L8 0 L8 5 L13 5 L13 11 L8 11 L8 16 Z" fill="#22d3ee" />
        </g>
        <g transform="translate(24, 60)">
          <path d="M14 0 L6 8 L6 3 L1 3 L1 9 L6 9 L6 14 Z" fill="#22c55e" />
        </g>
      </svg>
      <svg viewBox="0 0 100 100" className={`${baseSvgClasses} ${hovered ? "opacity-100 scale-110" : "opacity-0 scale-90"}`}>
        <defs><linearGradient id="seal_bg_grad" x1="0" y1="0" x2="0" y2="100"><stop offset="0%" stopColor="#020617" /><stop offset="100%" stopColor="#022c22" /></linearGradient></defs>
        <rect x="8" y="8" width="84" height="84" rx="26" fill="url(#seal_bg_grad)" />
        <path d="M8 68 C 22 64, 36 72, 50 68 C 64 64, 78 72, 92 68 L 92 92 L 8 92 Z" fill="#0f766e" opacity={0.9} />
        <ellipse cx="54" cy="63" rx="23" ry="9.5" fill="#e5e7eb" />
        <path d="M70 61 C 77 57, 84 58, 89 62 C 84 63, 80 65, 76 67 Z" fill="#e5e7eb" />
        <circle cx="44" cy="52" r="9" fill="#e5e7eb" />
        <circle cx="41" cy="50" r="1.6" fill="#020617" />
        <circle cx="47" cy="50" r="1.6" fill="#020617" />
        <circle cx="44" cy="54" r="1.3" fill="#020617" />
        <path d="M39 54 L33 52 M39 56 L33 58" stroke="#0f172a" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M49 54 L55 52 M49 56 L55 58" stroke="#0f172a" strokeWidth="0.8" strokeLinecap="round" />
      </svg>
    </div>
  );
};

// CHAIN ICONS
const EthChainIcon = () => <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#627EEA"/><path d="M16.498 4V12.87L23.995 16.22L16.498 4Z" fill="white" fillOpacity="0.602"/><path d="M16.498 4L9 16.22L16.498 12.87V4Z" fill="white"/><path d="M16.498 21.968V27.995L24 17.616L16.498 21.968Z" fill="white" fillOpacity="0.602"/><path d="M16.498 27.995V21.967L9 17.616L16.498 27.995Z" fill="white"/><path d="M16.498 20.573L23.995 16.221L16.498 12.873V20.573Z" fill="white" fillOpacity="0.2"/><path d="M9 16.221L16.498 20.573V12.873L9 16.221Z" fill="white" fillOpacity="0.602"/></svg>;
const ArbChainIcon = () => <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#2D374B"/><path d="M16 26L26 11H6L16 26Z" fill="#28A0F0"/><path d="M16 18L21.5 10H10.5L16 18Z" fill="white"/></svg>; 
const OpChainIcon = () => <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#FF0420"/><path d="M8 16H24" stroke="white" strokeWidth="6" strokeLinecap="round"/><path d="M24 8V24" stroke="white" strokeWidth="6" strokeLinecap="round"/><circle cx="16" cy="16" r="8" fill="#FF0420"/></svg>; 
const PolyChainIcon = () => <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#8247E5"/><path d="M21.5 10L16 13.17L10.5 10L5 13.17V19.5L10.5 22.67L16 19.5L21.5 22.67L27 19.5V13.17L21.5 10Z" fill="white" opacity="0.9"/><path d="M16 13.17V19.5" stroke="#8247E5" strokeWidth="2"/></svg>; 
const BaseChainIcon = () => <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#0052FF"/><circle cx="16" cy="16" r="8" fill="white"/><path d="M14 12H18V20H14V12Z" fill="#0052FF"/></svg>; 
const EdgeChainIcon = () => <div className="w-full h-full bg-emerald-500 rounded-full flex items-center justify-center text-black font-bold text-[10px] tracking-tighter">ES</div>;

// Navigation Icons
const NavTradeIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>;
const NavPoolsIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>;
// RESTORED PIE CHART LOGO FOR PORTFOLIO
const NavPortfolioIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>;
const NavLaunchpadIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>;
const NavBridgeIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18"></path><path d="M16 7l5 5-5 5"></path><path d="M8 17l-5-5 5-5"></path></svg>;

const EthIcon = () => (<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#627EEA" /><path d="M16.498 4V12.87L23.995 16.22L16.498 4Z" fill="white" fillOpacity="0.602" /><path d="M16.498 4L9 16.22L16.498 12.87V4Z" fill="white" /><path d="M16.498 21.968V27.995L24 17.616L16.498 21.968Z" fill="white" fillOpacity="0.602" /><path d="M16.498 27.995V21.967L9 17.616L16.498 27.995Z" fill="white" /><path d="M16.498 20.573L23.995 16.221L16.498 12.873V20.573Z" fill="white" fillOpacity="0.2" /><path d="M9 16.221L16.498 20.573V12.873L9 16.221Z" fill="white" fillOpacity="0.602" /></svg>);
const UsdcIcon = () => (<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#2775CA" /><path d="M16.5 7C11.8056 7 8 10.8056 8 15.5C8 20.1944 11.8056 24 16.5 24C21.1944 24 25 20.1944 25 15.5C25 10.8056 21.1944 7 16.5 7ZM19.9 18.725C19.22 19.32 18.115 19.7875 16.5 19.7875V21.53H15.225V19.745C13.44 19.66 12.335 18.98 12.25 17.705L14.29 17.5775C14.375 18.2575 14.97 18.555 15.8625 18.555C16.925 18.555 17.4775 18.1725 17.4775 17.6625C17.4775 16.855 16.5 16.685 15.225 16.26C13.3975 15.6225 12.42 14.8575 12.42 13.625C12.42 12.3925 13.6525 11.33 15.225 11.245V9.5H16.5V11.245C17.9025 11.33 19.0075 11.9675 19.2625 13.115L17.265 13.285C17.1375 12.6475 16.6275 12.3075 15.8625 12.3075C14.97 12.3075 14.5025 12.69 14.5025 13.115C14.5025 13.8375 15.1825 14.05 16.84 14.6025C18.5825 15.24 19.9 15.9625 19.9 17.2375V18.725Z" fill="white" /></svg>);
const DaiIcon = () => (<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#F5AC37" /><path d="M16.0001 7.78223C11.2188 7.78223 8.0332 11.6089 8.0332 15.8622H10.1754C10.1754 12.7989 12.431 9.71778 16.0001 9.71778C19.5692 9.71778 21.8248 12.7989 21.8248 15.8622H23.9669C23.9669 11.6089 20.7813 7.78223 16.0001 7.78223Z" fill="white" /><path d="M16.0001 24.2178C20.7813 24.2178 23.9669 20.3911 23.9669 16.1378H21.8248C21.8248 19.2011 19.5692 22.2822 16.0001 22.2822C12.431 22.2822 10.1754 19.2011 10.1754 16.1378H8.0332C8.0332 20.3911 11.2188 24.2178 16.0001 24.2178Z" fill="white" /><path d="M8.0332 13.0332H23.9665V14.9688H8.0332V13.0332Z" fill="white" /><path d="M8.0332 17.0312H23.9665V18.9668H8.0332V17.0312Z" fill="white" /></svg>);
const WbtcIcon = () => (<svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#F09241" /><path d="M22.525 12.625C22.225 10.825 20.775 9.22501 18.075 9.22501H12.225C11.4 9.22501 10.725 9.90001 10.725 10.725V21.275C10.725 22.1 11.4 22.775 12.225 22.775H18.675C21.15 22.775 23.1 21.275 23.25 18.875C23.325 16.775 21.975 15.575 20.775 15.2C21.9 14.675 22.6 13.75 22.525 12.625ZM19.8 19.625C19.65 20.375 18.975 20.9 17.925 20.9H14.1V16.4H17.7C18.975 16.4 19.725 16.925 19.8 18.2V19.625ZM19.2 14.225C19.05 14.9 18.45 15.275 17.625 15.275H14.1V11.3H17.25C18.3 11.3 18.9 11.675 19.2 12.5V14.225Z" fill="white" /></svg>);

/* ========= TYPES & CONST ========= */

type Token = { symbol: "ETH" | "USDC" | "DAI" | "WBTC"; name: string; network: string; icon: React.ReactNode; decimals: number; coingeckoId: string; };

const TOKENS: Token[] = [
  { symbol: "ETH", name: "Ether", network: "Ethereum", icon: <EthIcon />, decimals: 18, coingeckoId: "ethereum" },
  { symbol: "USDC", name: "USD Coin", network: "Ethereum", icon: <UsdcIcon />, decimals: 6, coingeckoId: "usd-coin" },
  { symbol: "DAI", name: "Dai Stablecoin", network: "Ethereum", icon: <DaiIcon />, decimals: 18, coingeckoId: "dai" },
  { symbol: "WBTC", name: "Wrapped Bitcoin", network: "Ethereum", icon: <WbtcIcon />, decimals: 8, coingeckoId: "wrapped-bitcoin" },
];

const NETWORKS = [
    { id: 'eth', name: 'Ethereum', icon: <EthChainIcon /> },
    { id: 'arb', name: 'Arbitrum', icon: <ArbChainIcon /> },
    { id: 'opt', name: 'Optimism', icon: <OpChainIcon /> },
    { id: 'poly', name: 'Polygon', icon: <PolyChainIcon /> },
    { id: 'base', name: 'Base', icon: <BaseChainIcon /> },
    { id: 'edgex', name: 'EdgeX L2', icon: <EdgeChainIcon /> },
];

const POPULAR_POOLS = [
  { id: 1, pair: ["ETH", "USDC"], fee: "0.3%", tvl: "$245.2M", vol: "$42.1M", apr: "12.4%" },
  { id: 2, pair: ["WBTC", "ETH"], fee: "0.05%", tvl: "$128.5M", vol: "$18.5M", apr: "8.1%" },
  { id: 3, pair: ["USDC", "DAI"], fee: "0.01%", tvl: "$85.1M", vol: "$55.2M", apr: "3.2%" },
  { id: 4, pair: ["ETH", "DAI"], fee: "0.3%", tvl: "$62.4M", vol: "$11.8M", apr: "10.1%" },
];

const LAUNCHPAD_PROJECTS = [
  {
    id: 1, name: "MARU AI Perps", symbol: "MARU", chain: "EdgeX L2", status: "ongoing", saleType: "Public Sale", raiseTarget: 250_000, raiseSoFar: 142_300, price: 0.035, paymentTokens: ["ETH", "USDC"], startAt: "2025-01-12 18:00 UTC", endAt: "2025-01-15 18:00 UTC", tags: ["AI", "Perps", "Cross-Chain"], kyc: true, audit: true,
    description: "Yapay zeka destekli, cross-chain vadeli işlem platformu. MARU token sahipleri işlem ücretlerinden %30 pay alır.",
    tokenomics: [{ label: "Public Sale", value: 30, color: "#22d3ee" }, { label: "Liquidity", value: 25, color: "#a78bfa" }, { label: "Team", value: 15, color: "#334155" }, { label: "Marketing", value: 20, color: "#34d399" }, { label: "Airdrop", value: 10, color: "#f472b6" }],
    socials: { twitter: "45.2K", discord: "12.5K", telegram: "8.9K" }, vesting: "20% TGE, 6 ay uçurum, sonra 12 ay lineer dağılım.", sentiment: "Bullish 🔥"
  },
  {
    id: 2, name: "EdgeX Liquidity Layer", symbol: "EDGX", chain: "EdgeX L2", status: "upcoming", saleType: "Guaranteed Allocation", raiseTarget: 500_000, raiseSoFar: 0, price: 0.12, paymentTokens: ["USDC"], startAt: "2025-02-01 16:00 UTC", endAt: "2025-02-03 16:00 UTC", tags: ["Infra", "L2", "Liquidity"], kyc: true, audit: false,
    description: "Tüm L2 ağları arasında birleşik likidite sağlayan altyapı projesi. Gas ücretlerini optimize eder.",
    tokenomics: [{ label: "Sale", value: 20, color: "#22d3ee" }, { label: "Treasury", value: 40, color: "#a78bfa" }, { label: "Team", value: 20, color: "#334155" }, { label: "Advisors", value: 20, color: "#f472b6" }],
    socials: { twitter: "12.1K", discord: "5.4K", telegram: "2.1K" }, vesting: "10% TGE, 12 ay kilitli.", sentiment: "Neutral ⚖️"
  },
];

type ActiveTab = "swap" | "limit" | "liquidity";
type NavItem = "Trade" | "Bridge" | "Pools" | "Portfolio" | "Launchpad";
type Transaction = { id: string; type: "Swap" | "Liquidity" | "Faucet" | "Bridge"; desc: string; amount: string; token: string; status: "Success" | "Pending" | "Failed"; timestamp: number; hash?: string; };

const INITIAL_PRICES: Record<string, number> = { ETH: 3050.24, USDC: 1.0, DAI: 1.0, WBTC: 64250.5 };
const USDC_ADDRESS = "0x24D824fd9Bd01c1f694c85f26161d88Cb1fAe50F";
const DAI_ADDRESS = "0xb1E77a6Ef72A1fB0233B884EE6A8efD98bB080cB";
const FAUCET_ADDRESS = "0x1198eBcEB99c01cCF103528F67D6Cf83A45F11Db";
const MOCK_POOL_ADDRESS = "0x000000000000000000000000000000000000dEaD";
const TOKEN_ADDRESSES: Record<string, string> = { USDC: USDC_ADDRESS, DAI: DAI_ADDRESS, WBTC: "0x92f3B59a79bFf5dc60c0d59eA13a44D082B2bdFC", ETH: "" };
const ERC20_ABI = ["function balanceOf(address owner) view returns (uint256)", "function transfer(address to, uint256 amount) returns (bool)", "function approve(address spender, uint256 amount) returns (bool)", "function decimals() view returns (uint8)", "function allowance(address owner, address spender) view returns (uint256)"];
const FAUCET_ABI = ["function claim(address token) external"];

const formatBalance = (v?: string) => { if (!v) return "0.00"; const num = Number(v); if (!isFinite(num)) return "0.00"; if (num === 0) return "0.00"; if (num < 0.0001) return "<0.0001"; return (Math.floor(num * 10000) / 10000).toFixed(4); };
const SEPOLIA_CHAIN_ID = 11155111;
const SEPOLIA_HEX_ID = "0xaa36a7";

const LANGUAGES = [
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'jp', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'cn', name: '中文', flag: '🇨🇳' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
];

const TRANSLATIONS = {
  en: { nav: { trade: "Trade", bridge: "Bridge", pools: "Pools", portfolio: "Portfolio", launchpad: "Launchpad" }, wallet: { connect: "Connect", connecting: "Connecting...", wrongNet: "Wrong Net" }, swap: { pay: "You Pay", receive: "You Receive", rate: "Rate", cost: "Network Cost", impact: "Price Impact", min: "Min. Received", button: "Swap Now", enter: "Enter Amount", processing: "Processing..." }, pool: { title: "Liquidity Pools", subtitle: "Provide liquidity to earn trading fees.", newPos: "+ New Position", yourPos: "Your Active Positions", table: { pool: "Pool", tvl: "TVL", vol: "Volume 24H", apr: "APR" } }, portfolio: { title: "Overview", subtitle: "Track your assets and transaction history.", assets: "Assets", history: "Recent History", noTx: "No recent transactions.", faucet: "Need Test Tokens?", faucetDesc: "Use the faucet to mint free USDC & DAI.", mint: "Mint" }, toast: { install: "Please install MetaMask wallet.", connected: "Wallet connected successfully!", disconnected: "Wallet disconnected.", minting: "Minting", minted: "minted successfully!", swapSuccess: "Swap submitted successfully!", liqSuccess: "Liquidity added successfully!", liqSim: "Liquidity added successfully (Simulated)!", demo: "Demo Mode: Executing virtual swap...", rejected: "Transaction rejected by user.", failed: "Transaction failed." } },
  tr: { nav: { trade: "Al-Sat", bridge: "Köprü", pools: "Havuzlar", portfolio: "Portföy", launchpad: "Launchpad" }, wallet: { connect: "Bağlan", connecting: "Bağlanıyor...", wrongNet: "Yanlış Ağ" }, swap: { pay: "Ödenen", receive: "Alınan", rate: "Kur", cost: "Ağ Ücreti", impact: "Fiyat Etkisi", min: "Min. Alınacak", button: "Takas Yap", enter: "Miktar Gir", processing: "İşleniyor..." }, pool: { title: "Likidite Havuzları", subtitle: "Likidite sağlayarak işlem ücreti kazan.", newPos: "+ Yeni Pozisyon", yourPos: "Aktif Pozisyonların", table: { pool: "Havuz", tvl: "TVL (Kilitli)", vol: "Hacim 24s", apr: "Yıllık Getiri" } }, portfolio: { title: "Genel Bakış", subtitle: "Varlıklarını ve işlem geçmişini takip et.", assets: "Varlıklar", history: "Son İşlemler", noTx: "Henüz işlem yok.", faucet: "Test Token Lazım mı?", faucetDesc: "Sepolia ağında ücretsiz USDC & DAI bas.", mint: "Bas" }, toast: { install: "Lütfen MetaMask cüzdanı yükleyin.", connected: "Cüzdan başarıyla bağlandı!", disconnected: "Cüzdan bağlantısı kesildi.", minting: "Basılıyor", minted: "başarıyla basıldı!", swapSuccess: "Takas işlemi başarıyla gönderildi!", liqSuccess: "Likidite başarıyla eklendi!", liqSim: "Likidite eklendi (Simülasyon)!", demo: "Demo Modu: Sanal işlem yapılıyor...", rejected: "İşlem kullanıcı tarafından reddedildi.", failed: "İşlem başarısız oldu." } },
  es: { nav: { trade: "Intercambio", bridge: "Puente", pools: "Pools", portfolio: "Portafolio", launchpad: "Launchpad" }, wallet: { connect: "Conectar", connecting: "Conectando...", wrongNet: "Red Inc." }, swap: { pay: "Pagas", receive: "Recibes", rate: "Tasa", cost: "Costo Red", impact: "Impact", min: "Mín. Recibido", button: "Intercambiar", enter: "Ingresar Cantidad", processing: "Procesando..." }, pool: { title: "Pools de Liquidez", subtitle: "Provee liquidez y gana comisiones.", newPos: "+ Nueva Posición", yourPos: "Tus Posiciones", table: { pool: "Pool", tvl: "TVL", vol: "Volumen 24h", apr: "APR" } }, portfolio: { title: "Resumen", subtitle: "Rastrea tus activos e historial.", assets: "Activos", history: "Historial Reciente", noTx: "Sin transacciones.", faucet: "¿Tokens de Prueba?", faucetDesc: "Usa el grifo para obtener USDC & DAI.", mint: "Mintear" }, toast: { install: "Por favor instala MetaMask.", connected: "Billetera conectada!", disconnected: "Billetera desconectada.", minting: "Minteando", minted: "minteado con éxito!", swapSuccess: "Intercambio exitoso!", liqSuccess: "Liquidez agregada!", liqSim: "Liquidez agregada (Simulada)!", demo: "Modo Demo: Ejecutando swap virtual...", rejected: "Transacción rechazada.", failed: "Transacción fallida." } },
  de: { nav: { trade: "Handel", bridge: "Brücke", pools: "Pools", portfolio: "Portfolio", launchpad: "Launchpad" }, wallet: { connect: "Verbinden", connecting: "Verbindet...", wrongNet: "Falsches Netz" }, swap: { pay: "Zahlen", receive: "Erhalten", rate: "Kurs", cost: "Netzwerkkosten", impact: "Einfluss", min: "Min. Erhalten", button: "Tauschen", enter: "Betrag eingeben", processing: "Verarbeitung..." }, pool: { title: "Liquiditätspools", subtitle: "Liquidität bereitstellen und Gebühren verdienen.", newPos: "+ Neue Position", yourPos: "Ihre Positionen", table: { pool: "Pool", tvl: "TVL", vol: "Volumen 24h", apr: "APR" } }, portfolio: { title: "Übersicht", subtitle: "Verfolgen Sie Ihre Assets.", assets: "Vermögen", history: "Verlauf", noTx: "Keine Transaktionen.", faucet: "Test-Token?", faucetDesc: "Nutzen Sie den Faucet für USDC & DAI.", mint: "Minten" }, toast: { install: "Bitte MetaMask installieren.", connected: "Wallet verbunden!", disconnected: "Wallet getrennt.", minting: "Minting", minted: "erfolgreich gemintet!", swapSuccess: "Tausch erfolgreich!", liqSuccess: "Liquidität hinzugefügt!", liqSim: "Liquidität hinzugefügt (Simuliert)!", demo: "Demo-Modus: Virtueller Tausch...", rejected: "Abgelehnt.", failed: "Fehlgeschlagen." } },
  fr: { nav: { trade: "Échanger", bridge: "Pont", pools: "Pools", portfolio: "Portefeuille", launchpad: "Launchpad" }, wallet: { connect: "Connecter", connecting: "Connexion...", wrongNet: "Mauvais Réseau" }, swap: { pay: "Payez", receive: "Recevez", rate: "Taux", cost: "Coût Réseau", impact: "Impact", min: "Min. Reçu", button: "Échanger", enter: "Entrer Montant", processing: "Traitement..." }, pool: { title: "Pools de Liquidité", subtitle: "Fournissez de la liquidité et gagnez des frais.", newPos: "+ Nouvelle Position", yourPos: "Vos Positions", table: { pool: "Pool", tvl: "TVL", vol: "Volume 24h", apr: "APR" } }, portfolio: { title: "Aperçu", subtitle: "Suivez vos actifs et historique.", assets: "Actifs", history: "Historique", noTx: "Aucune transaction.", faucet: "Jetons Test?", faucetDesc: "Utilisez le robinet pour USDC & DAI.", mint: "Mintez" }, toast: { install: "Veuillez installer MetaMask.", connected: "Portefeuille connecté!", disconnected: "Portefeuille déconnecté.", minting: "Minting", minted: "mintés avec succès!", swapSuccess: "Échange réussi!", liqSuccess: "Liquidité ajoutée!", liqSim: "Liquidité ajoutée (Simulée)!", demo: "Mode Démo: Échange virtuel...", rejected: "Rejeté.", failed: "Échec." } },
  jp: { nav: { trade: "トレード", bridge: "ブリッジ", pools: "プール", portfolio: "ポートフォリオ", launchpad: "ローンチパッド" }, wallet: { connect: "接続", connecting: "接続中...", wrongNet: "ネットワークエラー" }, swap: { pay: "支払う", receive: "受け取る", rate: "レート", cost: "ネットワーク費", impact: "価格影響", min: "最小受取", button: "スワップ", enter: "金額を入力", processing: "処理中..." }, pool: { title: "流動性プール", subtitle: "流動性を提供して手数料を獲得。", newPos: "+ 新規ポジション", yourPos: "保有ポジション", table: { pool: "プール", tvl: "TVL", vol: "24時間取引量", apr: "年利" } }, portfolio: { title: "概要", subtitle: "資産と取引履歴を確認。", assets: "資産", history: "最近の履歴", noTx: "取引なし。", faucet: "テストトークン?", faucetDesc: "USDCとDAIを無料で取得。", mint: "ミント" }, toast: { install: "MetaMaskをインストールしてください。", connected: "ウォレット接続成功！", disconnected: "切断されました。", minting: "ミント中", minted: "ミント成功！", swapSuccess: "スワップ成功！", liqSuccess: "流動性追加成功！", liqSim: "流動性追加（シミュレーション）！", demo: "デモモード: 仮想スワップ実行中...", rejected: "拒否されました。", failed: "失敗しました。" } },
  ko: { nav: { trade: "거래", bridge: "브릿지", pools: "풀", portfolio: "포트폴리오", launchpad: "런치패드" }, wallet: { connect: "연결", connecting: "연결 중...", wrongNet: "잘못된 네트워크" }, swap: { pay: "지불", receive: "수령", rate: "환율", cost: "네트워크 비용", impact: "가격 영향", min: "최소 수령", button: "스왑", enter: "수량 입력", processing: "처리 중..." }, pool: { title: "유동성 풀", subtitle: "유동성을 제공하고 수수료를 받으세요.", newPos: "+ 새 포지션", yourPos: "나의 포지션", table: { pool: "풀", tvl: "TVL", vol: "24시간 거래량", apr: "APR" } }, portfolio: { title: "개요", subtitle: "자산 및 거래 내역 추적.", assets: "자산", history: "최근 내역", noTx: "거래 없음.", faucet: "테스트 토큰?", faucetDesc: "무료 USDC 및 DAI 받기.", mint: "민트" }, toast: { install: "MetaMask를 설치해주세요.", connected: "지갑 연결 성공!", disconnected: "연결 해제됨.", minting: "민팅 중", minted: "민팅 성공!", swapSuccess: "스왑 성공!", liqSuccess: "유동성 추가 성공!", liqSim: "유동성 추가(시뮬레이션)!", demo: "데모 모드: 가상 스왑 실행...", rejected: "거절됨.", failed: "실패함." } },
  cn: { nav: { trade: "交易", bridge: "跨链桥", pools: "流动池", portfolio: "资产组合", launchpad: "发射台" }, wallet: { connect: "连接", connecting: "连接中...", wrongNet: "错误网络" }, swap: { pay: "支付", receive: "收到", rate: "汇率", cost: "网络费用", impact: "价格影响", min: "最低收到", button: "兑换", enter: "输入金额", processing: "处理中..." }, pool: { title: "流动性池", subtitle: "提供流动性以赚取交易费。", newPos: "+ 新建仓位", yourPos: "您的仓位", table: { pool: "池", tvl: "总锁定价值", vol: "24小时量", apr: "年化" } }, portfolio: { title: "概览", subtitle: "追踪您的资产和交易历史。", assets: "资产", history: "近期历史", noTx: "无近期交易。", faucet: "需要测试币?", faucetDesc: "领取免费 USDC & DAI。", mint: "铸造" }, toast: { install: "请安装 MetaMask。", connected: "钱包连接成功!", disconnected: "钱包已断开。", minting: "铸造中", minted: "铸造成功!", swapSuccess: "兑换成功!", liqSuccess: "流动性添加成功!", liqSim: "流动性添加成功 (模拟)!", demo: "演示模式: 执行虚拟兑换...", rejected: "用户拒绝。", failed: "交易失败。" } },
  ru: { nav: { trade: "Торговля", bridge: "Мост", pools: "Пулы", portfolio: "Портфель", launchpad: "Лаунчпад" }, wallet: { connect: "Подключить", connecting: "Подключение...", wrongNet: "Неверная сеть" }, swap: { pay: "Вы платите", receive: "Вы получаете", rate: "Курс", cost: "Сеть", impact: "Влияние", min: "Мин. получ.", button: "Обменять", enter: "Введите сумму", processing: "Обработка..." }, pool: { title: "Пулы ликвидности", subtitle: "Предоставляйте ликвидность и зарабатывайте.", newPos: "+ Новая позиция", yourPos: "Ваши позиции", table: { pool: "Пул", tvl: "TVL", vol: "Объем 24ч", apr: "APR" } }, portfolio: { title: "Обзор", subtitle: "Отслеживайте активы и историю.", assets: "Активы", history: "История", noTx: "Нет транзакций.", faucet: "Тестовые токены?", faucetDesc: "Получить бесплатные USDC & DAI.", mint: "Получить" }, toast: { install: "Пожалуйста, установите MetaMask.", connected: "Кошелек подключен!", disconnected: "Кошелек отключен.", minting: "Минт", minted: "успешно получены!", swapSuccess: "Обмен успешен!", liqSuccess: "Ликвидность добавлена!", liqSim: "Ликвидность добавлена (Сим)!", demo: "Демо режим: Виртуальный обмен...", rejected: "Отклонено.", failed: "Ошибка." } },
};

const CHART_PATHS = {
  "1H": "M0,380 L0,320 C50,310 150,340 250,330 C350,320 450,300 550,310 C650,320 750,290 800,280",
  "1D": "M0,380 L0,320 C100,350 200,250 300,280 C400,310 500,150 600,180 C700,210 800,50 800,380 Z",
  "1D_Line": "M0,320 C100,350 200,250 300,280 C400,310 500,150 600,180 C700,210 800,50",
  "1W": "M0,380 L0,200 C100,180 200,220 300,200 C400,180 500,100 600,120 C700,140 800,80 800,380 Z",
  "1W_Line": "M0,200 C100,180 200,220 300,200 C400,180 500,100 600,120 C700,140 800,80",
  "1M": "M0,380 L0,150 C100,250 200,300 300,250 C400,200 500,250 600,300 C700,280 800,150 800,380 Z",
  "1M_Line": "M0,150 C100,250 200,300 300,250 C400,200 500,250 600,300 C700,280 800,150",
};

/* ========= APP ========= */

function App() {
  const [activeNav, setActiveNav] = useState<NavItem>("Trade");
  const [activeTab, setActiveTab] = useState<ActiveTab>("swap");
  const [lang, setLang] = useState<string>("tr");
  // @ts-ignore
  const t = TRANSLATIONS[lang] || TRANSLATIONS["en"];
  const [chartTimeframe, setChartTimeframe] = useState<"1H" | "1D" | "1W" | "1M">("1D");

  const [fromToken, setFromToken] = useState<Token>(TOKENS[0]);
  const [toToken, setToToken] = useState<Token>(TOKENS[1]);
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [isFromOpen, setIsFromOpen] = useState(false);
  const [isToOpen, setIsToOpen] = useState(false);
  const [tokenSearch, setTokenSearch] = useState("");
  const [slippage, setSlippage] = useState(0.5);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  const [prices, setPrices] = useState(INITIAL_PRICES);

  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });
  const [toasts, setToasts] = useState<{ id: number; msg: string; type: "success" | "error" | "info" }[]>([]);

  
  const [userPositions] = useState<any[]>([]);
  const [account, setAccount] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [chainId, setChainId] = useState<number | null>(null);

  const [ethBalance, setEthBalance] = useState<string>(() => localStorage.getItem("ethBalance") || "0");
  const [usdcBalance, setUsdcBalance] = useState<string>(() => localStorage.getItem("usdcBalance") || "0");
  const [daiBalance, setDaiBalance] = useState<string>(() => localStorage.getItem("daiBalance") || "0");
  const [, setIsLoadingBalances] = useState(false);

  const [isSwapping, setIsSwapping] = useState(false);
  const [isClaimingUsdc, setIsClaimingUsdc] = useState(false);
  const [isClaimingDai, setIsClaimingDai] = useState(false);
  const [, setLastTxHash] = useState<string | null>(null);
  const [ethersLoaded, setEthersLoaded] = useState(false);

  useEffect(() => {
    localStorage.setItem("ethBalance", ethBalance);
    localStorage.setItem("usdcBalance", usdcBalance);
    localStorage.setItem("daiBalance", daiBalance);
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [ethBalance, usdcBalance, daiBalance, transactions]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const ids = TOKENS.map((t) => t.coingeckoId).join(",");
        const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`);
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

  useEffect(() => {
    if (fromAmount && !isSwapping) {
      const num = Number(fromAmount);
      const fp = prices[fromToken.symbol];
      const tp = prices[toToken.symbol];
      const out = (num * fp) / tp;
      setToAmount(out.toFixed(4));
    }
  }, [prices, fromToken, toToken, fromAmount, isSwapping]);

  useEffect(() => {
    if ((window as any).ethers) {
      setEthersLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.7.0/ethers.umd.min.js";
    script.async = true;
    script.onload = () => setEthersLoaded(true);
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (ethersLoaded && (window as any).ethereum) {
      (window as any).ethereum.request({ method: "eth_accounts" }).then((accounts: string[]) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          updateChainId();
        }
      });
      (window as any).ethereum.on("accountsChanged", (accounts: string[]) => {
        setAccount(accounts[0] || null);
      });
      (window as any).ethereum.on("chainChanged", (chainIdHex: string) => {
        setChainId(parseInt(chainIdHex, 16));
        fetchBalances();
      });
    }
  }, [ethersLoaded]);

  useEffect(() => {
    if (account && ethersLoaded) {
      fetchBalances();
    }
  }, [account, chainId, ethersLoaded]);

  const addToast = (msg: string, type: "success" | "error" | "info" = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, msg, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const addTransaction = (tx: Omit<Transaction, "id" | "timestamp" | "status">) => {
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
      const id = await (window as any).ethereum.request({ method: "eth_chainId" });
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
                nativeCurrency: { name: "Sepolia ETH", symbol: "SEP", decimals: 18 },
                rpcUrls: ["https://sepolia.infura.io/v3/"],
                blockExplorerUrls: ["https://sepolia.etherscan.io"],
              },
            ],
          });
        } catch (e) {}
      }
    }
  };

  const getProvider = () => {
    // @ts-ignore
    return new (window as any).ethers.BrowserProvider((window as any).ethereum);
  };

  const fetchBalances = async () => {
    if (!account || !ethersLoaded) return;
    setIsLoadingBalances(true);
    try {
      const provider = getProvider();
      const ethBal = await provider.getBalance(account);
      // @ts-ignore
      const realEth = (window as any).ethers.formatEther(ethBal);
      setEthBalance(realEth);
      // @ts-ignore
      const usdcContract = new (window as any).ethers.Contract(USDC_ADDRESS, ERC20_ABI, provider);
      const usdcBal = await usdcContract.balanceOf(account);
      // @ts-ignore
      const realUsdc = (window as any).ethers.formatUnits(usdcBal, 6);
      setUsdcBalance((prev) => {
        const p = parseFloat(prev);
        const r = parseFloat(realUsdc);
        if (p > 1 && r < 1) return prev;
        return r > 0 ? realUsdc : prev;
      });
      // @ts-ignore
      const daiContract = new (window as any).ethers.Contract(DAI_ADDRESS, ERC20_ABI, provider);
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
  };

  const connectWallet = async () => {
    setIsWalletModalOpen(false); // Close modal before connect
    if (!(window as any).ethereum) return addToast(t.toast.install, "error");
    setIsConnecting(true);
    try {
      const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" });
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
    if (confirm("Are you sure you want to reset all demo balances and history?")) {
      localStorage.clear();
      setEthBalance("0");
      setUsdcBalance("0");
      setDaiBalance("0");
      setTransactions([]);
      window.location.reload();
    }
  };

  const handleClaim = async (token: "USDC" | "DAI") => {
    if (!account || chainId !== SEPOLIA_CHAIN_ID) return switchNetwork();
    const isUsdc = token === "USDC";
    isUsdc ? setIsClaimingUsdc(true) : setIsClaimingDai(true);
    try {
      const provider = getProvider();
      const signer = await provider.getSigner();
      // @ts-ignore
      const faucet = new (window as any).ethers.Contract(FAUCET_ADDRESS, FAUCET_ABI, signer);
      const tokenAddr = isUsdc ? USDC_ADDRESS : DAI_ADDRESS;
      const tx = await faucet.claim(tokenAddr, { gasLimit: 200000 });
      addToast(`${t.toast.minting} 100 ${token}...`, "info");
      addTransaction({ type: "Faucet", desc: `Mint 100 ${token}`, amount: "100", token: token, hash: tx.hash });
      if (isUsdc) setUsdcBalance((prev) => (parseFloat(prev) + 100).toFixed(4));
      else setDaiBalance((prev) => (parseFloat(prev) + 100).toFixed(4));
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
    if (parseFloat(ethBalance) < 0.0001) return addToast("Insufficient ETH for gas fees.", "error");
    setIsSwapping(true);
    try {
      const provider = getProvider();
      const signer = await provider.getSigner();
      const currentBal = fromToken.symbol === "ETH" ? ethBalance : fromToken.symbol === "USDC" ? usdcBalance : daiBalance;
      if (parseFloat(currentBal || "0") < parseFloat(fromAmount)) {
        throw new Error(`Insufficient ${fromToken.symbol} balance.`);
      }
      let isSimulation = false;
      let realBalance = BigInt(0);
      let amountIn;
      let decimals = fromToken.decimals;
      if (fromToken.symbol === "ETH") {
        realBalance = await provider.getBalance(account);
        // @ts-ignore
        amountIn = (window as any).ethers.parseUnits(fromAmount, 18);
      } else {
        const tokenAddress = TOKEN_ADDRESSES[fromToken.symbol];
        if (!tokenAddress) throw new Error("Unsupported token");
        // @ts-ignore
        const tokenContract = new (window as any).ethers.Contract(tokenAddress, ERC20_ABI, signer);
        realBalance = await tokenContract.balanceOf(account);
        try {
          // @ts-ignore
          amountIn = (window as any).ethers.parseUnits(fromAmount, decimals);
        } catch (e) {
          console.warn("Decimal parse error, defaulting to 18");
          // @ts-ignore
          amountIn = (window as any).ethers.parseUnits(fromAmount, 18);
        }
      }
      // @ts-ignore
      if (realBalance < amountIn) {
        console.log("Insufficient On-Chain Funds. Switching to Simulation Mode.");
        isSimulation = true;
      }
      let txHash = "";
      if (isSimulation) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        txHash = "0xSIMULATED_" + Math.random().toString(36).substr(2, 8);
        addToast(t.toast.demo, "info");
      } else {
        let tx;
        if (fromToken.symbol === "ETH") {
          tx = await signer.sendTransaction({ to: MOCK_POOL_ADDRESS, value: amountIn, gasLimit: 100000 });
        } else {
          const tokenAddress = TOKEN_ADDRESSES[fromToken.symbol];
          // @ts-ignore
          const tokenContract = new (window as any).ethers.Contract(tokenAddress, ERC20_ABI, signer);
          tx = await tokenContract.transfer(MOCK_POOL_ADDRESS, amountIn, { gasLimit: 150000 });
        }
        txHash = tx.hash;
      }
      const amountFloat = parseFloat(fromAmount);
      const toAmountFloat = parseFloat(toAmount);
      if (fromToken.symbol === "ETH") setEthBalance((prev) => Math.max(0, parseFloat(prev) - amountFloat).toFixed(4));
      else if (fromToken.symbol === "USDC") setUsdcBalance((prev) => Math.max(0, parseFloat(prev) - amountFloat).toFixed(4));
      else if (fromToken.symbol === "DAI") setDaiBalance((prev) => Math.max(0, parseFloat(prev) - amountFloat).toFixed(4));
      if (toToken.symbol === "ETH") setEthBalance((prev) => (parseFloat(prev) + toAmountFloat).toFixed(4));
      else if (toToken.symbol === "USDC") setUsdcBalance((prev) => (parseFloat(prev) + toAmountFloat).toFixed(4));
      else if (toToken.symbol === "DAI") setDaiBalance((prev) => (parseFloat(prev) + toAmountFloat).toFixed(4));
      setLastTxHash(txHash);
      addTransaction({ type: "Swap", desc: `Swap ${fromToken.symbol} for ${toToken.symbol}`, amount: fromAmount, token: fromToken.symbol, hash: txHash });
      addToast(t.toast.swapSuccess, "success");
      if (!isSimulation) {
        // @ts-ignore
        const provider = getProvider();
        await provider.waitForTransaction(txHash);
        fetchBalances();
      }
    } catch (err: any) {
      console.error(err);
      if (err.code === "ACTION_REJECTED") addToast(t.toast.rejected, "info");
      else addToast("Swap failed. " + (err.reason || err.message), "error");
    } finally {
      setIsSwapping(false);
    }
  };

  const handleSwitchTokens = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    if (fromAmount) {
      const num = Number(fromAmount);
      const fp = prices[toToken.symbol];
      const tp = prices[fromToken.symbol];
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
    return TOKENS.filter((t) => t.symbol.toLowerCase().includes(q) || t.name.toLowerCase().includes(q));
  }, [tokenSearch]);

  const rateText = useMemo(() => {
    const fp = prices[fromToken.symbol];
    const tp = prices[toToken.symbol];
    const rate = fp / tp;
    return `1 ${fromToken.symbol} = ${rate.toFixed(4)} ${toToken.symbol}`;
  }, [fromToken, toToken, prices]);

  const balancesBySymbol: Record<string, string> = { ETH: ethBalance, USDC: usdcBalance, DAI: daiBalance, WBTC: "0" };

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
    <div className="min-h-screen bg-[#020308] text-slate-100 font-sans selection:bg-emerald-400/30 relative overflow-x-hidden" onClick={closeAllDropdowns}>
      {/* Background FX */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#020308]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1800px] h-[1800px] bg-[radial-gradient(circle,rgba(16,185,129,0.28),transparent_72%)] blur-[220px] opacity-65" />
        <div className="absolute top-[18%] left-[10%] w-[1100px] h-[780px] bg-[radial-gradient(circle,rgba(6,182,212,0.40),transparent_72%)] blur-[160px] opacity-70" />
        <div className="absolute top-[22%] right-[6%] w-[820px] h-[720px] bg-[radial-gradient(circle,rgba(52,211,153,0.36),transparent_72%)] blur-[160px] opacity-60" />
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[1900px] h-[780px] bg-[radial-gradient(circle,rgba(15,23,42,0.95),transparent_70%)] blur-[200px] opacity-90" />
        <div className="absolute inset-0 opacity-[0.055] mix-blend-screen bg-[size:48px_48px]" style={{backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)"}} />
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,0.78))] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.06] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat mix-blend-soft-light" />
      </div>

      {/* Toasts */}
      <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <div key={toast.id} className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border backdrop-blur-xl animate-in slide-in-from-right-full duration-300 ${toast.type === "success" ? "bg-[#050b14]/90 border-cyan-500/30 text-cyan-400" : toast.type === "error" ? "bg-[#050b14]/90 border-rose-500/30 text-rose-400" : "bg-[#050b14]/90 border-purple-500/30 text-purple-300"}`}>
            <div className={`w-1.5 h-1.5 rounded-full shadow-[0_0_10px_currentColor] ${toast.type === "success" ? "bg-cyan-400" : toast.type === "error" ? "bg-rose-500" : "bg-purple-400"}`} />
            <span className="text-xs font-bold tracking-wide uppercase">{toast.msg}</span>
          </div>
        ))}
      </div>

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#02040a]/90 backdrop-blur-xl">
        <div className="w-full px-4 lg:px-10 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center">
            <button type="button" onClick={() => setActiveNav("Trade")} className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#050910] border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-cyan-500/70 transition">
                <EdgeSwapLogo />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),transparent_60%)] transition-opacity" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm md:text-base tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-500 transition-all">EdgeSwap</span>
                  <span className="text-[10px] md:text-[14px] font-semibold px-1.5 py-0.5 rounded-full border border-emerald-500/40 text-emerald-300/90 bg-emerald-500/10 uppercase tracking-[0.18em]">PRO</span>
                </div>
                <span className="hidden md:flex text-[10px] font-medium text-slate-500 tracking-[0.22em] uppercase items-center gap-1"><span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />L2 Dex Terminal</span>
              </div>
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center bg-[#050910] px-1.5 py-1 rounded-xl border border-white/5 shadow-sm">
              {(["Trade", "Bridge", "Pools", "Portfolio", "Launchpad"] as NavItem[]).map((item) => (
                <button key={item} onClick={() => setActiveNav(item)} className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-200 ${activeNav === item ? "text-white bg-gradient-to-r from-cyan-500/25 to-violet-500/25 border border-cyan-500/40 shadow-[0_0_18px_rgba(34,211,238,0.35)]" : "text-slate-400 hover:text-cyan-300 hover:bg-white/5"}`}>{t.nav[item.toLowerCase() as keyof typeof t.nav]}</button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button onClick={() => setIsLangModalOpen(true)} className="flex items-center gap-2 text-[10px] font-semibold text-slate-300 hover:text-cyan-400 px-3 py-1.5 border border-white/10 rounded-lg bg-[#050910] uppercase tracking-[0.1em] hover:bg-white/5 transition">
                <span className="text-base">{LANGUAGES.find(l => l.code === lang)?.flag}</span>
                <span className="hidden sm:inline">{LANGUAGES.find(l => l.code === lang)?.name}</span>
            </button>
            <button onClick={switchNetwork} className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#050910] border border-white/5 hover:border-cyan-500/40 transition text-[11px] font-mono">
              <span className={`w-1.5 h-1.5 rounded-full shadow-[0_0_8px_currentColor] ${chainId === SEPOLIA_CHAIN_ID ? "bg-emerald-400 text-emerald-400" : "bg-rose-500 text-rose-500"}`} />
              <span className="text-slate-300">{chainId === SEPOLIA_CHAIN_ID ? "Sepolia" : t.wallet.wrongNet}</span>
            </button>
            {!account ? (
              <button onClick={(e) => { e.stopPropagation(); setIsWalletModalOpen(true); }} disabled={isConnecting} className="px-3 md:px-5 py-2 md:py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-[10px] md:text-xs uppercase tracking-[0.18em] hover:from-cyan-400 hover:to-blue-500 transition shadow-lg shadow-cyan-500/25 border border-white/10 disabled:opacity-60">{isConnecting ? t.wallet.connecting : t.wallet.connect}</button>
            ) : (
              <button onClick={(e) => { e.stopPropagation(); disconnectWallet(); }} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#050910] border border-cyan-500/30 hover:border-violet-500/50 transition text-[10px] md:text-[11px] font-mono shadow-[0_0_14px_rgba(34,211,238,0.3)]"><div className="w-3 h-3 md:w-4 md:h-4 rounded-md bg-gradient-to-tr from-cyan-400 to-violet-500" /><span className="text-cyan-100">{account.slice(0, 4)}...{account.slice(-4)}</span></button>
            )}
            <button onClick={resetDemo} className="hidden md:block p-1.5 text-[10px] text-slate-500 hover:text-rose-500 transition border border-transparent hover:border-rose-900/40 rounded-lg" title="Reset Demo">RST</button>
          </div>
        </div>
      </nav>

      <main className="w-full max-w-[1440px] mx-auto px-4 py-6 md:py-8 flex justify-center relative z-10 pb-24 md:pb-8 min-h-screen">
        {activeNav === "Trade" && (
          <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 animate-in fade-in slide-in-from-bottom-6 duration-500">
              <div className="flex flex-col gap-4 h-full order-2 lg:order-1">
                <div className="flex-1 flex flex-col bg-[#050910]/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl min-h-[350px] lg:min-h-[480px] relative">
                  
                  <div className="px-4 md:px-5 py-3 md:py-4 border-b border-white/5 flex justify-between items-center bg-black/40">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="flex -space-x-3">
                        <div className="w-7 h-7 md:w-9 md:h-9 rounded-full border-4 border-[#050910] shadow-md bg-[#0b1220] flex items-center justify-center scale-90 md:scale-100">{fromToken.icon}</div>
                        <div className="w-7 h-7 md:w-9 md:h-9 rounded-full border-4 border-[#050910] shadow-md bg-[#0b1220] flex items-center justify-center scale-90 md:scale-100">{toToken.icon}</div>
                      </div>
                      <div>
                        <div className="text-sm md:text-lg font-semibold text-white flex items-center gap-2">{fromToken.symbol}<span className="text-slate-600">/</span>{toToken.symbol}<span className="hidden sm:inline-block text-[9px] font-semibold text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/25 uppercase tracking-[0.16em]">V3 CORE</span></div>
                        <div className="flex items-center gap-2 mt-0.5 md:mt-1"><span className="text-lg md:text-2xl font-mono text-white font-semibold tracking-tight">{rateText.split("=")[1]}</span><span className="text-lime-400 text-[9px] md:text-[11px] font-semibold bg-lime-500/10 px-1.5 py-0.5 rounded-full border border-lime-500/30 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />+1.24%</span></div>
                      </div>
                    </div>
                    
                    <div className="hidden sm:flex gap-1.5 bg-[#050910] px-1.5 py-1 rounded-xl border border-white/5">
                      {["1H", "1D", "1W", "1M"].map((tf) => (
                        <button key={tf} onClick={() => setChartTimeframe(tf as any)} className={`px-3 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wide transition ${chartTimeframe === tf ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/40" : "text-slate-500 hover:text-slate-200 hover:bg-white/5"}`}>{tf}</button>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 relative cursor-crosshair overflow-hidden min-h-[250px]">
                    <svg className="w-full h-full absolute inset-0" viewBox="0 0 800 400" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#22c1c3" stopOpacity="0.3" /><stop offset="100%" stopColor="#1d2a3f" stopOpacity="0" /></linearGradient>
                        <filter id="chartGlow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4" result="coloredBlur" /><feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                      </defs>
                      <path d={CHART_PATHS[chartTimeframe] || CHART_PATHS["1D"]} fill="url(#chartGradient)" />
                      <path d={CHART_PATHS[`${chartTimeframe}_Line` as keyof typeof CHART_PATHS] || CHART_PATHS["1D_Line"]} fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" filter="url(#chartGlow)" />
                    </svg>
                  </div>
                </div>
                <div className="hidden md:block">
                    <RecentTrades />
                </div>
              </div>
              <div className="flex flex-col gap-4 order-1 lg:order-2">
                <div className="rounded-2xl border border-white/10 bg-[#050910]/95 backdrop-blur-xl p-4 lg:p-6 shadow-2xl flex flex-col relative overflow-hidden h-fit">
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-400 opacity-70" />
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-1 bg-[#050910] px-1.5 py-1 rounded-xl border border-white/5">
                      <button onClick={() => setActiveTab("swap")} className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${activeTab === "swap" ? "bg-white text-slate-900 shadow-sm" : "text-slate-400 hover:text-white hover:bg-white/5"}`}>Swap</button>
                      <button onClick={() => setActiveTab("limit")} className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${activeTab === "limit" ? "bg-white text-slate-900 shadow-sm" : "text-slate-400 hover:text-white hover:bg-white/5"}`}>Limit</button>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={(e) => { e.stopPropagation(); setIsSettingsOpen(!isSettingsOpen); }} className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-300 bg-[#050910] px-2.5 py-1.5 rounded-lg border border-white/10 hover:border-cyan-500/40 hover:text-cyan-300 transition"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.9)]" />{slippage}%</button>
                      <button onClick={(e) => { e.stopPropagation(); setIsSettingsOpen(!isSettingsOpen); }} className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition"><SettingsIcon /></button>
                    </div>
                  </div>
                  {isSettingsOpen && (
                    <div className="absolute top-16 right-4 bg-[#131823] border border-white/10 rounded-xl p-4 z-50 shadow-2xl w-64 animate-in fade-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
                      <h4 className="text-xs font-bold text-white mb-3 uppercase tracking-wider text-slate-400">Slippage Tolerance</h4>
                      <div className="flex gap-2">
                        {[0.1, 0.5, 1.0].map((val) => (<button key={val} onClick={() => setSlippage(val)} className={`flex-1 py-2 rounded-lg text-xs font-bold transition border ${slippage === val ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/50" : "bg-black/40 text-slate-400 border-white/5 hover:border-white/20"}`}>{val}%</button>))}
                      </div>
                    </div>
                  )}
                  {activeTab === "swap" ? (
                    <div className="flex flex-col h-full">
                      <div className="space-y-2 relative">
                        <SwapInput label={t.swap.pay} token={fromToken} amount={fromAmount} onChange={handleFromAmountChange} onSelectToken={() => { setIsFromOpen(true); setTokenSearch(""); }} balance={balancesBySymbol[fromToken.symbol]} onMax={() => handleFromAmountChange(balancesBySymbol[fromToken.symbol])} />
                        <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
                          <div className="bg-[#080c14] p-1.5 rounded-xl border border-white/10 shadow-xl">
                            <div onClick={handleSwitchTokens} className="bg-[#1b1f26] p-2 rounded-lg hover:bg-[#2a2f3a] cursor-pointer transition-colors text-purple-400 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)]"><ArrowDownIcon /></div>
                          </div>
                        </div>
                        <SwapInput label={t.swap.receive} token={toToken} amount={toAmount} readOnly onSelectToken={() => { setIsToOpen(true); setTokenSearch(""); }} balance={balancesBySymbol[toToken.symbol]} />
                      </div>
                      {fromAmount && (
                        <div className="mt-4 px-4 py-4 rounded-xl border border-white/5 bg-[#0b0f16] text-xs space-y-3">
                          <div className="flex justify-between text-slate-400"><span className="flex items-center gap-1 hover:text-white cursor-help"><InfoIcon /> {t.swap.rate}</span><span className="text-cyan-100 font-mono font-medium">{rateText}</span></div>
                          <div className="flex justify-between text-slate-400"><span className="flex items-center gap-1 hover:text-white cursor-help"><GasIcon /> {t.swap.cost}</span><span className="text-white font-mono font-medium">~$0.45 <span className="text-slate-500">(~12 Gwei)</span></span></div>
                          <div className="flex justify-between text-slate-400 pt-3 border-t border-white/5 mt-1"><span className="flex items-center gap-1">{t.swap.min}</span><span className="text-white font-mono font-medium">{(parseFloat(toAmount) * (1 - slippage / 100)).toFixed(4)} {toToken.symbol}</span></div>
                        </div>
                      )}
                      <div className="mt-auto pt-6">
                        <button onClick={handleSwap} disabled={!fromAmount || isSwapping} className="group w-full py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold text-lg tracking-wide transition-all disabled:opacity-50 disabled:from-slate-800 disabled:to-slate-800 disabled:text-slate-500 shadow-lg shadow-purple-900/20 hover:shadow-cyan-500/20 active:scale-[0.99] relative overflow-hidden">
                          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 blur-md"></div>
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            {isSwapping ? <>{t.swap.processing}</> : !fromAmount ? t.swap.enter : t.swap.button}
                          </span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="h-96 flex flex-col items-center justify-center text-slate-500 text-sm">
                      <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-4 text-3xl border border-white/5">🚧</div>
                      <span className="font-bold text-white text-lg">Limit Orders</span>
                    </div>
                  )}
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#050910]/80 backdrop-blur-xl px-5 py-4 shadow-lg hidden md:block">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/5 opacity-70 pointer-events-none" />
                    <div className="relative z-10 flex items-center justify-between">
                      <div><div className="text-[11px] uppercase tracking-[0.18em] text-slate-500 font-semibold">Your Session</div><div className="mt-1 text-xl font-bold text-white font-mono">{transactions.length} tx</div></div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeNav === "Bridge" && <BridgeView addTransaction={addTransaction} addToast={addToast} />}
        {activeNav === "Pools" && <PoolsView t={t} userPositions={userPositions} onAddLiquidity={() => { setActiveNav("Trade"); setActiveTab("swap"); }} />}
        {activeNav === "Portfolio" && <PortfolioView t={t} balances={balancesBySymbol} transactions={transactions} onClaim={handleClaim} isClaimingUsdc={isClaimingUsdc} isClaimingDai={isClaimingDai} />}
        {activeNav === "Launchpad" && <LaunchpadView />}
      </main>

      {/* MOBILE NAV */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#02040a]/95 backdrop-blur-2xl border-t border-white/10 z-50 md:hidden pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="flex justify-around items-center p-2">
          {(["Trade", "Bridge", "Pools", "Portfolio", "Launchpad"] as NavItem[]).map((item) => {
            const isActive = activeNav === item;
            return (
              <button
                key={item}
                onClick={() => setActiveNav(item)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-2xl transition-all duration-300 ${isActive ? "text-cyan-400 bg-cyan-500/10" : "text-slate-500 hover:text-slate-300"}`}
              >
                <div className={`transition-transform duration-300 ${isActive ? "scale-110" : "scale-100"}`}>
                  {item === "Trade" && <NavTradeIcon />}
                  {item === "Bridge" && <NavBridgeIcon />}
                  {item === "Pools" && <NavPoolsIcon />}
                  {item === "Portfolio" && <NavPortfolioIcon />}
                  {item === "Launchpad" && <NavLaunchpadIcon />}
                </div>
                <span className="text-[9px] font-bold tracking-wide uppercase">{item === "Portfolio" ? "Assets" : t.nav[item.toLowerCase() as keyof typeof t.nav]}</span>
              </button>
            )
          })}
        </div>
      </div>

      {isWalletModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-200" onClick={() => setIsWalletModalOpen(false)}>
              <div className="bg-[#0d111c] border border-white/10 rounded-2xl w-full max-w-sm p-6 shadow-2xl relative" onClick={e => e.stopPropagation()}>
                  <button onClick={() => setIsWalletModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white">✕</button>
                  <h3 className="text-xl font-bold text-white mb-6">Connect Wallet</h3>
                  <div className="space-y-3">
                      {['MetaMask', 'Rainbow', 'Coinbase Wallet', 'WalletConnect'].map(w => (
                          <button key={w} onClick={connectWallet} className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 transition group">
                              <span className="font-semibold text-slate-200 group-hover:text-white">{w}</span>
                              <div className="w-6 h-6 rounded-full bg-slate-700"></div>
                          </button>
                      ))}
                  </div>
                  <p className="text-center text-[10px] text-slate-500 mt-6">By connecting, you agree to our Terms of Service.</p>
              </div>
          </div>
      )}

      {isLangModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-200" onClick={() => setIsLangModalOpen(false)}>
          <div className="w-full max-w-xs bg-[#0d111c] border border-white/10 rounded-2xl p-0 shadow-2xl shadow-cyan-500/10 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="p-5 border-b border-white/5 flex justify-between items-center">
              <h3 className="font-bold text-lg text-white">Dil Seçin / Select Language</h3>
              <button onClick={() => setIsLangModalOpen(false)} className="text-slate-400 hover:text-white bg-white/5 p-1.5 rounded-lg transition hover:bg-white/10">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto p-2 custom-scrollbar max-h-[60vh]">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setIsLangModalOpen(false); }}
                  className={`w-full flex items-center justify-between p-3 hover:bg-white/5 rounded-xl transition text-left group border border-transparent ${lang === l.code ? "bg-cyan-500/10 border-cyan-500/30" : "hover:border-white/5"}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{l.flag}</span>
                    <span className={`font-bold ${lang === l.code ? "text-cyan-400" : "text-white group-hover:text-cyan-300"} transition-colors`}>{l.name}</span>
                  </div>
                  {lang === l.code && <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_currentColor]" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {(isFromOpen || isToOpen) && <TokenModal onClose={closeAllDropdowns} tokens={filteredTokens} onSelect={isFromOpen ? setFromToken : setToToken} search={tokenSearch} setSearch={setTokenSearch} />}
    </div>
  );
}

// --- SUB COMPONENTS ---

const RecentTrades = () => {
  const trades = [
    { price: 3050.22, size: 0.45, time: "12:04:45", type: "buy" },
    { price: 3050.18, size: 1.20, time: "12:04:42", type: "sell" },
    { price: 3050.25, size: 0.05, time: "12:04:38", type: "buy" },
    { price: 3050.30, size: 2.50, time: "12:04:35", type: "buy" },
    { price: 3049.95, size: 0.88, time: "12:04:30", type: "sell" },
    { price: 3049.80, size: 0.12, time: "12:04:22", type: "sell" },
  ];

  return (
    <div className="bg-[#050910]/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-xl flex-1 min-h-[200px]">
        <div className="px-4 py-3 border-b border-white/5 bg-black/40 flex justify-between items-center">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Market Trades</h3>
        </div>
        <div className="grid grid-cols-3 px-4 py-2 text-[10px] text-slate-500 font-mono uppercase">
            <div className="text-left">Price</div>
            <div className="text-right">Size</div>
            <div className="text-right">Time</div>
        </div>
        <div className="divide-y divide-white/5">
            {trades.map((t, i) => (
                <div key={i} className="grid grid-cols-3 px-4 py-1.5 text-[11px] font-mono hover:bg-white/5 transition-colors">
                    <span className={t.type === 'buy' ? 'text-emerald-400' : 'text-rose-400'}>{t.price.toFixed(2)}</span>
                    <span className="text-slate-300 text-right">{t.size.toFixed(2)}</span>
                    <span className="text-slate-500 text-right">{t.time}</span>
                </div>
            ))}
        </div>
    </div>
  );
};

const BridgeView = ({ addTransaction, addToast }: { addTransaction: (tx: any) => void, addToast: (msg: string, type?: "success" | "error" | "info") => void }) => {
    const [fromNetwork, setFromNetwork] = useState(NETWORKS[0]);
    const [toNetwork, setToNetwork] = useState(NETWORKS[5]);
    const [amount, setAmount] = useState("");
    const [activeTab, setActiveTab] = useState<'transfer' | 'history'>('transfer');
    const [isBridging, setIsBridging] = useState(false);
    const [isFromNetworkOpen, setIsFromNetworkOpen] = useState(false);
    const [isToNetworkOpen, setIsToNetworkOpen] = useState(false);
    const [localHistory, setLocalHistory] = useState<any[]>([]);

    const handleSwitch = () => {
        setFromNetwork(toNetwork);
        setToNetwork(fromNetwork);
    };
    
    const handleBridge = () => {
        if (!amount || parseFloat(amount) <= 0) return;
        setIsBridging(true);
        
        setTimeout(() => {
            const newTx = {
                id: Date.now().toString(),
                from: fromNetwork.name,
                to: toNetwork.name,
                amount: amount,
                timestamp: Date.now(),
                status: "Success"
            };
            
            setLocalHistory([newTx, ...localHistory]);
            addTransaction({
                type: "Bridge",
                desc: `Bridge ${fromNetwork.name} -> ${toNetwork.name}`,
                amount: amount,
                token: "ETH"
            });
            addToast(`Successfully bridged ${amount} ETH to ${toNetwork.name}`, "success");
            setIsBridging(false);
            setAmount("");
        }, 3000);
    };

    return (
        <div className="w-full max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="flex justify-center mb-6">
                <div className="flex bg-black/40 p-1 rounded-xl border border-white/10">
                    <button onClick={() => setActiveTab('transfer')} className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${activeTab === 'transfer' ? 'bg-white text-black shadow-lg' : 'text-slate-400 hover:text-white'}`}>Transfer</button>
                    <button onClick={() => setActiveTab('history')} className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${activeTab === 'history' ? 'bg-white text-black shadow-lg' : 'text-slate-400 hover:text-white'}`}>History</button>
                </div>
             </div>

            {activeTab === 'transfer' ? (
                <div className="bg-[#050910]/95 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-emerald-500/5 opacity-50 pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col gap-4">
                        <div className="bg-[#0f151f] rounded-2xl p-5 border border-white/5 transition hover:border-white/10 group">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">From Network</span>
                                <span className="text-[10px] text-slate-500">Balance: 4.20 ETH</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <button 
                                    onClick={() => setIsFromNetworkOpen(true)}
                                    className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-xl border border-white/10 hover:border-blue-500/50 transition min-w-[140px]"
                                >
                                    <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
                                        {fromNetwork.icon}
                                    </div>
                                    <span className="text-sm font-bold text-white">{fromNetwork.name}</span>
                                    <ArrowDownIcon size={14} className="ml-auto text-slate-500" />
                                </button>
                                <div className="flex-1 relative">
                                    <input 
                                        type="number" 
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        placeholder="0.0" 
                                        className="w-full bg-transparent text-right text-2xl font-mono text-white placeholder:text-slate-700 outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="relative h-12 flex items-center justify-center">
                            <div className="absolute inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                             <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center gap-8 opacity-30">
                                <div className="w-1 h-1 bg-blue-400 rounded-full animate-[ping_1.5s_linear_infinite]"></div>
                                <div className="w-1 h-1 bg-purple-400 rounded-full animate-[ping_1.5s_linear_infinite_0.5s]"></div>
                                <div className="w-1 h-1 bg-emerald-400 rounded-full animate-[ping_1.5s_linear_infinite_1s]"></div>
                             </div>

                            <button onClick={handleSwitch} className="relative z-10 w-10 h-10 bg-[#0d111c] rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:scale-110 transition shadow-xl group">
                                <ArrowDownIcon className="group-hover:rotate-180 transition-transform duration-300" />
                            </button>
                        </div>

                        <div className="bg-[#0f151f] rounded-2xl p-5 border border-white/5 transition hover:border-white/10">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">To Network</span>
                                <span className="text-[10px] text-slate-500">You Receive</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <button 
                                    onClick={() => setIsToNetworkOpen(true)}
                                    className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-xl border border-white/10 hover:border-purple-500/50 transition min-w-[140px]"
                                >
                                    <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
                                        {toNetwork.icon}
                                    </div>
                                    <span className="text-sm font-bold text-white">{toNetwork.name}</span>
                                    <ArrowDownIcon size={14} className="ml-auto text-slate-500" />
                                </button>
                                <div className="flex-1 text-right">
                                    <span className={`text-2xl font-mono ${amount ? 'text-emerald-400' : 'text-slate-700'}`}>
                                        {amount ? (parseFloat(amount) * 0.998).toFixed(4) : '0.0'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-white/5 rounded-xl p-4 border border-white/5 space-y-3">
                        <div className="flex justify-between items-center text-[11px]">
                            <span className="text-slate-400 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Best Route
                            </span>
                            <span className="text-white font-bold flex items-center gap-2">
                                Stargate <span className="text-slate-600">via</span> LayerZero
                            </span>
                        </div>
                         <div className="h-px bg-white/5 w-full"></div>
                        <div className="grid grid-cols-3 gap-4 text-[10px]">
                             <div>
                                <div className="text-slate-500 mb-1">Est. Time</div>
                                <div className="text-slate-200 font-mono">~3s (Simulated)</div>
                             </div>
                             <div className="text-center">
                                <div className="text-slate-500 mb-1">Gas Cost</div>
                                <div className="text-slate-200 font-mono">~$1.45</div>
                             </div>
                             <div className="text-right">
                                <div className="text-slate-500 mb-1">Slippage</div>
                                <div className="text-emerald-400 font-mono">0.05%</div>
                             </div>
                        </div>
                    </div>

                    <button 
                        disabled={!amount || isBridging}
                        onClick={handleBridge}
                        className="w-full mt-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold uppercase tracking-widest hover:from-blue-500 hover:to-purple-500 transition disabled:opacity-50 shadow-lg shadow-blue-500/20 relative overflow-hidden"
                    >
                        {isBridging ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                Bridging Assets...
                            </span>
                        ) : "Bridge Assets"}
                    </button>
                </div>
            ) : (
                <div className="bg-[#050910]/95 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-6 min-h-[400px]">
                     {localHistory.length === 0 ? (
                         <div className="flex flex-col items-center justify-center text-center h-full py-12">
                             <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 text-2xl grayscale opacity-50">📜</div>
                             <h3 className="text-white font-bold text-sm mb-1">No Bridge History</h3>
                             <p className="text-xs text-slate-500 max-w-[200px]">Your recent cross-chain transactions will appear here.</p>
                         </div>
                     ) : (
                         <div className="space-y-3">
                             {localHistory.map(tx => (
                                 <div key={tx.id} className="bg-white/5 p-3 rounded-xl border border-white/5 flex justify-between items-center">
                                     <div>
                                         <div className="text-white font-bold text-sm">{tx.from} <span className="text-slate-500">→</span> {tx.to}</div>
                                         <div className="text-xs text-slate-500">{new Date(tx.timestamp).toLocaleTimeString()}</div>
                                     </div>
                                     <div className="text-right">
                                         <div className="text-emerald-400 font-mono font-bold">{tx.amount} ETH</div>
                                         <div className="text-[10px] text-emerald-500/80 bg-emerald-500/10 px-1.5 py-0.5 rounded inline-block mt-1">Completed</div>
                                     </div>
                                 </div>
                             ))}
                         </div>
                     )}
                </div>
            )}

            {(isFromNetworkOpen || isToNetworkOpen) && (
                <NetworkModal 
                    onClose={() => { setIsFromNetworkOpen(false); setIsToNetworkOpen(false); }} 
                    networks={NETWORKS}
                    onSelect={(net: any) => {
                        if (isFromNetworkOpen) setFromNetwork(net);
                        if (isToNetworkOpen) setToNetwork(net);
                    }}
                />
            )}
        </div>
    );
};

// ADDED MISSING COMPONENTS (Resolves 9+ Errors)

const PoolsView = ({ t, userPositions, onAddLiquidity }: { t: any, userPositions: any[], onAddLiquidity: () => void }) => {
  return (
    <div className="w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">{t.pool.title}</h2>
          <p className="text-slate-400 text-sm">{t.pool.subtitle}</p>
        </div>
        <button onClick={onAddLiquidity} className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-bold py-2 px-4 rounded-xl text-sm transition shadow-lg shadow-emerald-500/20">{t.pool.newPos}</button>
      </div>

      <div className="bg-[#050910]/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-xl">
        <div className="px-6 py-4 border-b border-white/5 bg-black/20">
          <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">{t.pool.yourPos}</h3>
        </div>
        {userPositions.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-sm">No active positions found.</div>
        ) : (
          <div className="divide-y divide-white/5">
            {userPositions.map((pos, i) => (
              <div key={i} className="p-4 flex justify-between items-center hover:bg-white/5 transition">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center border-2 border-[#050910] text-[10px]">{pos.pair[0]}</div>
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center border-2 border-[#050910] text-[10px]">{pos.pair[1]}</div>
                  </div>
                  <span className="font-bold text-white">{pos.pair.join("/")}</span>
                </div>
                <div className="text-right">
                  <div className="text-white font-mono">{pos.amountA} / {pos.amountB}</div>
                  <div className="text-xs text-emerald-400">APR: {pos.apr}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-[#050910]/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-xl">
        <div className="grid grid-cols-4 px-6 py-4 border-b border-white/5 bg-black/20 text-xs font-bold text-slate-400 uppercase tracking-wider">
          <div>{t.pool.table.pool}</div>
          <div className="text-right">{t.pool.table.tvl}</div>
          <div className="text-right">{t.pool.table.vol}</div>
          <div className="text-right">{t.pool.table.apr}</div>
        </div>
        <div className="divide-y divide-white/5">
          {POPULAR_POOLS.map((pool) => (
            <div key={pool.id} className="grid grid-cols-4 px-6 py-4 hover:bg-white/5 transition items-center cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-[#050910]"></div>
                  <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-[#050910]"></div>
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-cyan-400 transition">{pool.pair.join("/")}</div>
                  <div className="text-[10px] text-slate-500 bg-white/5 px-1.5 py-0.5 rounded inline-block">{pool.fee}</div>
                </div>
              </div>
              <div className="text-right text-slate-300 font-mono">{pool.tvl}</div>
              <div className="text-right text-slate-300 font-mono">{pool.vol}</div>
              <div className="text-right text-emerald-400 font-bold">{pool.apr}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PortfolioView = ({ t, balances, transactions, onClaim, isClaimingUsdc, isClaimingDai }: any) => {
  const totalBalance = (parseFloat(balances.ETH) * 3050.24 + parseFloat(balances.USDC) + parseFloat(balances.DAI)).toFixed(2);

  return (
    <div className="w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-gradient-to-br from-violet-900/40 to-[#050910] backdrop-blur-xl rounded-2xl border border-white/10 p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          <h2 className="text-slate-400 text-sm font-medium mb-1">{t.portfolio.title}</h2>
          <div className="text-4xl font-bold text-white tracking-tight mb-6">${totalBalance}</div>
          <div className="flex gap-3">
            <button className="flex-1 bg-white text-black font-bold py-2.5 rounded-xl hover:bg-slate-200 transition">Deposit</button>
            <button className="flex-1 bg-white/10 text-white font-bold py-2.5 rounded-xl hover:bg-white/20 transition">Withdraw</button>
          </div>
        </div>
        <div className="bg-[#050910] backdrop-blur-xl rounded-2xl border border-white/10 p-6 flex flex-col justify-center items-center text-center">
           <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-3">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
           </div>
           <h3 className="font-bold text-white mb-1">{t.portfolio.faucet}</h3>
           <p className="text-xs text-slate-500 mb-4">{t.portfolio.faucetDesc}</p>
           <div className="flex gap-2 w-full">
             <button onClick={() => onClaim("USDC")} disabled={isClaimingUsdc} className="flex-1 py-2 text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-lg hover:bg-blue-500/30 transition disabled:opacity-50">{isClaimingUsdc ? "..." : "+ USDC"}</button>
             <button onClick={() => onClaim("DAI")} disabled={isClaimingDai} className="flex-1 py-2 text-xs font-bold bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 rounded-lg hover:bg-yellow-500/30 transition disabled:opacity-50">{isClaimingDai ? "..." : "+ DAI"}</button>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#050910]/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5 bg-black/20 font-bold text-white">{t.portfolio.assets}</div>
          <div className="divide-y divide-white/5">
            {Object.entries(balances).map(([symbol, bal]: any) => (
              <div key={symbol} className="p-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
                    {TOKENS.find(t => t.symbol === symbol)?.icon}
                  </div>
                  <div>
                    <div className="font-bold text-white">{symbol}</div>
                    <div className="text-xs text-slate-500">${INITIAL_PRICES[symbol]}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-mono font-medium">{parseFloat(bal).toFixed(4)}</div>
                  <div className="text-xs text-slate-500">${(parseFloat(bal) * INITIAL_PRICES[symbol]).toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#050910]/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5 bg-black/20 font-bold text-white">{t.portfolio.history}</div>
          <div className="divide-y divide-white/5 max-h-[300px] overflow-y-auto custom-scrollbar">
            {transactions.length === 0 ? (
              <div className="p-8 text-center text-slate-500 text-sm">{t.portfolio.noTx}</div>
            ) : (
              transactions.map((tx: any) => (
                <div key={tx.id} className="p-4 flex justify-between items-center hover:bg-white/5 transition">
                  <div>
                    <div className="font-bold text-white text-sm">{tx.desc}</div>
                    <div className="text-xs text-slate-500">{new Date(tx.timestamp).toLocaleString()}</div>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${tx.status === 'Success' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-700 text-slate-400'}`}>{tx.status}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const LaunchpadView = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="w-full max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-white mb-2">Launchpad</h1>
        <p className="text-slate-400">Erken aşama projelere EdgeSwap güvencesiyle katılın.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {LAUNCHPAD_PROJECTS.map((project) => (
          <div key={project.id} className="bg-[#050910] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all group cursor-pointer hover:-translate-y-1 shadow-lg" onClick={() => setSelectedProject(project)}>
            <div className="h-32 bg-gradient-to-r from-slate-800 to-slate-900 relative">
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">
                {project.status === 'ongoing' ? <span className="text-emerald-400">● Live</span> : project.status === 'upcoming' ? <span className="text-yellow-400">● Soon</span> : <span className="text-slate-400">● Ended</span>}
              </div>
              <div className="absolute -bottom-6 left-6 w-16 h-16 bg-[#0d111c] rounded-xl border-4 border-[#050910] flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                {project.symbol[0]}
              </div>
            </div>
            <div className="pt-8 px-6 pb-6">
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition">{project.name}</h3>
              <p className="text-xs text-slate-500 mb-4 line-clamp-2">{project.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Raise Goal</span>
                  <span className="text-white font-mono font-bold">${project.raiseTarget.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Price</span>
                  <span className="text-white font-mono">${project.price}</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 h-full rounded-full" style={{ width: `${(project.raiseSoFar / project.raiseTarget) * 100}%` }}></div>
                </div>
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>{Math.round((project.raiseSoFar / project.raiseTarget) * 100)}% Funded</span>
                  <span>{project.raiseSoFar.toLocaleString()} / {project.raiseTarget.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                {project.tags.map(tag => <span key={tag} className="px-2 py-1 rounded bg-white/5 text-[10px] text-slate-300 font-medium">{tag}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && <LaunchpadDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
};

const NetworkModal = ({ onClose, networks, onSelect }: any) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-200" onClick={onClose}>
    <div className="w-full max-w-sm bg-[#0d111c] border border-white/10 rounded-2xl p-0 shadow-2xl shadow-cyan-500/10 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
      <div className="p-5 border-b border-white/5 flex justify-between items-center">
        <h3 className="font-bold text-lg text-white">Select Network</h3>
        <button onClick={onClose} className="text-slate-400 hover:text-white bg-white/5 p-1.5 rounded-lg transition hover:bg-white/10">✕</button>
      </div>
      <div className="flex-1 overflow-y-auto p-2 custom-scrollbar">
        {networks.map((n: any) => (
          <button key={n.id} onClick={() => { onSelect(n); onClose(); }} className="w-full flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl transition text-left group border border-transparent hover:border-white/5 cursor-pointer">
            <div className="w-8 h-8 rounded-full shadow-sm flex items-center justify-center bg-[#1b1f26] border border-white/5">{n.icon}</div>
            <div className="font-bold text-white group-hover:text-cyan-300 transition-colors">{n.name}</div>
          </button>
        ))}
      </div>
    </div>
  </div>
);

const TokenomicsChart = ({ data }: { data: any[] }) => {
    if (!data || data.length === 0) return <div className="h-32 flex items-center justify-center text-xs text-slate-500">No Data</div>;
    let accumulatedAngle = 0;
    const total = data.reduce((sum, item) => sum + item.value, 0);
    return (
        <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-32 h-32 shrink-0">
                <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                    {data.map((item, i) => {
                        const angle = (item.value / total) * 360;
                        const largeArc = angle > 180 ? 1 : 0;
                        const x1 = 50 + 40 * Math.cos((Math.PI * accumulatedAngle) / 180);
                        const y1 = 50 + 40 * Math.sin((Math.PI * accumulatedAngle) / 180);
                        const x2 = 50 + 40 * Math.cos((Math.PI * (accumulatedAngle + angle)) / 180);
                        const y2 = 50 + 40 * Math.sin((Math.PI * (accumulatedAngle + angle)) / 180);
                        const pathData = `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`;
                        accumulatedAngle += angle;
                        return <path key={i} d={pathData} fill={item.color} />;
                    })}
                    <circle cx="50" cy="50" r="25" fill="#0d111c" />
                </svg>
            </div>
            <div className="flex-1 space-y-1 w-full">
                {data.map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} /><span className="text-slate-300">{item.label}</span></div>
                        <span className="text-slate-400 font-mono">{item.value}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const LaunchpadDetailModal = ({ project, onClose }: { project: any, onClose: () => void }) => {
    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200 overflow-y-auto" onClick={onClose}>
            <div className="bg-[#0d111c] border border-white/10 rounded-3xl w-full max-w-4xl overflow-y-auto custom-scrollbar shadow-2xl relative my-auto max-h-[90vh]" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition z-10">✕</button>
                <div className="relative h-32 md:h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/40 via-purple-900/40 to-slate-900/90" />
                    <div className="absolute bottom-4 md:bottom-6 left-4 md:left-8 flex items-end gap-3 md:gap-4">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-black rounded-2xl border-2 border-white/10 flex items-center justify-center text-2xl md:text-3xl font-bold text-white shadow-xl">{project.symbol[0]}</div>
                        <div>
                            <h1 className="text-xl md:text-3xl font-black text-white tracking-tight">{project.name}</h1>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="px-2 py-0.5 rounded text-[9px] md:text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">{project.symbol}</span>
                                <span className="px-2 py-0.5 rounded text-[9px] md:text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">{project.chain}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-5 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    <div className="lg:col-span-2 space-y-6 md:space-y-8">
                        <section><h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Hakkında</h3><p className="text-slate-300 leading-relaxed text-sm">{project.description}</p></section>
                        <section className="bg-white/5 rounded-2xl p-4 md:p-6 border border-white/5"><h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Tokenomics</h3><TokenomicsChart data={project.tokenomics} /></section>
                        <section>
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Vesting (Kilit Açılımı)</h3>
                            <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 text-sm text-slate-300 font-mono flex items-center gap-3">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                {project.vesting}
                            </div>
                        </section>
                    </div>
                    <div className="space-y-4 md:space-y-6">
                        <div className="p-5 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 space-y-4">
                            <div><div className="text-slate-500 text-xs uppercase font-bold">Sentiment Score</div><div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{project.sentiment}</div></div>
                            <div className="h-px bg-white/10" />
                            <div className="grid grid-cols-3 gap-2 text-center">
                                <div><div className="text-[10px] text-slate-500">Twitter</div><div className="text-sm font-bold text-white">{project.socials.twitter}</div></div>
                                <div><div className="text-[10px] text-slate-500">Discord</div><div className="text-sm font-bold text-white">{project.socials.discord}</div></div>
                                <div><div className="text-[10px] text-slate-500">Telegram</div><div className="text-sm font-bold text-white">{project.socials.telegram}</div></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            {project.kyc && <div className="flex items-center gap-2 text-xs font-bold text-sky-300 bg-sky-500/10 p-2 rounded-lg border border-sky-500/20"><span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_currentColor]" />KYC Verified</div>}
                            {project.audit && <div className="flex items-center gap-2 text-xs font-bold text-purple-300 bg-purple-500/10 p-2 rounded-lg border border-purple-500/20"><span className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_currentColor]" />Contract Audited</div>}
                        </div>
                        <button className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold uppercase tracking-widest transition shadow-lg shadow-emerald-500/20">Katıl</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SwapInput = ({ label, token, amount, onChange, readOnly, onSelectToken, balance, onMax }: any) => (
  <div className="bg-[#050910] rounded-2xl p-4 border border-white/10 hover:border-cyan-500/40 transition-all group shadow-[0_10px_30px_rgba(15,23,42,0.6)] relative">
    <div className="flex justify-between text-[11px] text-slate-400 mb-2 font-medium"><span>{label}</span><div className="flex gap-2 items-center"><span className="text-slate-500">Bal:</span><span className="text-slate-300 font-mono">{formatBalance(balance)}</span>{onMax && (<button type="button" onClick={onMax} className="text-cyan-400 hover:text-cyan-300 font-semibold bg-cyan-500/10 px-2 py-0.5 rounded-lg text-[10px] border border-cyan-500/30 hover:bg-cyan-500/20 transition">MAX</button>)}</div></div>
    <div className="flex items-center gap-4">
      <input type="number" value={amount} onChange={(e) => onChange && onChange(e.target.value)} readOnly={readOnly} placeholder="0.00" className="bg-transparent text-2xl md:text-3xl font-semibold text-white outline-none w-full placeholder:text-slate-600 font-mono" />
      <button type="button" onClick={(e) => { e.stopPropagation(); onSelectToken(); }} className="flex items-center gap-2 bg-[#070b13] hover:bg-[#0b101b] px-3.5 py-1.5 rounded-xl transition-all border border-white/10 shadow-sm group-hover:border-cyan-500/40">
        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#0b1220]">{token.icon}</div><span className="font-semibold text-white text-sm">{token.symbol}</span><ArrowDownIcon size={14} className="text-slate-500 group-hover:text-white transition-colors" />
      </button>
    </div>
  </div>
);

const TokenModal = ({ onClose, tokens, onSelect, search, setSearch }: any) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4" onClick={onClose}>
    <div className="w-full max-w-sm bg-[#0d111c] border border-white/10 rounded-2xl p-0 shadow-2xl shadow-cyan-500/10 flex flex-col h-[500px] overflow-hidden animate-in fade-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
      <div className="p-5 border-b border-white/5">
        <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-lg text-white">Select a Token</h3><button onClick={onClose} className="text-slate-400 hover:text-white bg-white/5 p-1.5 rounded-lg transition hover:bg-white/10">✕</button></div>
        <input autoFocus value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search name or paste address" className="w-full bg-[#05080e] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white outline-none focus:border-cyan-500/50 shadow-inner font-medium placeholder:text-slate-600 transition-colors" />
      </div>
      <div className="flex-1 overflow-y-auto p-2 custom-scrollbar">
        {tokens.map((t: any) => (
          <button key={t.symbol} onClick={() => { onSelect(t); onClose(); }} className="w-full flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl transition text-left group border border-transparent hover:border-white/5 cursor-pointer">
            <div className="w-9 h-9 rounded-full shadow-sm flex items-center justify-center bg-[#1b1f26] border border-white/5">{t.icon}</div>
            <div><div className="font-bold text-white group-hover:text-cyan-300 transition-colors">{t.symbol}</div><div className="text-xs text-slate-500 group-hover:text-slate-400 font-medium">{t.name}</div></div>
          </button>
        ))}
      </div>
    </div>
  </div>
);

const ArrowDownIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 9l6 6 6-6" /></svg>);
const SettingsIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.35a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>);
const InfoIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>);
const GasIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22h18" /><path d="M6 18v-7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v7" /><path d="M12 3v4" /><path d="M9 15h6" /></svg>);

export default App;