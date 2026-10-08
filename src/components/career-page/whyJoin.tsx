
import { BarChart3, TrendingUp, Users } from "lucide-react";
export default function WhyJoin() {
    const reasons = [
        {
            icon: <BarChart3 className="w-6 h-6 text-[#E3B873]" />,
            title: "Real-World Impact",
            description:
                "Work on real, high-impact real estate projects that create tangible value, influence communities, and contribute to the future of modern urban living.",
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-[#E3B873]" />,
            title: "Fast Growth",
            description:
                "Take ownership from day one, gain hands-on experience through real projects, and accelerate your career with continuous learning and meaningful responsibilities.",
        },
        {
            icon: <Users className="w-6 h-6 text-[#E3B873]" />,
            title: "Supportive Culture",
            description:
                "Be part of a supportive, collaborative environment where ideas are valued, ownership is encouraged, and continuous learning drives growth.",
        },
    ];
    return (
        <section className="bg-[#F9FAFB] py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-serif text-[#1E3557] mb-3">
                    Why Join Estate-Hubs
                </h2>
                <p className="text-[#4A5568] text-sm md:text-base mb-12 max-w-3xl mx-auto">
                    We don’t just build properties — we build careers. Here’s what makes Estate-hub a
                    place where professionals thrive.
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col items-center text-center"
                        >
                            <div className="bg-[#F3F4F6] rounded-md p-3 mb-4">{item.icon}</div>
                            <h3 className="text-[#1E3557] font-semibold mb-2">{item.title}</h3>
                            <p className="text-[#4A5568] text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}