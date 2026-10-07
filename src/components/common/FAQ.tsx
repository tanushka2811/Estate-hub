import { useState, useEffect } from 'react';
import { faqCategories, faqData } from '../../data/faqData';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('Residential');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Reset accordion when switching tabs
  useEffect(() => {
    setOpenIndex(null);
  }, [activeTab]);

  const currentFaqs = faqData[activeTab] || [];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-6 px-4 md:px-[50px] bg-white w-full">
      <div className="bg-[#FAFAFA] rounded-[20px] p-4 md:p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-serif text-[#001529] mb-2 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 text-sm md:text-lg font-light">
          Everything you need to know before making your real estate decision.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
        {faqCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded-full text-[15px] font-medium transition-all border ${activeTab === category
              ? 'bg-[#001529] text-white border-[#001529] shadow-md'
              : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQ Grid with Two Independent Columns */}
      <div
        key={activeTab}
        className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 items-start animate-fadeIn"
      >
        {/* Left Column */}
        <div className="space-y-4">
          {currentFaqs.filter((_, i) => i % 2 === 0).map((item, index) => (
            <div
              key={index}
              className="bg-[#F8F9FA] rounded-[10px] overflow-hidden transition-all bg-gray-100 duration-300"
            >
              <button
                onClick={() => toggleAccordion(index * 2)}
                className="w-full p-4 flex justify-between items-center text-left hover:bg-gray-100 transition-colors"
              >
                <span className="text-[#001529] text-[14px] leading-tight">
                  {item.question}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-300 ${openIndex === index * 2 ? 'rotate-180' : ''
                    }`}
                >
                  <polyline points="4 9 12 17 20 9" />
                </svg>
              </button>
              <div
                className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index * 2 ? 'max-h-40 pb-6' : 'max-h-0'
                  }`}
              >
                <p className="text-gray-600  leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {currentFaqs.filter((_, i) => i % 2 !== 0).map((item, index) => (
            <div
              key={index}
              className="bg-[#F8F9FA] rounded-[10px] bg-gray-100 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index * 2 + 1)}
                className="w-full p-4 flex justify-between items-center text-left  transition-colors"
              >
                <span className="text-[#001529] text-[15px] leading-tight">
                  {item.question}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-300 ${openIndex === index * 2 + 1 ? 'rotate-180' : ''
                    }`}
                >
                  <polyline points="4 9 12 17 20 9" />
                </svg>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index * 2 + 1 ? 'max-h-40 pb-6' : 'max-h-0'
                  }`}
              >
                <p className="text-gray-600 text-sm text-base leading-relaxed">
                  {item.answer}
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

export default FAQ;
