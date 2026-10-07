import { Shield, Zap, CheckCircle, Phone, CalendarDays, Clock } from "lucide-react";
export default function Best() {
  return (
    <div className="bg-white font-sans">
      <section className="bg-[#F9FAFB] py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Image Section */}
          <div className="relative w-full max-w-[240px] sm:max-w-[340px] lg:max-w-[440px] mx-auto lg:mx-0">
            {/* Background (tall skyscraper) */}
            <img
              src="/images/office-hero.png"
              alt="Skyscraper"
              className="rounded-[16px] w-full h-[280px] sm:h-[400px] lg:h-[500px] object-cover"
            />

            {/* Foreground (houses) */}
            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-10 -right-6 sm:-right-12 lg:-right-20 bg-white rounded-xl lg:rounded-[16px] shadow-lg p-1 lg:p-[6px] w-[130px] h-[170px] sm:w-[180px] sm:h-[240px] lg:w-[240px] lg:h-[300px]">
              <img
                src="/images/office-hero.png"
                alt="Residential Houses"
                className="rounded-[8px] lg:rounded-[12px] w-full h-full object-cover"
              />

              {/* Circular badge */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 lg:-bottom-6 lg:-left-6 bg-white rounded-full shadow-md w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] lg:w-[90px] lg:h-[90px] flex flex-col items-center justify-center p-1 sm:p-2">
                <p className="text-[#9A7B36] font-semibold text-xs sm:text-base lg:text-lg">15+</p>
                <p className="text-[8px] sm:text-[10px] lg:text-[11px] text-[#1A1A1A] text-center leading-tight font-medium">
                  Years of <br /> Experience
                </p>
              </div>
            </div>
          </div>


          {/* Right Content Section */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-serif text-[#1E3557] mb-4">
              We Are The Best <br /> Real Estate Agency
            </h2>
            <p className="text-[#4A5568] text-sm md:text-base mb-6 leading-relaxed">
              Our dedicated team of property experts helps you find, buy, sell, or invest
              in real estate with complete confidence. From luxury villas to modern
              apartments, we guide you at every step of the journey.
            </p>

            {/* Features */}
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Shield className="w-10 h-10 text-[#E3B873] mt-1" />
                <div>
                  <h4 className="text-[#1E3557] font-semibold text-sm">
                    Trusted Property Partner
                  </h4>
                  <p className="text-[#4A5568] text-sm leading-relaxed">
                    We build lasting relationships with clients, offering transparent advice
                    and honest dealings throughout every real estate transaction.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Zap className="w-10 h-10 text-[#E3B873] mt-1" />
                <div>
                  <h4 className="text-[#1E3557] font-semibold text-sm">
                    Fast & Seamless Process
                  </h4>
                  <p className="text-[#4A5568] text-sm leading-relaxed">
                    Our streamlined platform makes property searches, site visits, and deal
                    closings quick, smooth, and entirely stress-free.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-10 h-10 text-[#E3B873] mt-1" />
                <div>
                  <h4 className="text-[#1E3557] font-semibold text-sm">
                    Verified & Reliable Listings
                  </h4>
                  <p className="text-[#4A5568] text-sm leading-relaxed">
                    Every property on our platform is vetted for legal clarity, fair market
                    pricing, and accurate details so you invest with full peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        

      </section>
      

      {/* Full-width Bottom Info Bar */}
<div className="w-full bg-[#0B1E3F] text-white py-8 flex flex-col sm:flex-row items-center justify-center text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-600">
  {/* Monday – Friday */}
  <div className="flex-1 flex flex-col items-center px-6 py-4 sm:py-0">
    <Phone className="w-6 h-6 mb-2 text-[#E3B873]" />
    <p className="text-sm font-medium text-white">Monday – Friday</p>
    <p className="text-xs text-gray-300">9:00 AM – 7:00 PM</p>
  </div>

  {/* Sunday */}
  <div className="flex-1 flex flex-col items-center px-6 py-4 sm:py-0">
    <CalendarDays className="w-6 h-6 mb-2 text-[#E3B873]" />
    <p className="text-sm font-medium text-white">Sunday</p>
    <p className="text-xs text-gray-300">Only By Appointment</p>
  </div>

  {/* Contacted */}
  <div className="flex-1 flex flex-col items-center px-6 py-4 sm:py-0">
    <Clock className="w-6 h-6 mb-2 text-[#E3B873]" />
    <p className="text-sm font-medium text-white">Contacted</p>
    <p className="text-xs text-gray-300">Under 24 hours</p>
  </div>
</div>
</div>
  )};