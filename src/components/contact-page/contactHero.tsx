export default function ContactHero() {
  return (
 
 
 <div className="bg-white font-sans">
      {/* 1. Hero Section */}
      <section className="relative h-[80vh] flex items-end pb-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover brightness-[0.85]"
            alt="Luxury Villa Hero"
          />
        </div>
        <div className="relative z-10 px-4 sm:px-10 md:px-16 lg:px-[50px] w-full">
          <h1 className="!text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] mb-5 max-w-4xl animate-fadeIn">
            Put Our Market <br />Expertise to Work for You
          </h1>
          <p className="!text-white text-sm sm:text-base md:text-lg max-w-2xl mb-6 font-light leading-relaxed">
            Connect with our award-winning agents to receive a personalized market
            analysis and a custom strategy for your goals.          </p>
          
         
        </div>
      </section>
      </div>
      )};