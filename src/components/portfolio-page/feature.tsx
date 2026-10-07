import { LayoutGrid, MapPin, CheckCircle, TrendingUp } from "lucide-react";

export default function Feature() {
    const features = [
        {
            icon: <LayoutGrid className="w-6 h-6 text-[#E3B873] mb-4" />,
            title: "Smarter Living Spaces",
            description:
                "Layouts are designed for real usage, with efficient space flow, natural ventilation, and practical planning that supports comfortable everyday living.",
        },
        {
            icon: <MapPin className="w-6 h-6 text-[#E3B873] mb-4" />,
            title: "Better Location Advantage",
            description:
                "Projects are developed in well-connected, high-growth areas, ensuring better daily convenience while supporting stronger long-term value potential.",
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-[#E3B873] mb-4" />,
            title: "Reliable Delivery",
            description:
                "A structured construction approach helps maintain quality standards, manage timelines effectively, and ensure projects are delivered with consistency.",
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-[#E3B873] mb-4" />,
            title: "Built for Long-Term Value",
            description:
                "Developments are planned to remain functional, adaptable, and relevant over time, supporting both usability and long-term investment value.",
        },
    ];
    return (
        <section className="bg-[#F6F7F9] py-8 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-portfolio-heading mb-3">
                    Why Our Projects Stand Out
                </h2>
                <p className="text-body text-sm sm:text-base md:text-base mb-7 max-w-3xl mx-auto">
                    A structured approach to planning, location, and execution ensures every
                    development delivers consistent quality, practical usability, and
                    long-term value.
                </p>

                {/* Feature Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-left bg-[#F9F9F9] rounded-[12px] overflow-hidden">
  {features.map((item, index) => (
    <div
      key={index}
      className={`flex flex-col justify-start p-5 border border-[#E5E5E5] ${
        index !== features.length - 1 ? "lg:border-r" : ""
      }`}
    >
      <div className="text-[#E3B873] mb-1">{item.icon}</div>
      <h3 className="text-[#1A1A1A] font-serif font-semibold text-lg mb-3">
        {item.title}
      </h3>
      <p className="text-[#4C4C4C] text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  ))}
</div>

            </div>
        </section>
    )
}
