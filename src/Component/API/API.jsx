// src/api/API.jsx
import React from'react';

const products = [
  {
    id: 1,
    name: "Wooden Chair",
    brand: "Sheesham",
    price: 2499,
    discountPrice: 2200,
    topProduct: true,
    likedProduct: false,
    image: "https://s1.1zoom.me/b5150/876/Armchair_Wood_planks_Luxury_526917_1920x1080.jpg"
  },
  {
    id: 2,
    name: "TV Stand",
    brand: "Elegant",
    price: 8000,
    discountPrice: 6999,
    topProduct: true,
    likedProduct: true,
    image: "https://i.pinimg.com/736x/04/b1/02/04b102e6eca7f7e407586ef6d3c8364b.jpg"
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
  }
];

export default products;
