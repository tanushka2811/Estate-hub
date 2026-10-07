import { RotateCcw, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import JobDetails from "./jobDetails";

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

export default function CareerOpportunity() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  const filters = {
    Location: [
      "Sector 23-B, Dwarka, New Delhi",
      "Remote",
      "Hybrid",
    ],

    "Area of Interest": [
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
      "UI/UX Design",
      "Graphic Designing",
      "Digital Marketing",
    ],

    Experience: [
      "Fresher (0–1 Year)",
      "1–3 Years",
      "2–4 Years",
      "4+ Years",
    ],

    "Job Type": [
      "Full Time",
      "Part Time",
      "Internship",
      "Remote",
      "Hybrid",
    ],
  }; 

  const jobs: Job[] = [
    {
      id: 1,
      title: "UX/UI Designer",
      location: "Remote / Delhi",
      experience: "1–3 Years",
      salary: "₹15,000 - ₹25,000 / Month",
      description:
        "Be part of a design-driven team building seamless, scalable, and user-loved digital experiences.",
      jobType: "Full Time",
      posted: "Posted 3 hrs ago",

      jobDescription: [
        "Design intuitive and visually appealing user interfaces.",
        "Create wireframes, prototypes and user flows using Figma.",
        "Work closely with developers to implement pixel-perfect designs.",
        "Conduct user research and improve user experience.",
        "Maintain consistency across design systems."
      ],

      goodToHave: [
        "Adobe XD",
        "Photoshop",
        "Illustrator",
        "Basic HTML/CSS"
      ],

      mustHaveSkills: [
       "Figma",
       "UI Design",
       "UX Research",
       "Wireframing",
       "Prototyping",
       "Communication"
      ]
    },
    {
      id: 2,
      title: "Frontend Developer",
      location: "Remote / Delhi",
      experience: "1–3 Years",
      salary: "₹20,000 - ₹35,000 / Month",
      description:
        "Build fast, scalable and responsive web applications using React and modern frontend technologies.",
      jobType: "Full Time",
      posted: "Posted 1 day ago",

      jobDescription: [
        "Develop responsive web applications using React.js.",
        "Convert UI designs into reusable components.",
        "Integrate REST APIs.",
        "Optimize application performance.",
        "Collaborate with backend developers."
      ],

      goodToHave: [
       "Next.js",
       "TypeScript",
       "Redux Toolkit",
       "Tailwind CSS"
      ],

      mustHaveSkills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Git",
        "Responsive Design"
      ]
    },
    {
      id: 3,
      title: "Backend Developer",
      location: "Remote / Delhi",
      experience: "2–4 Years",
      salary: "₹25,000 - ₹40,000 / Month",
      description:
        "Develop secure APIs, optimize databases and build scalable backend systems.",
      jobType: "Full Time",
      posted: "Posted 2 days ago",

      jobDescription: [
        "Develop scalable backend APIs.",
        "Design and optimize databases.",
        "Implement authentication and authorization.",
        "Maintain server-side applications.",
        "Write clean and secure code."
      ],

      goodToHave: [
        "Docker",
        "AWS",
        "Redis",
        "CI/CD"
      ],

      mustHaveSkills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "JWT",
        "Git"
      ]
    },
    {
      id: 4,
      title: "Full Stack Developer",
      location: "Remote / Delhi",
      experience: "2–4 Years",
      salary: "₹30,000 - ₹45,000 / Month",
      description:
        "Work across frontend and backend while building production-ready web applications.",
      jobType: "Full Time",
      posted: "Posted 3 days ago",

      jobDescription: [
        "Develop complete web applications.",
        "Build frontend using React.",
        "Develop backend services using Node.js.",
        "Connect frontend with backend APIs.",
        "Deploy and maintain applications."
      ],

      goodToHave: [
        "Next.js",
        "Docker",
        "AWS",
        "TypeScript"
      ],

      mustHaveSkills: [
       "React",
       "Node.js",
       "Express",
       "MongoDB",
       "JavaScript",
       "Git"
      ]
    },
    {
      id: 5,
      title: "Graphic Designer",
      location: "Remote / Delhi",
      experience: "1–2 Years",
      salary: "₹15,000 - ₹25,000 / Month",
      description:
        "Design engaging visuals, branding assets and marketing creatives for digital platforms.",
      jobType: "Full Time",
      posted: "Posted 4 days ago",

      jobDescription: [
       "Design marketing creatives and social media posts.",
       "Create branding assets.",
       "Design brochures, banners and presentations.",
       "Collaborate with marketing team.",
       "Maintain brand consistency."
      ],

      goodToHave: [
       "Motion Graphics",
       "Canva",
       "Basic Video Editing",
       "Figma"
      ],

      mustHaveSkills: [
       "Photoshop",
       "Illustrator",
       "CorelDRAW",
       "Typography",
       "Branding",
       "Creativity"
      ]
    },
    {
      id: 6,
      title: "Digital Marketing Executive",
      location: "Remote / Delhi",
      experience: "1–3 Years",
      salary: "₹18,000 - ₹30,000 / Month",
      description:
        "Plan and execute SEO, social media and paid marketing campaigns.",
      jobType: "Full Time",
      posted: "Posted 5 days ago",

      jobDescription: [
       "Plan and execute SEO strategies.",
       "Manage Google Ads and Meta Ads.",
       "Handle social media campaigns.",
       "Track campaign performance.",
       "Generate leads through digital channels."
      ],

      goodToHave: [
       "Google Analytics",
       "Email Marketing",
       "Canva",
       "WordPress"
      ],

      mustHaveSkills: [
       "SEO",
       "Google Ads",
       "Meta Ads",
       "Content Marketing",
       "Social Media",
       "Analytics"
      ]
    },
  ];

  useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedJob]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [jobs, searchTerm]);
  return (
    <>
      <section className="bg-[#F9FAFB] py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#1E3557] mb-3">
              Current Opportunities
            </h2>

            <p className="text-[#4A5568] text-sm md:text-base max-w-2xl mx-auto">
              We promise you an inclusive work environment where you will fall
              in love with challenging as well as getting challenged.
            </p>
          </div>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6 items-start lg:-ml-18 px-5 xl:px-0">
            {/* Left Filter */}
            <div className="rounded-xl w-[250px] h-fit pt-16 pb-6 px-6">
              <div className="flex items-center justify-between mb-0">
                <div className="flex items-center gap-7">
                  <h3 className="text-[18px] font-semibold text-[#1E3557]">
                    Filter by
                  </h3>
                  <RotateCcw className="ml-24 w-4 h-4 text-[#6B7280]"/>
                </div>
              </div>
                {/* <MoveRight className="w-4 h-4 text-[#9CA3AF]"/> */}
                <svg width="65" height="15" viewBox="0 0 100 15" className="text-gray-400 stroke-current mb-6">
                  <line x1="0" y1="7.5" x2="95" y2="7.5" strokeWidth="1" />
                  <polyline points="90,3 96,7.5 90,12" strokeWidth="1" fill="none" />
                </svg>
              <ul className="space-y-5 text-[15px] text-[#4A5568]">
                {Object.entries(filters).map(([title, values]) => (
                  <li
                    key={title}
                    className="border-b border-gray-200 pb-2"
                  >
                    <div
                      onClick={() =>
                        setOpenFilter(openFilter === title ? null : title)
                      }
                      className="flex justify-between items-center cursor-pointer"
                    >
                      <span>{title}</span>

                      <span className="text-lg font-medium">
                        {openFilter === title ? "-" : "+"}
                      </span>
                    </div>

                    {openFilter === title && (
                      <div className="mt-3 pl-2 space-y-2">
                        {values.map((value) => (
                          <label
                            key={value}
                            className="flex items-center gap-2"
                          >
                           <input type="checkbox" />

                            <span className="text-xs text-gray-600">
                              {value}
                            </span>
                         </label>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side */}
            <div>
              {/* Search */}
              <div className="flex justify-end mb-6">
                <div className="relative w-full md:w-96">
                  <input
                    type="text"
                    placeholder="Search Job"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 text-sm focus:outline-none focus:border-[#1E3557]"
                  />

                  <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition"
                  >
                    <div>
                      <h3 className="text-[#1E3557] font-semibold text-lg">
                        {job.title}
                      </h3>

                      <div className="flex flex-wrap gap-2 my-4">
                        <span className="bg-gray-100 rounded-md px-3 py-1 text-xs">
                          {job.location}
                        </span>

                        <span className="bg-gray-100 rounded-md px-3 py-1 text-xs">
                          {job.experience}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600 leading-6">
                        {job.description}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedJob(job)}
                      className="mt-6 bg-[#1E3557] text-white py-2 rounded-md hover:bg-[#2A4A6F] transition"
                    >
                      Read More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedJob && (
        <JobDetails
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </>
  );
}