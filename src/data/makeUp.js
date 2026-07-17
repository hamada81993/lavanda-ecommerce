const exclusiveDealsImagesRaw = import.meta.glob('../assets/img/ExclusiveMakeupDeals/*.jpg', { eager: true, import: 'default' });
const exclusiveDealsImages = Object.values(exclusiveDealsImagesRaw);
export const exclusiveDealsProducts = [
  { id: 301, title: "Estee Lauder Advanced Night Repair", rating: 4.9, price: "$75.00", discount: "-15%", image: exclusiveDealsImages[0] || placeholderImage('Serum') },
  { id: 302, title: "Dior Lip Glow Oil", rating: 4.8, price: "$38.00", image: exclusiveDealsImages[1] || placeholderImage('Lip Oil') },
  { id: 303, title: "Huda Beauty Nude Palette", rating: 4.7, price: "$65.00", discount: "-25%", image: exclusiveDealsImages[2] || placeholderImage('Palette') },
  { id: 304, title: "Tarte Shape Tape Concealer", rating: 4.6, price: "$30.00", image: exclusiveDealsImages[3] || placeholderImage('Concealer') },
  { id: 305, title: "NARS Radiant Creamy Concealer", rating: 4.8, price: "$32.00", discount: "-10%", image: exclusiveDealsImages[4] || placeholderImage('Concealer') },
];