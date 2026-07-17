import { Route, Routes } from "react-router-dom";
import Banner from "../components/Category/Banner";
import Categories from "../components/Category/Categories";
import FlashDeals from "../components/sections/FlashDeals";
import FlashDealDetails from "../components/FlashDealDetails";
import ProductSliderSection from "../components/sections/ProductSliderSection";
import KBeauty from "../components/sections/KBeauty";
import BrandSection from "../components/sections/BrandSection";
import NewsletterSection from "../components/sections/NewsletterSection";
import FeatureBar from "../components/sections/FeatureBar";


import {babyCareProducts} from "../data/babycare"

import { perfumesProducts } from "../data/perfumes";
import { personalCareProducts } from "../data/personalCare";
import { devicesProducts } from "../data/devices";
import { kBeautyImages, kBeautyProducts } from "../data/kbeauty";
import { hairCareProducts } from "../data/hairCare";
import { skincareProducts } from "../data/skinCare";
import { exclusiveDealsProducts } from "../data/makeUp";
import { newArrivalsProducts } from "../data/newArrival";
import { flashDealProducts } from "../data/flashDeals";


import leftSectionImage from "../assets/img/flashDeals/specfic flash deals/left section.png";
import specificLogoImage from "../assets/img/flashDeals/specfic flash deals/logo (1).png";
import rightSectionImage from "../assets/img/flashDeals/specfic flash deals/right picture.png";


import PerfumeBanner from "../components/PerfumeBanner/PerfumeBanner";
import bgImage from "../assets/flashDeals/perfumes/6.png";
import bottleImage from "../assets/flashDeals/perfumes/7.png";
import HeroSale from "../components/HeroSale/HeroSale";
import saleImage from "../assets/flashDeals/sales/photo.jpg.jpg";
import Footer from "../components/sections/footer";
import { useEffect } from "react";
import { getRecentProducts } from "../services/productApi";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllCategoriesQuery, useGetCategoriesWithProductsQuery } from "../redux/categories/categoriesApi";
import { useGetRecentProductsQuery } from "../redux/products/productsApi";


export default function Home() {

const {
  data: categories = [],
  isLoading: categoriesLoading,
} = useGetAllCategoriesQuery();

const {
  data: sections = [],
  isLoading: sectionsLoading,
} = useGetCategoriesWithProductsQuery();






const {
  data: recentProducts = [],
  isLoading: recentLoading,
} = useGetRecentProductsQuery(10);








  return (
    <>
    <Routes>

     <Route
          path="/"
          element={
            <>
              <div className="container mx-auto py-6">
                <Banner/>
              </div>

              {/* <Categories/> */}
<Categories categories={categories} />

<ProductSliderSection
  title="Recently Added"
  products={recentProducts}
  speed={1}
  link="/recent-products"
/>
           

              <div className="bg-[#fdfafb] py-10">
                   <div className="container mx-auto px-4">
                <ProductSliderSection
                title="Flash Deals"
                 products={flashDealProducts}
                  speed={1}
                  link="/flash-deal" />
                  
              </div>
              
                 <FlashDealDetails
                leftImage={leftSectionImage}
                logoImage={specificLogoImage}
                rightImage={rightSectionImage}
              />
              
                <div className="container mx-auto px-4">
                  <ProductSliderSection
                    title="New Arrivals"
                    products={newArrivalsProducts}
                    speed={1}
                    link="/new-arrivals"
                  />

                  <ProductSliderSection
                    title="Makeup"
                    products={exclusiveDealsProducts}
                    speed={1}
                    link="/makeup"
                  />

                  <HeroSale image={saleImage} />

                  <ProductSliderSection
                    title="Skin Care"
                    products={skincareProducts}
                    speed={1}
                    link="/skin-care"
                  />

                  {/* <SkincareSection/> */}

                  <ProductSliderSection
                    title="Hair Care"
                    products={hairCareProducts}
                    speed={1}
                    link="/hair-care"
                  />

                  <ProductSliderSection
                    title="Perfumes"
                    products={perfumesProducts}
                    speed={1}
                    link="/perfumes"
                  />

                  <div className="mb-10">
                    <PerfumeBanner
                      bgImage={bgImage}
                      bottleImage={bottleImage}
                    />
                  </div>

                  <KBeauty
                    products={kBeautyProducts}
                    images={kBeautyImages}
                  />

                  <ProductSliderSection
                    title="Baby Care"
                    products={babyCareProducts}
                    speed={1}
                    link="/baby-care"
                  />
                </div>
              </div>
{sections.map((section) => (
  <ProductSliderSection
    key={section.id}
    title={section.name}
    products={section.products}
    link={`/category/${section.slug}`}
  />
))}
              <section className="bg-[#fdfafb]">
                <div className="container mx-auto px-4">
                  <ProductSliderSection
                    title="Personal Care"
                    products={personalCareProducts}
                    speed={1.2}
                    link="/personal-care"
                  />

                  <ProductSliderSection
                    title="Devices"
                    products={devicesProducts}
                    speed={1}
                    link="/devices"
                  />
                </div>

                <BrandSection/>
                <NewsletterSection />
                <FeatureBar/>
            
              </section>
            </>
          }
        />

        </Routes>
       
    </>
  );
}