import React from 'react';
import { Header } from './Header';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#0a0e17] text-white font-sans selection:bg-cyan-500/30">
            {/* Background Mesh Gradients */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
                <div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] rounded-full bg-emerald-500/5 blur-[100px]" />
            </div>

            <Header />

            <main className="relative z-10 pt-24 pb-12 px-4 max-w-7xl mx-auto min-h-[calc(100vh-80px)] flex flex-col items-center justify-center">
                {children}
            </main>
        </div>
    );
};
