export default function MeetVisionary() {
    return (
        <section className="bg-[#F2F4F6] py-12 md:py-16 px-4 md:px-[50px]">
            <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-[48px] font-medium mb-4 font-serif text-[#1A1A1A]">Meet The Visionaries</h2>
                    <p className="text-[#666666] max-w-2xl mx-auto text-sm md:text-[17px] font-sans leading-relaxed">
                        Every competitor builds. We build, manage, advise, and deliver returns backed by AI and enforced by contract.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {[
                        { name: 'Rohit Jangir', role: 'Chairman & Director', image: '/images/testimonial/meet-visionary-1.png' },
                        { name: 'Priya Kumari', role: 'HR Manager', image: '/images/testimonial/meet-visionary-2.png' },
                        { name: 'Anish Kumar', role: 'UI/UX Designer', image: '/images/testimonial/meet-visionary-4.png' },
                        { name: 'Shweta Kumari', role: 'Software Developer', image: '/images/testimonial/meet-visionary3.png' }
                    ].map((v, i) => (
                        <div key={i} className="bg-white p-[10px] w-full max-w-[250px] h-[340px] rounded-[16px] shadow-sm flex flex-col items-center flex-shrink-0 transition-all duration-300 border-[2px] border-transparent hover:border-[#9A7B36] hover:-translate-y-2 cursor-pointer group">
                            <div className="relative w-full aspect-[302/377] max-h-[377px] mb-[10px] rounded-[8px] overflow-hidden">
                                <img
                                    src={v.image}
                                    alt={v.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* LinkedIn Icon Overlay */}
                                <div className="absolute bottom-3 right-3 bg-white w-9 h-9 rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-50 transition-colors">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#0077B5">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="text-center mt-auto pb-2">
                                <h4 className="text-2xl font-normal text-[#1A1A1A] font-serif mb-1 leading-tight">{v.name}</h4>
                                <p className="text-[#9A7B36] text-base font-sans font-medium tracking-normal">{v.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}