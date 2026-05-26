// ============================================
// src/Component/API/Products.js
// COMPLETE PRODUCT DATA WITH
// BED + SOFA SIZES & DIMENSIONS
// ============================================

const products = [
  {
    id: 1,
    name: "Wooden Chair",
    category: "chair",
    price: 2499,
    oldPrice: 3499,
    inStock: true,
    brand: "Sheesham",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
    description:
      "Premium wooden chair with modern finish and comfortable seating.",
  },

  {
    id: 2,
    name: "Dining Table",
    category: "table",
    price: 16500,
    oldPrice: 21000,
    inStock: false,
    brand: "Pepperfry",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200",
    description:
      "Spacious 6-seater dining table crafted with durable wood.",
  },

  // ======================================
  // SOFA PRODUCTS
  // ======================================

  {
    id: 3,
    name: "Luxury Sofa Set",
    category: "sofa",
    price: 12000,
    oldPrice: 18000,
    inStock: true,
    brand: "Velvet",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",

    description:
      "Luxurious velvet sofa set with plush seating and elegant design.",

    sofaSizes: [
      {
        name: "2 Seater",
        dimensions: '63" × 38" × 34"',
        suitable: "Small Living Room",
      },

      {
        name: "3 Seater",
        dimensions: '90" × 38" × 34"',
        suitable: "Family Living Room",
      },

      {
        name: "4 Seater",
        dimensions: '117" × 38" × 34"',
        suitable: "Large Hall",
      },

      {
        name: "5 Seater",
        dimensions: '144" × 38" × 34"',
        suitable: "Luxury Hall",
      },

      {
        name: "6 Seater",
        dimensions: '171" × 38" × 34"',
        suitable: "Big Family Setup",
      },

      {
        name: "7 Seater",
        dimensions: '198" × 38" × 34"',
        suitable: "Premium Villa",
      },
    ],
  },

  // ======================================
  // BED PRODUCTS
  // ======================================

  {
    id: 4,
    name: "Double Bed",
    category: "bed",
    price: 18000,
    oldPrice: 26000,
    inStock: true,
    brand: "SleepWell",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",

    description:
      "Comfortable double bed with premium finish and solid wooden frame.",

    bedSizes: [
      {
        name: "Single Bed",
        dimensions: '36" × 75"',
        roomSize: "8 × 10 ft",
        suitable: "Kids Room",
      },

      {
        name: "Queen Size",
        dimensions: '60" × 78"',
        roomSize: "10 × 10 ft",
        suitable: "Couples",
      },

      {
        name: "King Size",
        dimensions: '72" × 78"',
        roomSize: "12 × 12 ft",
        suitable: "Master Bedroom",
      },
    ],
  },

  {
    id: 5,
    name: "Office Desk",
    category: "desk",
    price: 9000,
    oldPrice: 12000,
    inStock: true,
    brand: "Shadow Circuit",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200",

    description:
      "Modern office desk with ample workspace and storage.",
  },

  {
    id: 6,
    name: "Wardrobe",
    category: "wardrobe",
    price: 15000,
    oldPrice: 20000,
    inStock: true,
    brand: "Velvet Voltage",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200",

    description:
      "Spacious wardrobe with sleek sliding doors and internal shelving.",
  },

  {
    id: 7,
    name: "Living Room Set",
    category: "sofa",
    price: 22000,
    oldPrice: 32000,
    inStock: true,
    brand: "Velvet Voltage",
    image:
      "https://images.unsplash.com/photo-1491924778227-f225b115b7a7?q=80&w=1200",

    description:
      "Complete living room set including sofas and center table.",

    sofaSizes: [
      {
        name: "3 Seater",
        dimensions: '90" × 38" × 34"',
        suitable: "Modern Family",
      },

      {
        name: "5 Seater",
        dimensions: '144" × 38" × 34"',
        suitable: "Joint Family",
      },

      {
        name: "7 Seater",
        dimensions: '198" × 38" × 34"',
        suitable: "Large Luxury Space",
      },
    ],
  },

  {
    id: 8,
    name: "Bedroom Wallpaper",
    category: "decor",
    price: 8000,
    oldPrice: 11000,
    inStock: true,
    brand: "Rock Band Logos",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200",

    description:
      "Stylish wallpaper designed to elevate bedroom aesthetics.",
  },

  {
    id: 9,
    name: "Office Chair",
    category: "chair",
    price: 3000,
    oldPrice: 4500,
    inStock: true,
    brand: "Catchy",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",

    description:
      "Ergonomic office chair with mesh back and adjustable height.",
  },

  {
    id: 10,
    name: "Bookshelf",
    category: "shelf",
    price: 5000,
    oldPrice: 7500,
    inStock: true,
    brand: "Hoobastank",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200",

    description:
      "Contemporary bookshelf with multiple open shelves.",
  },

  {
    id: 11,
    name: "TV Stand",
    category: "table",
    price: 4000,
    oldPrice: 5500,
    inStock: true,
    brand: "Elegant",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200",

    description:
      "Wooden TV stand with storage cabinets and open shelving.",
  },

  {
    id: 12,
    name: "Recliner Sofa",
    category: "sofa",
    price: 19500,
    oldPrice: 28000,
    inStock: true,
    brand: "Franklin",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",

    description:
      "Comfortable recliner sofa with adjustable backrest.",

    sofaSizes: [
      {
        name: "2 Seater",
        dimensions: '63" × 38" × 34"',
        suitable: "Compact Room",
      },

      {
        name: "3 Seater",
        dimensions: '90" × 38" × 34"',
        suitable: "Standard Living Room",
      },

      {
        name: "5 Seater",
        dimensions: '144" × 38" × 34"',
        suitable: "Luxury Hall",
      },
    ],
  },

  {
    id: 13,
    name: "Coffee Table",
    category: "table",
    price: 3000,
    oldPrice: 4500,
    inStock: true,
    brand: "Italian",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200",

    description:
      "Elegant coffee table with glass top and wooden legs.",
  },

  {
    id: 14,
    name: "King Size Bed",
    category: "bed",
    price: 30000,
    oldPrice: 42000,
    inStock: true,
    brand: "Duroflex",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",

    description:
      "Spacious king size bed built with solid wood and modern style.",

    bedSizes: [
      {
        name: "Single Bed",
        dimensions: '36" × 75"',
        roomSize: "8 × 10 ft",
        suitable: "Kids Room",
      },

      {
        name: "Queen Size",
        dimensions: '60" × 78"',
        roomSize: "10 × 10 ft",
        suitable: "Couples",
      },

      {
        name: "King Size",
        dimensions: '72" × 78"',
        roomSize: "12 × 12 ft",
        suitable: "Luxury Master Bedroom",
      },
    ],
  },

  {
    id: 15,
    name: "Wall Art Frame",
    category: "decor",
    price: 3000,
    oldPrice: 5000,
    inStock: true,
    brand: "Mural",
    image:
      "https://images.unsplash.com/photo-1491924778227-f225b115b7a7?q=80&w=1200",

    description:
      "Beautiful wall art frame to add elegance to your room.",
  },

  {
    id: 16,
    name: "Dining Chair",
    category: "chair",
    price: 3500,
    oldPrice: 4800,
    inStock: true,
    brand: "Urban Ladder",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",

    description:
      "Stylish dining chair with comfortable seating.",
  },

  {
    id: 17,
    name: "Bar Stool",
    category: "chair",
    price: 2500,
    oldPrice: 3900,
    inStock: true,
    brand: "Urban Ladder",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200",

    description:
      "Sleek bar stool with high back and footrest.",
  },

  {
    id: 18,
    name: "Accent Chair",
    category: "chair",
    price: 4000,
    oldPrice: 6000,
    inStock: true,
    brand: "Urban Ladder",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200",

    description:
      "Chic accent chair perfect for modern interiors.",
  },

  {
    id: 19,
    name: "Dressing Table",
    category: "table",
    price: 6000,
    oldPrice: 8500,
    inStock: true,
    brand: "Urban Ladder",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1200",

    description:
      "Elegant dressing table with mirror and storage drawers.",
  },

  {
    id: 20,
    name: "Console Table",
    category: "table",
    price: 4500,
    oldPrice: 7000,
    inStock: true,
    brand: "Urban Ladder",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200",

    description:
      "Versatile console table suitable for living rooms.",
  },
];

export default products;