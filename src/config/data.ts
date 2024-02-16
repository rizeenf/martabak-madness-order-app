type Product = {
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

type Menu = {
  id: string;
  slug: string;
  title: string;
  desc?: string;
  href: string;
  img?: string;
}[];

export const menu: Menu = [
  {
    id: "66813278-e384-432d-b284-1db7d7e283f4",
    slug: "martabakmanis",
    title: "Martabak Manis",
    desc: "Nikmati Martabak Manis kami yang lezat, dengan lapisan tipis yang renyah dan penuh dengan berbagai pilihan topping manis seperti cokelat, keju, kacang, dan masih banyak lagi. Pesan sekarang dan rasakan kelezatannya!",
    img: "/images/martabak1.jpeg",
    href: "/menu/martabak-manis",
  },
  {
    id: "4d2fd3ac-c02c-4133-84ca-fbb0df366b2c",
    slug: "martabaktelor",
    title: "Martabak Telor",
    desc: "Sajian Martabak Telur kami adalah campuran sempurna dari telur, daging cincang, bawang, dan rempah-rempah yang disajikan dengan kulit tipis yang garing di luar dan lembut di dalam. Pesan sekarang dan nikmati sensasi gurihnya!",
    img: "/images/martelor1.jpeg",
    href: "/menu/martabak-telor",
  },
  {
    id: "dd8f4968-0c8b-48fe-9922-5a81ca5c2c7a",
    slug: "martabakkering",
    title: "Martabak Kering",
    desc: "Martabak Kering kami menghadirkan cita rasa khas Indonesia dengan adonan yang renyah dan isiannya yang lezat. Terdiri dari berbagai pilihan rasa tradisional seperti daging, keju, kacang, dan masih banyak lagi. Pesan sekarang dan rasakan kenikmatannya!",
    img: "/images/markering1.jpeg",
    href: "/menu/martabak-kering",
  },
];
