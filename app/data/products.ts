export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  isPopular?: boolean;
  isNew?: boolean;
  discountPercent: number;
  warranty: string;
  image: string;
  images: string[];
  description: string;
  specifications: Record<string, string>;
  energyRating?: string;
}

export const STORE_INFO = {
  name: "Krish Online Shopping",
  phone: "0704220000",
  whatsappNumber: "94704220000",
  email: "krishshoppingon@gmail.com",
  address: "19/10, Delkanda, Nugegoda, Sri Lanka",
  hours: "24/7 Always Open",
  tagline: "ලංකාවේ අඩුම මිලට QUALITY බඩු, ගෙදරටම ගෙන්වා ගන්න.",
  sloganEnglish: "Sri Lanka's Best Price & Quality Guaranteed Home Appliances Delivered To Your Doorstep!"
};

export const CATEGORIES = [
  { id: "all", label: "All Electric Items", icon: "Zap" },
  { id: "ac", label: "Air Conditioners (AC)", icon: "Wind" },
  { id: "refrigerators", label: "Refrigerators & Freezers", icon: "Refrigerator" },
  { id: "washing", label: "Washing Machines", icon: "WashingMachine" },
  { id: "media", label: "Media & Smart TVs", icon: "Tv" },
  { id: "kitchen", label: "Kitchen Appliances", icon: "ChefHat" },
  { id: "cooking", label: "Stoves & Ovens", icon: "Flame" },
  { id: "waterheaters", label: "Water Heaters", icon: "ShowerHead" },
];

export const BRANDS = [
  { name: "LG", logoText: "LG", color: "#A50034" },
  { name: "Hisense", logoText: "Hisense", color: "#00AAA6" },
  { name: "Abans", logoText: "Abans", color: "#1D4ED8" },
  { name: "Samsung", logoText: "SAMSUNG", color: "#1428A0" },
  { name: "Haier", logoText: "Haier", color: "#005BAC" },
  { name: "Panasonic", logoText: "Panasonic", color: "#004098" },
  { name: "Sony", logoText: "SONY", color: "#000000" },
  { name: "Venus", logoText: "VENUS", color: "#E11D48" },
  { name: "Singer", logoText: "SINGER", color: "#CC0000" },
];

