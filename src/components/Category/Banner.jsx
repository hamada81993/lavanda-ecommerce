const categories = [
  "Makeup",
  "Skincare",
  "Perfumes",
  "Hair Care",
  "Devices",
  "K-Beauty",
];

export default function Banner({
  link = "#",
  image = "https://placehold.co/1440x480/e6dfee/6d5b8c?text=Hero%20Banner",
}) {
  return (
    <a
      href={link}
      className="
        block w-full overflow-hidden
        h-[180px] sm:h-[250px] md:h-[350px] lg:h-[480px]
        rounded-lg
        transition-opacity hover:opacity-95
      "
    >
      <img
        src={image}
        alt="Hero Banner"
        className="w-full h-full object-cover"
      />
    </a>
  );
}