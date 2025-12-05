import React, { useEffect, useRef, useState, memo } from 'react';

interface TradingViewChartProps {
    symbol?: string;
    theme?: 'dark' | 'light';
    fromToken: { symbol: string; icon: React.ReactNode };
    toToken: { symbol: string; icon: React.ReactNode };
    currentPrice: number;
}

// TradingView Widget Component - re-renders when symbol changes
const TradingViewWidget = memo(({ symbol = 'BINANCE:ETHUSDT' }: { symbol: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scriptRef = useRef<HTMLScriptElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Clear previous widget completely
        containerRef.current.innerHTML = '';

        // Create widget container
        const widgetContainer = document.createElement('div');
        widgetContainer.className = 'tradingview-widget-container__widget';
        widgetContainer.style.height = '100%';
        widgetContainer.style.width = '100%';
        containerRef.current.appendChild(widgetContainer);

        // Create and append new script
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
        script.type = 'text/javascript';
        script.async = true;
        script.innerHTML = JSON.stringify({
            "autosize": true,
            "symbol": symbol,
            "interval": "5",
            "timezone": "Europe/Istanbul",
            "theme": "dark",
            "style": "1",
            "locale": "en",
            "enable_publishing": false,
            "backgroundColor": "rgba(19, 23, 34, 1)",
            "gridColor": "rgba(42, 46, 57, 0.3)",
            "hide_top_toolbar": false,
            "hide_legend": false,
            "save_image": false,
            "calendar": false,
            "hide_volume": false,
            "support_host": "https://www.tradingview.com",
            "studies": [
                "STD;EMA",
                "STD;RSI"
            ],
            "show_popup_button": true,
            "popup_width": "1000",
            "popup_height": "650",
            "withdateranges": true
        });

        containerRef.current.appendChild(script);
        scriptRef.current = script;

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, [symbol]); // Re-render when symbol changes!

    return (
        <div
            ref={containerRef}
            className="tradingview-widget-container w-full h-full"
            style={{ minHeight: '400px' }}
        />
    );
});

TradingViewWidget.displayName = 'TradingViewWidget';

// Map token symbols to TradingView symbols
const getSymbolForToken = (tokenSymbol: string): string => {
    const symbolMap: { [key: string]: string } = {
        'ETH': 'BINANCE:ETHUSDT',
        'WETH': 'BINANCE:ETHUSDT',
        'BTC': 'BINANCE:BTCUSDT',
        'WBTC': 'BINANCE:BTCUSDT',
        'BNB': 'BINANCE:BNBUSDT',
        'SOL': 'BINANCE:SOLUSDT',
        'AVAX': 'BINANCE:AVAXUSDT',
        'MATIC': 'BINANCE:MATICUSDT',
        'LINK': 'BINANCE:LINKUSDT',
        'UNI': 'BINANCE:UNIUSDT',
        'AAVE': 'BINANCE:AAVEUSDT',
        'CRV': 'BINANCE:CRVUSDT',
        'DOGE': 'BINANCE:DOGEUSDT',
        'SHIB': 'BINANCE:SHIBUSDT',
        'ARB': 'BINANCE:ARBUSDT',
        'OP': 'BINANCE:OPUSDT',
    };
    return symbolMap[tokenSymbol] || 'BINANCE:ETHUSDT';
};

export const PremiumChart: React.FC<TradingViewChartProps> = ({
    fromToken,
    toToken,
    currentPrice
}) => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [lastPrice, setLastPrice] = useState(currentPrice);
    const [priceFlash, setPriceFlash] = useState<'up' | 'down' | null>(null);

    // Get TradingView symbol based on selected token
    const tradingViewSymbol = getSymbolForToken(fromToken.symbol);

    // Animate price changes
    useEffect(() => {
        if (currentPrice !== lastPrice && currentPrice > 0) {
            setPriceFlash(currentPrice > lastPrice ? 'up' : 'down');
            setLastPrice(currentPrice);

            const timer = setTimeout(() => setPriceFlash(null), 500);
            return () => clearTimeout(timer);
        }
    }, [currentPrice, lastPrice]);

    return (
        <div className={`flex flex-col bg-[#131722] rounded-xl border border-[#2a2e39] overflow-hidden shadow-2xl ${isFullscreen ? 'fixed inset-4 z-50' : 'h-[500px]'
            }`}>
            {/* Premium Header */}
            <div className="px-4 py-3 border-b border-[#2a2e39] flex items-center justify-between bg-gradient-to-r from-[#1a1f2e] to-[#131722]">
                <div className="flex items-center gap-4">
                    {/* Token Pair */}
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border-2 border-[#131722] z-10 shadow-lg">
                                {fromToken.icon}
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center border-2 border-[#131722] shadow-lg">
                                {toToken.icon}
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-white">{fromToken.symbol}/USDT</span>
                                <span className="px-2 py-0.5 text-[10px] font-bold bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30 animate-pulse flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                                    LIVE
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <span className={`font-bold font-mono text-xl transition-all duration-300 ${priceFlash === 'up' ? 'text-emerald-400 scale-105' :
                                        priceFlash === 'down' ? 'text-red-400 scale-105' : 'text-white'
                                    }`}>
                                    ${currentPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-2">
                    {/* Fullscreen */}
                    <button
                        onClick={() => setIsFullscreen(!isFullscreen)}
                        className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/5"
                        title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                    >
                        {isFullscreen ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                            </svg>
                        ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* TradingView Chart - Key prop forces re-render on symbol change */}
            <div className="flex-1 relative">
                <TradingViewWidget key={tradingViewSymbol} symbol={tradingViewSymbol} />
            </div>
        </div>
    );
};

export default PremiumChart;