export const PRODUCTS: Product[] = [
  {
    id: "ref-lg-471l-inverter",
    name: "LG 471L Smart Inverter Refrigerator with Water Pump (Model: GLB503PZI)",
    brand: "LG",
    category: "refrigerators",
    price: 295990,
    originalPrice: 345000,
    discountPercent: 14,
    rating: 5.0,
    reviewsCount: 128,
    inStock: true,
    isPopular: true,
    isNew: true,
    warranty: "10 Year Official LG Company Warranty",
    image: "/products/product_1.jpg",
    images: ["/products/product_1.jpg"],
    description: "Best Price in Sri Lanka! LG 471L Smart Inverter Refrigerator featuring an integrated door water dispenser with water pump, Model No: GLB503PZI. Multi Air Flow technology for maximum fresh food retention and energy saving.",
    specifications: {
      "Model No": "GLB503PZI",
      "Capacity": "471 Litres Large Capacity",
      "Compressor": "Smart Inverter Compressor",
      "Special Feature": "Built-in Door Water Pump Dispenser",
      "Delivery": "Islandwide Cash on Delivery Available"
    },
    energyRating: "5 Star Smart Inverter"
  },
  {
    id: "wm-abans-8kg-topload",
    name: "Abans 8kg Fully Automatic Top Loading Washing Machine (Model: AWM-80FA)",
    brand: "Abans",
    category: "washing",
    price: 73990,
    originalPrice: 89900,
    discountPercent: 18,
    rating: 4.9,
    reviewsCount: 156,
    inStock: true,
    isPopular: true,
    isNew: true,
    warranty: "10 Year Motor Warranty + 2 Year Abans Warranty",
    image: "/products/product_2.jpg",
    images: ["/products/product_2.jpg"],
    description: "Best Price in Sri Lanka! Abans 8KG Fully Automatic Top Loading Washing Machine, Model No: AWM-80FA. Features Fuzzy Logic automatic water level detection, Powerful Wash cycle, Gentle Fabric Care, and Quick Wash mode.",
    specifications: {
      "Model No": "AWM-80FA",
      "Capacity": "8.0 kg Fully Automatic",
      "Loading Type": "Top Loading Metallic Finish",
      "Functions": "Fuzzy Logic, Powerful Wash, Gentle Care, Quick Wash",
      "Payment": "Visa & MasterCard Accepted"
    },
    energyRating: "A++ Energy Saver"
  },
  {
    id: "ref-samsung-350l-doubledoor",
    name: "Samsung 350L Double Door Refrigerator (Model: RT38DG5A2B)",
    brand: "Samsung",
    category: "refrigerators",
    price: 203990,
    originalPrice: 245000,
    discountPercent: 17,
    rating: 4.9,
    reviewsCount: 112,
    inStock: true,
    isPopular: true,
    warranty: "10 Year Official Samsung Warranty",
    image: "/products/product_3.jpg",
    images: ["/products/product_3.jpg"],
    description: "Best Price in Sri Lanka! Samsung 350L Double Door Refrigerator, Model No: RT38DG5A2B. Engineered with Digital Inverter technology for whisper-quiet performance and optimized cooling efficiency across all compartments.",
    specifications: {
      "Model No": "RT38DG5A2B",
      "Capacity": "350 Litres",
      "Type": "Double Door Frost-Free Refrigerator",
      "Compressor": "Digital Inverter 10-Year Guaranteed",
      "Delivery": "Islandwide Cash on Delivery Available"
    },
    energyRating: "5 Star Rated"
  },
  {
    id: "ref-samsung-324l-doubledoor",
    name: "Samsung 324L Double Door Refrigerator (Model: RT34DG5A2BS81G)",
    brand: "Samsung",
    category: "refrigerators",
    price: 195990,
    originalPrice: 230000,
    discountPercent: 15,
    rating: 4.8,
    reviewsCount: 94,
    inStock: true,
    isPopular: true,
    warranty: "10 Year Official Samsung Warranty",
    image: "/products/product_4.jpg",
    images: ["/products/product_4.jpg"],
    description: "Best Price in Sri Lanka! Samsung 324L Double Door Refrigerator, Model No: RT34DG5A2BS81G. Features All-Around Cooling technology, elegant metallic silver exterior finish, and 10-year warranty guarantee.",
    specifications: {
      "Model No": "RT34DG5A2BS81G",
      "Capacity": "324 Litres",
      "Type": "Double Door Frost-Free Refrigerator",
      "Compressor": "Digital Inverter Technology",
      "Delivery": "Islandwide Cash on Delivery Available"
    },
    energyRating: "5 Star Rated"
  },
  {
    id: "ref-samsung-253l-doubledoor",
    name: "Samsung 253L Double Door Refrigerator (Model: RT40H28WNQOG)",
    brand: "Samsung",
    category: "refrigerators",
    price: 138990,
    originalPrice: 165000,
    discountPercent: 16,
    rating: 4.8,
    reviewsCount: 88,
    inStock: true,
    isPopular: true,
    warranty: "10 Year Official Samsung Warranty",
    image: "/products/product_5.jpg",
    images: ["/products/product_5.jpg"],
    description: "Best Price in Sri Lanka! Samsung 253L Double Door Refrigerator, Model No: RT40H28WNQOG. Featuring Digital Inverter Technology, 10-year compressor warranty, and islandwide cash on delivery.",
    specifications: {
      "Model No": "RT40H28WNQOG",
      "Capacity": "253 Litres",
      "Type": "Double Door Refrigerator",
      "Compressor": "Digital Inverter Technology",
      "Delivery": "Islandwide Cash on Delivery Available"
    },
    energyRating: "5 Star Rated"
  },
  {
    id: "ref-lg-423l-doubledoor",
    name: "LG 423L Double Door Refrigerator (Model: GLB392PXUK)",
    brand: "LG",
    category: "refrigerators",
    price: 239990,
    originalPrice: 285000,
    discountPercent: 16,
    rating: 4.9,
    reviewsCount: 104,
    inStock: true,
    isPopular: true,
    isNew: true,
    warranty: "10 Year Official LG Company Warranty",
    image: "/products/product_6.jpg",
    images: ["/products/product_6.jpg"],
    description: "Best Price in Sri Lanka! LG 423L Double Door Refrigerator in Matte Black Finish, Model No: GLB392PXUK. Features Smart Inverter Compressor and DoorCooling+ technology.",
    specifications: {
      "Model No": "GLB392PXUK",
      "Capacity": "423 Litres",
      "Finish": "Matte Black Steel",
      "Compressor": "Smart Inverter Compressor",
      "Delivery": "Islandwide Cash on Delivery Available"
    },
    energyRating: "5 Star Smart Inverter"
  },
  {
    id: "ref-lg-340l-inverter",
    name: "LG 340L Inverter Refrigerator (Model: GLM380BPZI)",
    brand: "LG",
    category: "refrigerators",
    price: 195990,
    originalPrice: 230000,
    discountPercent: 15,
    rating: 4.8,
    reviewsCount: 92,
    inStock: true,
    isPopular: true,
    warranty: "10 Year Official LG Company Warranty",
    image: "/products/product_7.jpg",
    images: ["/products/product_7.jpg"],
    description: "Best Price in Sri Lanka! LG 340L Inverter Refrigerator, Model No: GLM380BPZI. Equipped with Smart Inverter Compressor for ultra-quiet operation and optimum fresh food preservation.",
    specifications: {
      "Model No": "GLM380BPZI",
      "Capacity": "340 Litres",
      "Type": "Double Door Inverter",
      "Compressor": "Smart Inverter Compressor",
      "Delivery": "Islandwide Cash on Delivery Available"
    },
    energyRating: "5 Star Rated"
  },
  {
    id: "ref-lg-594l-multidoor",
    name: "LG 594L Multi Door Refrigerator (Model: GFB4532MC)",
    brand: "LG",
    category: "refrigerators",
    price: 499990,
    originalPrice: 580000,
    discountPercent: 14,
    rating: 5.0,
    reviewsCount: 76,
    inStock: true,
    isPopular: true,
    isNew: true,
    warranty: "10 Year Official LG Company Warranty",
    image: "/products/product_8.jpg",
    images: ["/products/product_8.jpg"],
    description: "Best Price in Sri Lanka! LG 594L Luxury French Multi Door Refrigerator, Model No: GFB4532MC. Premium Matte Charcoal Black Finish with Surround Cooling and massive family storage capacity.",
    specifications: {
      "Model No": "GFB4532MC",
      "Capacity": "594 Litres French Multi Door",
      "Finish": "Matte Charcoal Black",
      "Compressor": "Smart Inverter Linear Compressor",
      "Delivery": "Islandwide Cash on Delivery Available"
    },
    energyRating: "A+++ Energy Saver"
  },
  {
    id: "ref-lg-308l-shinysteel",
    name: "LG 308L Shiny Steel Refrigerator (Model: GLM332RPZI)",
    brand: "LG",
    category: "refrigerators",
    price: 168990,
    originalPrice: 199000,
    discountPercent: 15,
    rating: 4.8,
    reviewsCount: 85,
    inStock: true,
    isPopular: true,
    warranty: "10 Year Official LG Company Warranty",
    image: "/products/product_9.jpg",
    images: ["/products/product_9.jpg"],
    description: "Best Price in Sri Lanka! LG 308L Refrigerator in Shiny Steel Finish, Model No: GLM332RPZI. Features Smart Inverter Compressor with 10-year warranty guarantee and fast cooling.",
    specifications: {
      "Model No": "GLM332RPZI",
      "Capacity": "308 Litres",
      "Finish": "Shiny Steel Metallic",
      "Compressor": "Smart Inverter Compressor",
      "Delivery": "Islandwide Cash on Delivery Available"
    },
    energyRating: "5 Star Rated"
  },
  {
    id: "ac-hisense-12000btu",
    name: "Hisense 12,000 BTU Air Conditioner (Model: AS12TW4RYRKG05B)",
    brand: "Hisense",
    category: "ac",
    price: 145990,
    originalPrice: 175000,
    discountPercent: 16,
    rating: 4.9,
    reviewsCount: 118,
    inStock: true,
    isPopular: true,
    isNew: true,
    warranty: "5 Year Compressor Warranty + 1 Year Unit",
    image: "/products/product_10.jpg",
    images: ["/products/product_10.jpg"],
    description: "Best Price in Sri Lanka! Hisense 12,000 BTU Air Conditioner, Model No: AS12TW4RYRKG05B. Features Fast Cooling, Low Noise Operation, High Density Air Filter, Energy Efficient, and Dehumidification function.",
    specifications: {
      "Model No": "AS12TW4RYRKG05B",
      "Capacity": "12,000 BTU / 1.5 Ton",
      "Features": "Fast Cooling, Low Noise, High Density Filter, Dehumidifier",
      "Payment": "Visa & MasterCard Accepted",
      "Delivery": "Islandwide Cash on Delivery Available"
    },
    energyRating: "A++ Energy Saver"
  },
  {
    id: "ac-abans-12000btu-r32",
    name: "Abans Eco 12,000 BTU Inverter R32 Air Conditioner (Model: ABECON-12R32P)",
    brand: "Abans",
    category: "ac",
    price: 139990,
    originalPrice: 168000,
    discountPercent: 17,
    rating: 4.8,
    reviewsCount: 96,
    inStock: true,
    isPopular: true,
    warranty: "5 Year Compressor Warranty + 1 Year Abans Warranty",
    image: "/products/product_11.jpg",
    images: ["/products/product_11.jpg"],
    description: "Best Price in Sri Lanka! Abans Eco 12,000 BTU Inverter R32 Air Conditioner, Model No: ABECON-12R32P. Features Eco Friendly R32 Refrigerant, Fast Cooling, Energy Efficient Inverter, and Low Noise operation.",
    specifications: {
      "Model No": "ABECON-12R32P",
      "Capacity": "12,000 BTU Inverter",
      "Refrigerant": "Eco Friendly R32 Gas",
      "Features": "Fast Cooling, Low Noise, High Density Filter",
      "Payment": "Visa & MasterCard Accepted"
    },
    energyRating: "A+++ Inverter Saver"
  },
  {
    id: "ac-haier-12000btu",
    name: "Haier 12,000 BTU Inverter Air Conditioner (Model: HSA13K-PC3B-INVEX)",
    brand: "Haier",
    category: "ac",
    price: 149590,
    originalPrice: 179900,
    discountPercent: 16,
    rating: 4.9,
    reviewsCount: 84,
    inStock: true,
    isPopular: true,
    isNew: true,
    warranty: "5 Year Compressor Warranty",
    image: "/products/product_12.jpg",
    images: ["/products/product_12.jpg"],
    description: "Best Price in Sri Lanka! Haier 12,000 BTU Air Conditioner, Model No: HSA13K-PC3B-INVEX. Features Fast Turbo Cooling, Low Noise Operation, Anti-Dust Filter, Energy Efficient, and Dehumidification.",
    specifications: {
      "Model No": "HSA13K-PC3B-INVEX",
      "Capacity": "12,000 BTU",
      "Filter": "Anti-Dust Filter",
      "Features": "Fast Cooling, Low Noise, Dehumidification",
      "Payment": "Visa & MasterCard Accepted"
    },
    energyRating: "A++ Energy Saver"
  },
  {
    id: "ac-lg-12000btu-dual-inverter",
    name: "LG 12,000 BTU Dual Inverter Air Conditioner (Model: S3-Q12JABL)",
    brand: "LG",
    category: "ac",
    price: 215990,
    originalPrice: 255000,
    discountPercent: 15,
    rating: 5.0,
    reviewsCount: 142,
    inStock: true,
    isPopular: true,
    isNew: true,
    warranty: "10 Year Dual Inverter Compressor Warranty",
    image: "/products/product_13.jpg",
    images: ["/products/product_13.jpg"],
    description: "Best Price in Sri Lanka! LG 12,000 BTU Dual Inverter Air Conditioner, Model No: S3-Q12JABL. Features Dual Inverter Technology for up to 70% energy saving and 40% faster cooling, Low Noise, and Anti-Dust filter.",
    specifications: {
      "Model No": "S3-Q12JABL",
      "Capacity": "12,000 BTU Dual Inverter",
      "Compressor": "10-Year Dual Inverter Compressor",
      "Features": "Dual Inverter Technology, Fast Cooling, Anti-Dust Filter",
      "Payment": "Visa & MasterCard Accepted"
    },
    energyRating: "5 Star Dual Inverter"
  }
];

