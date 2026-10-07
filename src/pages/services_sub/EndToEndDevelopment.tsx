import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Excellence from '../../components/common/Excellence';
import {
  FaBuilding,
  FaHammer,
  FaTree,
  FaHome,
  FaLightbulb,
  FaChartBar,
  FaFileInvoice,
  FaCamera,
} from "react-icons/fa";
import { ClipboardCheck, Users, TrendingUp, Handshake, Camera, Calculator, Globe, ShieldCheck } from 'lucide-react';
import Projects from '../../components/home-page/projects';
const CountUp: React.FC<{ to: number; suffix?: string }> = ({ to, suffix = '' }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString() + suffix);

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: 'easeOut' });
    return controls.stop;
  }, [count, to]);

  return <motion.span>{rounded}</motion.span>;
};

const EndToEndDevelopment: React.FC = () => {

  const services = [
    {
      icon: <FaHome className="w-7 h-7 text-[#E3B873]" />,
      title: "Acquire",
      description:
        "Land sourcing, due diligence, legal verification, negotiation & registration",
    },
    {
      icon: <FaBuilding className="w-7 h-7 text-[#E3B873]" />,
      title: "Plan & Design",
      description:
        "Architecture, structural design, 3D rendering, interior concept & vastu consultation",
    },
    {
      icon: <FaHammer className="w-7 h-7 text-[#E3B873]" />,
      title: "Build",
      description:
        "Construction management, vendor procurement, quality control & milestone tracking",
    },
    {
      icon: <FaTree className="w-7 h-7 text-[#E3B873]" />,
      title: "Finish & Fit",
      description:
        "Interior execution, modular kitchen, wardrobes, false ceiling, painting & lighting",
    },
    {
      icon: <FaLightbulb className="w-7 h-7 text-[#E3B873]" />,
      title: "Smart Enable",
      description:
        "IoT device installation, smart home app setup & automation configuration",
    },
    {
      icon: <FaCamera className="w-7 h-7 text-[#E3B873]" />,
      title: "Sell / Lease",
      description:
        "Marketing, photography, listing on portals, buyer qualification, negotiation & documentation",
    },
    {
      icon: <FaChartBar className="w-7 h-7 text-[#E3B873]" />,
      title: "Resale Advisory",
      description:
        "Market timing advice, price benchmarking, buyer sourcing & capital gains guidance",
    },
    {
      icon: <FaFileInvoice className="w-7 h-7 text-[#E3B873]" />,
      title: "Manage",
      description:
        "Property management: rent collection, maintenance, tenant management & bills payment",
    },
  ];



  const properties = [
    {
      icon: <ClipboardCheck className="text-[#E3B873] w-6 h-6 flex-shrink-0" />,
      text: "Property valuation report independent assessment",
    },
    {
      icon: <Users className="text-[#E3B873] w-6 h-6 flex-shrink-0" />,
      text: "Comparative market analysis with recent transactions",
    },
    {
      icon: <TrendingUp className="text-[#E3B873] w-6 h-6 flex-shrink-0" />,
      text: "Professional photography & virtual tour for listings",
    },
    {
      icon: <Handshake className="text-[#E3B873] w-6 h-6 flex-shrink-0" />,
      text: "Listing on 99acres, MagicBricks, Housing.com, NoBroker",
    },
    {
      icon: <Camera className="text-[#E3B873] w-6 h-6 flex-shrink-0" />,
      text: "Buyer qualification & seamless on-site visit coordination",
    },
    {
      icon: <Calculator className="text-[#E3B873] w-6 h-6 flex-shrink-0" />,
      text: "Negotiation support & legal documentation assistance",
    },
    {
      icon: <Globe className="text-[#E3B873] w-6 h-6 flex-shrink-0" />,
      text: "Capital gains calculation & reinvestment guidance",
    },
    {
      icon: <ShieldCheck className="text-[#E3B873] w-6 h-6 flex-shrink-0" />,
      text: "NOC from society / authority for smooth transfer",
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
              End-To-End Development <br />
              From Concept to Handover.
            </h1>
            <p className="!text-white/90 text-sm sm:text-base md:text-lg font-sans max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              We manage the entire real estate lifecycle. From land acquisition and legal clearances
              to architectural design, construction, and final delivery.
            </p>
          </div>

          {/* Bottom Stats Overlay - Full Width Equal Parts */}
          <div className="w-full px-4 sm:px-8 md:px-[50px] pt-4 sm:pt-6 pb-5 md:pb-10 border-t border-white/10 bg-black/25 backdrop-blur-[2px] grid grid-cols-3 items-start text-white gap-3 sm:gap-6 md:gap-0">
            <div className="text-center relative">
              <div className="text-xl sm:text-2xl md:text-[36px] font-light mb-1"><CountUp to={15} suffix="+" /></div>
              <div className="text-[10px] sm:text-xs md:text-[14px] font-light opacity-90 leading-snug">Years of Expertise</div>
              {/* Gradient Divider */}
              <div className="hidden md:block absolute right-0 top-[60%] -translate-y-1/2 h-32 w-[3px] bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
            <div className="text-center relative">
              <div className="text-xl sm:text-2xl md:text-[36px] font-light mb-1"><CountUp to={150} suffix="+" /></div>
              <div className="text-[10px] sm:text-xs md:text-[14px] font-light opacity-90 leading-snug">Turnkey Projects</div>
              {/* Gradient Divider */}
              <div className="hidden md:block absolute right-0 top-[60%] -translate-y-1/2 h-32 w-[3px] bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-[36px] font-light mb-1"><CountUp to={500} suffix="+" /></div>
              <div className="text-[10px] sm:text-xs md:text-[14px] font-light opacity-90 leading-snug">Acres Developed</div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Image Section */}
          <div className="relative rounded-xl overflow-hidden">
            <img
              src="/images/construction-site.png"
              alt="Structured Execution"
              className="w-full h-[200px] md:h-[250px] lg:h-[320px] object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-start px-6 md:px-10">
              <h3 className="text-white text-2xl md:text-3xl font-semibold mb-2 mt-4">
                Structured Execution
              </h3>
              <p className="text-white text-sm md:text-base leading-relaxed max-w-md">
                Rigorous project management frameworks ensuring deadlines and
                quality are met every time.
              </p>
            </div>
          </div>

          {/* Right Text Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-serif text-[#1E3557] mb-6">
              The Only Real Estate Partner You’ll Ever Need.
            </h2>
            <p className="text-[#4A5568] text-sm md:text-base leading-relaxed mb-4">
              Most real estate developers handle only one or two stages of the
              property lifecycle. Estate-Hubs is different — we are a single
              point of accountability for the entire journey: land purchase
            </p>
            <p className="text-[#4A5568] text-sm md:text-base leading-relaxed mb-4 italic">
              → design → construction → interior → sale → property management →
              resale advisory.
            </p>
            <p className="text-[#4A5568] text-sm md:text-base leading-relaxed">
              Clients who choose this service never need a second vendor.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#002349] text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl max-w-4xl font-serif mb-4 !text-white leading-tight">
            Why Leading Institutions Partner with Estate-Hubs.
          </h1>
          <p className="!text-white/80 max-w-3xl mb-12 text-sm sm:text-base leading-relaxed">
            From Grade A offices to sprawling shopping malls Estate-Hubs builds
            commercial & retail spaces where businesses don't just operate, they thrive.
          </p>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-[#2A466E] rounded-xl p-5 flex flex-col items-center sm:items-start text-center sm:text-left shadow-sm border border-[#3A5780]"
              >
                <div className="text-[#E3B873] mb-3 flex justify-center sm:justify-start">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F9FAFB] py-12 sm:py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1E3557] mb-4 leading-snug">
            Your Property. Our Responsibility.
            <br />
            Zero Landlord Hassle.
          </h2>
          <p className="text-[#4A5568] text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            From Grade A offices to sprawling shopping malls Estate-Hubs builds
            commercial & retail spaces where businesses don’t just operate, they thrive.
          </p>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {properties.map((property, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 bg-white rounded-xl border border-gray-200 p-4 sm:p-5 shadow-sm"
              >
                <div className="flex-shrink-0 mt-0.5">{property.icon}</div>
                <p className="text-[#1E3557] text-xs sm:text-sm md:text-base font-medium text-left leading-snug">
                  {property.text}
                </p>
              </div>
            ))}
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

export default EndToEndDevelopment;
