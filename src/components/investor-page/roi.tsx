import React from 'react';

// Define the interface for our card data
interface AssetCardProps {
  title: string;
  subtitle: string;
  tag: string;
  tagStyle?: 'dark' | 'light';
  finalValue: string;
  totalGain: string;
  percentageGain: string;
  duration: string;
  variant: 'blue' | 'white';
  progressPercentage?: number; // Visual progress bar for comparing values
}

const AssetCard: React.FC<AssetCardProps> = ({
  title,
  subtitle,
  tag,
  tagStyle = 'light',
  finalValue,
  totalGain,
  percentageGain,
  duration,
  variant,
  progressPercentage,
}) => {
  const isBlue = variant === 'blue';

  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-300 w-full min-h-[320px] text-left items-stretch ${
        isBlue 
          ? 'bg-[#002244] text-white' 
          : 'bg-white text-slate-800 border border-slate-100/80'
      }`}
    >
      {/* Top Header Section */}
      <div className="flex justify-between items-start w-full mb-2 text-left">
        <div className="text-left">
          <h3 className={`text-xl font-serif tracking-widest font-semibold uppercase text-left ${isBlue ? 'text-white' : 'text-[#002244]'}`}>
            {title}
          </h3>
          <p className={`text-[10px] tracking-wider mt-1 uppercase font-semibold text-left ${isBlue ? 'text-slate-300' : 'text-slate-500'}`}>
            {subtitle}
          </p>
        </div>
        <span
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide shrink-0 ${
            tagStyle === 'dark'
              ? 'bg-[#0b2f56] text-white border border-[#1b3f66]'
              : 'bg-[#f4ebe1]/70 text-slate-800'
          }`}
        >
          {tag}
        </span>
      </div>

      {/* Middle Final Value Section */}
      <div className="text-left w-full ">
        <p className={`text-[10px] tracking-widest uppercase font-bold mb-1 text-left ${isBlue ? 'text-slate-400' : 'text-slate-400'}`}>
          Final Value
        </p>
        <p className={`text-4xl font-serif font-bold text-left ${isBlue ? 'text-white' : 'text-[#002244]'}`}>
          ₹{finalValue}
        </p>
      </div>

      {/* Divider line */}
      <hr className={`w-full my-3 ${isBlue ? 'border-gray-100' : 'border-[#F3F1EC'}`} />

      {/* Bottom Gain & Progress Section */}
      <div className="text-left w-full space-y-4">
        <div className="text-left">
          <p className={`text-[10px] tracking-widest uppercase font-bold mb-1 text-left ${isBlue ? 'text-slate-400' : 'text-slate-400'}`}>
            Total Gain
          </p>
          <p className={`text-2xl font-serif font-bold text-left ${isBlue ? 'text-white' : 'text-[#002244]'}`}>
            +{totalGain}
          </p>
          <p className={`text-[11px] font-normal mt-1 text-left ${isBlue ? 'text-slate-400' : 'text-slate-400'}`}>
            +{percentageGain}% over {duration}
          </p>
        </div>

        {/* Custom thin Progress Bar */}
        {progressPercentage !== undefined && (
          <div className="w-full bg-[#002349] rounded-full h-[3px] mt-4 overflow-hidden">
            <div 
              className="bg-[#002244] h-full rounded-full transition-all duration-500" 
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default function ROI() {
  return (
    <div className="bg-[#F2F4F6] font-sans min-h-screen py-12">
      <section className="pb-3 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1E3557] mb-2">
            Investment ROI Calculator
          </h2>
          <p className="text-[#4A5568] text-sm sm:text-base mb-8">
            Visualize your wealth growth potential through high-performance real estate <br />
            assets.
          </p>

          {/* Input Section */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 text-left mb-8">
            <h3 className="text-[#1E3557] text-sm font-serif font-semibold mb-6">
              YOUR INVESTMENT DETAILS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Investment Amount */}
              <div>
                <label className="block text-[#4A5568] text-sm mb-2 font-medium">
                  INVESTMENT AMOUNT
                </label>
                <input
                  type="text"
                  placeholder="₹1000000"
                  className="w-full border border-[#CBD5E0] rounded-lg px-4 py-2 text-[#1E3557] focus:outline-none focus:border-[#1E3557] text-sm sm:text-base placeholder-[#A0AEC0]"
                />
                <p className="text-xs text-[#4A5568] mt-1">₹10 Lakhs</p>
              </div>

              {/* Time Period */}
              <div>
                <label className="block text-[#4A5568] text-sm mb-2 font-medium">
                  TIME PERIOD
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="5"
                    className="w-full border border-[#CBD5E0] rounded-lg px-4 py-2 text-[#1E3557] focus:outline-none focus:border-[#1E3557] text-sm sm:text-base placeholder-[#A0AEC0]"
                  />
                  <span className="text-[#A0AEC0] text-sm sm:text-base">years</span>
                </div>
                <p className="text-xs text-[#4A5568] mt-1">Between 1 – 30 years</p>
              </div>
            </div>

            {/* ROI Options + Button Row */}
            <div className="flex flex-wrap justify-between items-center mt-6">
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-100 text-black text-xs sm:text-sm px-3 py-2 rounded-md flex items-center gap-1">
                  Real Estate — 12% p.a.
                  <span className="bg-[#D1D5DB] text-black px-2 py-[2px] rounded-md text-xs">
                    Fixed
                  </span>
                </span>
                <span className="bg-gray-100 text-black text-xs sm:text-sm px-3 py-1 rounded-md flex items-center gap-1">
                  Gold — 8% p.a.
                  <span className="bg-[#D1D5DB] text-[#1E3557] px-2 py-[2px] rounded-md text-xs">
                    Fixed
                  </span>
                </span>
              </div>

              <button className="bg-[#1E3557] text-white rounded-md px-6 py-2 text-sm sm:text-base font-medium mt-4">
                Calculate
              </button>
            </div>
          </div>

          {/* Cards Display Section */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Real Estate Card */}
            <AssetCard
              title="Real Estate"
              subtitle="Estate-Hubs • 12% P.A."
              tag="Best Returns"
              tagStyle="dark"
              finalValue="17.6L"
              totalGain="7.6L"
              percentageGain="76.2"
              duration="5 yrs"
              variant="blue"
            />

            {/* Gold Card */}
            <AssetCard
              title="Gold"
              subtitle="Market Rate • 8% P.A."
              tag="Comparison"
              tagStyle="light"
              finalValue="14.7L"
              totalGain="4.7L"
              percentageGain="46.9"
              duration="5 yrs"
              variant="white"
              progressPercentage={90}
            />
          </div>
          
        </div>
      </section>
    </div>
  );
}