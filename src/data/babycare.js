export const babyCareImages = Object.values(
  import.meta.glob(
    "../assets/img/babyCare/*.{jpg,jpeg,png}",
    {
      eager: true,
      import: "default",
    }
  )
);

export const babyCareProducts = Array.from({
  length: 8,
}).map((_, i) => ({
  id: 1400 + i,
  brand: "JOHNSON'S",
  title: "Baby Lotion & Gentle Care Set",
  rating: 4.9,
  price: "$22.00",
  oldPrice: "$30.00",
  discount: "-25%",
  image: babyCareImages[i % babyCareImages.length],
}));

