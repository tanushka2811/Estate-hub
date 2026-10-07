import { useState } from "react";
import { useParams } from "react-router-dom";
import { caseStudyData } from "../data/caseStudyData";
import Vision from "../components/caseStudy-page/vision";
import RelatedProjects from "../components/caseStudy-page/relatedProjecta";

export default function CaseStudySub() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { id } = useParams();
  const study = caseStudyData.find((s) => s.id === Number(id));
  const [activeTab, setActiveTab] = useState("Challenges");

  if (!study) {
    return (
      <div className="text-center py-20 text-[#1E3557] text-lg">
        Case Study not found.
      </div>
    );
  }

  return (
    <section className="bg-[#F9FAFB]">
      {/* Hero */}
      <div className="relative w-full h-[70vh] md:h-[80vh]">
        <img
          src={study.hero.image}
          alt={study.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-16">
          <h1 className="text-white text-3xl md:text-5xl font-serif font-semibold max-w-3xl mb-4 leading-tight">
            {study.hero.heading}
          </h1>
          <p className="text-white text-sm md:text-base max-w-xl">
            {study.hero.subheading}
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-[#F2F4F6] w-full py-10 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/images/about-house.jpg"
              alt="About Project"
              className="
          rounded-xl object-cover 
          w-full max-w-[500px] lg:max-w-none
          h-auto 
          sm:h-[300px] md:h-[400px] lg:h-[480px]
        "
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1E3557] mb-4">
              About
            </h2>
            <p className="text-[#4A5568] text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
              Invest in Future‑Ready Real Estate Opportunities That Combine Prime
              Locations, Secure Investments, and Predictable Long‑Term Returns.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {study.about.stats.map((stat, i) => (
                <div
                  key={i}
                  className="
        bg-[#F9FAFB] rounded-lg border border-gray-200 
        p-4 sm:p-5 lg:p-6 
        text-center flex flex-col justify-center items-center 
        w-full h-full
      "
                >
                  <h3 className="text-[#E3B873] text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-[#4A5568] text-xs sm:text-sm leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>


            <p className="text-[#4A5568] text-xs sm:text-sm md:text-base leading-relaxed">
              Discover strategically located, high‑growth real estate projects
              designed to deliver long‑term value, secure returns, and consistent
              appreciation. Built with transparency, backed by data, and tailored for
              modern investors.
            </p>
          </div>
        </div>
      </div>


      {/* Project Overview */}
      <div className="bg-[#F2F4F6] w-full pb-7 px-4 sm:px-6 md:px-12 text-center">
        <div className="max-w-7xl mx-auto py-5 border-t border-gray-200/50">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1E3557] mb-6">
            Project Overview
          </h2>
          <p className="text-[#4A5568] leading-relaxed max-w-4xl mx-auto text-sm md:text-base">
            {study.overview}
          </p>
        </div>
      </div>

      {/* Key Challenges Section */}
      <div className="bg-white w-full py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Heading + Tabs Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 mt-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1E3557] mb-0">
              Key Challenges
            </h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["Challenges", "Solution", "Result"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border text-xs sm:text-sm font-medium transition-all ${
                    activeTab === tab
                      ? "bg-[#1E3557] text-white border-[#1E3557]"
                      : "bg-white text-[#1E3557] border-gray-300 hover:bg-[#E3B873] hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                src={study.challenges.image}
                alt="challenge"
                className="rounded-xl object-cover w-full h-[250px] sm:h-[300px] md:h-[400px]"
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center">
              <div className="space-y-4">
                {activeTab === "Challenges" && (
                  <>
                    <p className="text-[#4A5568] leading-relaxed mb-4 text-base md:text-lg">
                      {study.challenges.tabs.Challenges.description}
                    </p>
                    <ul className="list-disc pl-6 text-[#4A5568] space-y-2">
                      {study.challenges.tabs.Challenges.points.map((point, i) => (
                        <li key={i} className="text-sm md:text-base">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {activeTab === "Solution" && (
                  <>
                    <p className="text-[#4A5568] leading-relaxed mb-4 text-base md:text-lg">
                      {study.challenges.tabs.Solution.description}
                    </p>
                    <ul className="list-disc pl-6 text-[#4A5568] space-y-2">
                      {study.challenges.tabs.Solution.points?.map((point, i) => (
                        <li key={i} className="text-sm md:text-base">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {activeTab === "Result" && (
                  <>
                    <p className="text-[#4A5568] leading-relaxed mb-4 text-base md:text-lg">
                      {study.challenges.tabs.Result.description}
                    </p>
                    <ul className="list-disc pl-6 text-[#4A5568] space-y-2">
                      {study.challenges.tabs.Result.points?.map((point, i) => (
                        <li key={i} className="text-sm md:text-base">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Gallery */}
      <div className="bg-white w-full py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1E3557] mb-4">
            {study.gallery.title}
          </h2>
          <p className="text-[#4A5568] mb-8">{study.gallery.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* First column */}
            <div className="flex flex-col gap-6">
              <img
                src={study.gallery.images[0]}
                alt="Gallery 1"
                className="rounded-xl shadow-md object-cover w-full h-[260px] md:h-[280px]"
              />
              <img
                src={study.gallery.images[1]}
                alt="Gallery 2"
                className="rounded-xl shadow-md object-cover w-full h-[260px] md:h-[280px]"
              />

              {/* Expanded content for Column 1 */}
              {isExpanded && (
                <div className="flex flex-col gap-6 transition-all duration-500 ease-in-out">
                  <img
                    src={study.gallery.images[5] || study.gallery.images[0]}
                    alt="Gallery 6"
                    className="rounded-xl shadow-md object-cover w-full h-[260px] md:h-[280px]"
                  />
                </div>
              )}
            </div>

            {/* Second column */}
            <div className="flex flex-col gap-6">
              <img
                src={study.gallery.images[2]}
                alt="Gallery 3"
                className="rounded-xl shadow-md object-cover w-full h-[260px] md:h-[280px]"
              />
              <img
                src={study.gallery.images[3]}
                alt="Gallery 4"
                className="rounded-xl shadow-md object-cover w-full h-[260px] md:h-[280px]"
              />

              {/* Expanded content for Column 2 */}
              {isExpanded && (
                <div className="flex flex-col gap-6 transition-all duration-500 ease-in-out">
                  <img
                    src={study.gallery.images[6] || study.gallery.images[1]}
                    alt="Gallery 7"
                    className="rounded-xl shadow-md object-cover w-full h-[260px] md:h-[280px]"
                  />
                </div>
              )}
            </div>

            {/* Third column */}
            <div className="relative flex flex-col gap-6 sm:col-span-2 lg:col-span-1">
              <img
                src={study.gallery.images[4]}
                alt="Gallery 5"
                className={`rounded-xl shadow-md object-cover w-full transition-all duration-300 ease-in-out ${
                  isExpanded ? "h-[260px] sm:h-[280px] lg:h-[280px]" : "h-[260px] sm:h-[560px] lg:h-[584px]"
                }`}
              />

              {/* Expanded content for Column 3 */}
              {isExpanded && (
                <div className="flex flex-col gap-6 transition-all duration-500 ease-in-out">
                  <img
                    src={study.gallery.images[7] || study.gallery.images[4]}
                    alt="Gallery 8"
                    className="rounded-xl shadow-md object-cover w-full h-[260px] sm:h-[280px] lg:h-[280px]"
                  />
                </div>
              )}

              {/* Floating Button overlayed inside the grid boundary at the bottom right */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="absolute bottom-6 right-6 bg-[#1E3557] text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-[#002349] transition active:scale-95 z-10 shadow-lg"
              >
                {isExpanded ? "See less" : "See all"}
              </button>
            </div>

          </div>
        </div>
      </div>
      <Vision />
      <RelatedProjects />
    </section>
  );
}
