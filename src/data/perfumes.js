export const perfumesImages = Object.values(
  import.meta.glob(
    "./assets/flashDeals/sales/*.{jpg,jpeg,png}",
    {
      eager: true,
      import: "default",
    }
  )
);

export const perfumesProducts = Array.from({ length: 8 }).map((_, i) => ({
  id: 600 + i,
  brand: "CHANEL",
  title: "Coco Mademoiselle Eau De Parfum",
  rating: 4.9,
  price: "$129",
  oldPrice: "$149",
  discount: "-15%",
  image: perfumesImages[i % perfumesImages.length],
}));