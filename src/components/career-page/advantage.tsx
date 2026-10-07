import { CheckCircle } from "lucide-react";


export default function Advantage() {
    return (
        <section className="bg-[#F9FAFB] py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto px-5 xl:px-0 grid grid-cols-1 gap-2 lg:grid-cols-2 items-stretch">
                {/* Left Content */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 h-full lg:-translate-x-12">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#1E3557] mb-4">
                        Life at Aaru
                    </h2>
                    <p className="text-[#4A5568] text-sm md:text-base mb-8 leading-relaxed">
                        At Estate-Hubs, we believe in building not just properties, but
                        meaningful careers. Our team works in a collaborative environment
                        where ideas are valued, ownership is encouraged, and growth is
                        continuous.
                    </p>

                    {/* Work Style & Communication */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="bg-[#F3F4F6] rounded-md p-4 text-left">
                            <p className="text-xs text-[#4A5568] mb-1">Work Style</p>
                            <p className="text-[#1E3557] font-semibold text-sm">
                                Focused, collaborative, driven
                            </p>
                        </div>
                        <div className="bg-[#F3F4F6] rounded-md p-4 text-left">
                            <p className="text-xs text-[#4A5568] mb-1">Communication</p>
                            <p className="text-[#1E3557] font-semibold text-sm">
                                Clear, respectful, results-driven
                            </p>
                        </div>
                    </div>

                    {/* Bottom Statement */}
                    <div className="bg-[#F3F4F6] rounded-md p-4 flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#1E3557] mt-1" />
                        <p className="text-[#4A5568] text-sm leading-relaxed">
                            We prioritize quality, timelines, and trust — maintaining high
                            standards internally while delivering dependable, high-quality
                            outcomes for our clients.
                        </p>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center h-full lg:-ml-4">
                    <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                        alt="Team collaboration at Estate-Hubs"
                        className="rounded-xl w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}