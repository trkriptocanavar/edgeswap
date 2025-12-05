import React from 'react';
import { Logo } from './Logo';
import { Button } from './Button';

export const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0e17]/80 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                <Logo />

                <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5">
                    {['Swap', 'Pool', 'Vote', 'Charts'].map((item) => (
                        <button
                            key={item}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${item === 'Swap'
                                    ? 'bg-white/10 text-white shadow-lg shadow-black/20'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-bold text-slate-300">Ethereum</span>
                    </div>
                    <Button variant="primary" size="sm">
                        Connect Wallet
                    </Button>
                </div>
            </div>
        </header>
    );
};
