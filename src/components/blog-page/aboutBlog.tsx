import { Home, Lightbulb } from "lucide-react";

export default function AboutBlog() {
    return (
        <section className="bg-white py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Image */}
                <div className="rounded-xl overflow-hidden">
                    <img
                        src="/images/office-hero.png"
                        alt="Skyscrapers"
                        className="w-full h-64 sm:h-80 md:h-[400px] lg:h-90 object-cover rounded-xl"
                    />
                </div>

                {/* Right Content */}
                <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#1E3557] mb-4">
                        About Our Real Estate Blog
                    </h2>
                    <p className="text-[#4A5568] text-sm md:text-base leading-relaxed mb-6">
                        Welcome to our Real Estate Blog, your trusted source for the latest insights,
                        market trends, property tips, and investment guidance. We share valuable
                        knowledge to help buyers, sellers, investors, and homeowners make smart real
                        estate decisions. From property buying guides to modern living ideas, our blog
                        keeps you informed and inspired.
                    </p>

                    {/* Feature List */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <Home className="w-5 h-5 text-[#E3B873] flex-shrink-0 mt-[2px]" />
                            <p className="text-[#1E3557] text-sm md:text-base">
                                Latest real estate market trends and investment opportunities
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <Lightbulb className="w-5 h-5 text-[#E3B873] flex-shrink-0 mt-[2px]" />
                            <p className="text-[#1E3557] text-sm md:text-base">
                                Expert tips for buying, selling, and managing properties
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}