import React from 'react';

const Counter: React.FC<{ end: number; suffix?: string }> = ({ end, suffix = "" }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <span className="font-sans font-medium">{count.toLocaleString()}{suffix}</span>;
};

const StatsSection: React.FC = () => {
  const statsData = [
    { label: 'Years of Experience', end: 15 },
    { label: 'Projects Completed', end: 150 },
    { label: 'Happy Clients', end: 22000 },
    { label: 'Cities Present', end: 15 },
  ];

  return (
    <section className="pb-4 px-4 md:px-[50px] bg-white w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full -mt-1">
        {statsData.map((stat, index) => (
          <div key={index} className="bg-[#F4F7FA] border border-[#CCD3DB] p-5 rounded-[14px] text-center flex flex-col items-center justify-center min-h-[90px]">
            <h3 className="!text-[#C29B40] text-3xl md:text-[36px] font-medium leading-tight font-sans">
              <Counter end={stat.end} suffix="+" />
            </h3>
            <p className="text-[#002349] font-normal text-base md:text-[18px] font-sans mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
