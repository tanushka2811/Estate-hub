
export default function WhyChoose() {
    const values = [
        {
            title: 'Our Mission',
            icon: (
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="18" stroke="#C29B40" strokeWidth="1" />
                    <circle cx="40" cy="40" r="8" stroke="#C29B40" strokeWidth="1" />
                    <circle cx="40" cy="40" r="2" fill="#C29B40" />
                    <path d="M10 40L27 40" stroke="#C29B40" strokeWidth="1" strokeLinecap="round" />
                    <path d="M23 36L27 40L23 44" stroke="#C29B40" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 36V44" stroke="#C29B40" strokeWidth="1" strokeLinecap="round" />
                </svg>
            ),
            desc: 'To revolutionize urban development through intelligent design and data-backed precision.'
        },
        {
            title: 'Our Vision',
            icon: (
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 20C32 20 25 27 25 35C25 41 28 46 32 49V55H48V49C52 46 55 41 55 35C55 27 48 20 40 20Z" stroke="#C29B40" strokeWidth="1" />
                    <path d="M35 59H45" stroke="#C29B40" strokeWidth="1" strokeLinecap="round" />
                    <path d="M37 63H43" stroke="#C29B40" strokeWidth="1" strokeLinecap="round" />
                    <path d="M40 30V40M35 35H45" stroke="#C29B40" strokeWidth="1" strokeLinecap="round" />
                </svg>
            ),
            desc: 'To be the most trusted developer, transforming landscapes through architectural excellence.'
        },
        {
            title: 'Core Values',
            icon: (
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 20C32 20 25 27 25 35C25 41 28 46 32 49V55H48V49C52 46 55 41 55 35C55 27 48 20 40 20Z" stroke="#C29B40" strokeWidth="1" />
                    <path d="M35 59H45" stroke="#C29B40" strokeWidth="1" strokeLinecap="round" />
                    <path d="M37 63H43" stroke="#C29B40" strokeWidth="1" strokeLinecap="round" />
                    <path d="M40 30V40M35 35H45" stroke="#C29B40" strokeWidth="1" strokeLinecap="round" />
                </svg>
            ),
            desc: 'Integrity, quality, and commitment. We uphold the highest standards in every project.'
        }
    ];
    return (
        <section className="py-12 md:py-16 px-4 md:px-[50px] bg-[#F2F4F6]">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-[48px] font-medium mb-4 font-serif text-[#1A1A1A]">Why Choose Estate-Hub ?</h2>
                <p className="text-[#333333] max-w-3xl mx-auto text-sm md:text-[17px] font-sans leading-[1.6]">
                    Every competitor builds. We build, manage, advise, and deliver returns backed by AI <br className="hidden md:block" /> and enforced by contract.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center">
                {values.map((v, i) => (
                    <div key={i} className="bg-white p-3 rounded-[12px] text-center flex flex-col items-center border border-[#EEEEEE] w-full max-w-[450px] min-h-[200px] h-auto justify-center hover:-translate-y-2 hover:border-[#C29B40] transition-all duration-300 cursor-pointer shadow-sm">
                        <div className=" flex items-center justify-center scale-90">
                            {v.icon}
                        </div>
                        <h3 className="text-xl md:text-[24px] font-normal mb-2 font-serif text-[#1A1A1A]">{v.title}</h3>
                        <p className="text-[#444444] leading-[1.5] font-sans text-sm md:text-[16px] max-w-[384px] text-center">{v.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
};