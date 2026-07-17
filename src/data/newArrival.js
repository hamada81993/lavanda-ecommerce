const newArrivalsImagesRaw = import.meta.glob('../assets/img/newArrivals/*.jpg', { eager: true, import: 'default' });
const newArrivalsImages = Object.values(newArrivalsImagesRaw);
export const newArrivalsProducts = [
  { id: 201, title: "Charlotte Tilbury Magic Cream", rating: 4.9, price: "$64.00", isNew: true, image: newArrivalsImages[0] || placeholderImage('Cream') },
  { id: 202, title: "Rare Beauty Soft Pinch Blush", rating: 4.8, price: "$23.00", isNew: true, image: newArrivalsImages[1] || placeholderImage('Blush') },
  { id: 203, title: "Fenty Beauty Gloss Bomb", rating: 4.7, price: "$21.00", image: newArrivalsImages[2] || placeholderImage('Gloss') },
  { id: 204, title: "Drunk Elephant Polypeptide Cream", rating: 4.6, price: "$68.00", image: newArrivalsImages[3] || placeholderImage('Cream') },
  { id: 205, title: "Anastasia Brow Freeze", rating: 4.5, price: "$23.00", isNew: true, image: newArrivalsImages[4] || placeholderImage('Brow') },
];
