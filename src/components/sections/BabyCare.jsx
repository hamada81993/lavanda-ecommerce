import SectionHeader from "../SectionHeader/SectionHeader";
import InfiniteSlider from "../common/InfiniteSlider";
import ProductCard from "../common/ProductCard";

export default function BabyCare({
products,
images,
}) {
return ( <section className="py-12 bg-white">


  <div className="container mx-auto px-4">

    <SectionHeader
      title="Baby Care"
      showViewAll={true}
      link="#"
    />

    {/* Products */}
    <InfiniteSlider speed={1}>
      {products.map((product) => (
        <div
          key={product.id}
          className="min-w-[250px] md:min-w-[280px]"
        >
          <ProductCard  product={product} />
        </div>
      ))}
    </InfiniteSlider>

    {/* Banner */}
    {/* <div
      className="
      mt-12
      relative
      overflow-hidden
      rounded-3xl
      bg-gradient-to-r
      from-pink-50
      to-purple-50
      min-h-[300px]
      flex
      items-center
      justify-between
      px-8
      md:px-16
      "
    >
   
      <div className="max-w-xl z-20">

        <h3 className="text-4xl font-bold text-gray-800 mb-4">
          Discover Baby Care
        </h3>

        <p className="text-gray-600 leading-7">
          Explore our gentle baby care collection,
          designed with love and trusted by parents.
          Safe formulas, soft ingredients and everyday essentials.
        </p>

        <button
          className="
          mt-6
          px-6 py-3
          bg-[#9b87bd]
          text-white
          rounded-xl
          font-semibold
          hover:opacity-90
          "
        >
          Shop Collection
        </button>

      </div>

    
      <div
        className="
        absolute
        right-0
        bottom-0
        h-full
        flex
        items-end
        "
      >
        <img
          src={images[0]}
          alt="Baby Care"
          className="
          h-[280px]
          md:h-[340px]
          object-contain
          "
        />
      </div>
    </div>  */}

  </div>
</section>


);
}
