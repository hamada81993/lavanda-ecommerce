const personalCareImages = Object.values(
  import.meta.glob(
    "../assets/img/personalCare/*.{jpg,jpeg,png}",
    {
      eager: true,
      import: "default",
    }
  )
);

const placeholderImage = (text) =>
  `https://placehold.co/400x400?text=${encodeURIComponent(text)}`;

const createMockProducts = (images, startId, title) => {
  return Array.from({
    length: Math.max(6, images.length || 6),
  }).map((_, i) => ({
    id: startId + i,
    title,
    brand: "Dove",
    rating: 4.8,
    price: "$29.99",
    oldPrice: "$39.99",
    discount: "-20%",
    image:
      images[i % (images.length || 1)] ||
      placeholderImage("Product"),
  }));
};

export const personalCareProducts = createMockProducts(
  personalCareImages,
  900,
  "Daily Personal Care Essential"
);

export { personalCareImages };