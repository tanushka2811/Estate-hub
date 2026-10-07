import { Shield, MapPin, MessageSquare, Clock, LineChart } from "lucide-react";
export default function WhyInvest() {

  const investReasons = [
    {
      icon: <Shield className="w-6 h-6 text-[#E3B873]" />,
      title: "Structured Execution",
      description:
        "Diversified portfolios and cautious leverage to protect investor capital while maximizing gains.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#E3B873]" />,
      title: "High-Growth Locations",
      description:
        "Strategic land acquisition in corridors with maximum appreciation potential.",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#E3B873]" />,
      title: "Structured Execution",
      description:
        "Diversified portfolios and cautious leverage to protect investor capital while maximizing gains.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-[#E3B873]" />,
      title: "Transparent Communication",
      description:
        "Real-time updates and clear reporting on development progress and financial health.",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#E3B873]" />,
      title: "Delivery Track Record",
      description:
        "A history of successful project turnarounds and satisfied stakeholder communities.",
    },
    {
      icon: <LineChart className="w-6 h-6 text-[#E3B873]" />,
      title: "Balanced Risk–Return",
      description:
        "Diversified portfolios and cautious leverage to protect investor capital while maximizing gains.",
    },
  ];
    return (
      <div className="bg-white font-sans">
       <section className="bg-[#F2F4F6] py-9 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-serif text-[#1E3557] mb-3">
            Why Invest With Us
          </h2>
          <p className="text-[#4A5568] text-sm md:text-base mb-5 max-w-3xl mx-auto">
            We provide asset-backed investments in high-growth locations, supported by
            disciplined execution, transparency, and a proven track record of long-term
            value.
          </p>

          {/* Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {investReasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col items-start text-left"
              >
                {reason.icon}
                <h3 className="text-[#1E3557] font-semibold mt-3 mb-1">
                  {reason.title}
                </h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
        </div>
    )};