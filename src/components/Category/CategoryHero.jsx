export default function CategoryHero({
  title,
  description,
  image,
}) {
  return (
    <section className="flex flex-col md:flex-row overflow-hidden bg-gradient-to-br from-[#FFF1F5] to-[#F5F0F8] mb-10 md:h-[400px]">
      <div className="flex-1 flex flex-col justify-center px-6 md:px-[10%] py-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>

        <p className="text-lg text-gray-600 max-w-[500px]">
          {description}
        </p>
      </div>

      <div
        className="flex-1 overflow-hidden"
        style={{
          clipPath:
            "polygon(10% 0,100% 0,100% 100%,0 100%)",
        }}
      >
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}