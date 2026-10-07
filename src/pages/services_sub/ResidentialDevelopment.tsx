import React, { useState, useEffect, } from 'react';
import { motion, useMotionValue, useTransform, animate, AnimatePresence, } from 'framer-motion';
import Projects from '../../components/home-page/projects';
import { Link } from 'react-router-dom';
import Excellence from '../../components/common/Excellence';
import { useRef } from 'react';
import { useCountUp } from 'react-countup';
interface SmartTheme {
  id: number;
  bgColor: string; // The solid underlying color tint
  dotColor: string;
  indicatorBg: string;
}
const CountUp: React.FC<{ to: number; suffix?: string }> = ({ to, suffix = '' }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString() + suffix);

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: 'easeOut' });
    return controls.stop;
  }, [count, to]);

  return <motion.span>{rounded}</motion.span>;
};

const ResidentialDevelopment: React.FC = () => {
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
  const [activeTheme, setActiveTheme] = useState<number>(0);

  const themes: SmartTheme[] = [
    {
      id: 0,
      bgColor: "bg-[#2A2B2F]", // Original/Neutral deep slate tint
      dotColor: "bg-[#E6E1DA]",
      indicatorBg: "bg-[#E6E1DA]/40"
    },
    {
      id: 1,
      bgColor: "bg-[#544332]", // Warm ambient gold/brown tint
      dotColor: "bg-[#C4B299]",
      indicatorBg: "bg-[#C4B299]/40"
    },
    {
      id: 2,
      bgColor: "bg-[#2D325A]", // Cool blue/purple twilight tint
      dotColor: "bg-[#5E648E]",
      indicatorBg: "bg-[#5E648E]/40"
    }
  ];
  const countUpRef = useRef<HTMLDivElement>(null);

  // Hook handles the properties safely without component typing conflicts
  useCountUp({
    ref: countUpRef as any,
    start: 0,
    end: 98,
    suffix: "%",
    duration: 3,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });
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
            <h1 className="text-[32px] sm:text-5xl md:text-6xl lg:text-[72px] font-serif mb-4 sm:mb-6 leading-tight !text-white font-medium drop-shadow-lg">
              Smarter Residential Spaces <br />
              Designed for Your Modern Lifestyle.
            </h1>
            <p className="!text-white/90 text-sm sm:text-base md:text-xl font-sans max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              A seamless journey from architectural design to smart home setup with a <br className="hidden md:block" />
              single point of accountability.
            </p>
          </div>

          {/* Bottom Stats Overlay - Full Width Equal Parts */}
          <div className="w-full px-4 sm:px-8 md:px-[50px] pt-4 sm:pt-6 pb-5 md:pb-10 border-t border-white/10 bg-black/25 backdrop-blur-[2px] grid grid-cols-3 items-start text-white gap-3 sm:gap-6 md:gap-0">
            <div className="text-center relative">
              <div className="text-xl sm:text-2xl md:text-[36px] font-light mb-1"><CountUp to={15} suffix="+" /></div>
              <div className="text-[10px] sm:text-xs md:text-[14px] font-light opacity-90 leading-snug">Years of Experience</div>
              {/* Gradient Divider */}
              <div className="hidden md:block absolute right-0 top-[60%] -translate-y-1/2 h-32 w-[3px] bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
            <div className="text-center relative">
              <div className="text-xl sm:text-2xl md:text-[36px] font-light mb-1"><CountUp to={150} suffix="+" /></div>
              <div className="text-[10px] sm:text-xs md:text-[14px] font-light opacity-90 leading-snug">Projects Completed</div>
              {/* Gradient Divider */}
              <div className="hidden md:block absolute right-0 top-[60%] -translate-y-1/2 h-32 w-[3px] bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-[36px] font-light mb-1"><CountUp to={22000} suffix="+" /></div>
              <div className="text-[10px] sm:text-xs md:text-[14px] font-light opacity-90 leading-snug">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full bg-[#FAFAFA] py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side Content Column */}
          <div className="flex flex-col text-left space-y-6 max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-stone-900 leading-[1.15] tracking-tight">
              Residential Dreams Become Reality <br className="hidden sm:inline" />
              With Aaru.
            </h2>
            <p className="text-stone-500 font-sans text-sm sm:text-base leading-relaxed font-light">
              Estate-Hubs made 98% Peoples dream true with owning a smart home a reality.
              The entire process from booking to handover was transparent and stress free.
              Estate-Hubs made my dream of owning a smart home a reality. Estate-Hubs made.
            </p>
          </div>

          {/* Right Side Card Column */}
          <div className="w-full flex justify-center lg:justify-end">

            <div className="relative w-full max-w-[95%] sm:max-w-[520px] md:max-w-[580px] lg:max-w-[620px] h-[280px] sm:h-[320px] md:h-[340px] bg-[#F5F3EE] rounded-[24px] overflow-hidden border border-stone-200/40 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.04)] flex flex-col justify-between p-8 sm:p-10 select-none">

              {/* Top Text Content Layer */}
              <div className="relative z-30 w-full text-center pt-2">
                <span className="text-stone-600 text-lg sm:text-xl md:text-2xl font-serif font-light tracking-wide block">
                  Dreams Becomes Reality
                </span>
              </div>

              {/* Main 98% Number Layer bound cleanly via DOM Ref */}
              <div className="absolute top-[62%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none text-center">
                <div
                  ref={countUpRef}
                  className="text-[90px] sm:text-[115px] md:text-[135px] font-sans font-semibold tracking-tighter leading-none text-[#C29B40]"
                  style={{
                    filter: 'drop-shadow(0px 12px 16px rgba(194, 155, 64, 0.22))'
                  }}
                >
                  {/* Hook handles injecting the number text node right here */}
                </div>
              </div>

              {/* Fluid Frosted Waves Base Detail Layer */}
              <div className="absolute inset-0 z-20 pointer-events-none flex items-end">
                <svg
                  viewBox="0 0 600 340"
                  preserveAspectRatio="none"
                  className="w-full h-[65%] sm:h-[58%] backdrop-blur-[1.5px]"
                >
                  <defs>
                    <linearGradient id="premiumWaveGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="rgba(212, 184, 133, 0.45)" />
                      <stop offset="45%" stopColor="rgba(230, 213, 181, 0.3)" />
                      <stop offset="100%" stopColor="rgba(245, 243, 238, 0.7)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,130 C120,60 220,190 380,110 C500,45 550,80 600,10 L600,340 L0,340 Z"
                    fill="url(#premiumWaveGrad)"
                  />
                </svg>
              </div>

              <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-tr from-white/20 via-transparent to-black/[0.01]" />

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

      {/* Fully Integrated Smart Townships Section */}
      <section className="py-10 px-4 sm:px-8 md:px-[50px] bg-white">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[35px] font-serif !leading-[1.1] mb-5 text-[#002349] tracking-tight">
              Fully Integrated Smart Townships
            </h2>
            <p className="text-gray-500 text-[16px] leading-snug mb-6 font-sans max-w-3xl">
              A large-scale lifestyle ecosystem where premium residences, schools, clinics,
              and co-working hubs thrive within a single planned community.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-1 mb-8">
              {[
                'Estate-Hubs builds large-scale planned communities.',
                'These townships include a mix of residential, Commercial and retail spaces.',
                'Each community features its own on-site schools and healthcare clinics.',
                'Residents have access to extensive green parks and jogging tracks.',
                'Professional co-working spaces are integrated for modern remote work.',
                'The township serves as a fully integrated lifestyle ecosystem.'
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#C29B40]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 10.5l4 4 8-9" />
                  </svg>
                  <span className="text-gray-600 text-[15px] leading-snug font-sans">{point}</span>
                </li>
              ))}
            </ul>

            {/* Invest Now Button */}
            <Link to="/investors" className="px-8 py-3 border border-[#C29B40] text-[#002349] text-sm font-medium rounded-sm hover:bg-[#C29B40] hover:text-white transition-all duration-300 tracking-wide">
              Invest Now
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full max-w-[600px] ml-auto">
            <div className="rounded-[16px] overflow-hidden shadow-lg">
              <img
                src="/images/thumbnail-modern.png"
                alt="Fully Integrated Smart Township"
                className="w-full h-[240px] sm:h-[300px] md:h-[360px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full min-h-[650px] lg:h-[720px] flex items-center overflow-hidden bg-[#050A09]">

        {/* 1. Cinematic Ambient Dynamic Background Frame */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">

          {/* Step A: Dynamic Base Color Canvas Layer */}
          {themes.map((theme, idx) => (
            <div
              key={theme.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${theme.bgColor} ${idx === activeTheme ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            />
          ))}

          {/* Step B: The Single Source Graphic Image Blended on Top */}
          <img
            src="/images/residential_hero.png"
            alt="Smart Home Interior View"
            className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.15] mix-blend-luminosity pointer-events-none"
          />

          {/* Step C: Extra Dark Contrast Dimmer Overlay */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />

          {/* Step D: Unified premium vignette protection layout layer */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* 2. Responsive Content Container Wrapper */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 flex items-center justify-center sm:justify-start">

          {/* Glassmorphism Presentation Panel Container */}
          <div className="relative w-full max-w-[420px] bg-white/10 backdrop-blur-[25px] border border-white/20 rounded-[24px] py-12 md:py-14 px-6 md:px-10 overflow-hidden min-h-[520px] flex flex-col justify-between shadow-2xl transition-all duration-500">

            {/* Wave Decoration at Bottom */}
            <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
              <svg viewBox="0 0 420 100" preserveAspectRatio="none" className="w-full h-[85px]">
                <path d="M0,60 C100,10 180,90 280,40 C340,15 380,50 420,30 L420,100 L0,100 Z" fill="rgba(255,255,255,0.05)" />
                <path d="M0,75 C120,30 200,80 300,50 C360,35 390,60 420,45 L420,100 L0,100 Z" fill="rgba(255,255,255,0.03)" />
              </svg>
            </div>

            {/* Upper Functional Content */}
            <div className="relative z-10 flex-1 flex flex-col justify-center">
              {/* Title */}
              <h2 className="text-[34px] sm:text-[38px] md:text-[42px] font-serif font-medium leading-[1.15] mb-8 text-white tracking-tight drop-shadow-md">
                Smart Homes,<br />Elevated Living
              </h2>

              {/* Feature Checklists */}
              <ul className="space-y-4.5 mb-8 sm:mb-10">
                {[
                  'Voice controlled lighting',
                  'Security cameras',
                  'Automated HVAC',
                  'Smart locks'
                ].map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3.5 group">
                    <span className="w-5 h-5 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center border border-white/15 backdrop-blur-sm shadow-inner transition-transform duration-300 group-hover:scale-105">
                      <svg className="w-3 h-3 text-[#C29B40]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 10.5l4 4 8-9" />
                      </svg>
                    </span>
                    <span className="text-white/90 text-[15px] sm:text-[16px] font-sans font-light tracking-wide drop-shadow-sm">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Interactive Circle Indicators Panel */}
            <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-white/5">
              {themes.map((theme, idx) => {
                const isActive = idx === activeTheme;
                return (
                  <button
                    key={theme.id}
                    onClick={() => setActiveTheme(idx)}
                    className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-500 relative outline-none focus:outline-none ${isActive
                      ? 'border-white bg-white/20 shadow-[0_0_12px_rgba(255,255,255,0.3)] scale-110'
                      : 'border-white/30 bg-white/5 hover:bg-white/10 hover:border-white/60 scale-100'
                      }`}
                    aria-label={`Switch to lighting scene template ${idx + 1}`}
                  >
                    {/* Outer active ambient halo */}
                    <div className={`w-6 h-6 rounded-full transition-all duration-500 flex items-center justify-center ${theme.indicatorBg}`}>
                      {/* Core Solid Color Pill */}
                      <div className={`w-3 h-3 rounded-full shadow-sm transition-transform duration-300 ${theme.dotColor} ${isActive ? 'scale-110' : 'scale-90'
                        }`} />
                    </div>
                  </button>
                );
              })}
            </div>

          </div>
        </div>

      </section>

      <Projects />

      {/* Foundations Section */}
      <section className="py-15 px-4 sm:px-8 md:px-[50px] bg-[#1A395C]">
        <div className="w-full">
          {/* Header */}
          <div className="max-w-2xl mb-10">
            <h2 className="text-[40px] md:text-[48px] font-serif leading-[1.1] mb-6 tracking-tight" style={{ color: "white" }}>
              Foundations You Can Trust.<br />
              Amenities You'll Love.
            </h2>
            <p className="text-[17px] leading-relaxed font-sans" style={{ color: "white" }}>
              Experience the perfect blend of earthquake-resistant engineering and premium leisure
              facilities designed for your family's peace of mind.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white/[0.04] border border-white/10 rounded-[16px] py-3 px-4 hover:bg-white/[0.08] transition-all duration-300">
              <div className="mb-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="font-serif text-[22px] mb-1" style={{ color: "white" }}>Lifestyle & Wellness</h3>
              <p className="text-[14px] leading-relaxed font-sans" style={{ color: "rgba(255,255,255,0.8)" }}>
                Enjoy a premium clubhouse with a swimming pool and gym, complemented
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/[0.04] border border-white/10 rounded-[16px] py-3 px-4 hover:bg-white/[0.08] transition-all duration-300">
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
              <h3 className="font-serif text-[22px] mb-1" style={{ color: "white" }}>Safety & Security</h3>
              <p className="text-[14px] leading-relaxed font-sans" style={{ color: "rgba(255,255,255,0.8)" }}>
                Corporate lease agreements of 3-9 years ensure predictable, stable rental
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/[0.04] border border-white/10 rounded-[16px] py-3 px-4 hover:bg-white/[0.08] transition-all duration-300">
              <div className="mb-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 2L4 6v16h16V6l-4-4z" />
                  <line x1="12" y1="10" x2="12" y2="14" />
                  <line x1="10" y1="12" x2="14" y2="12" />
                  <path d="M10 22v-4h4v4" />
                </svg>
              </div>
              <h3 className="font-serif text-[22px] mb-1" style={{ color: "white" }}>Eco-Friendly Living</h3>
              <p className="text-[14px] leading-relaxed font-sans" style={{ color: "rgba(255,255,255,0.8)" }}>
                IGBC / GRIHA green building certification on flagship projects future-proof assets
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/[0.04] border border-white/10 rounded-[16px] py-3 px-4 hover:bg-white/[0.08] transition-all duration-300">
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
              <h3 className="font-serif text-[22px] mb-1" style={{ color: "white" }}>Superior Quality</h3>
              <p className="text-[14px] leading-relaxed font-sans" style={{ color: "rgba(255,255,255,0.8)" }}>
                Invest in pre-leased commercial properties income starts from day one, zero wait for tenants.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* How Aaru Delivers Excellence Section */}
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

export default ResidentialDevelopment;
