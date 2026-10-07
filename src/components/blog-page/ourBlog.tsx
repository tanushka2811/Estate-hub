import { Link } from "react-router-dom"
import { blogData } from "../../data/blogData"

export default function OurBlog() {


    return (
        <section className="bg-[#F2F4F6] py-8 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-serif text-[#1E3557] mb-2">
                    Our Blogs
                </h2>
                <p className="text-[#4A5568] text-sm md:text-base mb-12">
                    We don’t just build properties we build confidence.
                </p>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {blogData.map((blog, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col h-full text-left  transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                        >
                            {/* Content */}
                            <div>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="rounded-lg mb-3 w-full h-48 object-cover"
                                />
                                <h3 className="text-lg font-serif text-[#1E3557] mb-1">
                                    {blog.title}
                                </h3>
                                <p className="text-[#4A5568] text-sm mb-4 leading-relaxed">
                                    {blog.description}
                                </p>
                            </div>

                            {/* Button pinned bottom left */}
                            <div className="mt-auto">
                                <Link to={`/blog/${blog.id}`} className="border border-[#1E3557] text-[#1E3557] rounded-md px-5 py-2 text-sm font-medium hover:bg-[#1E3557] hover:text-white transition-all">
                                    Read Blog
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
