
interface Project {
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Maplewood Estates",
    description:
      "Spacious family homes in a tranquil neighborhood with parks, schools, and shopping centers nearby.",
    image: "/images/office-hero.png",
  },
  {
    title: "Maplewood Estates",
    description:
      "Spacious family homes in a tranquil neighborhood with parks, schools, and shopping centers nearby.",
    image: "/images/city-night.jpg",
  },
  {
    title: "Maplewood Estates",
    description:
      "Spacious family homes in a tranquil neighborhood with parks, schools, and shopping centers nearby.",
    image: "/images/city-day.jpg",
  },
  {
    title: "Maplewood Estates",
    description:
      "Spacious family homes in a tranquil neighborhood with parks, schools, and shopping centers nearby.",
    image: "/images/tower-sunset.jpg",
  },
];

export default function OngoingDevelopments() {
  return (
    <section className="bg-white py-8 px-4 md:px-[50px] font-sans">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <div className="mb-5">
          <h2 className="text-3xl md:text-[40px] font-serif text-[#1A1A1A] mb-3">
            Ongoing Developments
          </h2>
          <p className="text-[#666666] text-sm md:text-[17px] max-w-2xl leading-relaxed">
            Modern projects created with smart planning, great locations, and lasting value.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((p, i) => (
            <div
              key={i}
              className="relative rounded-lg overflow-hidden shadow-sm group cursor-pointer"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full md:h-[350px] h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 ">
                <h3 className="font-serif text-lg mb-1 text-white">{p.title}</h3>
                <p className="text-xs md:text-sm text-gray-300 max-w-[250px] leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
