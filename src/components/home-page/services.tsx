

import { useState } from "react"
import { Link } from "react-router-dom"
export default function Service() {
    const [activeService, setActiveService] = useState('Residential');
    const services = [
        { id: 'Residential', title: 'Residential Development', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200', link: '/services/residential-development' },
        { id: 'Commercial', title: 'Commercial Development', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200', link: '/services/commercial-retail' },
        { id: 'Industrial', title: 'Industrial Development', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200', link: '/services/institutional-property' },
        { id: 'Land', title: 'Land Development', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200', link: '/services/land-development' },
        { id: 'EndToEnd', title: 'End to End Solutions', image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1200', link: '/services/end-to-end-development' },
        { id: 'AI', title: 'AI & Smart Solution', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200', link: '/services/ai-smart-solution' }
    ];
    return (
        <section className="py-12 px-4 sm:px-8 md:px-[50px] bg-white">
            <div className="text-center mb-10">
                <h2 className="mb-4 text-3xl md:text-[46px] leading-tight md:leading-[56px] text-[#1A1A1A] font-bold font-serif">Our Services</h2>
                <p className="p1 max-w-3xl mx-auto text-[#4C4C4C] text-sm md:text-base">
                    From raw land acquisition to AI-powered investment advisory, we cover the entire real estate value chain with precision and expertise.
                </p>
            </div>

            {/* Desktop View: Expanding Accordion */}
            <div className="hidden md:flex h-[600px] gap-2 w-full">
                {services.map((service) => (
                    <div
                        key={service.id}
                        onClick={() => setActiveService(service.id)}
                        className={`relative h-full transition-all duration-[1000ms] cubic-bezier(0.4, 0, 0.2, 1) cursor-pointer overflow-hidden rounded-[15px] ${activeService === service.id ? 'flex-[12]' : 'w-[32px] flex-none'
                            }`}
                    >
                        {/* Background Image */}
                        <img
                            src={service.image}
                            alt={service.title}
                            className="absolute inset-0 h-full w-[1200px] max-w-none object-cover"
                        />
                        {/* Overlay */}
                        <div className={`absolute inset-0 transition-opacity duration-1000 ${activeService === service.id
                            ? 'bg-gradient-to-r from-black/80 via-black/40 to-transparent opacity-100'
                            : 'bg-black/40 hover:bg-black/30 opacity-100'
                            }`} />

                        {/* Expanded Content */}
                        {activeService === service.id && (
                            <div className="absolute inset-0 p-8 lg:p-[50px] flex flex-col justify-start text-white w-full max-w-[800px]">
                                <h3 className="!text-white text-3xl lg:text-[56px] font-bold mb-2 font-serif leading-tight whitespace-nowrap">
                                    {service.title}
                                </h3>
                                <p className="text-base lg:text-xl max-w-md mb-4 font-normal leading-relaxed !text-white">
                                    Building dream homes from affordable apartments to ultra luxury smart villas.
                                </p>

                                <ul className="space-y-1 mb-4">
                                    {['Affordable Apartments', 'Mid-Segment Apartments', 'Premium Villas'].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm lg:text-lg !text-white">
                                            <span className="text-white">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <Link to={service.link} className="text-[#C29B40] text-base lg:text-[18px] font-medium hover:underline flex items-center gap-2 group/link mb-6">
                                    Know more
                                    <span className="transition-transform group-hover/link:translate-x-2">→</span>
                                </Link>

                                {/* Bottom Navigation Bar (Dynamic Width Pill) */}
                                <div className="absolute bottom-6 left-4 right-4 bg-white rounded-[15px] py-3 px-2 flex items-center justify-between shadow-2xl overflow-x-auto">
                                    {[
                                        { id: 'Residential', label: 'Residential' },
                                        { id: 'Commercial', label: 'Commercial' },
                                        { id: 'Industrial', label: 'Institutional' },
                                        { id: 'Land', label: 'Land Development' },
                                        { id: 'EndToEnd', label: 'End to End Solutions' },
                                        {id:'AI',label:'AI-smart'}
                                    ].map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActiveService(tab.id);
                                            }}
                                            className={`relative z-10 px-4 py-2 rounded-[12px] text-xs lg:text-[15px] font-medium transition-all duration-500 whitespace-nowrap ${activeService === tab.id ? 'text-white' : 'text-[#666666] hover:text-[#002349]'
                                                }`}
                                        >
                                            {tab.label}
                                            {activeService === tab.id && (
                                                <div className="absolute inset-0 bg-[#002349] rounded-[12px] -z-10 animate-fadeIn" style={{ transition: 'all 0.5s ease-in-out' }} />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Vertical ID for collapsed items */}
                        {activeService !== service.id && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span className="whitespace-nowrap -rotate-90 text-white/90 font-medium text-xs lg:text-[14px] tracking-[0.3em] uppercase">
                                    {service.id}
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile View: Vertical Stacked Cards */}
            <div className="flex flex-col gap-6 md:hidden">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="relative h-[320px] rounded-[15px] overflow-hidden shadow-md flex flex-col justify-end p-6 text-white"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />
                        <div className="relative z-20">
                            <h3 className="!text-white text-xl sm:text-2xl font-bold font-serif mb-2 leading-tight">
                                {service.title}
                            </h3>
                            <p className="text-xs sm:text-sm mb-4 !text-white/90">
                                Building dream homes from affordable apartments to ultra luxury smart villas.
                            </p>
                            <Link to={service.link} className="text-[#C29B40] text-sm font-semibold flex items-center gap-1">
                                Know more <span>→</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}