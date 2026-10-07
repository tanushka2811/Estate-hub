import { MapPin, Hammer, Coins } from "lucide-react";
const infoCards = [
  {
    icon: MapPin,
    heading: "YOU BRING",
    description: "Your land — any size, any location in Delhi NCR",
  },
  {
    icon: Hammer,
    heading: "WE BRING",
    description: "100% investment, construction & sales expertise",
  },
  {
    icon: Coins,
    heading: "YOU GET",
    description: "20–30% of total project revenue — as agreed",
  },
];
export default function LandCollaboration() {
  return (
    <div className="bg-white font-sans">
      <section className="bg-white py-9 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          {/* Left side: Heading + Image */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-[2.5rem] font-serif text-[#1E3557] leading-snug">
              What Is Land Collaboration<br />With Estate-Hubs?
            </h2>
            <img
              src="/images/office-hero.png"
              alt="Team collaboration"
              className="rounded-xl w-[33rem] h-[240px] sm:h-[320px] md:h-[400px] lg:h-[400px] object-cover"
            />
          </div>

          {/* Right side: Description + Info Cards */}
          <div className="space-y-6">
            <p className="text-[#4A5568] leading-relaxed">
              Land Collaboration, also known as a Joint Development Agreement (JDA), is a partnership model
              where you contribute your land and Estate-Hubs contributes the capital, expertise, and execution.
            </p>
            <p className="text-[#4A5568] leading-relaxed">
              We handle everything — planning, approvals, construction, marketing, and sales. Once the project is sold,
              you receive your agreed profit share without spending a single rupee from your pocket.
            </p>
            <p className="italic text-[#1E3557] font-medium">
              It’s simple. It’s transparent. And it’s designed so both parties win.
            </p>

             <div className="space-y-4">
      {infoCards.map((card, index) => (
        <div
          key={index}
          className="flex items-center gap-4 bg-[#F9FAFB] rounded-xl p-3 border border-gray-200 shadow-sm"
        >
          <card.icon className="text-[#E3B873] md:w-6 md:h-6 h-4 w-4 flex-shrink-0" />
          <div>
            <h4 className="text-[#1E3557] font-semibold text-sm mb-1">
              {card.heading}
            </h4>
            <p className="text-[#4A5568] text-xs">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
          </div>
        </div>
      </section>
    </div>
  );
}
