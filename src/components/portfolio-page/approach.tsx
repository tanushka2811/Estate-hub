import { MapPin, Pencil, ShieldCheck, HeartHandshake } from "lucide-react";
export default function Approach() {
    const steps = [
        {
            icon: <MapPin className="md:w-6 md:h-6 h-4 w-4 text-[#E3B873]" />,
            step: "STEP 01",
            title: "Land Acquisition",
            description:
                "Strategic selection of high-growth locations with strong future potential.",
        },
        {
            icon: <Pencil className="md:w-6 md:h-6 h-4 w-4  text-[#E3B873]" />,
            step: "STEP 02",
            title: "Planning & Design",
            description:
                "Collaborating with expert architects to create efficient and modern living spaces.",
        },
        {
            icon: <ShieldCheck className="md:w-6 md:h-6 h-4 w-4  text-[#E3B873]" />,
            step: "STEP 03",
            title: "Construction & Quality",
            description:
                "Precision execution with strict quality checks and safety standards.",
        },
        {
            icon: <HeartHandshake className="md:w-6 md:h-6 h-4 w-4  text-[#E3B873]" />,
            step: "STEP 04",
            title: "Delivery & Handover",
            description:
                "Seamless project delivery with post-possession support for homeowners.",
        },
    ];
    return (
        <section className="bg-[#F6F7F9] py-9 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-portfolio-heading mb-3">
                    Our Development Approach
                </h2>
                <p className="text-body text-sm sm:text-base md:text-base mb-12 max-w-3xl mx-auto">
                    Transparency and discipline at every stage. We’ve refined our process
                    to ensure the highest standards of quality and timely delivery.
                </p>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                    {steps.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="mb-4">{item.icon}</div>
                            <p className="text-xs sm:text-sm text-muted font-medium mb-1">
                                {item.step}
                            </p>
                            <h3 className="text-portfolio-heading font-semibold mb-2 text-lg sm:text-lg">
                                {item.title}
                            </h3>
                            <p className="text-body text-xs sm:text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

