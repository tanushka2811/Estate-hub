import { ArrowLeft, Share2 } from "lucide-react";

type Job = {
  id: number;
  title: string;
  location: string;
  experience: string;
  description: string;
  salary: string;
  jobType: string;
  posted: string;
  jobDescription: string[];
  goodToHave: string[];
  mustHaveSkills: string[];
};

type JobDetailsProps = {
  job: Job;
  onClose: () => void;
};

export default function JobDetails({
  job,
  onClose,
}: JobDetailsProps) {
  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-5 md:p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#F8F7F9] w-full max-w-[1180px] max-h-[80vh] overflow-y-auto rounded-3xl shadow-2xl p-6 md:p-8"
      >
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={onClose}
            className="flex items-center gap-1 text-xs md:text-sm font-medium text-[#1E3557]"
          >
            <ArrowLeft size={18} />
            Back to Career
          </button>

          <Share2
            size={18}
            className="text-[#1E3557] cursor-pointer"
          />
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-4 lg:gap-6">

          {/* Left Side */}
          <div className="space-y-2">

            {/* Job Header */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6">
              <p className="text-xs md:text-sm text-gray-500 mb-2 leading-5">
                {job.posted}
              </p>

              <h1 className="text-xl sm:text-2xl font-serif text-[#1E3557] mb-3 leading-tight">
                {job.title}
              </h1>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 rounded-md px-3 py-1 text-xs md:text-sm leading-5">
                  {job.location}
                </span>

                <span className="bg-gray-100 rounded-md px-3 py-1 text-xs md:text-sm leading-5">
                  {job.experience}
                </span>

                <span className="bg-gray-100 rounded-md px-3 py-1 text-xs md:text-sm leading-5">
                  {job.jobType}
                </span>
              </div>

              <h2 className="text-base sm:text-lg md:text-xl font-serif text-[#1E3557] leading-tight mt-2">
                {job.salary}
              </h2>
            </div>

            {/* Job Description */}
            <div className="bg-white rounded-2xl border border-gray-200 p-2 md:p-4 leading-5">
              <h2 className="text-xl font-DM Sans text-[#1E3557] mb-5">
                Job Description
              </h2>

              <ul className="space-y-3 text-xs md:text-sm text-gray-600 list-disc pl-5 leading-5">
                {job.jobDescription.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Good To Have */}
            <div className="bg-white rounded-2xl border border-gray-200 p-3 md:p-3">
              <h2 className="text-xl font-DM Sans text-[#1E3557] mb-3">
                Good To Have
              </h2>

              <ul className="space-y-2 text-xs md:text-sm text-gray-600 list-disc pl-5 leading-5">
                {job.goodToHave.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Side */}
          <div className="space-y-2">

            <div className="bg-[#10274F] rounded-2xl p-5 md:p-6">
              <p className="uppercase tracking-[3px] text-[8px] !text-white">
                Start Your Journey
              </p>

              <h2 className="!text-white text-xl leading-tight font-Libre Baskerville mt-3">
                Ready to join
                <br />
                Estate-hubDevelopers?
              </h2>

              <button className="mt-5 w-full bg-white rounded-lg py-3 text-[#10274F] font-semibold leading-5">
                Apply Now
              </button>
            </div>

            {/* Must Have Skills */}
            <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-3">
              <h2 className="text-xl font-DM Sans text-[#1E3557] mb-2">
                Must Have Skills
              </h2>

              <ul className="space-y-2 text-xs md:text-sm text-gray-600 list-disc pl-5 leading-5">
                {job.mustHaveSkills.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}