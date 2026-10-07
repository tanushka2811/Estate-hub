import React from 'react';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1491333078588-55b6733c7de6?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=600',
  ];

  // Double the images for a seamless loop
  const marqueeImages = [...images, ...images];

  return (
    <section className="bg-[#001C3A] pt-10 pb-10 relative min-h-[400px] md:min-h-[536px] overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[50px]">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-[48px] font-medium mb-4 font-serif !text-white leading-tight">Certifications & Awards</h2>
          <p className="!text-white/80 max-w-3xl mx-auto text-sm md:text-[17px] font-sans leading-[1.6]">
            Every competitor builds. We build, manage, advise, and deliver returns backed by AI <br className="hidden md:block" /> and enforced by contract.
          </p>
        </div>
      </div>

      {/* Gradient Line above the marquee */}
      <div className="relative w-full h-[2px] bg-gradient-to-r from-transparent via-[#C29B40] to-transparent z-10 mb-8 md:mb-10" />

      {/* Truly Full Width Marquee */}
      <div className="relative overflow-hidden w-full h-[170px] md:h-[260px] mt-2">
        <motion.div
          className="flex gap-[15px] md:gap-[25px]"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ width: "max-content" }}
        >
          {marqueeImages.map((img, i) => (
            <div key={i} className="w-[280px] h-[170px] md:w-[440px] md:h-[260px] rounded-[12px] overflow-hidden flex-shrink-0">
              <img
                src={img}
                alt="Award"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
