import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Home as LucideHome } from "lucide-react";

export default function Projects() {
  
  const projects = [
    {
      id: 1,
      title: "Estate-hub Heights",
      location: "Dwarka, Delhi",
      image: "/images/office-hero.png",
      type: "Residential",
      info: "3 BHK | 1850 Sq.ft",
      description:
        "Premium high-rise homes with open views, efficient layouts, and lifestyle amenities.",
    },
    {
      id: 2,
      title: "Estate-hub Estate",
      location: "Gurugram, HR",
      image: "/images/Estate-hub-estate.jpg",
      type: "Villas",
      info: "4 BHK | 3200 Sq.ft",
      description:
        "Spacious villa residences planned for privacy, comfort, and refined family living.",
    },
    {
      id: 3,
      title: "Estate-hub Metro",
      location: "Noida, UP",
      image: "/images/Estate-hub-metro.jpg",
      type: "Commercial",
      info: "Office | 1200 Sq.ft",
      description:
        "Modern office spaces with strong connectivity, flexible floor plates, and daily convenience.",
    },
    {
      id: 4,
      title: "Estate-hub Residency",
      location: "Rohini, Delhi",
      image: "/images/Estate-hub-residency.jpg",
      type: "Apartments",
      info: "2 BHK | 1150 Sq.ft",
      description:
        "Well-connected apartment homes designed for smart space use and everyday ease.",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-8 md:px-[50px] bg-[#F6F7F9]">
      <div className="w-full">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-serif text-[#002349] mb-3">
              Featured Projects
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-4xl">
              Handpicked from our current portfolio across residential,
              commercial, and institutional categories.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="bg-[#002349] text-white px-6 py-3 md:px-4 md:py-3 rounded-[8px] text-sm md:text-base font-medium whitespace-nowrap hover:bg-[#001a35] transition-all "
          >
            Explore Projects
          </Link>
        </div>

        {/* Project Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
  {projects.map((project) => (
    <Link
      to={`/portfolio/${project.id}`}
      key={project.id}
      className="bg-white rounded-[20px] border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col p-3"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-[16px]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover rounded-[16px] transform transition-transform duration-700 ease-in-out hover:scale-105"
        />
        <div className="absolute bottom-3 right-3 bg-[#002349] text-white rounded-full p-2 shadow-md">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-[#002349] font-serif font-semibold text-lg mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          {project.description}
        </p>
        <p className="text-[#002349] text-xs sm:text-sm font-medium mb-3">
          {project.info}
        </p>

        {/* Bottom Info */}
        <div className="flex items-center justify-between gap-3 mt-auto ">
          <div className="flex items-center gap-1 text-gray-500 text-xs font-medium">
            <MapPin className="w-3.5 h-3.5" />
            {project.location}
          </div>
          <div className="flex items-center gap-1 text-gray-500 text-xs font-medium">
            <LucideHome className="w-3.5 h-3.5" />
            {project.type}
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>

      </div>
    </section>
  );
}
