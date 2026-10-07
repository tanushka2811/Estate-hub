
import { Link } from "react-router-dom"
export default function ServiceHero() {
    return (
        <section className="relative h-[78vh] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#000000]/40" />
            </div>

            <div className="relative z-10 px-4 md:px-[50px] w-full">
                <div className="w-full">
                    <h1 className="!text-[#ffffff] text-4xl md:text-4xl lg:text-5xl font-serif mb-3 leading-tight">
                        Future-Ready Spaces for <br/> India's Growing Business Ecosystem.
                    </h1>
                    <p className="!text-[#ffffff]/90 text-sm md:text-lg mb-6 font-sans font-light w-full leading-relaxed max-w-3xl">
                        From luxury residential spaces to shopping malls, have a look at our successful commercial & residential projects in Delhi NCR, Ghaziabad & New Meerut.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/portfolio">
                            <button className="btn-hero-primary px-6 md:px-5 py-3.5 md:py-3 rounded-lg text-sm md:text-base">
                                Explore Projects
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="btn-hero-secondary px-6 md:px-5 py-3.5 md:py-3 rounded-lg text-sm md:text-base">
                                Book Free Consultation
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
};
