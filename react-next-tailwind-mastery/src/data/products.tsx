//IMPORTANT CONCEPT: Data is seperate from UI.

type Products = {
  id: number;
  name: string;
  price: number;
  description: string;
  condition: string;
  isAvailable?: boolean;
  image?: string;
  location?: string;
};

export const products: Products[] = [
  {
    id: 1,
    name: "iPhone 14 Pro Max",
    price: 1099,
    description:
      "The iPhone 14 Pro Max features a stunning Super Retina XDR display, A16 Bionic chip, and advanced camera system for professional-quality photos and videos.",
    condition: "New",
    isAvailable: true,
    image: "/images/iphone-14-pro-max.jpg", 
    location: "Calabar",
  },
  {
    id: 2,
    name: "Samsung Galaxy S26 Ultra",
    price: 1199,
    description:
      "The Samsung Galaxy S26 Ultra offers a large Dynamic AMOLED display, Snapdragon 8 Gen 2 processor, and a versatile camera setup for capturing high-quality images.",
    condition: "New",
    image: "/images/samsung-galaxy-s26-ultra.jpg",
    isAvailable: true,
    location: "Lagos",
  },
  {
    id: 3,
    name: "Google Pixel 7 Pro",
    price: 899,
    description:
      "The Google Pixel 7 Pro comes with a smooth OLED display, Google Tensor G2 chip, and an exceptional camera system for stunning photography.",
    condition: "New",
    image: "/images/google-pixel-7-pro.jpg",
    isAvailable: true,
    location: "Abuja",
  },
  {
    id: 4,
    name: "OnePlus 11r",
    price: 699,
    description:
      "The OnePlus 11r features a vibrant AMOLED display, Snapdragon 8 Gen 2 processor, and a powerful camera system for exceptional photography.",
    condition: "New",
    image: "/images/oneplus-11r.jpg",
    isAvailable: true,
    location: "Port Harcourt",
  },
  {
    id: 5,
    name: "Sony Xperia 1 IV",
    price: 1299,
    description:
      "The Sony Xperia 1 IV features a large 6.2-inch OLED display, Snapdragon 8 Gen 2 processor, and a professional camera system for high-quality photography.",
    condition: "New",
    image: "/images/sony-xperia-1-iv.jpg",
    isAvailable: true,
    location: "Ibadan",
  },
];
