
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';

interface Step {
  num: string;
  title: string;
  desc: string;
}

interface ExcellenceProps {
  heading: string;
  description: string;
  steps: Step[];
}

const Excellence: React.FC<ExcellenceProps> = ({ heading, description, steps }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const excellenceScrollRef = useRef<HTMLElement>(null);
  const { scrollYProgress: excellenceProgress } = useScroll({
    target: excellenceScrollRef,
    offset: ['start start', 'end end'],
  });

  // ✅ Declare transforms outside of map
  const cardYs = [
    useTransform(excellenceProgress, [0, 0.4], ['100vh', '0vh']),
    useTransform(excellenceProgress, [0.15, 0.55], ['100vh', '0vh']),
    useTransform(excellenceProgress, [0.3, 0.7], ['100vh', '0vh']),
    useTransform(excellenceProgress, [0.45, 0.85], ['100vh', '0vh']),
    useTransform(excellenceProgress, [0.6, 1.0], ['100vh', '0vh']),
  ];

  return (
    <section
      ref={excellenceScrollRef}
      className={`relative w-full bg-white ${
        isMobile ? 'h-auto py-6 sm:py-10 md:py-10' : 'h-[180vh]'
      }`}
    >
      <div
        className={`${
          isMobile ? 'relative' : 'sticky top-[112px] overflow-hidden'
        } w-full flex flex-col items-center pt-2 px-4 sm:px-8 md:px-[50px]`}
      >
        <div className="w-full flex flex-col">
          {/* Header */}
          <div className="text-center mb-10 md:mb-9 shrink-0">
            <h2 className="text-3xl md:text-[42px] font-serif leading-[1.1] mb-4 text-[#1A1A1A] tracking-tight">
              {heading}
            </h2>
            <p className="text-gray-500 text-sm md:text-[15px] font-sans max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 w-full pb-4 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col w-full"
                style={isMobile ? {} : { y: cardYs[index] }}
              >
                <div className="w-full h-full min-h-[100px] md:min-h-[120px] lg:min-h-[150px] flex flex-col justify-start bg-[#E9ECF1] rounded-[12px] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                  <span className="block text-[#C29B40] text-4xl lg:text-[48px] font-light leading-none mb-3">
                    {step.num}
                  </span>
                  <h3 className="font-serif text-lg lg:text-[27px] text-[#1A1A1A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs lg:text-[15px] text-gray-500 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Excellence;
