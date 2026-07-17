import Newsletter from "../sections/Newsletter";
import BlogCard from "./BlogCard";

export default function BlogSection({ blogs }) {
  return (
    <>
<section className="max-w-[1323px] mx-auto mb-6">

  <h2 className="mb-8 text-[32px] font-bold">
    From Lavanda — Education & Guidance
  </h2>

<div className="grid grid-cols-3 gap-x-5 gap-y-8">
  {blogs.map((blog) => (
    <BlogCard
      key={blog.id}
      blog={blog}
    />
  ))}
</div>
 
    </section>
    <Newsletter />
    </>
  );
}