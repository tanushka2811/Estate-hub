export default function BuildFoundation() {
    return (

<div className="bg-white font-sans">
<section className="bg-white py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7 items-center">
          {/* Left Image Section */}
          <div className="relative">
            <img
              src="/images/office-hero.png"
              alt="Team meeting presentation"
              className="rounded-xl w-full lg:h-auto md:h-[65vh] object-cover"
            />
            <div className="absolute top-0 left-0 bg-white shadow-md rounded-lg px-2 py-7 text-center">
              <p className="text-[#1E3557] text-lg font-semibold">15</p>
              <p className="text-[#4A5568] text-xs">Years of Experience</p>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="text-left">
            <p className="text-sm text-[#4A5568] mb-2">Pitch Deck</p>
            <h2 className="text-2xl md:text-2xl font-serif text-[#1E3557] mb-4">
              We build the foundations for your financial future.
            </h2>
            <p className="text-[#4A5568] text-sm md:text-sm leading-relaxed mb-4">
              Our firm specializes in identifying undervalued residential and commercial
              properties in high-growth urban corridors. By leveraging a decade of localized
              market data and a robust network of industry partners, we transform
              high-potential sites into high-performing assets. We handle the complexity of
              development so our investors can focus on the returns.
            </p>

            {/* Quote Box */}
            <div className="bg-[#F3F4F6] rounded-lg p-4 mb-4 border-l-10 border-[#1E3557]">
              <p className="text-[#1E3557] text-sm md:text-sm">
                “In a shifting market, we prioritize data-driven acquisitions and long-term
                value creation over short-term trends.”
              </p>
            </div>

            {/* Investor Info */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <p className="text-[#1E3557] font-semibold text-sm md:text-base">
                120+ investors
              </p>
              <div className="flex -space-x-2">
                <img
                  src="/images/testimonial/meet-visionary-1.png"
                  alt="Investor 1"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="/images/testimonial/meet-visionary-2.png"
                  alt="Investor 2"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="/images/testimonial/meet-visionary3.png"
                  alt="Investor 3"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <div className="w-8 h-8 rounded-full bg-[#1E3557] text-white flex items-center justify-center text-xs font-medium">
                  116+
                </div>
              </div>
            </div>

            <a href="#investor-form" className="bg-[#1E3557] text-white rounded-md px-5 py-3 text-sm font-medium hover:bg-[#2A4A6F] transition-all">
              Invested with Us
            </a>
          </div>
        </div>
      </section>
      </div>
  )};