import { Shield, Eye, Coins } from "lucide-react";

const features = [
  {
    id: 1,
    type: "image",
    src: "/images/office-hero.png",
  },
  {
    id: 2,
    type: "text",
    icon: Shield,
    title: "Legally Secure",
    description:
      "Your ownership is fully protected through legally binding agreements, ensuring every aspect is clearly defined and secured through structured.",
  },
  {
    id: 3,
    type: "image",
    src: "/images/office-hero.png",
  },
  {
    id: 4,
    type: "text",
    icon: Eye,
    title: "Complete Transparency",
    description:
      "Stay informed at every stage with transparent communication, detailed progress reports, and full visibility throughout the entire development process.",
  },
  {
    id: 5,
    type: "image",
    src: "/images/office-hero.png",
  },
  {
    id: 6,
    type: "text",
    icon: Coins,
    title: "Zero Investment From You",
    description:
      "We handle complete funding from initial planning to final execution, ensuring you don’t have to invest any capital at any stage of the project.",
  },
];


export default function WhyChoose() {
    return (
        <div className="bg-white font-sans">
 
 <section className="bg-[#F9FAFB] py-9 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-serif text-[#1E3557] mb-3">
            Why Choose Estate-Hubs
          </h2>
          <p className="text-[#4A5568] max-w-3xl mx-auto mb-12 leading-relaxed text-sm md:text-base">
            We go beyond development delivering secure, transparent, and high value real estate
            partnerships built on trust and performance.
          </p>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item) =>
              item.type === "image" ? (
                <div key={item.id} className="rounded-xl overflow-hidden">
                  <img
                    src={item.src}
                    alt="Feature"
                    className="w-full h-50 md:h-60 object-cover rounded-xl"
                  />
                </div>
              ) : (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center justify-center text-center shadow-sm"
                >
                  <div className="text-[#E3B873] mb-3">
                    {(() => {
                      const IconComponent = item.icon;
                      if (!IconComponent) return null;
                      return <IconComponent className="w-8 h-8 mx-auto text-[#E3B873]" />;
                    })()}
                  </div>
                  <h3 className="text-[#1E3557] font-medium text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#4A5568] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
     </ div>
    );
  } 