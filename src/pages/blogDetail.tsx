import { useParams } from "react-router-dom";
import { blogData } from "../data/blogData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function BlogSub() {
  const { id } = useParams();
  const [isExpanded, setIsExpanded] = useState(false);
  const blog = blogData.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="text-center py-20 text-[#1E3557] text-lg">
        Blog not found.
      </div>
    );
  }


  return (
    <section>
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] md:h-[80vh]">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end pb-5 items-start px-6 md:px-16">
          <h1 className="text-white text-3xl md:text-5xl font-serif font-semibold max-w-2xl leading-tight mb-4">
            {blog.hero.heading}
          </h1>
          <p className="text-white text-sm md:text-base max-w-xl mb-6">
            {blog.hero.subheading}
          </p>
          <div className="flex gap-4">
            {blog.hero.buttons.map((btn, i) => (
              <a
                key={i}
                href={btn.link}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${i === 0
                  ? "bg-[#1E3557] text-white hover:bg-[#162A45]"
                  : "bg-white text-[#1E3557] hover:bg-[#1E3557] hover:text-white"
                  }`}
              >
                {btn.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bridge Section */}
      <div className="max-w-6xl mx-auto py-9 px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-serif text-[#1E3557] mb-4">
          {blog.bridge.title}
        </h2>
        <p className="text-[#4A5568] mb-6 leading-relaxed">
          {blog.bridge.description}
        </p>
        <div className="bg-[#F3F4F6] rounded-lg p-6 space-y-2">
          {blog.bridge.checklist.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl">✔</span>
              <p className="text-[#4A5568] text-sm md:text-base">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Handbook Section */}
      <div className="max-w-6xl mx-auto pb-5 px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-serif text-[#1E3557] mb-4">
          {blog.handbook.title}
        </h2>
        <p className="text-[#4A5568] mb-8 leading-relaxed">
          {blog.handbook.description}
        </p>

        {/* Masonry Layout Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <img
              src={blog.handbook.images[0]}
              alt="Gallery 1"
              className="rounded-xl shadow-md object-cover w-full h-[260px] md:h-[280px]"
            />
            <img
              src={blog.handbook.images[1] || blog.handbook.images[0]}
              alt="Gallery 4"
              className="rounded-xl shadow-md object-cover w-full h-[260px] md:h-[280px]"
            />

            {/* Expanded Content for Col 1 */}
            {isExpanded && (
              <div className="flex flex-col gap-6 dynamic-fade-in">
                <img
                  src={blog.handbook.images[3] || blog.handbook.images[0]}
                  alt="Gallery 6"
                  className="rounded-xl shadow-md object-cover w-full h-[260px] md:h-[280px]"
                />
              </div>
            )}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <img
              src={blog.handbook.images[2] || blog.handbook.images[0]}
              alt="Gallery 2"
              className="rounded-xl shadow-md object-cover w-full h-[260px] md:h-[280px]"
            />
            <img
              src={blog.handbook.images[1] || blog.handbook.images[0]}
              alt="Gallery 5"
              className="rounded-xl shadow-md object-cover w-full h-[260px] md:h-[280px]"
            />

            {/* Expanded Content for Col 2 */}
            {isExpanded && (
              <div className="flex flex-col gap-6 dynamic-fade-in">
                <img
                  src={blog.handbook.images[4] || blog.handbook.images[1]}
                  alt="Gallery 7"
                  className="rounded-xl shadow-md object-cover w-full h-[260px] md:h-[280px]"
                />
              </div>
            )}
          </div>

          {/* Column 3 (Holds the tall image, new image on expand, and the overlay button) */}
          <div className="relative flex flex-col gap-6 sm:col-span-2 lg:col-span-1">

            {/* Primary Tall / Standard Image */}
            <img
              src={blog.handbook.images[2] || blog.handbook.images[0]}
              alt="Gallery 3"
              className={`rounded-xl shadow-md object-cover w-full transition-all duration-300 ${isExpanded ? 'h-[260px] sm:h-[300px] lg:h-[280px]' : 'h-[260px] sm:h-[300px] lg:h-[584px]'
                }`}
            />

            {/* Expanded Content for Col 3 - Stays perfectly aligned */}
            {isExpanded && (
              <div className="flex flex-col gap-6 dynamic-fade-in">
                <img
                  src={blog.handbook.images[5] || blog.handbook.images[2]}
                  alt="Gallery 8"
                  className="rounded-xl shadow-md object-cover w-full h-[260px] sm:h-[300px] lg:h-[280px]"
                />
              </div>
            )}

            {/* Floating Button overlayed inside the grid boundary at the bottom right */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="absolute bottom-6 right-6 bg-[#1E3557] text-white text-sm font-medium px-5 py-2 rounded-lg hover:bg-[#002349] transition active:scale-95 z-10 shadow-lg"
            >
              {isExpanded ? 'See less' : 'See all'}
            </button>
          </div>
        </div>

      </div>
      {/* Bottom Section */}
      <div className="w-full bg-[#F2F4F6]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-8 md:px-12 py-8">
          {/* Left Box */}
          <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col justify-center text-center">
            <h3 className="text-lg md:text-xl font-serif text-[#1E3557] mb-2">
              {blog.handbook.aiSection.title}
            </h3>
            <p className="text-[#4A5568] mb-4 text-sm md:text-base">
              {blog.handbook.aiSection.description}
            </p>
            <Link to="/ai-technology" className="bg-[#1E3557] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#162A45] transition-all">
              {blog.handbook.aiSection.buttonText}
            </Link>
          </div>

          {/* Author Box */}
          <div className="bg-[#1E3557]  rounded-lg p-6 flex flex-col justify-center">
            <h4 className="text-sm uppercase opacity-80 mb-1 text-white ">Author</h4>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
              {blog.handbook.author.name}
            </h3>
            <p className="text-sm md:text-base leading-relaxed opacity-90 text-white">
              {blog.handbook.author.bio}
            </p>
          </div>
        </div>
      </div>

      {/* Blog Cards Section */}
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif text-[#1E3557]">
            Our Blogs
          </h2>
          <Link to="/blog" className="bg-[#1E3557] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#162A45] transition-all">
            Explore More
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col h-full text-left"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg mb-3 w-full h-48 object-cover"
              />
              <h3 className="text-lg font-serif text-[#1E3557] mb-1">
                {item.title}
              </h3>
              <p className="text-[#4A5568] text-sm mb-4 leading-relaxed">
                {item.description}
              </p>
              <div className="mt-auto">
                <Link to={`/blog/${item.id}`} className="border border-[#1E3557] text-[#1E3557] rounded-md px-5 py-2 text-sm font-medium hover:bg-[#1E3557] hover:text-white transition-all">
                  Read Blog
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
