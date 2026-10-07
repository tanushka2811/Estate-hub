export default function Eligible() {
  return (
    <div className="bg-white font-sans">
      <section className="bg-white py-9 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-serif text-[#1E3557] mb-10">
            Is Your Land Eligible for Collaboration?
          </h2>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left Box */}
            <div className="bg-[#F9FAFB] rounded-xl border border-gray-200 p-6 flex flex-col">
              <h3 className="text-[#1E3557] font-serif font-medium text-lg mb-4">
                Eligible Land Categories:
              </h3>
              <ul className="space-y-3 text-[#4A5568] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#E3B873] text-lg">✔</span>
                  Residential plots any size from 100 sq yards onwards.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E3B873] text-lg">✔</span>
                  Agricultural land — conversion possible
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E3B873] text-lg">✔</span>
                  Commercial plots
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E3B873] text-lg">✔</span>
                  Inherited or jointly owned land
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E3B873] text-lg">✔</span>
                  Land with disputes
                </li>
              </ul>
            </div>

            {/* Middle Box */}
            <div className="bg-[#0A2342] rounded-xl p-6 text-white flex flex-col ">
              <h3 className="font-serif font-medium text-lg text-[#E3B873] mb-4">
                Our Evaluation Criteria:
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#E3B873] text-lg">✔</span>
                  Location & connectivity
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E3B873] text-lg">✔</span>
                  Market demand
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E3B873] text-lg">✔</span>
                  Development potential
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E3B873] text-lg">✔</span>
                  Comparable sales
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E3B873] text-lg">✔</span>
                  Infrastructure
                </li>
              </ul>
            </div>

            {/* Right Image - slightly higher */}
            <div className="rounded-xl overflow-hidden relative mt-0 lg:-mt-18">
              <img
                src="/images/office-hero.png"
                alt="Team collaboration"
                className="w-full h-[300px] md:h-[320px] lg:h-[360px] object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
