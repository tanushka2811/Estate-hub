import {Link} from "react-router-dom"
export default function PortfolioStats() {
    return (
        <section className="bg-white py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Top Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">
                    {/* Left Heading */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-portfolio-heading leading-snug">
                            we build spaces that deliver <br /> long-term value
                        </h2>
                    </div>

                    {/* Right Paragraph + Button */}
                    <div>
                        <p className="text-body text-sm sm:text-base md:text-base leading-relaxed mb-6">
                            At Estate-Hubs, we focus on developing high-quality residential
                            and commercial projects through structured planning and disciplined
                            execution. Every space we build is designed to offer practical living,
                            strong investment potential, and long-term reliability.
                        </p>
                        <Link to="/about" className="bg-portfolio-heading !text-white text-sm sm:text-base font-medium rounded-md px-5 py-2.5 hover:opacity-90 transition-all">
                            Learn More About Us
                        </Link>
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 text-center">
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
      } px-4`}
    >
      <h3 className="text-[#E3B873] text-xl sm:text-2xl md:4xl font-semibold mb-1">
        {stat.value}
      </h3>
      <p className="text-[#4A5568] text-sm sm:text-base">{stat.label}</p>
    </div>
  ))}
</div>
            </div>
        </section>
    )
};