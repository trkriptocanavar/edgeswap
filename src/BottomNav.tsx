import React from "react";

export type NavItem = "Trade" | "Pools" | "Portfolio" | "Launchpad" | "Bridge" | "Admin";

interface BottomNavProps {
    activeNav: NavItem;
    setActiveNav: (nav: NavItem) => void;
}

const navItems: { id: NavItem; label: string; icon: React.ReactNode }[] = [
    {
        id: "Trade",
        label: "Trade",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 10v12" />
                <path d="M17 14V2" />
                <path d="M7 4l-4 6" />
                <path d="M7 4l4 6" />
                <path d="M17 20l-4-6" />
                <path d="M17 20l4-6" />
            </svg>
        ),
    },
    {
        id: "Pools",
        label: "Pools",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12a4 4 0 0 1 8 0" />
                <path d="M12 8v8" />
            </svg>
        ),
    },
    {
        id: "Portfolio",
        label: "Portfolio",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
            </svg>
        ),
    },
    {
        id: "Launchpad",
        label: "Launch",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
        ),
    },
    {
        id: "Bridge",
        label: "Bridge",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="8" x="2" y="6" rx="2" />
                <path d="M17 14v7" />
                <path d="M7 14v7" />
            </svg>
        ),
    },
    {
        id: "Admin",
        label: "Admin",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        ),
    },
];

export const BottomNav: React.FC<BottomNavProps> = ({ activeNav, setActiveNav }) => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#080c14]/95 backdrop-blur-xl border-t border-white/10 safe-area-inset-bottom">
            <div className="max-w-xl mx-auto px-2">
                <div className="flex justify-around items-center h-16">
                    {navItems.map((item) => {
                        const isActive = activeNav === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveNav(item.id)}
                                className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 ${isActive
                                        ? "text-cyan-400"
                                        : "text-slate-500 hover:text-slate-300"
                                    }`}
                            >
                                <div
                                    className={`transition-transform duration-200 ${isActive ? "scale-110" : ""
                                        }`}
                                    style={{
                                        filter: isActive
                                            ? "drop-shadow(0 0 8px rgba(6, 182, 212, 0.5))"
                                            : "none",
                                    }}
                                >
                                    {item.icon}
                                </div>
                                <span
                                    className={`text-[10px] font-bold tracking-wide ${isActive ? "text-cyan-400" : ""
                                        }`}
                                >
                                    {item.label}
                                </span>
                                {isActive && (
                                    <div
                                        className="absolute bottom-1 w-1 h-1 rounded-full"
                                        style={{ backgroundColor: "var(--accent-primary)" }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};
