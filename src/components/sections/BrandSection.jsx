import InfiniteSlider from "../common/InfiniteSlider";
import SectionHeader from "../common/SectionHeader";


{/* Brands Section */}

export default function BrandSection() {

    const brandsImagesRaw = import.meta.glob(
  "../../assets/img/brands/*.{jpg,jpeg,png}",
  {
    eager: true,
    import: "default",
  }
);

const brandsImages = Object.values(brandsImagesRaw);

const firstRowBrands = brandsImages.slice(
  0,
  Math.ceil(brandsImages.length / 2)
);
console.log("brandsImages", brandsImages);

const secondRowBrands = brandsImages.slice(
  Math.ceil(brandsImages.length / 2)
);

const brands = [
  "L'Oreal",
  "Maybelline",
  "NYX",
  "CeraVe",
  "The Ordinary",
  "Olaplex",
  "MAC",
  "Clinique",
  "Estee Lauder",
];
  return (
<section className="container mx-auto py-12">
  <SectionHeader
    title="Premium Brands"
    showViewAll={true}
    link="#"
  />

  <div className="flex flex-col gap-4">

    {/* First Row */}
    <InfiniteSlider speed={0.8}>
      {brandsImages.length > 0
        ? brandsImages.slice(0, Math.ceil(brandsImages.length / 2)).map((imgSrc, i) => (
            <div
              key={i}
              className="
                min-w-[180px]
                h-[100px]
                p-4
                flex
                items-center
                justify-center
                bg-white
                rounded-lg
                border
                border-[#eaeaea]
                flex-shrink-0
              "
            >
              <img
                src={imgSrc}
                alt="Brand"
                className="
                  max-w-full
                  max-h-full
                  object-contain
                "
              />
            </div>
          ))
        : brands.map((brand, i) => (
            <div
              key={i}
              className="
                min-w-[150px]
                h-[100px]
                bg-white
                rounded-lg
                border
                border-[#eaeaea]
                flex
                items-center
                justify-center
                font-semibold
                text-[#302245]
                flex-shrink-0
              "
            >
              {brand}
            </div>
          ))}
    </InfiniteSlider>

    {/* Second Row */}
    <InfiniteSlider speed={-0.8}>
      {secondRowBrands.length > 0
        ? secondRowBrands.map((imgSrc, i) => (
            <div
              key={i}
              className="
                min-w-[180px]
                h-[100px]
                p-4
                flex
                items-center
                justify-center
                bg-white
                rounded-lg
                border
                border-[#eaeaea]
                flex-shrink-0
              "
            >
              <img
                src={imgSrc}
                alt="Brand"
                className="
                  max-w-full
                  max-h-full
                  object-contain
                "
              />
            </div>
          ))
        : [...brands].reverse().map((brand, i) => (
            <div
              key={i}
              className="
                min-w-[150px]
                h-[100px]
                bg-white
                rounded-lg
                border
                border-[#eaeaea]
                flex
                items-center
                justify-center
                font-semibold
                text-[#302245]
                flex-shrink-0
              "
            >
              {brand}
            </div>
          ))}
    </InfiniteSlider>

  </div>
</section>);
}