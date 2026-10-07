import { useState, useEffect, useRef } from 'react';

interface Step {
    id: string;
    number: string;
    title: string;
    description: string;
    imageUrl: string;
}

export default function App() {
    const [scrollProgress, setScrollProgress] = useState<number>(0);
    const [activeStep, setActiveStep] = useState<number>(0);

    // Refs for scroll and intersection animations
    const timelineRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Individual refs to track which elements are in view for row-by-row animations
    const [visibleRows, setVisibleRows] = useState<{ [key: number]: boolean }>({
        0: false,
        1: false,
        2: false,
        3: false
    });

    const steps: Step[] = [
        {
            id: "planning",
            number: "01",
            title: "Planning",
            description: "Data-Driven Site Analysis and Feasibility Assessment to Maximize Land Utilization, Improve Development Efficiency, Minimize Risks, and Ensure Compliance with Regulatory and Environmental Standards",
            imageUrl: "https://images.unsplash.com/photo-1503387762-592ded58c454?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: "design",
            number: "02",
            title: "Design",
            description: "Data-Driven Site Analysis and Feasibility Assessment to Maximize Land Utilization, Improve Development Efficiency, Minimize Risks, and Ensure Compliance with Regulatory and Environmental Standards",
            imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: "execution",
            number: "03",
            title: "Execution",
            description: "Data-Driven Site Analysis and Feasibility Assessment to Maximize Land Utilization, Improve Development Efficiency, Minimize Risks, and Ensure Compliance with Regulatory and Environmental Standards",
            imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: "delivery",
            number: "04",
            title: "Delivery",
            description: "Data-Driven Site Analysis and Feasibility Assessment to Maximize Land Utilization, Improve Development Efficiency, Minimize Risks, and Ensure Compliance with Regulatory and Environmental Standards",
            imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
        }
    ];

    // Track page scroll to update the vertical drawing gold progress line
    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return;

            const rect = timelineRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const startOffset = windowHeight * 0.7;
            const endOffset = windowHeight * 0.3;

            const elementHeight = rect.height;
            const scrolledAmount = startOffset - rect.top;

            const rawProgress = (scrolledAmount / (elementHeight - endOffset)) * 100;
            const progressPercent = Math.min(Math.max(rawProgress, 0), 100);

            setScrollProgress(progressPercent);

            // Determine active node based on scroll progress thresholds
            if (progressPercent < 15) {
                setActiveStep(0);
            } else if (progressPercent < 45) {
                setActiveStep(1);
            } else if (progressPercent < 75) {
                setActiveStep(2);
            } else {
                setActiveStep(3);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial call to set status correctly
        setTimeout(handleScroll, 100);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Intersection Observers for triggering row fade/slide animations
    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        steps.forEach((_, index) => {
            const element = document.getElementById(`step-row-${index}`);
            if (element) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setVisibleRows(prev => ({ ...prev, [index]: true }));
                        }
                    },
                    {
                        threshold: 0.15, // trigger when 15% of the row is visible
                        rootMargin: "0px 0px -10% 0px"
                    }
                );
                observer.observe(element);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach(o => o.disconnect());
        };
    });


    return (
        <div ref={containerRef} className="min-h-screen bg-[#FCFBFA] text-[#1A1A1A] antialiased select-none font-sans relative ">

            {/* Main Process Section */}
            <section className="px-6 sm:px-12 lg:px-24 py-9 sm:py-10 max-w-7xl mx-auto">

                {/* Section Header Text */}
                <div className="max-w-3xl mb-12 lg:mb-8 text-left">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display text-[#1A1A1A] font-normal tracking-tight leading-tight mb-3 transition-all duration-700">
                        From vision to reality
                    </h2>
                    <p className="text-base sm:text-lg text-stone-500 leading-relaxed font-light max-w-2xl">
                        A structured approach that ensures quality, transparency, and timely delivery.
                    </p>
                </div>

                
                <div ref={timelineRef} className="relative mt-4">

                    {/* Central Progress Line - Visible ONLY on Large Screens (lg: >= 1024px) */}
                    <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-[2px]">
                        {/* Background inactive line (Light grey) */}
                        <div className="absolute inset-0 bg-stone-200 rounded-full"></div>

                        {/* Drawing gold line driven dynamically by scroll progress */}
                        <div
                            className="absolute top-0 w-full bg-[#C5A880] rounded-full transition-all duration-150 ease-out shadow-sm"
                            style={{ height: `${scrollProgress}%` }}
                        ></div>
                    </div>

                    {/* Steps Loop - Tightened spacing from space-y-36 to lg:space-y-16 */}
                    <div className="space-y-12 lg:space-y-16">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 1;
                            const isRowVisible = visibleRows[index];
                            const isNodeActive = activeStep === index;

                            return (
                                <div
                                    key={step.id}
                                    id={`step-row-${index}`}
                                    className="relative"
                                >

                                    {/* DESKTOP LAYOUT (3-Column Grid) - Removed min-h-[360px] to make it compact */}
                                    <div className="hidden lg:grid grid-cols-12 gap-8 items-center py-4">

                                        {/* LEFT COLUMN: Text for odd steps, Image for even steps */}
                                        <div className={`col-span-5 transition-all duration-1000 ease-out transform ${isRowVisible
                                            ? 'opacity-100 translate-x-0'
                                            : isEven
                                                ? 'opacity-0 -translate-x-12'
                                                : 'opacity-0 -translate-x-12'
                                            }`}>
                                            {!isEven ? (
                                                // Odd Steps (01 Planning, 03 Execution) -> Text Right-Aligned
                                                <div className="text-right pr-4 xl:pr-8">
                                                    <h3 className="text-2xl xl:text-3xl font-display font-medium text-[#1A1A1A] mb-3">
                                                        {step.title}
                                                    </h3>
                                                    <p className="text-stone-500 text-xs xl:text-sm leading-relaxed font-light">
                                                        {step.description}
                                                    </p>
                                                </div>
                                            ) : (
                                                // Even Steps (02 Design, 04 Delivery) -> Image
                                                <div className="overflow-hidden rounded-2xl shadow-sm border border-stone-100 group transition-all duration-500 hover:shadow-md hover:scale-[1.01] max-w-md ml-auto">
                                                    <img
                                                        src={step.imageUrl}
                                                        alt={step.title}
                                                        referrerPolicy="no-referrer"
                                                        className="w-full h-48 xl:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        {/* CENTER COLUMN: The Vertical Axis Node badge */}
                                        <div className="col-span-2 flex justify-center z-10 relative">
                                            <div
                                                className={`w-12 h-12 rounded-full flex items-center justify-center font-display text-base font-semibold transition-all duration-500 transform ${isNodeActive
                                                    ? 'bg-[#C5A880] text-white border-2 border-[#C5A880] scale-110 shadow-md shadow-[#C5A880]/30 animate-none'
                                                    : 'bg-white text-stone-400 border border-stone-200 hover:border-stone-400'
                                                    }`}
                                            >
                                                {step.number}
                                            </div>
                                        </div>

                                        {/* RIGHT COLUMN: Image for odd steps, Text for even steps */}
                                        <div className={`col-span-5 transition-all duration-1000 ease-out transform ${isRowVisible
                                            ? 'opacity-100 translate-x-0'
                                            : isEven
                                                ? 'opacity-0 translate-x-12'
                                                : 'opacity-0 translate-x-12'
                                            }`}>
                                            {isEven ? (
                                                // Even Steps (02 Design, 04 Delivery) -> Text Left-Aligned
                                                <div className="text-left pl-4 xl:pl-8">
                                                    <h3 className="text-2xl xl:text-3xl font-display font-medium text-[#1A1A1A] mb-3">
                                                        {step.title}
                                                    </h3>
                                                    <p className="text-stone-500 text-xs xl:text-sm leading-relaxed font-light">
                                                        {step.description}
                                                    </p>
                                                </div>
                                            ) : (
                                                // Odd Steps (01 Planning, 03 Execution) -> Image
                                                <div className="overflow-hidden rounded-2xl shadow-sm border border-stone-100 group transition-all duration-500 hover:shadow-md hover:scale-[1.01] max-w-md mr-auto">
                                                    <img
                                                        src={step.imageUrl}
                                                        alt={step.title}
                                                        referrerPolicy="no-referrer"
                                                        className="w-full h-48 xl:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                </div>
                                            )}
                                        </div>

                                    </div>

                                    {/* RESPONSIVE MOBILE & TABLET LAYOUT (< 1024px) */}
                                    <div className="block lg:hidden">
                                        <div className="flex gap-4 sm:gap-8">

                                            {/* Left: Interactive Node and Local Line Segment */}
                                            <div className="flex flex-col items-center">
                                                <div
                                                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-display text-base sm:text-lg font-semibold border transition-all duration-500 ${isRowVisible
                                                        ? 'bg-[#C5A880] text-white border-[#C5A880] shadow-md shadow-[#C5A880]/10'
                                                        : 'bg-white text-stone-400 border-stone-200'
                                                        }`}
                                                >
                                                    {step.number}
                                                </div>
                                                {index < steps.length - 1 && (
                                                    <div className={`w-[2px] flex-grow my-3 min-h-[160px] rounded-full transition-all duration-500 ${isRowVisible ? 'bg-[#C5A880]' : 'bg-stone-200'
                                                        }`}></div>
                                                )}
                                            </div>

                                            {/* Right: Content block with nice entry transitions */}
                                            <div className={`flex-1 pb-8 transition-all duration-1000 ease-out transform ${isRowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                                }`}>
                                                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-100 shadow-sm space-y-4 hover:shadow-md transition-shadow duration-300">
                                                    <div>
                                                        <h3 className="text-xl sm:text-2xl font-display font-medium text-[#1A1A1A]">
                                                            {step.title}
                                                        </h3>
                                                        <p className="text-stone-500 text-xs sm:text-sm leading-relaxed font-light mt-1.5">
                                                            {step.description}
                                                        </p>
                                                    </div>
                                                    <div className="overflow-hidden rounded-xl border border-stone-100">
                                                        <img
                                                            src={step.imageUrl}
                                                            alt={step.title}
                                                            referrerPolicy="no-referrer"
                                                            className="w-full h-44 sm:h-56 object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                </div>

            </section>

        </div>
    );
}
