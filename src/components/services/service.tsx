import { Home, Building2, Globe, Factory, Zap, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom"

export default function Service() {
    const serviceCards = [
        {
            title: "Residential Development",
            icon: <Home className="md:w-6 md:h-6 w-4 h-4" />,
            desc: "Building dream homes from affordable apartments to ultra luxury smart villas.",
            features: ["Affordable Apartments", "Mid-Segment Apartments", "Premium Villas"],
            bgColor: "bg-[#717C8C]",
            gradient: "from-[#717C8C] via-[#717C8C]/30",
            image: "https://images.unsplash.com/photo-1545324418-f1d3c5b53571?auto=format&fit=crop&q=80&w=600",
            link: "/services/residential-development"
        },
        {
            title: "Institutional Projects",
            icon: <Home className="md:w-6 md:h-6 w-4 h-4" />,
            desc: "Hospitals, schools, and civil infrastructure We Build.",
            features: ["Affordable Apartments", "Mid-Segment Apartments", "Premium Villas"],
            bgColor: "bg-[#B4A089]",
            gradient: "from-[#B4A089] via-[#B4A089]/30",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",
            link: "/services/institutional-property"
        },
        {
            title: "Commercial & Retail",
            icon: <Building2 className="md:w-6 md:h-6 w-4 h-4" />,
            desc: "Premium office spaces and shopping hubs in prime business districts.",
            features: ["Prime ROI Locations", "24/7 Security & Power", "State-of-the-art Infrastructure"],
            bgColor: "bg-[#5C8C89]",
            gradient: "from-[#5C8C89] via-[#5C8C89]/30",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
            link: "/services/commercial-retail"
        },
        {
            title: "Land Development",
            icon: <Globe className="md:w-6 md:h-6 w-4 h-4" />,
            desc: "Strategic land acquisition and development of premium plots.",
            features: ["Legal Compliance", "Investment Security", "Planned Utilities"],
            bgColor: "bg-[#848B94]",
            gradient: "from-[#848B94] via-[#848B94]/30",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600",
            link: "/services/land-development"
        },
        {
            title: "End to End Development",
            icon: <Factory className="md:w-6 md:h-6 w-4 h-4" />,
            desc: "Full-cycle construction and management of large-scale projects.",
            features: ["Turnkey Solutions", "Quality Control", "Timely Delivery"],
            bgColor: "bg-[#9A8B6F]",
            gradient: "from-[#9A8B6F] via-[#9A8B6F]/30",
            image: "https://images.unsplash.com/photo-1504307651254-35680fb3ba66?auto=format&fit=crop&q=80&w=600",
            link: "/services/end-to-end-development"
        },
        {
            title: "AI Smart Solution",
            icon: <Zap className="md:w-6 md:h-6 w-4 h-4" />,
            desc: "Integrating cutting-edge AI for smarter property management.",
            features: ["Smart Energy Systems", "AI Security Integration", "Predictive Maintenance"],
            bgColor: "bg-[#BCAB8B]",
            gradient: "from-[#BCAB8B] via-[#BCAB8B]/30",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
            link: "/services/ai-smart-solution"
        }
    ];

    return (
        <section className="py-10 sm:py-12 md:py-10 px-4 sm:px-8 md:px-[50px] overflow-hidden">
            <div className="w-full">
                <div className="mb-8 sm:mb-10 md:mb-7 max-w-5xl">
                    <h2 className="text-[30px] sm:text-4xl md:text-[48px] font-medium mb-4 font-serif text-[#1A1A1A] leading-tight">Everything Real Estate. All Under One Roof.</h2>
                    <p className="text-[#666666] w-full text-sm sm:text-base md:text-lg font-sans leading-relaxed">
                        Estate-Hubs provides a comprehensive ecosystem for property, ranging from construction to smart management and strategic investment.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-6">
                    {serviceCards.map((card, i) => (
                        <div key={i} className={`${card.bgColor} rounded-2xl md:rounded-[24px] p-5 sm:p-6 md:p-5 xl:p-5 !text-[#ffffff] overflow-hidden relative group min-w-0 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] md:min-h-[260px] lg:min-h-[280px]`}>
                            <div className="z-10 min-w-0 max-w-[60%] sm:max-w-[58%] md:max-w-[55%] flex-col justify-between h-full">
                                <div>
                                    <div className="border border-white/20 p-2.5 rounded-xl w-fit mb-3 md:mb-4 flex items-center justify-center">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl md:text-2xl font-serif mb-2 md:mb-3 !text-[#ffffff] leading-tight">{card.title}</h3>
                                    <p className="!text-[#ffffff] text-xs sm:text-sm md:text-sm mb-4 md:mb-5 font-light leading-relaxed">
                                        {card.desc}
                                    </p>
                                    <ul className="space-y-1.5 md:space-y-2 mb-2 md:mb-5">
                                        {card.features.map((feature, j) => (
                                            <li key={j} className="flex items-center gap-2.5 !text-[#ffffff]/90 text-xs sm:text-sm md:text-base leading-relaxed">
                                                <span className="text-[#FFBD59] font-bold">✓</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Link to={card.link}>
                                    <button className="flex items-center gap-1.5 font-medium text-[#FFBD59] hover:text-[#FFBD59]/80 transition-all origin-left text-xs sm:text-sm md:text-base cursor-pointer">
                                        Learn More <ArrowRight className="w-4 h-4 transition-transform sm:group-hover:translate-x-1.5" />
                                    </button>
                                </Link>
                            </div>
                            <div className="absolute right-0 top-0 bottom-0 w-[40%] sm:w-[42%] md:w-[45%] h-full z-0 pointer-events-none overflow-hidden">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover object-center"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} to-transparent`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
