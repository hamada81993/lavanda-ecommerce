import InfiniteSlider from "../common/InfiniteSlider";
import ProductCard from "../common/ProductCard";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function ProductSliderSection({
  title,
  products,
  speed = 1,
  link = "#",
  background = "#fff",
}) {
  return (
    <section
      className="py-8"
      style={{ backgroundColor: background }}
    >
      <div className="container mx-auto px-4">

        <SectionHeader
          title={title}
          showViewAll={true}
          link={link}
        />

        <InfiniteSlider
  speed={speed}
  gap="16px"
>
  {products.map((product) => (
    <div
      key={product.id}
      className="
        min-w-[220px]
        md:min-w-[250px]
        lg:min-w-[280px]
        flex-shrink-0
      "
    >
      <ProductCard  product={product}/>
    </div>
  ))}
</InfiniteSlider>

      </div>
    </section>
  );
}