import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import {
  Building,
  Map as LucideMap,
  FileCheck,
  RefreshCw,
  Layout,
  LandPlot,
  TrendingUp,
  Home,
  Layers,
  Wrench
} from 'lucide-react';
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

const LandDevelopment: React.FC = () => {

  const expertise = [
    {
      icon: <LucideMap className="text-[#E3B873] md:w-8 md:h-8 h-5 w-5" />,
      title: "Land Acquisition",
      description:
        "End-to-end sourcing and acquisition of land parcels. Includes identification of sites based on growth.",
      client: "Developers, Housing Boards",
      size: "5–200 Acres",
    },
    {
      icon: <FileCheck className="text-[#E3B873] md:w-8 md:h-8 h-5 w-5" />,
      title: "Title Verification & Legal Clearance",
      description:
        "Revenue records check, encumbrance certificate, mutation, Jamabandi, sub-registrar.",
      client: "All Land Buyers",
      size: "Any Size",
    },
    {
      icon: <RefreshCw className="text-[#E3B873] md:w-8 md:h-8 h-5 w-5" />,
      title: "Land Conversion",
      description:
        "Conversion of agricultural land (Abadi / Gram Sabha / Nazul) to residential or commercial use.",
      client: "Landowners, Developers",
      size: "1–50 Acres",
    },
    {
      icon: <Layout className="text-[#E3B873] md:w-8 md:h-8 h-5 w-5" />,
      title: "Plotting & Layout Development",
      description:
        "Master layout planning for plotted colonies: internal roads (30ft/60ft), drainage.",
      client: "Developers, Housing Boards",
      size: "5–200 Acres",
    },
    {
      icon: <LandPlot className="text-[#E3B873] md:w-8 md:h-8 h-5 w-5" />,
      title: "Land Servicing",
      description:
        "Infrastructure creation on raw land: internal roads, compound wall, water borewell.",
      client: "Landowners, Investors",
      size: "1–100 Acres",
    },
    {
      icon: <TrendingUp className="text-[#E3B873] md:w-8 md:h-8 h-5 w-5" />,
      title: "Fractional Land Investment",
      description:
        "Aggregated land investment for smaller investors. Pool capital to buy prime land.",
      client: "Retail Investors, NRIs",
      size: "₹5L – ₹5Cr Investment",
    },
  ];

  const foundations = [
    {
      icon: <Home className="md:w-8 md:h-8 h-5 w-5 text-[#E3B873] flex-shrink-0" />,
      title: "Site Feasibility & Analysis",
      description:
        "We conduct thorough environmental and topographical analysis to ensure land viability.",
    },
    {
      icon: <Building className="md:w-8 md:h-8 h-5 w-5 text-[#E3B873] flex-shrink-0" />,
      title: "Regulatory Approval",
      description:
        "Navigating complex municipal codes and securing the necessary permits for development.",
    },
    {
      icon: <Wrench className="md:w-8 md:h-8 h-5 w-5 text-[#E3B873] flex-shrink-0" />,
      title: "Infrastructure & Engineering",
      description:
        "Designing robust systems for roadways, drainage, utility corridors, and power grids.",
    },
    {
      icon: <Layers className="md:w-8 md:h-8 h-5 w-5 text-[#E3B873] flex-shrink-0" />,
      title: "Project Management",
      description:
        "Overseeing every stage of raw land servicing to ensure project milestones are hit on time.",
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
            <h1 className="text-[32px] sm:text-5xl md:text-5xl lg:text-[42px] font-serif mb-4 sm:mb-6 leading-tight !text-white font-medium drop-shadow-lg">
              Strategic Land Development <br />
              Paving the Way for Progress.
            </h1>
            <p className="!text-white/90 text-sm sm:text-base md:text-xl font-sans max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Expert zoning, plotting, and infrastructural groundwork that transforms <br className="hidden md:block" />
              raw acreage into high-value, ready-to-build real estate.
            </p>
          </div>

          {/* Bottom Stats Overlay - Full Width Equal Parts */}
          <div className="w-full px-4 sm:px-8 md:px-[50px] pt-4 sm:pt-6 pb-5 md:pb-10 border-t border-white/10 bg-black/25 backdrop-blur-[2px] grid grid-cols-3 items-start text-white gap-3 sm:gap-6 md:gap-0">
            <div className="text-center relative">
              <div className="text-xl sm:text-2xl md:text-[36px] font-light mb-1"><CountUp to={15} suffix="+" /></div>
              <div className="text-[10px] sm:text-xs md:text-[14px] font-light opacity-90 leading-snug">Acres Developed</div>
              {/* Gradient Divider */}
              <div className="hidden md:block absolute right-0 top-[60%] -translate-y-1/2 h-32 w-[3px] bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
            <div className="text-center relative">
              <div className="text-xl sm:text-2xl md:text-[36px] font-light mb-1"><CountUp to={150} suffix="+" /></div>
              <div className="text-[10px] sm:text-xs md:text-[14px] font-light opacity-90 leading-snug">Plots Sold</div>
              {/* Gradient Divider */}
              <div className="hidden md:block absolute right-0 top-[60%] -translate-y-1/2 h-32 w-[3px] bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-[36px] font-light mb-1"><CountUp to={1200} suffix="+" /></div>
              <div className="text-[10px] sm:text-xs md:text-[14px] font-light opacity-90 leading-snug">Clearances Secured</div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">

          {/* 1st Column: Separated Photo and Text Div */}
          <div className="flex flex-col gap-3 justify-between">
            <img
              src="/images/office-hero.png"
              alt="Land Development Service"
              className="w-full h-52 md:h-64 object-cover rounded-3xl"
            />
            <div className="bg-[#F0F4F8] p-6 pb-8 rounded-3xl flex-grow flex flex-col justify-center">
              <h3 className="text-[#1E1E1E] font-medium text-xl md:text-2xl mb-3 capitalize tracking-tight">
                land development service
              </h3>
              <p className="text-[#5A6578] text-sm md:text-base leading-relaxed font-light">
                Real-time updates and clear reporting on development progress and financial health.
              </p>
            </div>
          </div>

          {/* 2nd Column: Photo with Overlay Content */}
          <div className="relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-full">
            <img
              src="/images/office-hero.png"
              alt="Land Acquisition"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 pb-8">
              <h3 className="text-white text-xl md:text-2xl font-medium mb-3 tracking-tight">
                Land Acquisition
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed font-light">
                Rigorous project management frameworks ensuring deadlines and quality are met every time.
              </p>
            </div>
          </div>

          {/* 3rd Column: Copywriting Content Only */}
          <div className="flex flex-col justify-center lg:pl-6">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl text-[#1E1E1E] font-light mb-6 leading-[1.15]">
              The Foundation <br className="hidden sm:inline" /> of Real Estate.
            </h2>
            <div className="space-y-5 text-[#5A6578] text-sm md:text-base leading-relaxed font-light">
              <p>
                Estate-Hubs offers a complete land development service — from identifying
                and acquiring raw agricultural or industrial land, through the legal, planning,
                and approval process, to delivering fully serviced plots or developed parcels
                ready for construction.
              </p>
              <p>
                By leveraging our deep network of legal experts, geologists, and local
                government liaisons, we significantly reduce the time-to-market for large-scale
                projects while ensuring 100% legal compliance.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-[#F5F5F5] text-[#1E3557] py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 text-[#1E3557]">
            Specialized Expertise.
          </h2>
          <p className="text-[#4A5568] max-w-3xl mx-auto mb-5 text-sm sm:text-base leading-relaxed">
            From Grade A offices to sprawling shopping malls Estate-Hubs builds
            commercial & retail spaces where businesses don’t just operate, they thrive.
          </p>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sm:p-6 flex flex-col justify-between text-left h-full transition-all duration-300 hover:shadow-md hover:border-gray-300"
              >
                <div>
                  <div className="text-[#E3B873] mb-3 flex justify-start">{item.icon}</div>
                  <h4 className="text-lg sm:text-xl font-normal mb-2 text-[#1E3557] leading-snug">{item.title}</h4>
                  <p className="text-[#4A5568] text-xs sm:text-sm leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-2 space-y-1.5 text-xs sm:text-sm text-gray-500 font-medium">
                  <p>
                    <span className="text-[#1E3557] font-semibold">Target Client:</span> {item.client}
                  </p>
                  <p>
                    <span className="text-[#1E3557] font-semibold">Typical Size:</span> {item.size}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Foundations Section */}


      <section className="py-16 px-4 sm:px-8 md:px-[50px] bg-[#1A395C]">
        <div className="w-full">
          {/* Header */}
          <div className="max-w-4xl mb-10 text-left">
            <h2
              className="text-3xl sm:text-4xl md:text-4xl lg:text-[48px] font-serif leading-[1.15] mb-6 tracking-tight text-white"
            >
              Master Planned Excellence
              <br />
              <span className="text-white/80">Comprehensive Land Development Solutions</span>
            </h2>
            <p
              className="text-sm sm:text-base md:text-[17px] leading-relaxed font-sans text-white/90 max-w-2xl"
            >
              Experience the perfect blend of earthquake-resistant engineering and
              premium leisure facilities designed for your family’s peace of mind.
            </p>
          </div>



          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
            {foundations.map((item, index) => (
              <div
                key={index}
                className="bg-white/[0.04] border border-white/10 rounded-[16px] py-6 sm:py-7 px-4 sm:px-5 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-start text-left h-full"
              >
                <div className="mb-3 text-[#E3B873]">{item.icon}</div>
                <h3
                  className="font-serif text-lg sm:text-[20px] mb-2 text-white leading-snug"
                >
                  {item.title}
                </h3>
                <p
                  className="text-xs sm:text-sm leading-relaxed font-sans text-white/80"
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


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

export default LandDevelopment;
