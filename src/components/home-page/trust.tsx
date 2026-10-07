import { Link } from "react-router-dom"

export default function Trust() {
    return (
        <section className="py-12 md:py-16 px-4 sm:px-8 md:px-[50px] bg-white w-full">
            <div className="flex flex-col lg:flex-row gap-10 items-center w-full">
                <div className="w-full lg:w-3/5">
                    <img
                        src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1200"
                        className="rounded-[15px] shadow-sm w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover"
                        alt="Classic Architecture"
                    />
                </div>
                <div className="w-full lg:w-1/2">
                    <h2 className="mb-4 text-3xl md:text-[46px] leading-tight md:leading-[56px] text-[#1A1A1A] font-bold font-serif">Why Thousands Trust <br className="hidden md:block" /> Estate-Hubs</h2>
                    <p className="p1 mb-6 text-[#4C4C4C] max-w-2xl text-sm md:text-base leading-relaxed">
                        Estate-Hubs made my dream of owning a smart home a reality. The entire process from booking to handover was transparent and stress-free.
                    </p>
                    <Link to="/about" className="bg-[#002349] text-white px-5 py-3 rounded-lg font-normal text-sm md:text-base hover:bg-[#C29B40] transition-all inline-block">
                        About us
                    </Link>
                </div>
            </div>
        </section>)
};