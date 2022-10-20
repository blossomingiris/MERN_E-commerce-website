//dummy data for products

const products = [
  {
    name: 'Perfume1',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 5,
    size: 50,
    price: 100,
    sales: 10,
    category: 'Perfume',
    images: [
      { path: '/assets/categories/perfume_category.png' },
      { path: '/assets/products/perfume/perfume_1' },
      ,
    ],
    attrs: [
      {
        key: 'notes',
        value: ['floral', 'woody', 'oriental', 'fresh'],
      },
    ],
  },
  {
    name: 'Perfume2',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 5,
    size: 50,
    price: 100,
    sales: 5,
    category: 'Perfume',
    images: [
      { path: '/assets/categories/perfume_category.png' },
      { path: '/assets/products/perfume/perfume_2' },
    ],
    attrs: [
      {
        key: 'notes',
        value: ['floral', 'oriental', 'fresh'],
      },
    ],
  },
  {
    name: 'Candles1',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 5,
    size: 170,
    price: 45,
    category: 'Home/Candles',
    images: [
      { path: '/assets/categories/home_category.png' },
      { path: '/assets/products/candles/candles_1' },
    ],
  },
  {
    name: 'Diffuser1',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 5,
    size: 85,
    price: 100,
    sales: 100,
    category: 'Home/Diffusers',
    images: [
      { path: '/assets/categories/home_category.png' },
      { path: '/assets/products/diffusers/diffuser_1' },
    ],
  },
  {
    name: 'Perfume3 Lorem ipsum dolor sit amet',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 10,
    size: 100,
    price: 200,
    category: 'Perfume',
    images: [
      { path: '/assets/categories/perfume_category.png' },
      { path: '/assets/products/perfume/perfume_3' },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      {
        key: 'notes',
        value: ['floral', 'fresh'],
      },
    ],
  },
  {
    name: 'Perfume4',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 15,
    size: 100,
    price: 200,
    category: 'Perfume',
    images: [
      { path: '/assets/categories/perfume_category.png' },
      { path: '/assets/products/perfume/perfume_4' },
    ],
    attrs: [
      {
        key: 'notes',
        value: ['floral'],
      },
    ],
  },
  {
    name: 'Perfume5',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 20,
    size: 75,
    price: 150,
    category: 'Perfume',
    images: [
      { path: '/assets/categories/perfume_category.png' },
      { path: '/assets/products/perfume/perfume_5' },
    ],
    attrs: [
      {
        key: 'notes',
        value: ['fruity'],
      },
    ],
  },
  {
    name: 'Sea salt1',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 25,
    size: 500,
    price: 30,
    category: 'Bath',
    images: [
      { path: '/assets/categories/bath_category.png' },
      { path: '/assets/products/sea_salt/sea_salt_1' },
    ],
  },
  {
    name: 'Sea salt2',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 5,
    size: 500,
    price: 30,
    category: 'Home',
    images: [
      { path: '/assets/categories/bath_category.png' },
      { path: '/assets/products/sea_salt/sea_salt_2' },
    ],
  },
  {
    name: 'Shower Gel1',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 40,
    size: 300,
    price: 25,
    category: 'Bath',
    images: [
      { path: '/assets/categories/bath_category.png' },
      { path: '/assets/products/shower_gel/shower_gel_1' },
    ],
  },
  {
    name: 'Shower Gel2',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 15,
    size: 300,
    price: 25,
    category: 'Bath',
    images: [
      { path: '/assets/categories/bath_category.png' },
      { path: '/assets/products/shower_gel/shower_gel_2' },
    ],
  },
  {
    name: 'Perfume6',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 20,
    size: 100,
    price: 200,
    category: 'Perfume',
    images: [
      { path: '/assets/categories/perfume_category.png' },
      { path: '/assets/products/perfume/perfume_6' },
    ],
    attrs: [{ key: 'notes', value: ['fresh', 'green'] }],
  },
  {
    name: 'Perfume7',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 25,
    size: 10,
    price: 50,
    category: 'Perfume',
    images: [
      { path: '/assets/categories/perfume_category.png' },
      { path: '/assets/products/perfume/perfume_7' },
    ],
    rating: 5,
    reviewsNumber: 4,
    reviews: [],
    attrs: [
      {
        key: 'Notes',
        value: ['Black Pepper', 'Vetiver', 'Neroli', 'Amber'],
      },
    ],
  },
  {
    name: 'Perfume8',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 5,
    size: 10,
    price: 100,
    category: 'Perfume',
    images: [
      { path: '/assets/categories/perfume_category.png' },
      { path: '/assets/products/perfume/perfume_8' },
    ],
    attrs: [
      {
        key: 'notes',
        value: ['floral', 'fruity'],
      },
    ],
  },
  {
    name: 'Perfume9',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 0,
    size: 50,
    price: 100,
    category: 'Perfume',
    images: [
      { path: '/assets/categories/perfume_category.png' },
      { path: '/assets/products/perfume/perfume_9' },
    ],
    attrs: [
      {
        key: 'notes',
        value: ['woody', 'fruity'],
      },
    ],
  },
  {
    name: 'Solid soap1',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 0,
    size: 75,
    price: 7,
    category: 'Hands',
    images: [
      { path: '/assets/categories/hands_category.png' },
      { path: '/assets/products/solid_soap/solid_soap_1' },
    ],
  },
  {
    name: 'Solid soap2',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 20,
    size: 75,
    price: 7,
    category: 'Hands',
    images: [
      { path: '/assets/categories/hands_category.png' },
      { path: '/assets/products/solid_soap/solid_soap_2' },
    ],
  },
  {
    name: 'Hand cream1',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 50,
    size: 50,
    price: 15,
    category: 'Hands',
    images: [
      { path: '/assets/categories/hands_category.png' },
      { path: '/assets/products/hand_cream/hand_cream_1' },
    ],
  },
]

module.exports = products
