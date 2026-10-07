import React, { useState, useEffect } from 'react';
import Excellence from '../../components/common/Excellence';
import { motion, useMotionValue, useTransform, animate, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, Snowflake, Battery, Wifi, Settings, Shield, Car } from 'lucide-react';
import Projects from '../../components/home-page/projects';
import { Link } from "react-router-dom"

const CountUp: React.FC<{ to: number; suffix?: string }> = ({ to, suffix = '' }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString() + suffix);

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: 'easeOut' });
    return controls.stop;
  }, [count, to]);

  return <motion.span>{rounded}</motion.span>;
};

const CommercialRetail: React.FC = () => {
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
  const features = [
    {
      icon: <Home className="w-7 h-7 text-[#E3B873] mb-2" />,
      text: "Floor-to-ceiling height: minimum 10 ft",
    },
    {
      icon: <Briefcase className="w-7 h-7 text-[#E3B873] mb-2" />,
      text: "Raised flooring for cable management",
    },
    {
      icon: <Snowflake className="w-7 h-7 text-[#E3B873] mb-2" />,
      text: "VRF / centralised HVAC with zone control",
    },
    {
      icon: <Battery className="w-7 h-7 text-[#E3B873] mb-2" />,
      text: "100% power backup (DG sets + UPS)",
    },
    {
      icon: <Wifi className="w-7 h-7 text-[#E3B873] mb-2" />,
      text: "High-speed fibre internet (1 Gbps ready)",
    },
    {
      icon: <Settings className="w-7 h-7 text-[#E3B873] mb-2" />,
      text: "BMS — lighting, HVAC, access control integrated",
    },
    {
      icon: <Shield className="w-7 h-7 text-[#E3B873] mb-2" />,
      text: "Fire suppression: sprinklers + FM200 server room",
    },
    {
      icon: <Car className="w-7 h-7 text-[#E3B873] mb-2" />,
      text: "EV charging bays in basement parking",
    },
  ];


  return (
    <div className="bg-white">
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
            <h1 className="text-[32px] sm:text-5xl md:text-6xl lg:text-[62px] font-serif mb-4 sm:mb-6 leading-tight !text-white font-medium drop-shadow-lg">
              Future-Ready Spaces for <br />
              India's Growing Business Ecosystem.
            </h1>
            <p className="!text-white/90 text-sm sm:text-base md:text-xl font-sans max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              From luxury villas to AI-driven investment advisory Estate-Hubs delivers <br className="hidden md:block" />
              end-to-end real estate solutions
            </p>
          </div>

          {/* Bottom Stats Overlay - Full Width Equal Parts */}
          <div className="w-full px-4 sm:px-8 md:px-[50px] pt-4 sm:pt-6 pb-5 md:pb-10 border-t border-white/10 bg-black/25 backdrop-blur-[2px] grid grid-cols-3 items-start text-white gap-3 sm:gap-6 md:gap-0">
            <div className="text-center relative">
              <div className="text-xl sm:text-2xl md:text-[36px] font-light mb-1"><CountUp to={15} suffix="+" /></div>
              <div className="text-[10px] sm:text-xs md:text-[14px] font-light opacity-90 leading-snug">Commercial Projects</div>
              {/* Gradient Divider */}
              <div className="hidden md:block absolute right-0 top-[60%] -translate-y-1/2 h-32 w-[3px] bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
            <div className="text-center relative">
              <div className="text-xl sm:text-2xl md:text-[36px] font-light mb-1"><CountUp to={150} suffix="+" /></div>
              <div className="text-[10px] sm:text-xs md:text-[14px] font-light opacity-90 leading-snug">Sq. Ft. Delivered</div>
              {/* Gradient Divider */}
              <div className="hidden md:block absolute right-0 top-[60%] -translate-y-1/2 h-32 w-[3px] bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-[36px] font-light mb-1"><CountUp to={350} suffix="+" /></div>
              <div className="text-[10px] sm:text-xs md:text-[14px] font-light opacity-90 leading-snug">Corporate Brands</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dreams Become Reality Section */}
      <section className="py-12 px-4 sm:px-8 md:px-[50px] bg-[#F2F4F6] overflow-hidden font-sans">
        <h2 className="text-center text-2xl md:text-[32px] mb-5 leading-tight font-serif text-[#1A1A1A]">
          Grade A commercial Real Estate, built for the future
        </h2>
        <p className="text-center text-sm md:text-base text-[#4C4C4C] max-w-4xl mx-auto mb-6">
          We design and develop premium commercial and retail real estate for businesses, corporates and entrepreneurs planned with global workplace standards, high speed connectivity, flexible layouts and sustainability certifications.
        </p>

        {/* Responsive Grid: 1 column on mobile/tablet, 3 columns on desktop (lg and up) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 md:p-8 items-stretch max-w-7xl mx-auto">

          {/* Left Card: 
        - Stacks vertically on mobile 
        - Becomes a sleek horizontal card on tablet (md to lg) 
        - Reverts to a vertical layout on desktop (lg) 
    */}
          <div className="flex flex-col md:flex-row lg:flex-col lg:col-span-3 gap-4">
            <div className="bg-white rounded-lg p-5 shadow-sm flex-1 flex flex-col justify-center">
              <h5 className="text-lg font-semibold text-gray-900">Structured Execution</h5>
              <p className="text-sm text-gray-600 mt-2">
                Rigorous project management frameworks ensuring deadlines and quality are met every time.
              </p>
            </div>
            <img
              src="/images/residential_hero.png"
              alt="City skyline"
              className="rounded-lg w-full md:w-[45%] lg:w-full h-48 md:h-[15vh] lg:h-56 object-cover"
            />
          </div>

          {/* Middle Card */}
          <div className="relative lg:col-span-6 rounded-lg overflow-hidden shadow-sm min-h-[250px] md:min-h-[350px] lg:min-h-0">
            <img
              src="/images/residential_hero.png"
              alt="Modern building"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-white">Future-Proof Design</h3>
              <p className="text-sm text-white/95 mt-2 max-w-lg">
                State-of-the-art infrastructure integrating smart building systems, sustainable energy, and lush green collaborative spaces.
              </p>
            </div>
          </div>


          <div className="flex flex-col md:flex-row-reverse lg:flex-col lg:col-span-3 gap-4">
            <div className="bg-white rounded-lg p-5 shadow-sm flex-1 flex flex-col justify-center">
              <h5 className="text-lg font-semibold text-gray-900">Transparent Communication</h5>
              <p className="text-sm text-gray-600 mt-3">
                Real-time updates and clear reporting on development progress and financial health.
              </p>
            </div>
            <img
              src="/images/residential_hero.png"
              alt="Glass buildings"
              className="rounded-lg w-full md:w-[45%] lg:w-full h-48 md:h-[15vh] lg:h-56 object-cover"
            />
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

      <section className="py-10 px-4 sm:px-8 md:px-[50px] bg-white">
        <div className="bg-[#F5F5F5] py-7 px-6 md:px-12 rounded-2xl">
          <div className="max-w-6xl mx-auto text-center">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900">
              Built to Global Workplace Standards.
            </h2>
            <p className="text-gray-600 mt-4 max-w-5xl mx-auto">
              From Grade A offices to sprawling shopping malls Estate-Hubs builds
              commercial & retail spaces where businesses don’t just operate, they thrive.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-9 items-start">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center w-full"
                >
                  {feature.icon}
                  <p className="text-[#4C4C4C] text-sm leading-tight">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart Homes, Elevated Living Section */}

      <section className="bg-white py-5 px-6 md:px-12">
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
                <h3 className=" !text-[27px] font-semibold text-gray-900">1. Corporates & MNCs</h3>
                <p className="!text-sm text-gray-600 mt-2">
                  Grade A offices with global workplace standards BMS, fibre, HVAC & 100% power backup.
                </p>
              </div>
              <div className="bg-[#FBFBFB] rounded-xl p-6 text-left shadow-sm">
                <h3 className=" !text-[27px] font-semibold text-gray-900">2. Startups & SMEs</h3>
                <p className="!text-sm text-gray-600 mt-2">
                  Flexible co-working & serviced offices scale up or down as your business grows.
                </p>
              </div>
            </div>

            {/* Center Image */}
            <div className="flex justify-center">
              <img
                src="/images/thumbnail-modern.png"
                alt="Tall building"
                className="rounded-xl w-full max-w-sm object-cover"
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#FBFBFB] rounded-xl p-6 text-left shadow-sm">
                <h3 className=" !text-[27px] font-semibold text-gray-900">3. Retailers & Brands</h3>
                <p className="!text-sm text-gray-600 mt-2">
                  High-footfall retail units with maximum brand visibility & customer convenience.
                </p>
              </div>
              <div className="bg-[#FBFBFB] rounded-xl p-6 text-left shadow-sm">
                <h3 className=" !text-[27px] font-semibold text-gray-900">4. IT/ITES Companies</h3>
                <p className="!text-sm text-gray-600 mt-2">
                  SEZ-ready business parks with tech infrastructure & talent-friendly campus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundations Section */}
      <section className="py-15 px-4 sm:px-8 md:px-[50px] bg-[#1A395C]">
        <div className="w-full">
          {/* Header */}
          <div className="max-w-2xl mb-10">
            <h2 className="text-[40px] md:text-[42px] font-serif leading-[1.1] mb-6 tracking-tight" style={{ color: "white" }}>
              Why Smart Investors Choose Commercial<br />
              Over Residential
            </h2>
            <p className="text-[17px] leading-relaxed font-sans" style={{ color: "white" }}>
              From Grade A offices to sprawling shopping malls, Estate-Hubs builds commercial & retail spaces where businesses don’t just operate, they thrive.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 items-start">
            {/* Card 1 */}
            <div className="bg-white/[0.04] border border-white/10 rounded-[16px] py-3 px-4 hover:bg-white/[0.08] transition-all duration-300">
              <div className="mb-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="font-serif !text-[22px] mb-1" style={{ color: "white" }}>Higher Rental Yields</h3>
              <p className="!text-[14px] leading-relaxed font-sans" style={{ color: "rgba(255,255,255,0.8)" }}>
                Commercial properties deliver 6–9% annual rental yield vs 2–3% for residential
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/[0.04] border border-white/10 rounded-[16px] py-3 px-4 hover:bg-white/[0.08] transition-all duration-300 items-start">
              <div className="mb-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="10" height="20" rx="2" ry="2"></rect>
                  <rect x="14" y="8" width="6" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="6" x2="8.01" y2="6"></line>
                  <line x1="10" y1="6" x2="10.01" y2="6"></line>
                  <line x1="8" y1="10" x2="8.01" y2="10"></line>
                  <line x1="10" y1="10" x2="10.01" y2="10"></line>
                  <line x1="8" y1="14" x2="8.01" y2="14"></line>
                  <line x1="10" y1="14" x2="10.01" y2="14"></line>
                  <line x1="17" y1="12" x2="17.01" y2="12"></line>
                  <line x1="17" y1="16" x2="17.01" y2="16"></line>
                </svg>
              </div>
              <h3 className="font-serif !text-[20px] " style={{ color: "white" }}>Stable Long-Term Leases</h3>
              <p className="!text-[14px] leading-relaxed font-sans" style={{ color: "rgba(255,255,255,0.8)" }}>
                Corporate lease agreements of 3–9 years ensure predictable, stable rental income for investors.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/[0.04] border border-white/10 rounded-[16px] py-3 px-4 hover:bg-white/[0.08] transition-all duration-300 items-start">
              <div className="mb-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 2L4 6v16h16V6l-4-4z" />
                  <line x1="12" y1="10" x2="12" y2="14" />
                  <line x1="10" y1="12" x2="14" y2="12" />
                  <path d="M10 22v-4h4v4" />
                </svg>
              </div>
              <h3 className="font-serif !text-[22px] mb-1" style={{ color: "white" }}>Sustainability Certified</h3>
              <p className="!text-[14px]  font-sans" style={{ color: "rgba(255,255,255,0.8)" }}>
                IGBC / GRIHA green building certification on flagship projects
                future-proof assets
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/[0.04] border border-white/10 rounded-[16px] px-4 py-3 hover:bg-white/[0.08] transition-all duration-300">
              <div className="mb-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="7" cy="7" r="2" />
                  <path d="M22 22H2" />
                  <path d="M12 22V10" />
                  <path d="M12 10c-2-2-4-2-6-1" />
                  <path d="M12 10c2-2 4-2 6-1" />
                  <path d="M12 13c-3-2-6-1-8 1" />
                  <path d="M12 13c3-2 6-1 8 1" />
                </svg>
              </div>
              <h3 className="font-serif !text-[22px]" style={{ color: "white" }}>Pre-Leased Options</h3>
              <p className="!text-[14px] leading-relaxed font-sans" style={{ color: "rgba(255,255,255,0.8)" }}>
                Invest in pre-leased commercial properties income starts from day one, zero wait for tenants.
              </p>
            </div>

          </div>
          <div
            className="
        w-full bg-white/[0.04] 
        py-2 px-4 mt-5
        flex flex-col md:flex-row 
        items-center justify-between 
        rounded-lg border border-[#2A466E] shadow-sm
      "
          >
            {/* Left Text */}
            <p
              className="
          text-white 
          text-sm sm:text-base md:text-sm 
          text-center md:text-left 
          mb-4 md:mb-0 
          leading-relaxed max-w-[90%] md:max-w-[70%]
        "
            >
              Strategic locations in high-demand business corridors of Delhi NCR —
              faster ROI, stable returns, long-term value.
            </p>

            {/* Right Button */}
            <Link
              to="/contact"
              className="
          bg-white text-[#1E3557] 
          font-medium rounded-md 
          px-6 py-2 
          text-sm sm:text-base 
          hover:bg-[#F2F4F6] 
          transition-all duration-300 
          w-full sm:w-auto text-center
        "
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
      <Projects />
      <Excellence
        heading="How Aaru Delivers Excellence."
        description="From modern luxury apartments to smart custom villas, Estate-Hubs designs residential spaces built for the future."
        steps={[
          { num: "01", title: "Site & Legal", desc: "Land acquisition, clear title verification, RERA registration, and layout approvals." },
          { num: "02", title: "Design", desc: "Architectural drafting, space optimization, 3D modeling, and interior planning." },
          { num: "03", title: "Construction", desc: "Foundation, structural work, premium material sourcing, and quality checks." },
          { num: "04", title: "Smart Integration", desc: "Installing smart home automation, security systems, and energy-efficient grids." },
          { num: "05", title: "Handover", desc: "Final inspections, completion certificate, key handover, and post-sales support." }
        ]}
      />


    </div>
  );
};

export default CommercialRetail;
