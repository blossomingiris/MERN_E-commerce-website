//dummy data for products

const products = [
  {
    name: 'Perfume1',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 5,
    size: 50,
    price: 100,
    category: 'Perfume',
    images: [
      { path: '/assets/categories/perfume_category.png' },
      { path: '/assets/products/perfume/perfume_1' },
      ,
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [{ key: 'Notes', value: ['Vetiver', 'Neroli', 'Amber'] }],
  },
  {
    name: 'Perfume2',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 5,
    size: 50,
    price: 100,
    category: 'Perfume',
    images: [
      { path: '/assets/categories/perfume_category.png' },
      { path: '/assets/products/perfume/perfume_2' },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [{ key: 'Notes', value: ['Vetiver', 'Neroli', 'Amber'] }],
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
    rating: 5,
    reviewsNumber: 1,
    reviews: [],
  },
  {
    name: 'Diffuser1',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 5,
    size: 85,
    price: 100,
    category: 'Home/Diffusers',
    images: [
      { path: '/assets/categories/home_category.png' },
      { path: '/assets/products/diffusers/diffuser_1' },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
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
    attrs: [{ key: 'Notes', value: ['Orange', 'Jasmine'] }],
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
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
    attrs: [{ key: 'Notes', value: ['Rosewood', 'Sandalwood', 'Cedarwood'] }],
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
    rating: 4,
    reviewsNumber: 3,
    reviews: [],
    attrs: [{ key: 'Notes', value: ['Rosewood', 'Sandalwood', 'Cedarwood'] }],
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
    rating: 1,
    reviewsNumber: 5,
    reviews: [],
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
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
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
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
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
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
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
    rating: 4,
    reviewsNumber: 3,
    reviews: [],
    attrs: [{ key: 'Notes', value: ['Rosemary', 'Lemon'] }],
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
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      {
        key: 'Notes',
        value: ['Bergamot', 'Mandarin', 'Nutmeg', 'Pepper'],
      },
    ],
  },
  {
    name: 'Perfume9',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 10,
    size: 50,
    price: 100,
    category: 'Perfume',
    images: [
      { path: '/assets/categories/perfume_category.png' },
      { path: '/assets/products/perfume/perfume_9' },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
    attrs: [
      {
        key: 'Notes',
        value: ['Bergamot', 'Ginger', 'Musk'],
      },
    ],
  },
  {
    name: 'Solid soap1',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 15,
    size: 75,
    price: 7,
    category: 'Hands',
    images: [
      { path: '/assets/categories/hands_category.png' },
      { path: '/assets/products/solid_soap/solid_soap_1' },
    ],
    rating: 4,
    reviewsNumber: 1,
    reviews: [],
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
    rating: 4,
    reviewsNumber: 2,
    reviews: [],
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
    rating: 4,
    reviewsNumber: 3,
    reviews: [],
  },
]

module.exports = products
