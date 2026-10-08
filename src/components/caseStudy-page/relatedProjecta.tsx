import React from "react";
import { ArrowUpRight, MapPin, Building2 } from "lucide-react";
import {Link} from "react-router-dom"

interface ProjectCardProps {
    id:number,
  title: string;
  description: string;
  location: string;
  category: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    id,
  title,
  description,
  location,
  category,
  image,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between hover:shadow-md transition-all duration-300">
      <div>
        <h3 className="text-lg font-serif text-[#1A1A1A] mb-1">{title}</h3>
        <p className="text-sm text-[#4C4C4C] mb-3 leading-relaxed">{description}</p>
        <div className="flex flex-col gap-1 text-sm text-[#4C4C4C]">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-[#C29B40]" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 size={16} className="text-[#C29B40]" />
            <span>{category}</span>
          </div>
        </div>
      </div>

      <div className="relative mt-4">
        <img
          src={image}
          alt={title}
          className="rounded-lg w-full h-48 object-cover"
        />
        <Link to={`/case-study/${id}`} className="absolute bottom-3 right-3 bg-[#1E3557] text-white p-2 rounded-full hover:bg-[#2A466E] transition-all duration-300">
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  );
};

const RelatedProjects: React.FC = () => {

   const projects = [
    {
      id: 1,
      title: "Estate-hub Heights",
      description:
        "3 & 4 BHK premium apartments with panoramic views and top-tier amenities.",
      location: "Ghaziabad",
      category: "Residential",
      image: "/images/office-hero.png",
    },
    {
      id: 2,
      title: "Skyline Plaza",
      description:
        "A commercial development planned for retail and office spaces with strong connectivity and business potential.",
      location: "Gurugram",
      category: "Commercial",
      image: "/images/skyline-plaza-hero.jpg",
    },
    {
      id: 3,
      title: "TechPark One",
      description:
        "Grade A office spaces designed for IT and startups, with advanced infrastructure and seamless connectivity.",
      location: "Noida",
      category: "Institutional",
      image: "/images/techpark-one-hero.jpg",
    },
  ];
  return (
    <section className="bg-[#F2F4F6] py-12 px-4 sm:px-8 md:px-[50px] font-sans">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl md:text-[32px] font-serif text-[#1A1A1A] mb-2">
            Related Projects
          </h2>
          <p className="text-sm md:text-base text-[#4C4C4C]">
            Discover similar work focused on user experience and digital transformation.
          </p>
        </div>

        <Link
          to="/case-study"
          className="bg-[#002349] text-white px-6 py-2.5 rounded-[8px] text-sm font-medium whitespace-nowrap hover:bg-[#001a35] transition-all self-start md:self-auto"
        >
          Explore Case study
        </Link>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProjects;
