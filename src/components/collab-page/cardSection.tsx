import { Frown, TrendingDown, Hammer } from "lucide-react";
import {Link } from "react-router-dom";
const cardData = [
  {
    number: "01",
    icon: Frown,
    title: "Can't Find the Right Buyer",
    description:
      "Your land has been on the market for months but serious buyers are nowhere to be found.",
  },
  {
    number: "02",
    icon: TrendingDown,
    title: "Offers Are Too Low",
    description:
      "The prices being offered don’t reflect the true value of your land. You deserve better and good deals.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "No Capital to Develop",
    description:
      "You know developing the land would multiply its value but you don’t have the funds to do it alone.",
  },
];
export default function CardSection() {
  return (
    <div className="bg-white font-sans">
    
<section className="bg-white py-12 sm:py-16 md:py-20 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-12 md:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-serif text-[#1E3557] mb-3 sm:mb-4">
              You Own Land. But It's Just Sitting
            </h2>
            <p className="text-[#4A5568] max-w-6xl mx-auto leading-relaxed text-xs sm:text-sm md:text-base">
              You own land, but if it's just sitting there, it's not reaching its full potential. Whether it's generating income, supporting a new venture, or increasing in value, your land can do so much more. It's time to turn that idle space into something meaningful and rewarding.
            </p>
          </div>

          {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-[#F9FAFB] rounded-lg sm:rounded-xl border border-gray-200 p-4 sm:p-6 text-left shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <span className="text-[#E3B873] text-lg sm:text-xl font-semibold">
              {card.number}
            </span>
            <card.icon className="w-6 sm:w-8 h-6 sm:h-8 text-[#E3B873]" />
          </div>
          <h3 className="text-[#1E3557] font-medium text-base sm:text-lg mb-2">
            {card.title}
          </h3>
          <p className="text-[#4A5568] text-xs sm:text-sm leading-relaxed">
            {card.description}
          </p>
        </div>
      ))}
    </div>

          {/* Bottom Quote + Button */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-3 w-full">
  {/* Quote Box */}
  <div className="bg-[#F9FAFB] rounded-sm sm:rounded-lg border border-gray-200 p-4 sm:p-3 w-full sm:w-[80%] lg:w-[85%]">
    <p className="text-[#E3B873] font-medium text-sm sm:text-base md:text-sm text-center sm:text-left leading-relaxed">
      "There's a smarter way. Collaborate with Estate-Hubs and turn your idle land into a steady stream of returns."
    </p>
  </div>

  {/* Button (outside the box) */}
  <Link
    to="/contact"
    className="bg-[#1E3557] text-white text-sm sm:text-base font-medium px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-[#162a45] transition-all duration-300 whitespace-nowrap w-full sm:w-auto text-center"
  >
    Contact Us
  </Link>
</div>

        </div>
      </section>
      </div>
       )}