
import { Link } from "react-router-dom";

export default function CollabHero() {
  return (
    <div className="bg-white font-sans">


      {/* 1. Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:h-[80vh] flex items-end pb-6 sm:pb-10 md:pb-16 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover brightness-[0.85]"
            alt="Luxury Villa Hero"
          />
        </div>
        <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[50px] w-full max-w-7xl mx-auto">
          <h1 className="!text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-serif font-bold leading-[1.2] sm:leading-[1.1] mb-3 sm:mb-4 md:mb-5 max-w-4xl animate-fadeIn drop-shadow-lg">
            Your Land. Our Investment. <br /> Shared Success
          </h1>
          <p className="!text-white text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mb-4 sm:mb-6 font-light leading-relaxed drop-shadow-md">
            Own land that isn't selling? Don't let it sit idle. Collaborate with Estate-Hubs. We invest, we build, we sell, and share the profits with you. No upfront cost. No risk. Just returns.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-[-10px]">
            <Link to="/contact" className="btn-hero-primary px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>

  )
};