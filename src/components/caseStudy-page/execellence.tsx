import { MapPin, Building, ArrowUpRight} from "lucide-react";
import { Link } from "react-router-dom";

export default function Excellence() {
    const projects = [
        {
            id: 1,
            title: "Skyline Plaza",
            description:
                "A commercial development planned for retail and office spaces with strong connectivity and business potential.",
            location: "Gurugram",
            type: "Commercial",
            image: "/images/office-hero.png",
        },
        {
            id: 2,
            title: "Estate-hub Heights",
            description:
                "Premium residential towers offering modern amenities and green living in the heart of the city.",
            location: "Dwarka, Delhi",
            type: "Residential",
            image: "/images/Estate-hub-heights.jpg",
        },
        {
            id: 3,
            title: "TechPark One",
            description:
                "Grade A office spaces designed for IT and startups, with advanced infrastructure and seamless connectivity.",
            location: "Noida",
            type: "Commercial",
            image: "/images/techpark-one.jpg",
        },
        {
            id: 4,
            title: "Green Valley Villas",
            description:
                "Luxury villas surrounded by landscaped gardens, offering privacy and comfort for families.",
            location: "Faridabad",
            type: "Residential",
            image: "/images/green-valley.jpg",
        },
        {
            id: 5,
            title: "Metro Mall",
            description:
                "A retail hub with international brands, entertainment zones, and food courts for high footfall.",
            location: "Ghaziabad",
            type: "Commercial",
            image: "/images/metro-mall.jpg",
        },
        {
            id: 6,
            title: "Riverfront Residency",
            description:
                "Eco-friendly apartments with river views, solar energy integration, and sustainable design.",
            location: "Lucknow",
            type: "Residential",
            image: "/images/riverfront-residency.jpg",
        },
    ];
    return (
        <section className="bg-[#F9FAFB] py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-left">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-serif text-[#1E3557] mb-2">
                    Excellence in every detail
                </h2>
                <p className="text-[#4A5568] text-sm md:text-base mb-12 max-w-3xl">
                    Estate-hub Heights is more than just a building; it’s a testament to our commitment
                    to quality and architectural innovation.
                </p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-[#1E3557] font-semibold mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-[#4A5568] text-sm mb-3 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Location and Type */}
                                <div className="flex items-center gap-4 text-[#4A5568] text-sm mb-4">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4 text-[#E3B873]" />
                                        <span>{project.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Building className="w-4 h-4 text-[#E3B873]" />
                                        <span>{project.type}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="relative mt-auto">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="rounded-lg w-full h-48 object-cover"
                                />
                                 <Link
                  to={`/case-study/${project.id}`} 
                  className="absolute bottom-3 right-3 bg-[#002349] text-white rounded-full p-3  transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <ArrowUpRight className="w-5 h-5 font-bold" /> 
                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};