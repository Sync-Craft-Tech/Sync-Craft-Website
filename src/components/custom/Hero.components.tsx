import React from 'react';
import "@/components/custom/Hero.components.css";
import LogoSvg  from '@/components/custom/SyncCraftLogo'; 
import CncCableSvg from '@/components/custom/SyncCraftCpuAnimation';

// ====================================================================
// Hero Components Logic
// ====================================================================

export default function HeroComponents() {
    // Component logic remains static as requested.

    return (
        <section
            id="Home"
            className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden bg-gray-900 text-white"
        >
            {/* Grid Content */}
            <div className="hero px-4 md:px-6 relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 items-center">

                    {/* LEFT column: Hero text */}
                    <div id = "Left-hero" 
                    className="flex flex-col justify-center space-y-6 relative z-20 --background">
                        <div className="space-y-3">
                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                                Build Something
                                <span className="text-indigo-400"> Amazing</span> Today
                            </h1>
                            <p className="max-w-[700px] text-gray-400 md:text-xl leading-relaxed">
                                Create beautiful, modern applications with our powerful
                                platform. Start building your next big idea with confidence
                                and style.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-6 py-3 text-lg font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                                Get Started
                            </button>
                            <button className="px-6 py-3 text-lg font-semibold bg-gray-700 hover:bg-gray-600 text-white rounded-xl transition-all duration-300">
                                Documentation
                            </button>
                        </div>
                    </div>

                    {/* RIGHT column: The "Canvas" Container (Static display) */}
                    <div  id = "Right-hero"
                        className="flex items-center justify-center relative z-10 p-4"
                    >
                        
                        {/* THE MOVABLE STAGE (Static) */}
                        <div 
                            className="relative w-full max-w-[600px] aspect-square"
                            style={{
                                transformStyle: 'preserve-3d',
                                transform: `
                                    perspective(1000px)
                                    rotateX(0deg)  /* Static 0deg */
                                    rotateY(0deg)  /* Static 0deg */
                                    scale(1)
                                `,
                            }}
                        >
                            {/* LAYER 1: THE SVG (Background Circuit)           */}
                            
                            <div 
                                className="absolute pointer-events-none w-[360%] h-[360%] flex justify-center items-center"
                                style={{
                                    top: "73%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%) scale(1.2)" 
                                }}
                            >
                                {/* The CncCableSvg component, dynamically colored */}
                                <CncCableSvg className="w-full h-full text-indigo-400" />
                            </div>
                            {/* LAYER 2: THE LOGO (Foreground)                  */}
                            <div
                                className="logo-pulse absolute z-20"
                                style={{
                                    // Controls from original code:
                                    width: "180px",
                                    height: "180px",
                                    top: "28%", 
                                    left: "21%",
                                    transform: "translate(-50%, -50%)" 
                                }}
                            >
                                {/* The LogoSvg component */}
                                <LogoSvg 
                                    className="w-full h-full text-white drop-shadow-lg"
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}