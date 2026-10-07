import { Link } from 'react-router-dom'
export default function CareerHero() {
    return (


        <section className="relative h-[80vh] flex items-end pb-12 md:pb-20 overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000"
                    className="w-full h-full object-cover brightness-[0.85]"
                    alt="Luxury Villa Hero"
                />
            </div>
            <div className="relative z-10 px-4 sm:px-10 md:px-16 lg:px-[50px] w-full">
                <h1 className="!text-white text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-5 max-w-4xl animate-fadeIn">
                    Build Your Career with Aaru <br /> developers.
                </h1>
                <p className="!text-white text-sm sm:text-base md:text-lg max-w-3xl mb-6 font-light leading-relaxed">
                    Join a team that is redefining real estate through innovation, design, and meaningful work.          </p>
                <div className="flex flex-wrap gap-4 mb-[-10px]">
                    <Link to="/portfolio" className="btn-hero-primary px-6 py-3 text-sm md:text-base shadow-2xl min-w-[120px]">
                        Portfolio
                    </Link>
                    <Link to="/contact" className="btn-hero-secondary px-6 py-3 text-sm md:text-base min-w-[180px]">
                        Book Free Consultation
                    </Link>
                </div>
            </div>
        </section>
    )
}