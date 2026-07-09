import heroImage from "../../assets/flashDeals/sales/7.png";
import CategoryPageLayout from "../Category/CategoryPageLayout";

export default function SkinCare({
  products,
  images,
}) {
  return (
    <CategoryPageLayout
      heroTitle="Discover Skin Care"
      heroDescription="Explore our collection."
      heroImage={heroImage}
      pageTitle="Skin Care"
      products={products}
      images={images}
    />
  );
} 