import { useParams } from "react-router-dom";
import { blogs } from "../components/Blogs/blogData";

export default function BlogDetailsPage() {
  const { id } = useParams();

  const blog = blogs.find(
    (item) => item.id === Number(id)
  );

  if (!blog) {
    return (
      <h2 className="text-center py-20">
        Blog not found
      </h2>
    );
  }

  return (
    <>
      <section className="max-w-[1323px] mx-auto py-12">

        {/* Image */}

        <img
          src={blog.image}
          alt={blog.title}
          className="
            w-full
            h-[420px]
            rounded-[24px]
            object-cover
            mb-10
          "
        />

        {/* Title */}

        <h1
          className="
            text-[52px]
            leading-[62px]
            font-bold
            text-[#1F1F1F]
            mb-8
          "
        >
          {blog.title}
        </h1>

        {/* Content */}

        <div
          className="
            text-[#4A5565]
            text-[22px]
            leading-[44px]
            space-y-8
          "
        >
          {blog.content.map((item, index) => {
            if (item.type === "paragraph") {
              return (
                <p key={index}>
                  {item.text}
                </p>
              );
            }

            if (item.type === "heading") {
              return (
                <h2
                  key={index}
                  className="
                    text-[30px]
                    font-bold
                    text-primary
                  "
                >
                  {item.text}
                </h2>
              );
            }

            if (item.type === "list") {
              return (
                <ul
                  key={index}
                  className="
                    list-disc
                    pl-8
                    space-y-3
                  "
                >
                  {item.items.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              );
            }

            return null;
          })}
        </div>

      </section>

     
    </>
  );
}