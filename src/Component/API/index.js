// src/api/API.jsx
const products = [
  {
    id: 1,
    name: "Wooden Chair",
    brand: "Sheesham",
    price: 2499,
    discountPrice: 2200,
    topProduct: true,
    likedProduct: false,
    image: "https://www.nadhukan.co.in/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-28-at-10.46.30_a94b5932.jpg",
    quantity: 1,
    category: "Furniture",
    description: "A premium handcrafted wooden chair, ideal for traditional and modern interiors."
  },
  {
    id: 2,
    name: "TV Stand",
    brand: "Elegant",
    price: 8000,
    discountPrice: 6999,
    topProduct: true,
    likedProduct: true,
    image: "https://i.pinimg.com/736x/04/b1/02/04b102e6eca7f7e407586ef6d3c8364b.jpg",
    quantity: 1,
    category: "Furniture",
    description: "Stylish TV stand with ample storage space, perfect for modern living rooms."               
  },
  {
    id: 3,
    name: "King Size Bed",
    brand: "Duroflex",
    price: 24000,
    discountPrice: 21999,
    topProduct: false,
    likedProduct: true,
    image: "https://damroimages.blob.core.windows.net/damroimages/9296-1.jpg"
  },
  {
    id: 4,
    name: "Office Chair",
    brand: "Catchy",
    price: 7000,
    discountPrice: 5999,
    topProduct: true,
    likedProduct: false,
    image: "https://thesleepcompany.in/cdn/shop/files/1_4b28957e-0e41-4f4c-b940-3195341fcf6e.webp?v=1750012762"
  },
  {
    id: 5,
    name: "Sofa Set",
    brand: "Velvet",
    price: 12000,
    discountPrice: 10000,
    topProduct: false,
    likedProduct: true,
    image: "https://wallpapers.com/images/hd/modern-sofa-set-design-sy5yg8uhvk2mtx2k.jpg"
  },
  {
    id: 6,
    name: "BookShelf",
    brand: "Hoobastank",
    price: 13500,
    discountPrice: 12999,
    topProduct: true,
    likedProduct: true,
    image: "https://previews.123rf.com/images/rukanoga/rukanoga1608/rukanoga160800051/64063208-3d-rendered-illustration-of-modern-empty-bookshelves.jpg"
  },
  {
    id: 7,
    name: "Recliner Sofa",
    brand: "Franklin",
    price: 19500,
    discountPrice: 17999,
    topProduct: false,
    likedProduct: false,
    image: "https://ushashriram.in/cdn/shop/products/91BFysI_w5L.jpg?v=1689025791"
  },
  {
    id: 8,
    name: "Coffee Table",
    brand: "Italian",
    price: 12899,
    discountPrice: 12000,
    topProduct: false,
    likedProduct: true,
    image: "https://shopps.in/wp-content/uploads/2022/04/c264b2b357c2428f9c80b7b1102586b9.webp"
  },
  {
    id: 9,
    name: "Dining Table",
    brand: "Pepperfry",
    price: 16500,
    discountPrice: 15999,
    topProduct: true,
    likedProduct: false,
    image: "https://images.squarespace-cdn.com/content/v1/58b9e3da9de4bbb44f9988ca/272903ed-3d7a-49ae-8432-bb7d21219612/Cascade+House+-+Dining+Room.jpg"
  },
  {
    id: 10,
    name: "Double Bed",
    brand: "Sleepwell",
    price: 18000,
    discountPrice: 16500,
    topProduct: false,
    likedProduct: false,
    image: "https://habitt.com/cdn/shop/products/beds-furniture-carter-bed-with-2-side-tables-22901336604856_1170x.jpg?v=1662960067"
  },
  {
    id:11,
    name: "Wardrobe",
    brand: "Velvet Voltage",
    price: 15000,
    discountPrice: 14000,
    topProduct: true,
    likedProduct: false,
    image: "https://www.woodenstreet.com/images/wardrobe/wardrobe-1.jpg"
  },
  {
    id :12,
    name: "Office Desk",
    brand: "Shadow Circuit",
    price: 9000,
    discountPrice: 8500,
    topProduct: false,
    likedProduct: true,
    quantity:1,
    category: "Furniture",
    image: "https://www.ikea.com/in/en/images/products/galant-desk-black-brown__0732052_PE740646_S5.JPG"
},
];


export default products;