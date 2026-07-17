import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
<Link
  to={`/blogs/${blog.id}`}
  className="
    group
    w-full
    overflow-hidden
    rounded-[16px]
    bg-white
    transition-all
    duration-300
    hover:shadow-md
  "
>
  {/* Image */}

  <div className="overflow-hidden">
    <img
      src={blog.image}
      alt={blog.title}
      className="
        w-full
        h-[240px]
        object-cover
        transition-transform
        duration-500
        group-hover:scale-105
      "
    />
  </div>

  {/* Content */}

  <div className="px-4 py-4">

    <div className="flex items-center gap-2 mb-3">

      <span
        className="
          rounded-full
          bg-[#F5F0FA]
          px-2.5
          py-1
          text-[11px]
          font-medium
          text-primary
        "
      >
        {blog.category}
      </span>

      <span className="text-[12px] text-[#A3A3A3]">
        {blog.readTime}
      </span>

    </div>

    <h3
      className="
        text-[18px]
        font-bold
        leading-[28px]
        text-[#101828]
        line-clamp-2
      "
    >
      {blog.title}
    </h3>

    <p
      className="
        mt-2
        text-[15px]
        leading-[28px]
        text-[#4A5565]
        line-clamp-2
      "
    >
      {blog.description}
    </p>

  </div>
</Link>
  );
}