export const devicesImages = Object.values(
  import.meta.glob(
    "./assets/flashDeals/sales/*.{jpg,jpeg,png}",
    {
      eager: true,
      import: "default",
    }
  )
);

export const devicesProducts = Array.from({ length: 8 }).map((_, i) => ({
  id: 1400 + i,
  brand: "FOREO",
  title: "LUNA Facial Cleansing Device",
  rating: 4.9,
  price: "$149",
  oldPrice: "$199",
  discount: "-25%",
  image: devicesImages[i % devicesImages.length],
}));