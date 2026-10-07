import { useParams } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";
import { Link } from "react-router-dom"
import { MapPin, ArrowUpRight, Home } from "lucide-react";
import { useState } from "react";

const PortfolioDetails = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { id } = useParams();
    const project = portfolioData.find((item) => item.id === Number(id));

    if (!project) return <p className="text-center py-20">Project not found.</p>;

    return (
        <section className="bg-white text-[#1E3557]">
            {/* Hero Section */}
            <div className="relative">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[380px] sm:h-[440px] md:h-[480px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 sm:p-10 md:p-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-3 leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl mb-4 font-light leading-relaxed">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-x-8 gap-y-4 mt-2 text-white">
                        {[
                            { label: "LOCATION", value: project.location },
                            { label: "TYPE", value: project.type },
                            { label: "STATUS", value: project.status },
                        ].map((item) => (
                            <div key={item.label} className="flex flex-col">
                                <span className="uppercase text-[11px] sm:text-[12px] tracking-wider text-gray-300 font-medium">
                                    {item.label}
                                </span>
                                <span className="text-[13px] sm:text-[14px] font-light mt-0.5">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="max-w-7xl mx-auto py-16 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                    <h2 className="text-2xl font-serif mb-3 text-[#1E3557]">About the Project</h2>
                    <h3 className="text-[#4A5568] mb-4 text-base md:text-lg font-medium">Concept & Vision</h3>
                    <p className="text-[#4A5568] mb-4">{project.about.concept}</p>
                    <p className="text-[#4A5568] mb-6">{project.about.vision}</p>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-8 mt-6 border-t border-gray-200 pt-6 text-[#1E1E1E]">
                        {Object.entries(project.about.details).map(([key, value]) => (
                            <div key={key} className="flex flex-col">
                                <span className="uppercase text-[13px] tracking-wide text-gray-500 font-medium leading-tight">
                                    {key.replace(/([A-Z])/g, " $1")}
                                </span>
                                <span className="text-[16px] font-normal mt-1 leading-snug">{value}</span>
                            </div>
                        ))}
                    </div>

                </div>

                <img
                    src={project.gallery[1]}
                    alt="Project view"
                    className="rounded-xl shadow-md object-cover w-full h-full"
                />
            </div>


            {/* Amenities */}
            <div className="bg-[#F6F7F9] py-16 px-6 md:px-12">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-serif mb-3 text-[#1E3557]">
                        Amenities & Facilities
                    </h2>
                    <p className="text-[#4A5568] mb-10 text-sm md:text-base leading-relaxed">
                        Designed to support everyday comfort, convenience, and a well-balanced living experience for residents.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                        {project.amenities.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl  border-t-[1.5px] border-[#E3B873] p-6 shadow-sm"
                                >
                                    <Icon className="w-6 h-6 text-[#E3B873] mb-3" />
                                    <h3 className="font-bold mb-2 text-[#1E3557] text-base">{item.title}</h3>
                                    <p className="text-[#4A5568] text-sm">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="max-w-7xl mx-auto py-16 px-6 md:px-12">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-serif text-[#1E3557] mb-3">
                    Project Gallery
                </h2>
                <p className="text-[#4A5568] text-sm md:text-base mb-8 max-w-3xl">
                    A visual showcase of key screens, design explorations, and final user interface decisions.
                </p>

                {/* Masonry Layout Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

                    {/* Column 1 */}
                    <div className="flex flex-col gap-3">
                        <img
                            src={project.gallery[0]}
                            alt="Gallery 1"
                            className="rounded-xl shadow-md object-cover w-full h-[260px] md:h-[230px]"
                        />
                        <img
                            src={project.gallery[3]}
                            alt="Gallery 4"
                            className="rounded-xl shadow-md object-cover w-full h-[260px] md:h-[340px]"
                        />

                        {/* Expanded content for Column 1 */}
                        {isExpanded && (
                            <div className="flex flex-col gap-3 transition-all duration-500 ease-in-out">
                                <img
                                    src={project.gallery[4] || project.gallery[0]}
                                    alt="Gallery 6"
                                    className="rounded-xl shadow-md object-cover w-full h-[260px] md:h-[288px]"
                                />
                            </div>
                        )}
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-3">
                        <img
                            src={project.gallery[1]}
                            alt="Gallery 2"
                            className="rounded-xl shadow-md object-cover w-full h-[260px] md:h-[340px]"
                        />
                        <img
                            src={project.gallery[2]}
                            alt="Gallery 5"
                            className="rounded-xl shadow-md object-cover w-full h-[260px] md:h-[230px]"
                        />

                        {/* Expanded content for Column 2 */}
                        {isExpanded && (
                            <div className="flex flex-col gap-3 transition-all duration-500 ease-in-out">
                                <img
                                    src={project.gallery[5] || project.gallery[1]}
                                    alt="Gallery 7"
                                    className="rounded-xl shadow-md object-cover w-full h-[260px] md:h-[288px]"
                                />
                            </div>
                        )}
                    </div>

                    {/* Column 3 (Holds the responsive button inside its relative bounds) */}
                    <div className="relative flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
                        <img
                            src={project.gallery[2]}
                            alt="Gallery 3"
                            className={`rounded-xl shadow-md object-cover w-full transition-all duration-300 ease-in-out ${isExpanded ? 'h-[260px] sm:h-[300px] lg:h-[280px]' : 'h-[260px] sm:h-[300px] lg:h-[582px]'
                                }`}
                        />

                        {/* Expanded content for Column 3 - Fills the layout perfectly */}
                        {isExpanded && (
                            <div className="flex flex-col gap-3 transition-all duration-500 ease-in-out">
                                <img
                                    src={project.gallery[6] || project.gallery[2]}
                                    alt="Gallery 8"
                                    className="rounded-xl shadow-md object-cover w-full h-[260px] sm:h-[300px] lg:h-[289px]"
                                />
                            </div>
                        )}

                        {/* The Absolute Button Overlay - Always securely anchored at the bottom-right corner */}
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="absolute bottom-6 right-6 bg-[#1E3557] text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-[#002349] transition active:scale-95 z-10 shadow-lg"
                        >
                            {isExpanded ? 'See less' : 'See all'}
                        </button>
                    </div>

                </div>
            </div>

            {/* Development Approach */}
            <div className="bg-[#F9FAFB] py-16 px-6 md:px-12">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-serif mb-3 text-[#1E3557]">
                        Our Development Approach
                    </h2>
                    <p className="text-[#4A5568] mb-10 text-sm md:text-base leading-relaxed">
                        Transparency and discipline at every stage. We’ve refined our process
                        to ensure the highest standards of quality and timely delivery.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {project.developmentApproach.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
                                >
                                    <Icon className="w-6 h-6 text-[#E3B873] mb-3" />
                                    <p className="text-xs text-[#4A5568] font-medium mb-1">
                                        {item.step}
                                    </p>
                                    <h3 className="text-[#1E3557] font-semibold mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#4A5568] text-sm">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Timeline */}

            <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
                        Project Timeline
                    </h2>
                    <p className="text-gray-600 mt-2">
                        A structured development journey from planning to final delivery.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-6">
                    {project.timeline.map((item, index) => (
                        <div key={index} className="flex flex-col items-start md:w-1/4">
                            <h3 className="text-lg font-semibold text-[#b48a2a]">{item.year}</h3>
                            <h4 className="text-lg font-serif text-gray-800 mt-1">
                                {item.title}
                            </h4>
                            <div className="flex items-center mt-4 mb-4 w-full relative">
                                <div className="w-4 h-4 bg-[#b48a2a] rounded-full"></div>
                                <div className="flex-1 h-[1px] bg-[#b48a2a] ml-2"></div>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-[#b48a2a] border-b-[5px] border-b-transparent"></div>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Related Projects */}
            <div className="bg-[#F9FAFB] py-16 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-serif mb-6 text-center text-[#1E3557]">
                        Related Projects
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.relatedProjects.map((item) => (
                            <Link
                                key={item.id}
                                to={`/portfolio/${item.id}`}
                                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition"
                            >
                                {/* Image with overlay arrow */}
                                <div className="relative">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute bottom-3 right-3 bg-[#1E3557] text-white rounded-full p-2">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="text-[#1E3557] font-semibold text-base mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#4A5568] text-sm leading-relaxed mb-4">
                                        {item.description}
                                    </p>

                                    <div className="flex items-center gap-6 text-sm text-[#4A5568]">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4 text-[#1E3557]" />
                                            <span>{item.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Home className="w-4 h-4 text-[#1E3557]" />
                                            <span>{item.type}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioDetails;

