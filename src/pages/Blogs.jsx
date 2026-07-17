import BlogSection from "../components/Blogs/BlogSection";
import { blogs } from "../components/Blogs/blogData";

export default function Blogs() {
  return (
    <div className="pt-8">
      <BlogSection blogs={blogs} />
    </div>
  );
}