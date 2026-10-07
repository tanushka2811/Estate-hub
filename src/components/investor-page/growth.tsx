import { Building, Home, Briefcase, Cog } from "lucide-react";
export default function Growth() {
  const strategies = [
    {
      icon: <Building className="w-6 h-6 text-[#E3B873]" />,
      title: "Urban Expansion",
      description:
        "Expanding into Tier I cities and emerging high-growth urban corridors to capture strong demand and long-term value.",
    },
    {
      icon: <Home className="w-6 h-6 text-[#E3B873]" />,
      title: "Scalable Housing",
      description:
        "Developing optimized residential projects designed for the premium value segment with scalable growth potential.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-[#E3B873]" />,
      title: "Commercial Hubs",
      description:
        "Building Grade A commercial spaces in high-demand business and technology clusters.",
    },
    {
      icon: <Cog className="w-6 h-6 text-[#E3B873]" />,
      title: "Execution Technology",
      description:
        "Implementing advanced systems for real-time project tracking, efficiency, and quality control.",
    },
  ];
  return (
<div className="bg-white font-sans">
<section className="bg-[#FFFFFF] py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-serif text-[#1E3557] mb-3 text-center">
            Future Growth Strategy
          </h2>
          <p className="text-[#4A5568] text-sm md:text-base mb-12 max-w-3xl mx-auto text-center">
            Our long-term vision is focused on expanding into high-growth markets,
            building scalable developments, and leveraging technology to deliver
            consistent, sustainable returns for our investors.
          </p>

          {/* Strategy Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategies.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col items-center text-center"
              >
                {item.icon}
                <h3 className="text-[#1E3557] font-semibold mt-3 mb-1">
                  {item.title}
                </h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
        )};