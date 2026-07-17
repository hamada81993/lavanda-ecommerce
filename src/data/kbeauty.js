export const kBeautyImages = Object.values(
  import.meta.glob(
    "./assets/img/kBeautyBestsellers/*.{jpg,jpeg,png}",
    {
      eager: true,
      import: "default",
    }
  )
);

export const kBeautyProducts = Array.from({ length: 8 }).map((_, i) => ({
  id: 1201 + i,
  brand: "COSRX",
  title: "Advanced Snail 96 Mucin Power Essence",
  rating: 4.9,
  price: "$19.00",
  oldPrice: "$25.00",
  discount: "-24%",
  image: kBeautyImages[i % kBeautyImages.length],
}));