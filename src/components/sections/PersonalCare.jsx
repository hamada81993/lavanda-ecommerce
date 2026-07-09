import ProductCard from "../common/ProductCard";
import InfiniteSlider from "../common/InfiniteSlider";
import SectionHeader from "../SectionHeader/SectionHeader";


export default function PersonalCare({
  title = "Personal Care",
  products = [],
}) {
  return (
    <section className="bg-[#fcfcfc] py-10">
      <div className="container mx-auto px-4">

        {/* Header */}
        <SectionHeader
          title={title}
          showViewAll={true}
          link="#"
        />

        {/* Slider */}
        <InfiniteSlider speed={1.2} gap="16px">
          {products.map((product) => (
            <div
              key={p.id}
              className="min-w-[260px] flex-shrink-0"
            >
              <ProductCard  product={product} />
            </div>
          ))}
        </InfiniteSlider>

      </div>
    </section>
  );
}