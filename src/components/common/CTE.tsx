import { Link } from 'react-router-dom';

const CTE = () => {
  return (
    <section className="px-4 sm:px-8 md:px-[50px] py-8 sm:py-10 bg-white">
      <div className="bg-[#A2ADC9] rounded-2xl sm:rounded-[22px] lg:rounded-[26px] overflow-hidden relative grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[auto] md:min-h-[330px]">

        {/* Left Side: Building Image */}
        <div className="relative min-h-[220px] sm:min-h-[300px] md:min-h-0 order-2 md:order-1 w-full overflow-hidden">
          <img
            src="/images/office-hero.png"
            alt="Modern Building"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        {/* Right Side: Content */}
        <div className="px-5 py-8 sm:p-10 md:p-10 lg:p-16 xl:p-20 flex flex-col justify-center items-start z-10 order-1 md:order-2">
          <h2 className="text-[30px] sm:text-4xl md:text-[36px] lg:text-[40px] font-serif text-white mb-4 sm:mb-5 md:mb-6 leading-[1.12] tracking-normal">
            Ready to Invest?<br />
            Let's Talk.
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-[450px] font-light leading-relaxed">
            Book a free consultation with our experts today no obligations, just clarity.
          </p>
          <Link to="/contact">
            <button className="bg-[#001529] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-[#002244] transition-all shadow-lg active:scale-95 text-sm sm:text-base">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Optional decorative elements to match the "design feel" */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </div>
    </section>
  );
};

export default CTE;
