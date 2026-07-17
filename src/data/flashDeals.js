const flashDealImagesRaw = import.meta.glob('../assets/img/flashDeals/*.jpg', { eager: true, import: 'default' });
const flashDealImages = Object.values(flashDealImagesRaw);

export const flashDealProducts = [
  { id: 101, title: "L'Oreal Paris True Match Foundation", rating: 4.8, price: "$14.99", oldPrice: "$18.99", discount: "-20%", image: flashDealImages[0] || placeholderImage('Foundation') },
  { id: 102, title: "Maybelline Lash Sensational Mascara", rating: 4.6, price: "$9.99", image: flashDealImages[1] || placeholderImage('Mascara') },
  { id: 103, title: "NYX Professional Makeup Setting Spray", rating: 4.5, price: "$8.50", isNew: true, image: flashDealImages[2] || placeholderImage('Spray') },
  { id: 104, title: "CeraVe Hydrating Facial Cleanser", rating: 4.9, price: "$15.99", image: flashDealImages[3] || placeholderImage('Cleanser') },
  { id: 105, title: "The Ordinary Niacinamide 10% + Zinc 1%", rating: 4.7, price: "$6.50", discount: "-10%", image: flashDealImages[4] || placeholderImage('Serum') },
];