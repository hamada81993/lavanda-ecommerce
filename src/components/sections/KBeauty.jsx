// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import ProductCard from "../common/ProductCard";
import InfiniteSlider from "../common/InfiniteSlider";

export default function KBeauty({ products, images }) {
// const { t } = useTranslation("home");

const expertImage = images?.[0];

return ( <section className="relative py-16 z-[1]">
{/* Purple Background */} 
<div className="absolute top-0 left-0 right-0 h-[55%] bg-[#ebe7f5] -z-10" />

  <div className="container mx-auto px-4">

    {/* Main Card */}
    <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-8 pb-0 mb-12">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[2rem] font-extrabold text-[#2d2a3f]">
          {/* {t("kbeauty.title")} */}
          K-Beauty Bestsellers
        </h2>

        {/* <Link
          to="#"
          className="flex items-center gap-2 text-lg font-bold text-[#2d2a3f]"
        >
          {t("viewAll")}
          <span>&gt;</span>
        </Link> */}
      </div>

      {/* Expert Tip */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">

        <img
          src={expertImage}
          alt="Expert Tip"
          className="w-[100px] h-[100px] rounded-xl object-cover"
        />

        <div className="flex-1 flex flex-col gap-2">

          <span className="bg-[#9b87bd] text-white text-xs font-bold uppercase px-3 py-1 rounded-full w-fit">
            {/* {t("expertTip")} */}
            expertTip
          </span>

          <h3 className="text-[1.4rem] font-bold text-[#2d2a3f]">
            {/* {t("kbeauty.expertTitle")} */}
            kbeauty
          </h3>

          <p className="text-[#888] text-[15px]">
            {/* {t("kbeauty.expertDesc")} */}
            kbeauty
          </p>
        </div>

        <button className="bg-[#9b87bd] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
          {/* {t("readFullArticle")} &gt; */}
          kkkkkk
        </button>
      </div>

      {/* Slider */}
      <div className="-mx-8 pl-8">

        <InfiniteSlider speed={1.1}>
          {products.map((product, idx) => (
            <div
              key={product.id}
              className="min-w-[250px] md:min-w-[280px] lg:min-w-[300px] mr-4"
            >
              <ProductCard
                 product={product}
                image={images[(idx % 5) + 1] || product.image}
              />
            </div>
          ))}
        </InfiniteSlider>

      </div>
    </div>

    {/* Banner */}
    {/* <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#dcf0df] to-[#eef7ee] px-12 py-8 flex flex-col md:flex-row items-start md:items-center justify-between">

      <div className="max-w-full md:max-w-[50%] z-10">

        <h3 className="text-[1.8rem] font-extrabold text-[#1b4d3e] mb-3">
          Glow Like Seoul
        </h3>

        <p className="text-[#3d5a4d] leading-7">
          Discover the most loved Korean skincare essentials.
          Hydrate, repair and brighten your skin with bestselling
          formulas trusted by millions.
        </p>
      </div>

      <div className="hidden md:block absolute right-[15%] bottom-[-20px] h-[140%] z-[1]">
        <img
          src={images[6] || images[1]}
          alt=""
          className="h-full object-contain"
        />
      </div>

      <button className="mt-6 md:mt-0 bg-white text-[#1b4d3e] px-8 py-3 rounded-lg font-bold shadow-md z-10 hover:bg-gray-50 transition">
        SHOP NOW
      </button>
    </div> */}

  </div>
</section>
);
}
