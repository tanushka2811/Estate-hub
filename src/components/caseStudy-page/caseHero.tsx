import { Link } from "react-router-dom"

export default function CaseHero() {
    return (
<>
        <section className="relative h-[80vh] flex items-end pb-12 md:pb-20 overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000"
                    className="w-full h-full object-cover brightness-[0.85]"
                    alt="Luxury Villa Hero"
                />
            </div>
            <div className="relative z-10 px-4 sm:px-10 md:px-16 lg:px-[50px] w-full">
                <h1 className="!text-white text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5 max-w-4xl animate-fadeIn">
                   Aaru Heights A Residential <br/> Development Case Study
                </h1>
                <p className="!text-white text-sm sm:text-base md:text-lg max-w-3xl mb-6 font-light leading-relaxed">
                    Aaru Heights is a thoughtfully designed residential project that brings together modern architecture, efficient space planning.
                </p>
                <div className="flex flex-wrap gap-4 mb-[-10px]">
                    <Link to="/portfolio" className="btn-hero-primary px-6 py-3 text-sm md:text-base shadow-2xl min-w-[120px]">
                      View Project
                    </Link>
                    <Link to="/contact" className="btn-hero-secondary px-4 py-2 text-sm md:text-base ">
                       Contact Us
                    </Link>
                </div>
            </div>
            </section>
      
       {/* Bottom Stats Section */}
      <section className="bg-white py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 text-center max-w-6xl mx-auto">
          {[
            { value: "25+", label: "Projects Delivered" },
            { value: "10+", label: "Cities Served" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "95%", label: "On-Time Delivery" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center ${
                i !== 0 ? "border-l border-gray-200" : ""
              } px-4 py-6`}
            >
              <h3 className="text-[#E3B873] text-xl sm:text-2xl md:text-4xl font-semibold mb-1">
                {stat.value}
              </h3>
              <p className="text-[#4A5568] text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
</>
    )
};