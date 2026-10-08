import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

interface Project {
    id: number;
    title: string;
    location: string;
    imageUrl: string;
}

export default function App() {
    const [activeIdx, setActiveIdx] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
    const autoPlayRef = useRef<(() => void) | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            title: "Estate-hub Heights",
            location: "Gurugram",
            imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80"
        },
        {
            id: 2,
            title: "The Pavilion",
            location: "Delhi NCR",
            imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
        },
        {
            id: 3,
            title: "Oasis Villas",
            location: "Mumbai",
            imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
        },
        {
            id: 4,
            title: "Horizon Towers",
            location: "Bengaluru",
            imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
        }
    ];

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIdx((prev) => (prev + 1) % projects.length);
        setTimeout(() => setIsTransitioning(false), 800);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIdx((prev) => (prev - 1 + projects.length) % projects.length);
        setTimeout(() => setIsTransitioning(false), 800);
    };

    useEffect(() => {
        autoPlayRef.current = handleNext;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoPlayRef.current) {
                autoPlayRef.current();
            }
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    const currentProject = projects[activeIdx];
    const nextProject = projects[(activeIdx + 1) % projects.length];

    return (
        <div className="min-h-screen w-full relative bg-[#050A09] text-white flex flex-col justify-between overflow-hidden select-none font-sans">

            {/* 1. Cinematic Full-bleed Background */}
            <div className="absolute inset-0 z-0">
                {projects.map((project, idx) => (
                    <div
                        key={`full-bg-${project.id}`}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === activeIdx ? 'opacity-100 scale-100' : 'opacity-0 scale-102 pointer-events-none'
                            }`}
                    >
                        <img
                            src={project.imageUrl}
                            alt=""
                            className="w-full h-full object-cover filter brightness-[0.68] contrast-[1.05]"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10"></div>
                    </div>
                ))}
            </div>

            {/* 3. Main Text Content Layout */}
            <main className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 z-10 flex-1 flex flex-col justify-center py-12 sm:py-24">
                <div className="max-w-xl flex flex-col space-y-6 sm:space-y-8 text-left">
                    <div className="space-y-3">
                        <h1 className="!text-white text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-semibold tracking-tight leading-none" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8)' }}>
                            Built Spaces.
                        </h1>
                        <h1 className="!text-white text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-semibold tracking-tight text-primary-gold leading-none" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8)' }}>
                            Proven Execution.
                        </h1>
                    </div>

                    <p className="!text-white/90 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-md drop-shadow">
                        Explore our portfolio of residential and commercial developments designed with precision, executed with discipline, and built for long-term value.
                    </p>

                    <div>
                        <Link to="/contact" className="btn-hero-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </main>

            {/* 4. BOTTOM RIGHT CORNER CAROUSEL BLOCK */}
            <div className="relative lg:absolute right-auto bottom-auto lg:right-16 lg:bottom-24 xl:right-24 xl:bottom-24 z-20 flex flex-col items-center lg:items-end space-y-4 mt-8 lg:mt-0 w-full lg:w-auto px-6 lg:px-0">

                {/* Horizontal Card Row */}
                <div className="flex items-end gap-4">

                    {/* Active Card with Frosted Glass Overlay & Redirect Arrow */}
                    <div className="w-[170px] h-[150px] sm:w-[300px] sm:h-[260px] relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-700 select-none flex flex-col p-2 sm:p-3">

                        {/* Inner Media Frame */}
                        <div className="w-full flex-1 relative rounded-lg sm:rounded-xl overflow-hidden">
                            <img
                                src={currentProject.imageUrl}
                                alt={currentProject.title}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Details Area with Redirect Link & Arrow matching the exact placement in the image */}
                        <div className="pt-2 sm:pt-3 pb-1 sm:pb-2 px-1 flex justify-between items-end">
                            <div>
                                <h3 className="text-xs sm:text-xl font-serif font-medium text-white tracking-wide">
                                    {currentProject.title}
                                </h3>
                                <div className="flex items-center gap-1 text-stone-300 text-[8px] sm:text-xs mt-0.5 font-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-2 h-2 sm:w-3 h-3 text-[#C5A880]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <span>{currentProject.location}</span>
                                </div>
                            </div>

                            {/* Clean Minimal Redirect Arrow Button */}
                            <Link
                                to={`/portfolio/${currentProject.id}`}
                                className="text-white hover:text-[#C5A880] transition-colors p-1"
                                aria-label={`View ${currentProject.title} portfolio`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-6 sm:h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Next Card Preview Frame */}
                    <div
                        onClick={handleNext}
                        className="w-[70px] h-[100px] sm:w-[120px] sm:h-[180px] relative rounded-xl overflow-hidden opacity-40 cursor-pointer hover:opacity-60 transition-all duration-500 border border-white/5 bg-white/5 p-1 flex flex-col"
                    >
                        <div className="w-full flex-1 rounded-lg overflow-hidden">
                            <img
                                src={nextProject.imageUrl}
                                alt="Next Project Preview"
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="h-6 sm:h-10"></div>
                    </div>

                </div>

                {/* Minimal Navigation Chevrons */}
                <div className="flex items-center gap-2.5">
                    <button
                        onClick={handlePrev}
                        aria-label="Previous Slide"
                        className="w-9 h-9 rounded-full border border-white/15 bg-black/20 hover:bg-white hover:text-stone-950 hover:border-white flex items-center justify-center transition-all duration-300 shadow-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next Slide"
                        className="w-9 h-9 rounded-full border border-white/15 bg-black/20 hover:bg-white hover:text-stone-950 hover:border-white flex items-center justify-center transition-all duration-300 shadow-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

            </div>

        </div>
    );
}