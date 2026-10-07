import { Wallet, Calendar, GraduationCap, Award, TrendingUp, Building } from "lucide-react";

export default function Perks() {
    const perks = [
        {
            icon: <Wallet className="w-6 h-6 text-[#E3B873]" />,
            title: "Competitive Salary",
            description:
                "Compensation structured to reward consistent contribution, performance, and long-term value creation.",
        },
        {
            icon: <Calendar className="w-6 h-6 text-[#E3B873]" />,
            title: "Flexible Work",
            description:
                "A balanced work environment designed to support productivity while adapting to role requirements.",
        },
        {
            icon: <GraduationCap className="w-6 h-6 text-[#E3B873]" />,
            title: "Learning & Development",
            description:
                "Access to resources and real project exposure to build practical skills and continuously grow your expertise.",
        },
        {
            icon: <Award className="w-6 h-6 text-[#E3B873]" />,
            title: "Performance Incentives",
            description:
                "Recognition and rewards for delivering high-quality work and creating measurable impact across projects.",
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-[#E3B873]" />,
            title: "Career Growth",
            description:
                "Clear opportunities to take ownership, expand responsibilities, and grow alongside the organization.",
        },
        {
            icon: <Building className="w-6 h-6 text-[#E3B873]" />,
            title: "Real Project Exposure",
            description:
                "Work on live real estate projects that offer hands-on experience and contribute to meaningful, real-world outcomes.",
        },
    ];
    return (

        <section className="bg-[#F9FAFB] py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-serif text-[#1E3557] mb-3">
                    Benefits & Perks
                </h2>
                <p className="text-[#4A5568] text-sm md:text-base mb-12 max-w-3xl mx-auto">
                    We believe great people deserve great rewards. Every benefit at Aaru is
                    designed to help you do your best work and build a life you love.
                </p>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                    {perks.map((perk, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col items-center text-center"
                        >
                            <div className="bg-[#F3F4F6] rounded-md p-3 mb-4">{perk.icon}</div>
                            <h3 className="text-[#1E3557] font-semibold mb-2">{perk.title}</h3>
                            <p className="text-[#4A5568] text-sm leading-relaxed">
                                {perk.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}