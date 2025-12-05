import React, { useState } from 'react';
import { Button } from './Button';

export const SwapCard: React.FC = () => {
    const [sellAmount, setSellAmount] = useState('');
    const [buyAmount, setBuyAmount] = useState('');

    return (
        <div className="w-full max-w-[480px] glass-panel rounded-3xl p-2 relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 p-4 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-bold text-white">Swap</h2>
                    <button className="p-2 hover:bg-white/5 rounded-lg transition-colors text-slate-400 hover:text-white">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                    </button>
                </div>

                {/* Sell Input */}
                <div className="input-group space-y-3">
                    <div className="flex justify-between text-xs font-medium text-slate-400">
                        <span>You pay</span>
                        <span>Balance: 0.00</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <input
                            type="number"
                            placeholder="0"
                            value={sellAmount}
                            onChange={(e) => setSellAmount(e.target.value)}
                            className="w-full bg-transparent text-3xl font-bold text-white placeholder-slate-600 outline-none"
                        />
                        <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 rounded-full font-bold transition-colors shrink-0 border border-slate-700">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                            <span>ETH</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </button>
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                        $0.00
                    </div>
                </div>

                {/* Switch Button */}
                <div className="flex justify-center -my-3 relative z-10">
                    <button className="bg-[#0f172a] border-4 border-[#0a0e17] p-2 rounded-xl text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all shadow-lg">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 10v12" />
                            <path d="M17 14v-12" />
                            <path d="M7 22l-4-4" />
                            <path d="M17 2l4 4" />
                        </svg>
                    </button>
                </div>

                {/* Buy Input */}
                <div className="input-group space-y-3">
                    <div className="flex justify-between text-xs font-medium text-slate-400">
                        <span>You receive</span>
                        <span>Balance: 0.00</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <input
                            type="number"
                            placeholder="0"
                            value={buyAmount}
                            onChange={(e) => setBuyAmount(e.target.value)}
                            className="w-full bg-transparent text-3xl font-bold text-white placeholder-slate-600 outline-none"
                        />
                        <button className="flex items-center gap-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 px-3 py-1.5 rounded-full font-bold transition-colors shrink-0 border border-cyan-500/20">
                            <span className="text-sm">Select Token</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </button>
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                        $0.00
                    </div>
                </div>

                {/* Price Info */}
                {sellAmount && (
                    <div className="flex justify-between items-center px-2 py-2 text-xs font-medium text-slate-400 bg-white/5 rounded-lg">
                        <span>Price</span>
                        <span className="text-white">1 ETH = 1,850.00 USDC</span>
                    </div>
                )}

                {/* Action Button */}
                <Button fullWidth size="lg" className="mt-2 text-lg shadow-xl shadow-cyan-500/10">
                    Connect Wallet
                </Button>
            </div>
        </div>
    );
};
