import { Link } from "react-router-dom";
import { blogData } from "../../data/blogData";

export default function Articles() {
    return (
        <section className="bg-[#F2F4F6] py-9 px-6 md:px-12">
            <div className="max-w-7xl text-center ">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-serif text-[#1E3557]">
                    Recent Articles
                </h2>
                <p className="text-[#4A5568] text-sm md:text-base mb-8 mt-2 ">
                    Every competitor builds. We build, manage, advise, and deliver returns backed by <br/>
                    AI and enforced by contract.
                </p>

                {/* Main Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 items-start text-left gap-10">
                    {/* Left Image */}
                    <div className="rounded-xl overflow-hidden col-span-1">
                        <img
                            src="/images/office-hero.png"
                            alt="Luxury Estate"
                            className=" xl:h-[83vh] lg:h-[107vh] md:w-full md:h-[50vh] object-cover rounded-xl"
                        />
                    </div>

                    {/* Right Content (Text + Cards) */}
                    <div className="flex flex-col col-span-2 gap-8">
                        {/* Main Text Block */}
                        <div>
                            <h3 className="text-xl md:text-3xl font-serif text-[#1E3557] mb-3 leading-snug ">
                                Why Delhi NCR Real Estate Is Becoming the Hottest <br/> Investment Destination of 2026
                            </h3>
                            <p className="text-[#4A5568] text-sm md:text-sm mb-4 leading-relaxed">
                                From Gurugram’s tech corridors to Noida’s skyline transformation we break down
                                why savvy investors are doubling down on
                            </p>
                        
                            <Link
                                to={`/blog/${blogData[0].id}`}
                                className="border border-[#1E3557] text-[#1E3557] rounded-md px-5 py-2 text-sm font-medium hover:bg-[#1E3557] hover:text-white transition-all w-fit"
                            >
                                Read Blog
                            </Link>
                        </div>

                        {/* Two Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {blogData.slice(1, 3).map((blog) => (
                                <div
                                    key={blog.id}
                                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                                >
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="rounded-lg mb-3 w-full h-47 object-fill"
                                    />
                                    <h4 className="text-lg font-serif text-[#1E3557] mb-1">
                                        {blog.title}
                                    </h4>
                                    <p className="text-[#4A5568] text-sm mb-3 leading-relaxed">
                                        {blog.description}
                                    </p>
                                    <Link
                                        to={`/blog/${blog.id}`}
                                        className="text-[#1E3557] text-sm font-medium flex items-center gap-1 hover:underline"
                                    >
                                        Read Blog →
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
