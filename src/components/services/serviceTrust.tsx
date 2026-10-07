import { Link } from "react-router-dom"

export default function ServiceTrust() {
    return (
        <section className="py-12 md:py-16 px-4 sm:px-8 md:px-[50px]">
            <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl md:text-[40px] font-medium mb-3 font-serif text-[#1A1A1A] leading-tight">Why Thousands Trust Estate-Hubs</h2>
                    <p className="text-[#666666] text-sm md:text-lg leading-relaxed mb-6 font-sans">
                        Estate-Hubs made my dream of owning a smart home a reality. The entire process from booking to handover was transparent and stress-free.
                    </p>
                    <Link to="/about">
                        <button className="bg-[#002349] !text-[#ffffff] px-7 py-3 rounded-lg font-medium hover:bg-[#001529] transition-all shadow-lg text-sm">
                            Explore About us
                        </button>
                    </Link>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                        alt="Cityscape"
                        className="rounded-[30px] shadow-2xl w-full max-w-[642px] h-[250px] sm:h-[373px] object-cover"
                    />
                </div>
            </div>
        </section>
    )
}

