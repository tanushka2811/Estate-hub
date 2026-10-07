import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useScroll } from 'framer-motion';
import { Search, Link2, MapPin, MessageSquare, TrendingUp } from 'lucide-react';

const CountUp: React.FC<{ to: number; suffix?: string }> = ({ to, suffix = '' }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString() + suffix);

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: 'easeOut' });
    return controls.stop;
  }, [count, to]);

  return <motion.span>{rounded}</motion.span>;
};

const AISmartSolution: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const excellenceScrollRef = useRef<HTMLElement>(null);
  const { scrollYProgress: excellenceProgress } = useScroll({
    target: excellenceScrollRef,
    offset: ["start start", "end end"]
  });

  const cardYs = [
    useTransform(excellenceProgress, [0, 0.4], ["100vh", "0vh"]),
    useTransform(excellenceProgress, [0.15, 0.55], ["100vh", "0vh"]),
    useTransform(excellenceProgress, [0.3, 0.7], ["100vh", "0vh"]),
    useTransform(excellenceProgress, [0.45, 0.85], ["100vh", "0vh"]),
    useTransform(excellenceProgress, [0.6, 1.0], ["100vh", "0vh"])
  ];

  
  const cards = [
    {
      icon: <Search className="w-8 h-8 text-[#E3B873]" />,
      title: "Smart Suggestion",
      description:
        "Tailor your search based on lifestyle, family size, and budget. Our engine provides a “Matching Score” for each property so you can invest with confidence.",
    },
    {
      icon: <Link2 className="w-8 h-8 text-[#E3B873]" />,
      title: "Blockchain Security",
      description:
        "Experience total transparency with blockchain-stored property records. We provide an immutable history of ownership.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#E3B873]" />,
      title: "Predictive Valuation",
      description:
        "Leverage satellite imagery and infrastructure data to forecast land price appreciation. We track upcoming highways, metros, and airports.",
    },
  ];

  const modules = [
    {
      icon: <MapPin className="w-6 h-6 text-[#E3B873]" />,
      title: "Predictive Land Valuation System",
      description:
        "Uses satellite imagery, infrastructure pipeline data (metro, highway, airport), historical transaction records, and population growth models to predict land price.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-[#E3B873]" />,
      title: "Virtual AI Assistant (Chatbot)",
      description:
        "24×7 conversational AI that answers property queries, captures lead information, books site visit appointments, and escalates to a human agent when needed.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#E3B873]" />,
      title: "ROI Prediction & Risk Analyser",
      description:
        "Inputs: purchase price, location, property type. Outputs: projected 3Y/5Y/10Y returns, rental yield estimate, risk score (low/medium/high), and break-even timeline.",
    },
  ];

  const sideImages = [
    { src: "/images/office-hero.png", alt: "Flyover" },
    { src: "/images/office-hero.png", alt: "Buildings", overlay: "+4" },
  ];
  const [buyerType, setBuyerType] = useState('Investor');
  const [location, setLocation] = useState('Gurugram');
  const [budget, setBudget] = useState(1.44); // in Crores
  const [investmentType, setInvestmentType] = useState('Growth corridor');
  const [investmentYear, setInvestmentYear] = useState('5 year');
 
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
          <div className="pt-16 sm:pt-20 md:pt-28 lg:pt-10 px-4 sm:px-6 md:px-[50px] max-w-5xl">
            <h1 className="text-3xl sm:text-5xl md:text-4xl lg:text-[52px] font-serif mb-3 sm:mb-4 md:mb-6 leading-tight !text-white font-medium drop-shadow-lg">
             AI & smart <br/> Investment Advisory
            </h1>
            <p className="!text-white/90 text-xs sm:text-sm md:text-[19px] lg:text-lg font-sans max-w-2xl mx-auto leading-relaxed drop-shadow-md px-2">
             A seamless journey from architectural design to smart home setup with a single point of accountability.
            </p>
          </div>

          {/* Bottom Stats Overlay - Full Width Equal Parts */}
          <div className="w-full px-4 sm:px-6 md:px-[50px] pt-3 sm:pt-4 md:pt-6 pb-4 sm:pb-6 md:pb-10 border-t border-white/10 bg-black/25 backdrop-blur-[2px] grid grid-cols-3 items-start text-white gap-2 sm:gap-4 md:gap-0">
            <div className="text-center relative">
              <div className="text-base sm:text-xl md:text-2xl lg:text-[36px] font-light mb-0.5 sm:mb-1"><CountUp to={15} suffix="+" /></div>
              <div className="text-[8px] sm:text-xs md:text-[14px] font-light opacity-90 leading-snug">AI Engineers</div>
              {/* Gradient Divider */}
              <div className="hidden md:block absolute right-0 top-[60%] -translate-y-1/2 h-32 w-[3px] bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
            <div className="text-center relative">
              <div className="text-base sm:text-xl md:text-2xl lg:text-[36px] font-light mb-0.5 sm:mb-1"><CountUp to={150} suffix="+" /></div>
              <div className="text-[8px] sm:text-xs md:text-[14px] font-light opacity-90 leading-snug">Systems Integrated</div>
              {/* Gradient Divider */}
              <div className="hidden md:block absolute right-0 top-[60%] -translate-y-1/2 h-32 w-[3px] bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
            <div className="text-center">
              <div className="text-base sm:text-xl md:text-2xl lg:text-[36px] font-light mb-0.5 sm:mb-1"><CountUp to={15000} suffix="+" /></div>
              <div className="text-[8px] sm:text-xs md:text-[14px] font-light opacity-90 leading-snug">Nodes Connected</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto items-start">
        {/* Left side: Text + Info Cards */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1E3557] mb-3 sm:mb-4">
            Your 24/7 AI Real Estate Guide
          </h2>
          <p className="text-[#4A5568] mb-8 sm:mb-10 max-w-xl text-sm sm:text-base">
            Skip the wait. Get instant, data-backed answers about listings and
            investment returns anytime, anywhere.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-[#F5F7FA] rounded-xl p-5 sm:p-6 shadow-sm"
              >
                <div className="text-[#E3B873] text-3xl mb-3">{card.icon}</div>
                <h4 className="text-[#1E3557] font-medium text-base sm:text-lg mb-2">
                  {card.title}
                </h4>
                <p className="text-[#4A5568] !text-xs sm:text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      <div className="bg-[#F5F7FA] py-4 sm:py-12 md:py-10 px-3 sm:px-5 md:px-12">
        {/* Heading */}
        <div className="text-center mb-2 sm:mb-4 md:mb-9">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1E3557] mb-2 sm:mb-3">
            Find your property fit in under a minute.
          </h2>
          <p className="text-[#4A5568] text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-2">
            Enter your goal and preferences. The preview score updates instantly so users get value before lead capture.
          </p>
        </div>

        
      <div className="min-bg-[#f3f4f6] flex items-center justify-center p-4 md:p-2">
      {/* Main Container */}
      <div className="w-full max-w-6xl rounded-2xl bg-white p-6 shadow-sm md:p-8 lg:p-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Left Column: Form Controls */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div className="space-y-6">
              {/* Row 1: Buyer Type & Preferred Location */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Buyer Type
                  </label>
                  <div className="relative">
                    <select
                      value={buyerType}
                      onChange={(e) => setBuyerType(e.target.value)}
                      className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 pr-10 text-gray-800 outline-none transition focus:border-blue-500"
                    >
                      <option>Investor</option>
                      <option>End User</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Preferred Location
                  </label>
                  <div className="relative">
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 pr-10 text-gray-800 outline-none transition focus:border-blue-500"
                    >
                      <option>Gurugram</option>
                      <option>Delhi</option>
                      <option>Noida</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: Budget Slider */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Budget
                </label>
                <div className="relative pt-1">
                  <input
                    type="range"
                    min="0.5"
                    max="5.0"
                    step="0.01"
                    value={budget}
                    onChange={(e) => setBudget(parseFloat(e.target.value))}
                    className="h-[6px] w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-[#2b4c6f]"
                    style={{
                      background: `linear-gradient(to right, #2b4c6f 0%, #2b4c6f ${((budget - 0.5) / 4.5) * 100}%, #e5e7eb ${((budget - 0.5) / 4.5) * 100}%, #e5e7eb 100%)`
                    }}
                  />
                </div>
                <div className="mt-3 text-base font-bold text-[#22c55e]">
                  Rs. {budget.toFixed(2)} Cr
                </div>
              </div>

              {/* Row 3: Investment Type & Investment Year */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Investment Type
                  </label>
                  <div className="relative">
                    <select
                      value={investmentType}
                      onChange={(e) => setInvestmentType(e.target.value)}
                      className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 pr-10 text-gray-800 outline-none transition focus:border-blue-500"
                    >
                      <option>Growth corridor</option>
                      <option>High Yielding</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Investment Year
                  </label>
                  <div className="relative">
                    <select
                      value={investmentYear}
                      onChange={(e) => setInvestmentYear(e.target.value)}
                      className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 pr-10 text-gray-800 outline-none transition focus:border-blue-500"
                    >
                      <option>5 year</option>
                      <option>3 year</option>
                      <option>10 year</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button className="mt-8 w-full rounded-lg bg-[#002244] py-4 text-center text-sm font-semibold text-white transition hover:bg-[#001830] active:scale-[0.99] lg:mt-0">
              Calculate your Investment
            </button>
          </div>

          {/* Right Column: Score Display Card */}
          <div className="flex flex-col justify-between rounded-2xl bg-[#002244] p-6 text-white md:p-8 lg:col-span-6">
            {/* Circular Progress Section */}
            <div className="my-2 flex justify-center">
              <div className="relative flex h-30 w-30 items-center justify-center">
                {/* SVG Radial Gauge */}
                <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
                  {/* Background Track */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#ffffff"
                    strokeWidth="5"
                    fill="transparent"
                    className="opacity-20"
                  />
                  {/* Yellow Score Indicator Arc (70%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#bfa13b"
                    strokeWidth="5"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - 0.7)}
                    strokeLinecap="round"
                  />
                </svg>
                {/* Center Content */}
                <div className="absolute text-center">
                  <span className="text-3xl font-bold tracking-tight">70%</span>
                </div>
              </div>
            </div>

            {/* Information Strings */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold tracking-wide text-white">Matching Score</h3>
                <p className="mt-1 text-xs font-normal leading-relaxed text-gray-300">
                  Best For Buyers Seeking Legal Clarity, Community Value, And Long-Term Appreciation.
                </p>
              </div>

              {/* Matrix Data Rows */}
              <div className="space-y-2">
                <div className="flex justify-between rounded-lg border border-gray-600 bg-white/10 px-4 py-3 text-xs backdrop-blur-sm">
                  <span className="font-bold">48-68%</span>
                  <span className="text-gray-300">5Y Appreciation</span>
                </div>

                <div className="flex justify-between rounded-lg border border-gray-600 bg-white/10 px-4 py-3 text-xs backdrop-blur-sm">
                  <span className="font-bold">Medium</span>
                  <span className="text-gray-300">Risk level</span>
                </div>

                <div className="flex justify-between rounded-lg border border-gray-600 bg-white/10 px-4 py-3 text-xs backdrop-blur-sm">
                  <span className="font-bold">Recommended</span>
                  <span className="text-gray-300">Status</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
     
      </div>

 <section className="bg-white py-9 sm:py-5 md:py-9 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1E3557] mb-3">
            Find your property Location
          </h2>
          <p className="text-[#4A5568] text-sm sm:text-base max-w-2xl mx-auto">
            Enter your goal and preferences. The preview score updates instantly
            so users get value before lead capture.
          </p>
        </div>

        {/* Map and Side Images */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_150px] gap-6 items-start">
          {/* Map Section */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm">
            <img
              src="/images/office-hero.png"
              alt="Delhi Map"
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover"
            />

            {/* Search Bar */}
            <div className="absolute bottom-6 left-6 flex items-center bg-white rounded-lg shadow-md w-[90%] sm:w-[70%] md:w-[60%] p-2">
              <input
                type="text"
                placeholder="Search your investment Location"
                className="flex-1 px-3 py-2 text-sm sm:text-base text-gray-700 placeholder-gray-400 focus:outline-none"
              />
              <button className="flex items-center gap-2 bg-[#1E3557] text-white px-4 py-2 rounded-lg hover:bg-[#002349] transition">
                <Search className="w-4 h-4" />
                <span className="text-sm sm:text-base font-medium">Search</span>
              </button>
            </div>
          </div>

          {/* Side Thumbnails (map method) */}
          <div className="flex flex-col gap-4">
            {sideImages.map((image, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-sm"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[190px] object-cover"
                />
                {image.overlay && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold">
                      {image.overlay}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
      <section className="bg-[#0B1E3F] py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-12 text-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-2 sm:mb-3 !text-white">
            Intelligence Modules.
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-10 md:mb-12 max-w-3xl leading-relaxed">
            Experience the perfect blend of earthquake-resistant engineering and
            premium leisure facilities designed for your family's peace of mind.
          </p>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {modules.map((item, index) => (
              <div
                key={index}
                className="bg-[#1E3557] rounded-xl p-4 sm:p-6 border border-[#2A4A6F] text-left"
              >
                <div className="mb-3 sm:mb-4">{item.icon}</div>
                <h3 className="text-[#E3B873] font-semibold mb-2 text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* How Aaru Delivers Excellence Section */}
      <section ref={excellenceScrollRef} className={`relative w-full bg-white ${isMobile ? 'h-auto py-6 sm:py-10 md:py-16' : 'h-[180vh]'}`}>
        <div className={`${isMobile ? 'relative' : 'sticky top-[112px] overflow-hidden'} w-full flex flex-col items-center pt-4 sm:pt-6 md:pt-10 px-3 sm:px-5 md:px-[50px] pb-3 sm:pb-4 md:pb-0`}>
          <div className="w-full flex flex-col">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8 md:mb-20 shrink-0">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-[42px] font-serif leading-[1.1] mb-2 sm:mb-3 md:mb-4 text-[#1A1A1A] tracking-tight">
                How We Deploy Smart Tech.
              </h2>
              <p className="text-gray-500 text-[10px] sm:text-xs md:text-[15px] font-sans max-w-2xl mx-auto px-1 sm:px-2">
                From initial consultation to seamless sensor integration and ongoing cloud maintenance.
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-6 lg:gap-4 w-full pb-2 sm:pb-4 relative">
              {[
                {
                  num: "01",
                  title: "Site & Legal",
                  desc: "AI-driven land feasibility analysis, zoning check, automated title verification, and RERA filing."
                },
                {
                  num: "02",
                  title: "Design",
                  desc: "Generative AI layout optimization, solar study, energy simulations, and 3D architectural rendering."
                },
                {
                  num: "03",
                  title: "Construction",
                  desc: "AI-monitored project tracking, automated quality control, drone site inspections, and material supply management."
                },
                {
                  num: "04",
                  title: "Smart Integration",
                  desc: "Deploying smart grids, IoT automation sensors, security networks, and smart streetlighting."
                },
                {
                  num: "05",
                  title: "Handover",
                  desc: "Digital twin generation, smart key handovers, automated system diagnostics, and 24/7 post-handover support."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col w-full"
                  style={isMobile ? {} : { y: cardYs[index] }}
                >
                  <div className="w-full h-full min-h-auto sm:min-h-[220px] md:min-h-[260px] lg:min-h-[300px] flex flex-col justify-start bg-[#E9ECF1] rounded-[12px] p-3 sm:p-4 md:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                    <span className="block text-[#C29B40] text-2xl sm:text-3xl lg:text-[48px] font-light leading-none mb-1.5 sm:mb-2">{step.num}</span>
                    <h3 className="font-serif text-sm sm:text-base lg:text-[17px] text-[#1A1A1A] mb-1.5">{step.title}</h3>
                    <p className="text-[10px] sm:text-xs lg:text-[13px] text-gray-500 leading-snug sm:leading-relaxed font-sans">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default AISmartSolution;
