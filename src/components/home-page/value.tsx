import { LucideHome, Building2, Building, Palmtree } from "lucide-react";

const cardData = [
  {
    icon: <LucideHome className="w-8 h-8 stroke-[1.2]" />,
    title: "AI-Powered Decisions",
    description: "Every recommendation backed by real data not gut feeling.",
  },
  {
    icon: <Building2 className="w-8 h-8 stroke-[1.2]" />,
    title: "100% Transparent",
    description: "No hidden charges. All costs itemised before signing.",
  },
  {
    icon: <Building className="w-8 h-8 stroke-[1.2]" />,
    title: "End-to-End Delivery",
    description:
      "From land acquisition to resale advisory - a single point of contact.",
  },
  {
    icon: <Palmtree className="w-8 h-8 stroke-[1.2]" />,
    title: "Sustainable Building",
    description: "Rainwater harvesting, solar panels, EV charging.",
  },
];

export default function Value() {
    return (
        <section className="py-7 bg-white px-4 sm:px-8 md:px-[50px]">
            <div className="w-full">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-serif text-[#002349] mb-4">Why Thousands Trust Aaru <br className="hidden md:block" /> Developers</h2>
                    <p className="text-gray-500 text-sm md:text-lg">We don't just build properties we build confidence.</p>
                </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-0">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white p-5 px-[20px] rounded-[16px] border border-[#0023491A] w-full max-w-[290px] mx-auto lg:max-w-none min-h-[141px] flex flex-col items-start justify-start transition-all duration-300 hover:shadow-md"
        >
          <div className="text-[#F4B45A] mb-3">{card.icon}</div>
          <h4 className="text-[24px] font-bold font-serif text-[#1A1A1A] leading-[30px] mb-1">
            {card.title}
          </h4>
          <p className="text-[#4C4C4C] font-light text-[14px] leading-[20px] tracking-tighter">
            {card.description}
          </p>
        </div>
      ))}
    </div>
            </div>
        </section>
    )
}