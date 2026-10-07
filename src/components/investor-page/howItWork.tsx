

import { useState, useEffect, useRef } from 'react';

interface Step {
    id: string;
    number: string;
    title: string;
    description: string;
}

export default function App() {
    const [activeStep, setActiveStep] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [isInView, setIsInView] = useState<boolean>(false);

    // Refs for tracking SVG paths and the outer section container
    const desktopPathRef = useRef<SVGPathElement>(null);
    const mobilePathRef = useRef<SVGPathElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Measured length of the SVG paths for exact line tracing synchronization
    const [desktopPathLength, setDesktopPathLength] = useState<number>(0);
    const [mobilePathLength, setMobilePathLength] = useState<number>(0);

    // Position coordinates for the moving active tracer dot
    const [ballCoords, setBallCoords] = useState<{ x: number; y: number }>({ x: 50, y: 220 });

    // Dynamically measured coordinates for the step nodes on the curve
    const [node1Coords, setNode1Coords] = useState<{ x: number; y: number }>({ x: 150, y: 220 });
    const [node2Coords, setNode2Coords] = useState<{ x: number; y: number }>({ x: 540, y: 220 });
    const [node3Coords, setNode3Coords] = useState<{ x: number; y: number }>({ x: 880, y: 100 });

    const steps: Step[] = [
        {
            id: "discover",
            number: "1",
            title: "Discover Opportunities",
            description: "Explore carefully curated, high-growth investment opportunities backed by search and due diligence."
        },
        {
            id: "invest",
            number: "2",
            title: "Invest Securely",
            description: "Choose your preferred project and invest through a structured, legally compliant process."
        },
        {
            id: "track",
            number: "3",
            title: "Track & Grow",
            description: "Monitor performance with regular updates and benefit from long-term appreciation."
        }
    ];

    // Desktop Path String: High-contrast wave curve designed for 1000x320 viewBox space
    const desktopPathString = "M 50 220 C 180 220, 240 60, 350 60 C 460 60, 490 220, 600 220 C 710 220, 810 60, 950 60";

    // Mobile/Tablet vertical curve path
    const mobilePathString = "M 50 20 C 10 120, 10 200, 50 240 C 90 280, 90 380, 50 420 C 10 460, 10 540, 50 580";

    // Intersection Observer to trigger scroll-in animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    // Measure path lengths on mount or resize
    useEffect(() => {
        const measurePaths = () => {
            if (desktopPathRef.current) {
                const length = desktopPathRef.current.getTotalLength();
                setDesktopPathLength(length);

                // Compute exact node coordinates along the curve
                const p1 = desktopPathRef.current.getPointAtLength(length * 0.12);
                const p2 = desktopPathRef.current.getPointAtLength(length * 0.52);
                const p3 = desktopPathRef.current.getPointAtLength(length * 0.88);

                setNode1Coords({ x: p1.x, y: p1.y });
                setNode2Coords({ x: p2.x, y: p2.y });
                setNode3Coords({ x: p3.x, y: p3.y });
            }
            if (mobilePathRef.current) {
                setMobilePathLength(mobilePathRef.current.getTotalLength());
            }
        };

        measurePaths();
        window.addEventListener('resize', measurePaths);
        return () => window.removeEventListener('resize', measurePaths);
    }, []);

    // Animation Loop: Traces the active curve smoothly when section is scrolled into view
    useEffect(() => {
        if (!isInView) return;

        let animationFrameId: number;
        let startTime = performance.now();
        const duration = 8000; // 8 seconds for a complete loop cycle

        const update = (time: number) => {
            const elapsed = time - startTime;
            const currentProgress = (elapsed % duration) / duration * 100;

            setProgress(currentProgress);

            // Map progress to current active steps
            if (currentProgress < 33) {
                setActiveStep(0);
            } else if (currentProgress < 66) {
                setActiveStep(1);
            } else {
                setActiveStep(2);
            }

            // Compute precise tracer dot coordinates along the active path
            const isDesktop = window.innerWidth >= 1024;
            const activePath = isDesktop ? desktopPathRef.current : mobilePathRef.current;

            if (activePath) {
                try {
                    const totalLength = activePath.getTotalLength();
                    const currentLength = totalLength * (currentProgress / 100);
                    const point = activePath.getPointAtLength(currentLength);
                    if (point) {
                        setBallCoords({ x: point.x, y: point.y });
                    }
                } catch (e) {
                    // Path dimensions may not be measured on load
                }
            }

            animationFrameId = requestAnimationFrame(update);
        };

        animationFrameId = requestAnimationFrame(update);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isInView]);

    // Adjust coordinates on resize to keep layout locked
    useEffect(() => {
        const handleResize = () => {
            const isDesktop = window.innerWidth >= 1024;
            const activePath = isDesktop ? desktopPathRef.current : mobilePathRef.current;
            if (activePath) {
                try {
                    const totalLength = activePath.getTotalLength();
                    const currentLength = totalLength * (progress / 100);
                    const point = activePath.getPointAtLength(currentLength);
                    if (point) {
                        setBallCoords({ x: point.x, y: point.y });
                    }
                } catch (e) { }
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [progress]);

    // Handle manual step interaction
    const handleStepClick = (index: number) => {
        let targetProgress = 12;
        if (index === 1) targetProgress = 52;
        if (index === 2) targetProgress = 88;

        setProgress(targetProgress);
        setActiveStep(index);

        const isDesktop = window.innerWidth >= 1024;
        const activePath = isDesktop ? desktopPathRef.current : mobilePathRef.current;
        if (activePath) {
            try {
                const totalLength = activePath.getTotalLength();
                const currentLength = totalLength * (targetProgress / 100);
                const point = activePath.getPointAtLength(currentLength);
                if (point) {
                    setBallCoords({ x: point.x, y: point.y });
                }
            } catch (e) { }
        }
    };

    return (
        <div
            ref={containerRef}
            id="how-it-works-section"
            className="bg-white min-h-screen flex items-center justify-center py-8 px-6 sm:px-12 lg:px-20 overflow-hidden relative select-none"
        >
            <div className="w-full max-w-7xl">

                {/* Header Block: Gracefully slides and fades in from the left on scroll */}
                <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-4 lg:mb-10 transition-all duration-1000 ease-out transform ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}
                >
                    <div className="lg:col-span-4">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-heading font-normal tracking-tight leading-none">
                            It Works
                        </h2>
                    </div>
                    <div className="lg:col-span-8">
                        <p className="text-sm sm:text-base md:text-lg text-body leading-relaxed max-w-3xl font-light">
                            Discovering high-potential investment opportunities to securely investing in long-term returns experience a seamless, transparent, and process designed to help you grow your wealth with confidence.
                        </p>
                    </div>
                </div>

    
                <div
                    id="desktop-canvas-stage"
                    className={`hidden lg:block relative w-full aspect-[1000/320] mx-auto transition-all duration-1000 delay-300 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                >

                    {/* SVG Curving Animation Track */}
                    <div className="absolute inset-0 pointer-events-none z-10">
                        <svg viewBox="0 0 1000 320" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">

                            {/* Background passive gray path trail */}
                            <path
                                d={desktopPathString}
                                stroke="#EBEAE6"
                                strokeWidth="4"
                                strokeLinecap="round"
                            />

                            {/* Animated drawing green trace */}
                            <path
                                ref={desktopPathRef}
                                d={desktopPathString}
                                stroke="#22C55E"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeDasharray={desktopPathLength || 1000}
                                strokeDashoffset={desktopPathLength ? desktopPathLength - (progress / 100) * desktopPathLength : 1000}
                            />

                            {/* Step Node 1 */}
                            <g>
                                <circle cx={node1Coords.x} cy={node1Coords.y} r="14" fill={activeStep >= 0 ? '#22C55E' : '#EBEAE6'} className="opacity-15 transition-all duration-300" />
                                <circle
                                    cx={node1Coords.x}
                                    cy={node1Coords.y}
                                    r="6"
                                    fill={activeStep >= 0 ? '#22C55E' : '#FFFFFF'}
                                    stroke={activeStep >= 0 ? '#16A34A' : '#D5D3CB'}
                                    strokeWidth="2.5"
                                    className="cursor-pointer hover:scale-125 transition-transform duration-300"
                                    onClick={() => handleStepClick(0)}
                                />
                            </g>

                            {/* Step Node 2 */}
                            <g>
                                <circle cx={node2Coords.x} cy={node2Coords.y} r="14" fill={activeStep >= 1 ? '#22C55E' : '#EBEAE6'} className="opacity-15 transition-all duration-300" />
                                <circle
                                    cx={node2Coords.x}
                                    cy={node2Coords.y}
                                    r="6"
                                    fill={activeStep >= 1 ? '#22C55E' : '#FFFFFF'}
                                    stroke={activeStep >= 1 ? '#16A34A' : '#D5D3CB'}
                                    strokeWidth="2.5"
                                    className="cursor-pointer hover:scale-125 transition-transform duration-300"
                                    onClick={() => handleStepClick(1)}
                                />
                            </g>

                            {/* Step Node 3 */}
                            <g>
                                <circle cx={node3Coords.x} cy={node3Coords.y} r="14" fill={activeStep >= 2 ? '#22C55E' : '#EBEAE6'} className="opacity-15 transition-all duration-300" />
                                <circle
                                    cx={node3Coords.x}
                                    cy={node3Coords.y}
                                    r="6"
                                    fill={activeStep >= 2 ? '#22C55E' : '#FFFFFF'}
                                    stroke={activeStep >= 2 ? '#16A34A' : '#D5D3CB'}
                                    strokeWidth="2.5"
                                    className="cursor-pointer hover:scale-125 transition-transform duration-300"
                                    onClick={() => handleStepClick(2)}
                                />
                            </g>

                            {/* Crisp, non-buggy active ball tracer that sits perfectly on the tip of the path */}
                            <g>
                                <circle
                                    cx={ballCoords.x}
                                    cy={ballCoords.y}
                                    r="5"
                                    fill="#22C55E"
                                />
                            </g>
                        </svg>
                    </div>


                    {/* Card 1: Discover Opportunities */}
                    <div
                        id="desktop-item-card-1"
                        onClick={() => handleStepClick(0)}
                        className="absolute left-[5%] top-[65%] w-[28%] group cursor-pointer transition-all duration-300 z-20"
                    >
                        <div className="relative pl-4">
                            {/* Massive background gray ghost number placed behind text with safe faint visibility */}
                            <span className="absolute -top-12 -left-2 text-[110px] font-sans font-extrabold text-ghost-number select-none pointer-events-none -z-10">
                                1
                            </span>
                            <div className="relative space-y-1">
                                <h3 className={`text-lg sm:text-xl font-serif font-bold transition-colors duration-300 ${activeStep === 0 ? 'text-[#15803D]' : 'text-heading'}`}>
                                    Discover Opportunities
                                </h3>
                                <p className="text-xs sm:text-sm text-body leading-relaxed font-light">
                                    Explore carefully curated, high-growth investment opportunities backed by search and due diligence.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Invest Securely */}
                    <div
                        id="desktop-item-card-2"
                        onClick={() => handleStepClick(1)}
                        className="absolute left-[40%] top-[68%] w-[28%] group cursor-pointer transition-all duration-300 z-20"
                    >
                        <div className="relative pl-4">
                            <span className="absolute -top-12 -left-2 text-[110px] font-sans font-extrabold text-ghost-number select-none pointer-events-none -z-10">
                                2
                            </span>
                            <div className="relative space-y-1">
                                <h3 className={`text-lg sm:text-xl font-serif font-bold transition-colors duration-300 ${activeStep === 1 ? 'text-emerald-800 font-semibold' : 'text-heading'}`}>
                                    Invest Securely
                                </h3>
                                <p className="text-xs sm:text-sm text-body leading-relaxed font-light">
                                    Choose your preferred project and invest through a structured, legally compliant process.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Track & Grow */}
                    <div
                        id="desktop-item-card-3"
                        onClick={() => handleStepClick(2)}
                        className="absolute left-[72%] top-[12%] w-[28%] group cursor-pointer transition-all duration-300 z-20"
                    >
                        <div className="relative pl-4">
                            <span className="absolute -top-12 -left-2 text-[110px] font-sans font-extrabold text-ghost-number select-none pointer-events-none -z-10">
                                3
                            </span>
                            <div className="relative space-y-1">
                                <h3 className={`text-lg sm:text-xl font-serif font-bold transition-colors duration-300 ${activeStep === 2 ? 'text-emerald-800 font-semibold' : 'text-heading'}`}>
                                    Track & Grow
                                </h3>
                                <p className="text-xs sm:text-sm text-body leading-relaxed font-light">
                                    Monitor performance with regular updates and benefit from long-term appreciation.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RESPONSIVE MOBILE & TABLET TIMELINE SCREEN (< 1024px) */}
                <div
                    id="mobile-canvas-stage"
                    className={`block lg:hidden relative py-4 transition-all duration-1000 delay-300 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                >
                    <div className="grid grid-cols-12 gap-3 sm:gap-6 items-stretch">

                        {/* Left Col: Vertical Curve Animation Track */}
                        <div className="col-span-3 sm:col-span-2 relative flex justify-center">
                            <div className="absolute inset-y-0 w-24 flex justify-center">
                                <svg viewBox="0 0 100 600" preserveAspectRatio="none" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Background track */}
                                    <path
                                        ref={mobilePathRef}
                                        d={mobilePathString}
                                        stroke="#EBEAE6"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />

                                    {/* Active drawing track */}
                                    <path
                                        d={mobilePathString}
                                        stroke="#22C55E"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeDasharray={mobilePathLength || 1000}
                                        strokeDashoffset={mobilePathLength ? mobilePathLength - (progress / 100) * mobilePathLength : 1000}
                                    />

                                    {/* Dot 1 */}
                                    <circle cx="43" cy="115" r="10" fill={activeStep >= 0 ? '#22C55E' : '#EBEAE6'} className="opacity-25 transition-all duration-300" />
                                    <circle cx="43" cy="115" r="5" fill={activeStep >= 0 ? '#22C55E' : '#FFFFFF'} stroke={activeStep >= 0 ? '#16A34A' : '#D5D3CB'} strokeWidth="2.5" />

                                    {/* Dot 2 */}
                                    <circle cx="58" cy="300" r="10" fill={activeStep >= 1 ? '#22C55E' : '#EBEAE6'} className="opacity-25 transition-all duration-300" />
                                    <circle cx="58" cy="300" r="5" fill={activeStep >= 1 ? '#22C55E' : '#FFFFFF'} stroke={activeStep >= 1 ? '#16A34A' : '#D5D3CB'} strokeWidth="2.5" />

                                    {/* Dot 3 */}
                                    <circle cx="43" cy="485" r="10" fill={activeStep >= 2 ? '#22C55E' : '#EBEAE6'} className="opacity-25 transition-all duration-300" />
                                    <circle cx="43" cy="485" r="5" fill={activeStep >= 2 ? '#22C55E' : '#FFFFFF'} stroke={activeStep >= 2 ? '#16A34A' : '#D5D3CB'} strokeWidth="2.5" />
                                </svg>
                            </div>
                        </div>

                        {/* Right Col: Stacked Mobile Cards */}
                        <div className="col-span-9 sm:col-span-10 space-y-6 flex flex-col justify-around py-4">
                            {steps.map((step, idx) => {
                                const isActive = activeStep === idx;
                                return (
                                    <div
                                        key={`mobile-${step.id}`}
                                        id={`step-mobile-card-${idx}`}
                                        onClick={() => handleStepClick(idx)}
                                        className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${isActive ? 'bg-white border-[#22C55E]/30 shadow-lg scale-[1.01]' : 'bg-[#FAF9F6]/50 border-transparent hover:bg-white hover:border-[#EBEAE6]'}`}
                                    >
                                        {/* Big background ghost number behind the card */}
                                        <span className="absolute -bottom-8 -right-4 text-[120px] font-sans font-extrabold text-ghost-number select-none pointer-events-none z-0">
                                            {step.number}
                                        </span>

                                        <div className="relative z-10 flex items-start gap-4">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold font-mono transition-colors duration-300 ${isActive ? 'bg-[#15803D] text-white shadow-md' : 'bg-white text-emerald-800 border border-[#EBEAE6]'}`}>
                                                {step.number}
                                            </div>
                                            <div className="flex-grow">
                                                <h4 className="text-base sm:text-lg font-serif font-bold text-heading">
                                                    {step.title}
                                                </h4>
                                                <p className="text-xs sm:text-sm text-body leading-relaxed mt-1 font-light">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
