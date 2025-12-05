import React from 'react';

export const Logo: React.FC = () => {
    return (
        <div className="flex items-center gap-3 select-none group cursor-pointer">
            <div className="relative w-10 h-10">
                <svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 w-full h-full transform transition-all duration-500 ease-in-out
                     opacity-100 scale-100 rotate-0
                     group-hover:opacity-0 group-hover:scale-75 group-hover:rotate-12"
                >
                    <defs>
                        <linearGradient id="tech_grad" x1="0" y1="0" x2="100" y2="100">
                            <stop offset="0%" stopColor="#0ea5e9" />
                            <stop offset="50%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#10b981" />
                        </linearGradient>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="1.5" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    <rect
                        x="5" y="5" width="90" height="90" rx="20"
                        fill="#0f172a" stroke="url(#tech_grad)" strokeWidth="1.5"
                    />
                    {/* E Harfi */}
                    <path
                        d="M 28 30 L 52 30 L 52 38 L 36 38 L 36 46 L 50 46 L 50 54 L 36 54 L 36 70 L 54 70 L 54 78 L 28 78 Z"
                        fill="url(#tech_grad)"
                        filter="url(#glow)"
                    />
                    {/* S Harfi */}
                    <path
                        d="M 60 78 L 84 78 L 84 64 L 68 64 L 68 58 L 84 58 L 84 30 L 60 30 L 60 44 L 76 44 L 76 50 L 60 50 Z"
                        fill="url(#tech_grad)"
                        opacity="0.9"
                    />
                </svg>

                <svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 w-full h-full transform transition-all duration-500 ease-in-out
                     opacity-0 scale-125 -rotate-12
                     group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0"
                >
                    <defs>
                        <linearGradient id="sea_bg" x1="0" y1="0" x2="0" y2="100">
                            <stop offset="0%" stopColor="#1e293b" />
                            <stop offset="100%" stopColor="#0f766e" />
                        </linearGradient>
                    </defs>

                    <rect x="5" y="5" width="90" height="90" rx="20" fill="url(#sea_bg)" />
                    <ellipse cx="50" cy="60" rx="28" ry="14" fill="#cbd5e1" />
                    <circle cx="40" cy="48" r="11" fill="#cbd5e1" />
                    <path d="M 72 58 L 85 52 L 85 64 Z" fill="#cbd5e1" />
                    <path d="M 55 65 L 65 75 L 50 72 Z" fill="#94a3b8" />
                    <circle cx="36" cy="46" r="1.5" fill="#0f172a" />
                    <circle cx="43" cy="46" r="1.5" fill="#0f172a" />
                    <ellipse cx="39.5" cy="50" rx="2" ry="1.5" fill="#0f172a" />
                    <line x1="32" y1="50" x2="26" y2="48" stroke="#475569" strokeWidth="0.5" />
                    <line x1="32" y1="51" x2="25" y2="51" stroke="#475569" strokeWidth="0.5" />
                    <line x1="47" y1="50" x2="53" y2="48" stroke="#475569" strokeWidth="0.5" />
                    <line x1="47" y1="51" x2="54" y2="51" stroke="#475569" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <h1 className="text-xl font-bold text-white tracking-wide">
                        <span className="text-cyan-400">Edge</span>Swap
                    </h1>
                    <span className="px-1.5 py-0.5 text-[10px] font-bold text-cyan-400 border border-cyan-400/30 bg-cyan-400/10 rounded-md tracking-wider">
                        PRO
                    </span>
                </div>
                <p className="text-[10px] font-semibold text-slate-400 flex items-center tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block mr-1.5 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                    L2 DEX TERMINAL
                </p>
            </div>
        </div>
    );
};
