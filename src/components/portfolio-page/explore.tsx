import { ArrowUpRight, MapPin, Home } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
    "All Projects",
    "Residential",
    "Commercial",
    "Institutional",
    "Land Development",
];

const portfolioData = [
    {
        id: 1,
        title: "Estate-hub Heights",
        description:
            "3 & 4 BHK premium apartments with panoramic views and top-tier amenities.",
        location: "Delhi NCR",
        type: "Residential",
        image: "/images/office-hero.png",
        category: "Residential",
    },
    {
        id: 2,
        title: "Skyline Plaza",
        description:
            "A commercial development planned for retail and office spaces with strong connectivity and business potential.",
        location: "Gurugram",
        type: "Commercial",
        image: "/images/skyline-plaza.jpg",
        category: "Commercial",
    },
    {
        id: 3,
        title: "TechPark One",
        description:
            "Grade A office spaces designed for IT and startups, with advanced infrastructure and seamless connectivity.",
        location: "Noida",
        type: "Institutional",
        image: "/images/techpark-one.jpg",
        category: "Institutional",
    },
    {
        id: 4,
        title: "Landmark Estate",
        description:
            "Strategic land development project offering long-term investment potential and infrastructure growth.",
        location: "Jaipur",
        type: "Land Development",
        image: "/images/landmark-estate.jpg",
        category: "Land Development",
    },
    {
        id: 5,
        title: "TechPark One",
        description:
            "Grade A office spaces designed for IT and startups, with advanced infrastructure.",
        location: "Noida",
        type: "Institutional",
        image: "/images/techpark-one.jpg",
        category: "Institutional",
    },
    {
        id: 6,
        title: "Knowledge Hub",
        description:
            "Institutional campus with modern facilities for education and research.",
        location: "Delhi NCR",
        type: "Institutional",
        image: "/images/knowledge-hub.jpg",
        category: "Institutional",
    },
    {
        id: 7,
        title: "Landmark Estate",
        description:
            "Strategic land development project offering long-term investment potential.",
        location: "Jaipur",
        type: "Land Development",
        image: "/images/landmark-estate.jpg",
        category: "Land Development",
    },
    {
        id: 8,
        title: "Riverfront Residency",
        description:
            "Eco-friendly apartments with river views, solar energy integration, and sustainable design.",
        location: "Lucknow",
        type: "Land Development",
        image: "/images/riverfront-residency.jpg",
        category: "Land Development",
    },
];

const ExploreWork = () => {
    const [activeCategory, setActiveCategory] = useState("All Projects");

    const filteredProjects =
        activeCategory === "All Projects"
            ? portfolioData
            : portfolioData.filter((item) => item.category === activeCategory);

    return (
        <section className="bg-white py-8 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-portfolio-heading mb-3">
                    Explore Our Work
                </h2>
                <p className="text-body text-sm sm:text-base md:text-base mb-8 max-w-3xl">
                    From soaring residential landmarks to sophisticated business hubs, view
                    the spaces we’ve created for the future of urban living.
                </p>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-3 mb-10">
                    {categories.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveCategory(filter)}
                            className={`px-4 py-2 text-sm sm:text-base rounded-full border transition-all ${activeCategory === filter
                                ? "bg-portfolio-heading !text-white border-portfolio-heading"
                                : "border-gray-300 text-portfolio-heading hover:bg-[#F3F4F6]"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

               
                {/* Explore Cards Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {filteredProjects.map((item) => (
    <Link
      to={`/portfolio/${item.id}`}
      key={item.id}
      className="bg-white rounded-[20px] border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col p-3"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-[16px]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[190px] sm:h-[200px] md:h-[210px] lg:h-[230px] object-cover rounded-[16px] transform transition-transform duration-700 ease-in-out hover:scale-105"
        />
        <div className="absolute bottom-3 right-3 bg-[#1E3557] text-white rounded-full p-2 shadow-md">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Content */}
      <div className="p-1 flex flex-col flex-grow">
        <h3 className="text-[#1E3557] font-serif font-semibold text-base sm:text-lg md:text-xl mb-2">
          {item.title}
        </h3>
        <p className="text-[#4A5568] text-sm sm:text-sm leading-relaxed mb-3 sm:mb-3">
          {item.description}
        </p>

        {/* Bottom Info */}
        <div className="flex items-center justify-between gap-6 mt-auto text-xs sm:text-sm md:text-sm text-[#4A5568]">
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
        </section>
    );
};

export default ExploreWork;