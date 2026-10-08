import { useState, useEffect, useRef } from 'react';

const testimonialsData = [
  { id: 1, name: "Vikram Mehta", text: "Estate-Hubs made my dream of owning a smart home a reality. The entire process from booking to handover was transparent and stress free.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop" },
  { id: 2, name: "Ananya Sharma", text: "As an investor, I look for reliability and high ROI. Estate-Hubs exceeded my expectations in both. Their projects are built to international standards.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop" },
  { id: 3, name: "Rahul Khanna", text: "Finding the right office space was a challenge until I met the team at Estate-hub. They understood our corporate requirements perfectly.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop" },
  { id: 4, name: "Priya Iyer", text: "Our luxury villa is more than just a home; it's a sanctuary. The architectural brilliance and the integration of green spaces are exceptional.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop" },
  { id: 5, name: "Sanjay Gupta", text: "I have worked with many developers, but the professionalism and ethics at Estate-hub are unmatched. They build trust and long-term relationships.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop" },
  { id: 6, name: "Meera Reddy", text: "Our farmhouse project was handled with such care. From soil testing to the final landscaping, the team was involved in every step.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop" },
  { id: 7, name: "Arjun Singh", text: "The smart automation in Estate-hub's residential units is top-notch. It's rare to find a developer who truly understands modern technology.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop" }
];

// Minimal clones for seamless 7-item loop
const extendedData = [
  ...testimonialsData.slice(-3),
  ...testimonialsData,
  ...testimonialsData.slice(0, 3)
];

const Testimonials = () => {
  const [index, setIndex] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    const startAutoPlay = () => {
      timeoutRef.current = setInterval(() => {
        setIsTransitioning(true);
        setIndex((prev) => prev + 1);
      }, 5000);
    };

    startAutoPlay();
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, []);

  const handleTransitionEnd = () => {
    if (index >= testimonialsData.length + 3) {
      setIsTransitioning(false);
      setIndex(3);
    } else if (index <= 2) {
      setIsTransitioning(false);
      setIndex(testimonialsData.length + 2);
    }
  };

  const activeTestimonial = testimonialsData[(index - 3 + testimonialsData.length) % testimonialsData.length];

  return (
    <section className="py-12 bg-white overflow-hidden px-4 md:px-[50px] w-full font-sans">
      <style dangerouslySetInnerHTML={{ __html: `
        .avatar-container {
          --avatar-width: 70px;
        }
        @media (min-width: 768px) {
          .avatar-container {
            --avatar-width: 100px;
          }
        }
      `}} />
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-5xl font-serif text-[#001529] mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-sm md:text-lg font-light">
            Real stories from real homeowners, investors & businesses.
          </p>
        </div>

        {/* Sliding Testimonial Text Content */}
        <div className="relative w-full max-w-4xl mx-auto mb-0 overflow-hidden">
          <div 
            className={`flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1) ${isTransitioning ? '' : 'transition-none'}`}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {extendedData.map((item, idx) => (
              <div key={idx} className="w-full flex-shrink-0 flex flex-col items-center px-4 md:px-8 text-center">
                <div className="mb-4 opacity-10">
                  <svg width="60" height="40" viewBox="0 0 75 56" fill="none">
                    <path d="M18.75 56C13.5 56 8.875 54 4.875 50C0.875 46 0 40.875 0 34.625C0 26.375 2.5 18.25 7.5 10.25C12.5 2.25 18.75 0 26.25 0V11.25C22.5 11.25 19.375 12.75 16.875 15.75C14.375 18.75 13.125 22.375 13.125 26.625H26.25V56H18.75ZM67.5 56C62.25 56 57.625 54 53.625 50C49.625 46 48.75 40.875 48.75 34.625C48.75 26.375 51.25 18.25 56.25 10.25C61.25 2.25 67.5 0 75 0V11.25C71.25 11.25 68.125 12.75 65.625 15.75C63.125 18.75 61.875 22.375 61.875 26.625H75V56H67.5Z" fill="#0d0d0e" />
                  </svg>
                </div>
                <p className="text-gray-600 text-lg md:text-xl italic font-light max-w-2xl">
                  "{item.text}"
                </p>
                <p className="mt-2 font-serif text-[#001529] font-medium tracking-wide">
                  — {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fixed Window for Avatars */}
        <div className="relative w-full max-w-[750px] mx-auto overflow-hidden pt-6 pb-10">
          <div
            onTransitionEnd={handleTransitionEnd}
            className={`flex items-center translate-y-10 avatar-container ${isTransitioning ? 'transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1)' : 'transition-none'}`}
            style={{ transform: `translateX(calc(-${index} * var(--avatar-width) + 50% - (var(--avatar-width) / 2)))` }}
          >
            {extendedData.map((item, idx) => {
              const isActive = idx === index;
              return (
                <div key={idx} className={`w-[var(--avatar-width)] flex-shrink-0 flex justify-center items-center transition-all duration-1000 ${isActive ? 'px-4 md:px-6' : 'px-0'}`}>
                  <div className={`relative transition-all duration-1000 transform ${isActive ? 'scale-125 -translate-y-8 opacity-100' : 'scale-90 translate-y-0 opacity-30 grayscale'}`}>
                    <div className="rounded-[10px] overflow-hidden shadow-2xl w-14 h-14 md:w-20 md:h-20 bg-white">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 translate-y-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className={`h-2 rounded-full transition-all duration-300 ${activeTestimonial.id === item.id ? 'w-8 bg-[#001529]' : 'w-2 bg-gray-300'}`}
            />
          ))}
        </div>
    </section>
  );
};

export default Testimonials;
