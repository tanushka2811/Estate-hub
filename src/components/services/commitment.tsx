
export default function Commitment() {

    return (

        <section className="py-12 md:py-8 px-4 sm:px-8 md:px-[50px] bg-[#ffffff]">
            <div className="w-full">
                {/* Header */}
                <div className="mb-5 md:mb-6">
                    <h2 className="text-[30px] sm:text-4xl md:text-[48px] font-medium mb-4 font-serif text-[#1A1A1A] leading-tight">One Partner.Zero Compromise</h2>
                    <p className="text-[#666666] text-sm md:text-lg leading-relaxed w-full font-sans">
                        Our commitment to excellence ensures that you get a hassle-free experience from planning to final possession.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
                    {/* Left: Image */}
                    <div className="w-full lg:w-[50%]">
                        <img
                            src="/images/office-hero.png"
                            alt="Architecture"
                            className="rounded-[16px] shadow-xl w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[444px] object-cover"
                        />
                    </div>

                    {/* Right: List */}
                    <div className="flex flex-col justify-between w-full lg:w-[50%] h-auto lg:h-[444px] bg-white lg:bg-transparent p-6 sm:p-8 lg:p-0 rounded-2xl shadow-lg lg:shadow-none relative z-20">
                        {[
                            { id: '1', title: 'AI-Powered', desc: 'Every decision backed by real data and valuable insights not gut feeling' },
                            { id: '2', title: 'RERA Registered', desc: '100% legally transparent and compliant projects with no hidden surprises' },
                            { id: '3', title: 'End-to-End', desc: 'Land to handover to resale with complete single point of accountability' },
                            { id: '5', title: 'No Hidden Costs', desc: 'All costs clearly itemised in agreement before final signing process' }
                        ].map((item, i) => (
                            <div key={i} className="flex-1 flex flex-col justify-center py-4 sm:py-4 lg:py-2">
                                <div>
                                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#1A1A1A] mb-1 font-sans">
                                        {item.id}. {item.title}
                                    </h4>
                                    <p className="text-[#666666] leading-relaxed font-sans pl-4 sm:pl-6 text-xs sm:text-sm md:text-[15px]">
                                        {item.desc}
                                    </p>
                                </div>
                                {i < 3 && <div className="w-full h-[1px] bg-[#f0f0f0] mt-4" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}