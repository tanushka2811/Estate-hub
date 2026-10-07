
export default function Process() {
    const processSteps = [
        { id: '01', title: 'Understand', desc: 'We listen to your needs budget, location, timeline & goals.' },
        { id: '02', title: 'Analyse', desc: 'Our AI tools analyse market data to find the best options for you.' },
        { id: '03', title: 'Execute', desc: 'From design to construction we deliver on time, every time.' },
        { id: '04', title: 'Support', desc: 'Post-handover warranty, property management & resale' }
    ];

    return (

        <section className="bg-[#002349] py-12 md:py-16 px-4 sm:px-8 md:px-[50px]">
            <div className="w-full">
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[54px] font-medium mb-6 font-serif !text-[#ffffff] leading-tight">Simple. Transparent. Delivered.</h2>
                    <p className="!text-[#ffffff] w-full mx-auto mb-10 text-sm sm:text-base md:text-lg font-sans">
                        We follow a streamlined approach to ensure every project is delivered with the highest quality and transparency.
                    </p>
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFBD59] to-transparent opacity-60" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mt-10">
                    {processSteps.map((step, i) => (
                        <div key={i} className="text-left">
                            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal text-[#C29B40] mb-3 md:mb-4 font-number leading-tight sm:leading-[66px]">
                                {step.id}
                            </div>
                            <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif !text-[#ffffff] mb-3 md:mb-4">{step.title}</h4>
                            <p className="!text-[#ffffff] max-w-[300px] font-sans text-sm sm:text-sm md:text-[14px] font-normal leading-relaxed sm:leading-[22px]">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
