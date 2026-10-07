import { Link } from "react-router-dom";
export default function Success() {
    return (
        <section className="py-9 md:py-16 px-4 md:px-[50px]">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="w-full lg:w-[500px] xl:w-[573px] flex-none">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
                        alt="Success Story"
                        className="rounded-[20px] shadow-sm object-cover w-full h-[220px] sm:h-[311px]"
                    />
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl md:text-[40px] lg:text-[36px] font-medium mb-2 font-serif leading-tight text-[#1A1A1A]">
                        Listen to the Success Story of Estate-hub: How We Transformed Dreams into Reality
                    </h2>
                    <p className="text-xs md:text-[17px] text-[#666666] mb-6 font-sans leading-[1.6] text-justify w-full">
                        Estate-hub made my dream of owning a smart home a reality. The entire process from booking to handover was transparent and stress free. Estate-hub made my dream of owning a smart home a reality. The entire process from booking to handover was transparent and stress-free.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-[#002349] text-white px-6 py-2.5 rounded-[8px] font-medium hover:bg-[#C29B40] transition-all text-sm md:text-[15px] inline-block text-center animate-fadeIn"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    )
}
