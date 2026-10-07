
import AboutBlog from "../components/blog-page/aboutBlog";
import OurBlog from "../components/blog-page/ourBlog";
import Articles from "../components/blog-page/article";
import BlogHero from "../components/blog-page/blogHero";

const Blog: React.FC = () => {
  return (
    <div className="font-sans bg-white">
      <BlogHero />
      <AboutBlog />
      <Articles />
      <OurBlog />

    </div>
  );
};

export default Blog;