import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import { FaHome, FaBuilding, FaTools, FaTree, FaLightbulb, FaCamera, FaChartBar, FaFileInvoice } from "react-icons/fa";
import Projects from '../../components/home-page/projects';
import Excellence from '../../components/common/Excellence';
const CountUp: React.FC<{ to: number; suffix?: string }> = ({ to, suffix = '' }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString() + suffix);

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: 'easeOut' });
    return controls.stop;
  }, [count, to]);

  return <motion.span>{rounded}</motion.span>;
};

const InstitutionalProperty: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [
    {
      title: "Grade A Office Spaces",
      description: "Premium office floors with open-plan layouts, raised floors, VRF air-conditioning, high speed fibre, ample natural light, 24×7 power backup & BMS enabled smart controls.",
      tags: ['Corporates', 'MNCs', 'IT firms'],
      image: "/images/office-hero.png"
    },
    {
      title: "Elite Corporate Hubs",
      description: "State-of-the-art infrastructure featuring ergonomic designs, high-speed connectivity, green building standards, and world-class double height lobbies.",
      tags: ['MNCs', 'Startups', 'Tech Giants'],
      image: "/images/thumbnail-modern.png"
    },
    {
      title: "Eco-Friendly Tech Parks",
      description: "Next-generation energy-efficient workspaces with solar panels, smart waste management, premium landscape gardens, and integrated recreation zones.",
      tags: ['IT firms', 'R&D', 'Corporates'],
      image: "/images/residential_hero.png"
    }
  ];

  const services = [
    {
      icon: <FaHome className="text-[#E3B873] text-3xl mb-3" />,
      title: "Acquire",
      description:
        "Land sourcing, due diligence, legal verification, negotiation & registration",
    },
    {
      icon: <FaBuilding className="text-[#E3B873] text-3xl mb-3" />,
      title: "Plan & Design",
      description:
        "Architecture, structural design, 3D rendering, interior concept & vastu consultation",
    },
    {
      icon: <FaTools className="text-[#E3B873] text-3xl mb-3" />,
      title: "Build",
      description:
        "Construction management, vendor procurement, quality control & milestone tracking",
    },
    {
      icon: <FaTree className="text-[#E3B873] text-3xl mb-3" />,
      title: "Finish & Fit",
      description:
        "Interior execution, modular kitchen, wardrobes, false ceiling, painting & lighting",
    },
    {
      icon: <FaLightbulb className="text-[#E3B873] text-3xl mb-3" />,
      title: "Smart Enable",
      description:
        "IoT device installation, smart home app setup & automation configuration",
    },
    {
      icon: <FaCamera className="text-[#E3B873] text-3xl mb-3" />,
      title: "Sell / Lease",
      description:
        "Marketing, photography, listing on portals, buyer qualification, negotiation & documentation",
    },
    {
      icon: <FaChartBar className="text-[#E3B873] text-3xl mb-3" />,
      title: "Resale Advisory",
      description:
        "Market timing advice, price benchmarking, buyer sourcing & capital gains guidance",
    },
    {
      icon: <FaFileInvoice className="text-[#E3B873] text-3xl mb-3" />,
      title: "Manage",
      description:
        "Property management: rent collection, maintenance, tenant management & bills payment",
    },
  ];

  return (
    <div className="bg-white font-sans">
      {/* Hero Section with Content Overlay */}
      <section className="relative w-full min-h-[720px] sm:min-h-[760px] lg:min-h-screen overflow-hidden">
        <img
          src="/images/residential_hero.png"
          alt="Modern Luxury Residence"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Overlay Content Wrapper */}
        <div className="absolute inset-0 flex flex-col justify-between items-center text-center">

          {/* Top Text Content */}
          <div className="pt-24 sm:pt-28 lg:pt-10 px-4 sm:px-8 md:px-[50px] max-w-5xl">
            <h1 className="text-[32px] sm:text-5xl md:text-5xl lg:text-[52px] font-serif mb-4 sm:mb-6 leading-tight !text-white font-medium drop-shadow-lg">
              Schools & Civic Infrastructure.<br />
              Built to Serve Communities for Generations.
            </h1>
            <p className="!text-white/90 text-sm sm:text-base md:text-sm font-sans max-w-6xl mx-auto leading-relaxed drop-shadow-md">
              Estate-Hubs takes on institutional infrastructure projects that require specialised planning, regulatory compliance,
              and community-centric design meeting national and international standards.
            </p>
          </div>

          {/* Bottom Stats Overlay - Full Width Equal Parts */}
          <div className="w-full px-4 sm:px-8 md:px-[50px] pt-4 sm:pt-6 pb-5 md:pb-10 border-t border-white/10 bg-black/25 backdrop-blur-[2px] grid grid-cols-3 items-start text-white gap-3 sm:gap-6 md:gap-0">
            <div className="text-center relative">
              <div className="text-xl sm:text-2xl md:text-[36px] font-light mb-1"><CountUp to={15} suffix="+" /></div>
              <div className="text-[10px] sm:text-xs md:text-[14px] font-light opacity-90 leading-snug">Institutions Built</div>
              {/* Gradient Divider */}
              <div className="hidden md:block absolute right-0 top-[60%] -translate-y-1/2 h-32 w-[3px] bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
            <div className="text-center relative">
              <div className="text-xl sm:text-2xl md:text-[36px] font-light mb-1"><CountUp to={150} suffix="+" /></div>
              <div className="text-[10px] sm:text-xs md:text-[14px] font-light opacity-90 leading-snug">Beds & Desks Created</div>
              {/* Gradient Divider */}
              <div className="hidden md:block absolute right-0 top-[60%] -translate-y-1/2 h-32 w-[3px] bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-[36px] font-light mb-1"><CountUp to={150} suffix="+" /></div>
              <div className="text-[10px] sm:text-xs md:text-[14px] font-light opacity-90 leading-snug">Acres Developed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dreams Become Reality Section */}
      <section className="py-10 px-4 sm:px-8 md:px-[50px] bg-white overflow-hidden">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="max-w-5xl">
            <h2 className="text-3xl md:text-[32px] lg:text-[45px] font-serif leading-[1.05] mb-3 text-[#002349] tracking-tight">
              Specialised Infrastructure. Designed for Impact.
            </h2>
            <p className="text-gray-500 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl font-sans opacity-90">
              Estate-Hubs takes on institutional infrastructure projects that require specialised planning, regulatory compliance, and community-centric design. We partner with healthcare groups, educational trusts, government bodies, and NGOs to build hospitals, schools, colleges, clinics, and civic centres that meet national and international standards.            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden w-full max-w-3xl mx-auto">
            <img
              src="/images/residential_hero.png"
              alt="Structured Execution"
              className="w-full h-[260px] sm:h-[320px] md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6">
              <h2 className="text-white text-2xl font-semibold mb-2">
                Structured Execution
              </h2>
              <p className="text-white/90 text-sm">
                Rigorous project management frameworks ensuring deadlines and quality are met every time.
              </p>
            </div>
          </div>


        </div>
      </section>
      {/* Grade A Office Spaces Section */}
      <section className="relative min-h-[760px] md:min-h-[90vh] w-full flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false}>
            <motion.img
              key={activeSlide}
              src={slides[activeSlide].image}
              alt={slides[activeSlide].title}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full h-full object-cover absolute inset-0"
            />
          </AnimatePresence>
          {/* Gradient Overlay for readability - Dark on left, transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/80 via-[#000000]/40 to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full px-4 sm:px-8 md:px-[50px] py-12 md:py-16 flex flex-col justify-center min-h-[760px] md:min-h-[90vh]">
          {/* Top Content */}
          <div className="max-w-2xl mt-10 z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h2 className="text-[32px] sm:text-5xl md:text-[64px] font-serif !text-white leading-[1.1] mb-4 sm:mb-6 tracking-normal drop-shadow-sm">
                  {slides[activeSlide].title}
                </h2>
                <p className="!text-white/90 text-sm sm:text-base md:text-lg font-sans max-w-xl mb-6 md:mb-8 leading-relaxed">
                  {slides[activeSlide].description}
                </p>

                {/* Tags/Pills */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {slides[activeSlide].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 sm:px-5 py-1.5 rounded-full border border-white/50 bg-transparent text-white text-xs md:text-[13px] tracking-wide font-medium transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows (Left side) */}
            <div className="flex gap-4 mb-12">
              <button
                onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95 backdrop-blur-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
              </button>
              <button
                onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
                className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 active:scale-95 backdrop-blur-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              </button>
            </div>
          </div>

          {/* Bottom Gallery Thumbnails */}
          <div className="overflow-hidden mt-auto z-20 pb-4">
            <motion.div
              className="flex gap-5"
              animate={{ x: `calc(-${activeSlide * (isMobile ? 120 : 170)}px)` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {slides.map((slide, index) => {
                const isActive = index === activeSlide;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`shrink-0 w-[105px] sm:w-[130px] md:w-[150px] h-[150px] sm:h-[190px] md:h-[220px] rounded-[16px] overflow-hidden transition-all duration-500 cursor-pointer ${isActive ? 'opacity-100 shadow-xl' : 'opacity-60 hover:opacity-90 blur-[0.5px] hover:blur-0'
                      }`}
                  >
                    <img
                      src={slide.image}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      alt={slide.title}
                    />
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Right Edge Next Button */}
        <button
          onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 md:w-12 h-16 md:h-20 bg-black rounded-l-full items-center justify-center text-white z-30 hover:bg-[#C29B40] md:hover:w-14 transition-all duration-300"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </section>

      {/* Specialized Campus Development Section */}
      <section className="py-10 px-4 sm:px-8 md:px-[50px] bg-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">
            Built for Every Business. Designed for Every Investor.
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Estate-Hubs made my dream of owning a smart home a reality. The entire process from booking to handover was transparent and stress free.
          </p>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 items-center">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#FBFBFB] rounded-xl p-6 text-left shadow-sm">
                <h3 className=" !text-[27px] font-semibold text-gray-900">1.Healthcare Groups & Trusts</h3>
                <p className="!text-sm text-gray-600 mt-2">
                  Multi-speciality hospitals, clinics & AI-integrated smart hospitals — NABH-compliant from day one.          </p>
              </div>
              <div className="bg-[#FBFBFB] rounded-xl p-6 text-left shadow-sm">
                <h3 className=" !text-[27px] font-semibold text-gray-900">2. NGOs & CSR Projects</h3>
                <p className="!text-sm text-gray-600 mt-2">
                  Skill development centres & community infrastructure Section 135 CSR execution with full documentation.          </p>
              </div>
            </div>

            {/* Center Image */}
            <div className="flex justify-center">
              <img
                src="/images/building-center.jpg"
                alt="Tall building"
                className="rounded-xl w-full max-w-sm object-cover"
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#FBFBFB] rounded-xl p-6 text-left shadow-sm">
                <h3 className=" !text-[27px] font-semibold text-gray-900">3.Educational Institutions</h3>
                <p className="!text-sm text-gray-600 mt-2">
                  CBSE/ICSE/IB schools, colleges & university campuses — child-safe, smart & fully equipped.          </p>
              </div>
              <div className="bg-[#FBFBFB] rounded-xl p-6 text-left shadow-sm">
                <h3 className=" !text-[27px] font-semibold text-gray-900">4.Developers & Builders</h3>
                <p className="!text-sm text-gray-600 mt-2">
                  Design-build partnerships for institutional components within larger township or mixed-use projects.          </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1E3557] text-white py-9 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 !text-white">
            Why Leading Institutions Partner with Estate-Hubs.
          </h2>
          <p className="!text-white/80 max-w-3xl mb-12 text-sm md:text-base leading-relaxed">
            From Grade A offices to sprawling shopping malls Estate-Hubs builds commercial & retail spaces where businesses don't just operate, they thrive.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#2A466E]  rounded-xl p-6 border border-[#3A5780] "
              >
                <div className=' flex md:justify-start justify-center'>
                  {service.icon}
                </div>
                <h3 className="text-lg font-medium mb-2 !text-white">{service.title}</h3>
                <p className="!text-white/70 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Projects />


      <Excellence
        heading="Our Innovation Process."
        description="Every project begins with a vision — blending sustainability, design, and technology."
        steps={[
          { num: "01", title: "Research", desc: "Market analysis, feasibility studies, and trend forecasting." },
          { num: "02", title: "Concept", desc: "Creative ideation, prototyping, and design validation." },
          { num: "03", title: "Execution", desc: "Agile development, testing, and iterative improvements." },
          { num: "04", title: "Launch", desc: "Deployment, marketing, and customer onboarding." },
          { num: "05", title: "Support", desc: "Continuous updates, feedback loops, and long-term service." }
        ]}
      />



    </div>
  );
};

export default InstitutionalProperty;
