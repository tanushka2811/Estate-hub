export default function MileStone() {
    const milestones = [
        { year: '2024', title: 'Founding', desc: 'Estate-Hubs founded with a vision to transform urban housing in India' },
        { year: '2025', title: 'Expansion', desc: 'Expanded operations to 5 major cities across India with commercial projects' },
        { year: '2026', title: 'Present', desc: 'Targeting 5,000+ happy families through intelligence-backed real estate.' }
    ];
    return (
        <section className="py-12 md:py-16 px-4 md:px-[50px] bg-white">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-[48px] font-medium mb-4 font-serif text-[#1A1A1A]">Milestones That Matter</h2>
                <p className="text-[#333333] max-w-3xl mx-auto text-sm md:text-[17px] font-sans leading-[1.6]">
                    Every competitor builds. We build, manage, advise, and deliver returns backed by AI <br className="hidden md:block" /> and enforced by contract.
                </p>
            </div>

            <div className="relative w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 relative">
                    {milestones.map((m, i) => (
                        <div key={i} className="flex flex-col items-start relative pl-12 md:pl-0 pt-0 md:pt-0">
                            {/* Horizontal Segmented Line (Desktop) */}
                            <div className="hidden md:block absolute top-[115px] left-0 w-full h-[2px] bg-[#C29B40]/30 z-0">
                                {i === milestones.length - 1 && (
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-[#C29B40]/40 rotate-45" />
                                )}
                            </div>

                            {/* Vertical Segmented Line (Mobile) */}
                            {i < milestones.length - 1 && (
                                <div className="md:hidden absolute left-[21px] top-[44px] bottom-0 w-[2px] bg-[#C29B40]/30 z-0" />
                            )}

                            {/* Year and Title */}
                            <div className="mb-4 md:mb-26 min-h-[60px] md:min-h-[80px] z-10">
                                <span className="text-[#C29B40] text-2xl md:text-[28px] font-serif block mb-1">{m.year}</span>
                                <h4 className="text-xl md:text-[24px] font-serif text-[#1A1A1A]">{m.title}</h4>
                            </div>

                            {/* Dot on the line */}
                            <div className="absolute top-[22px] md:top-[115px] left-[21px] md:left-0 -translate-y-1/2 -translate-x-1/2 z-20">
                                <div className="w-[44px] h-[44px] rounded-full bg-[#C29B40]/10 flex items-center justify-center">
                                    <div className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] rounded-full bg-[#C29B40]" />
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mt-2 md:mt-[-35px] w-full">
                                <p className="text-[#444444] leading-relaxed font-sans text-sm md:text-[16px] w-full text-justify">
                                    {m.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>


    )
}