export type Product = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

export type Products = Product[];

export const MARTABAK_MANIS: Products = [
  {
    id: "73a391f6-5e99-451a-ba90-9221d22ed8f3",
    title: "Martabak Manis Keju",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/images/martabak1.jpeg",
    price: 35000,
    options: [
      {
        title: "Kecil",
        additionalPrice: 0,
      },
      {
        title: "Sedang",
        additionalPrice: 4000,
      },
      {
        title: "Besar",
        additionalPrice: 6000,
      },
    ],
  },
  {
    id: "ab640bb1-c840-4a4b-9200-ae99d2621710",
    title: "Martabak Manis Coklat",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
    img: "/images/martabak2.jpeg",
    price: 35000,
    options: [
      {
        title: "Kecil",
        additionalPrice: 0,
      },
      {
        title: "Sedang",
        additionalPrice: 4000,
      },
      {
        title: "Besar",
        additionalPrice: 6000,
      },
    ],
  },
  {
    id: "b372a9ad-05ed-4bf2-a2f2-09ad78ace9f3",
    title: "Martabak Manis Ketan",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/images/martabak3.jpeg",
    price: 35000,
    options: [
      {
        title: "Kecil",
        additionalPrice: 0,
      },
      {
        title: "Sedang",
        additionalPrice: 4000,
      },
      {
        title: "Besar",
        additionalPrice: 6000,
      },
    ],
  },
];
export const MARTABAK_TELOR: Products = [
  {
    id: "73a391f6-5e99-451a-ba90-9221d22eg8f3",
    title: "Martabak Telor Keju",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/images/martelor1.jpeg",
    price: 35000,
    options: [
      {
        title: "Kecil",
        additionalPrice: 0,
      },
      {
        title: "Sedang",
        additionalPrice: 4000,
      },
      {
        title: "Besar",
        additionalPrice: 6000,
      },
    ],
  },
  {
    id: "ab640bb1-c840-4a4b-9200-ae93d2621710",
    title: "Martabak Telor Coklat",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
    img: "/images/martelor2.jpeg",
    price: 35000,
    options: [
      {
        title: "Kecil",
        additionalPrice: 0,
      },
      {
        title: "Sedang",
        additionalPrice: 4000,
      },
      {
        title: "Besar",
        additionalPrice: 6000,
      },
    ],
  },
  {
    id: "b372a9ad-05ed-4bf2-a1f2-09ad78ace9f3",
    title: "Martabak Telor Ketan",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/images/martelor3.jpeg",
    price: 35000,
    options: [
      {
        title: "Kecil",
        additionalPrice: 0,
      },
      {
        title: "Sedang",
        additionalPrice: 4000,
      },
      {
        title: "Besar",
        additionalPrice: 6000,
      },
    ],
  },
];
export const MARTABAK_KERING: Products = [
  {
    id: "73a391f6-5e99-451a-ba90-9256d22ed8f3",
    title: "Martabak Kering Keju",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/images/markering1.jpeg",
    price: 35000,
    options: [
      {
        title: "Kecil",
        additionalPrice: 0,
      },
      {
        title: "Sedang",
        additionalPrice: 4000,
      },
      {
        title: "Besar",
        additionalPrice: 6000,
      },
    ],
  },
  {
    id: "ab640bb1-c840-4a4b-9110-ae99d2621710",
    title: "Martabak Kering Coklat",
    desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
    img: "/images/markering1.jpeg",
    price: 35000,
    options: [
      {
        title: "Kecil",
        additionalPrice: 0,
      },
      {
        title: "Sedang",
        additionalPrice: 4000,
      },
      {
        title: "Besar",
        additionalPrice: 6000,
      },
    ],
  },
  {
    id: "b372a9ad-05ed-5216-a2f2-09ad78ace9f3",
    title: "Martabak Kering Ketan",
    desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
    img: "/images/markering1.jpeg",
    price: 35000,
    options: [
      {
        title: "Kecil",
        additionalPrice: 0,
      },
      {
        title: "Sedang",
        additionalPrice: 4000,
      },
      {
        title: "Besar",
        additionalPrice: 6000,
      },
    ],
  },
];

export const singleProduct: Product = {
  id: "833c1f58-648c-472a-99ca-15aa89ab9737",
  title: "Martabak Manis Keju",
  desc: "Nikmati Martabak Manis kami yang lezat, dengan lapisan tipis yang renyah dan penuh dengan berbagai pilihan topping manis seperti cokelat, keju, kacang, dan masih banyak lagi. Pesan sekarang dan rasakan kelezatannya!",
  img: "/images/martabak1.jpeg",
  price: 30000,
  options: [
    {
      title: "Kecil",
      additionalPrice: 0,
    },
    {
      title: "Sedang",
      additionalPrice: 4000,
    },
    {
      title: "Besar",
      additionalPrice: 6000,
    },
  ],
};

export type MenuType = {
  id: string;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
}[];
