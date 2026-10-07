import React from "react";

const Timeline: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "You reach out to us with your land details location, size, ownership documents. Our team contacts you within 24 hours.",
    },
    {
      number: "02",
      title: "Agreement Signing",
      description:
        "Once both parties agree, a legally binding Joint Development Agreement (JDA) is signed fully transparent, RERA compliant & secure.",
    },
    {
      number: "03",
      title: "Collaboration Proposal",
      description:
        "Based on our evaluation, we present a collaboration proposal including plan, investment, timeline, and profit share.",
    },
    {
      number: "04",
      title: "Profit Distribution",
      description:
        "Once the project is sold, your agreed profit share is transferred directly to your account fully documented & legally compliant.",
    },
  ];

  return (
    <section className="bg-[#F6F7F9] py-12 sm:py-16 md:py-10 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto ">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-serif text-[#1E3557] mb-4">
          Simple. Transparent. Here's How It Works
        </h2>
        <p className="text-[#4A5568] text-sm sm:text-base max-w-5xl mb-2 leading-relaxed">
          Simple and transparent, our process is clear, straightforward, and easy to follow,
          giving you complete confidence and control from start to finish — no guesswork, just results.
        </p>

        {/* Timeline */}
        <div className="relative pt-2">
          {/* Horizontal line behind circles */}
          <div className="hidden lg:block absolute top-[15%] right-0 w-full border-t border-gray-600 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-start">
                <div className="bg-white text-[#E3B873] font-semibold rounded-full w-14 h-14 flex items-center justify-center text-lg shadow-sm mb-4 z-10">
                  {step.number}
                </div>
                <div className="text-left">
                <h3 className="text-[#1E3557] font-serif font-bold text-lg sm:text-xl mb-2">
                  {step.title}
                </h3>
               
                <p className="text-[#4A5568] text-sm sm:text-sm leading-relaxed max-w-[260px]">
                  {step.description}
                </p>
            </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
