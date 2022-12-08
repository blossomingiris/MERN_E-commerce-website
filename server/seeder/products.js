//dummy data for products

const products = [
  {
    name: 'Perfume 01',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 5,
    size: 50,
    price: 100,
    sales: 10,
    category: 'Perfume',
    images: [{ path: 'category.png' }, { path: 'perfume_01.jpg' }],
    attrs: [
      {
        key: 'notes',
        value: ['floral', 'woody', 'oriental', 'fresh'],
      },
    ],
  },
  {
    name: 'Perfume 02',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 5,
    size: 50,
    price: 100,
    sales: 5,
    category: 'Perfume',
    images: [{ path: '/category.png' }, { path: 'perfume_02.jpg' }, ,],
    attrs: [
      {
        key: 'notes',
        value: ['floral', 'oriental', 'fresh'],
      },
    ],
  },
  {
    name: 'Candles 01',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 5,
    size: 170,
    price: 6,
    sales: 3,
    category: 'Home/Candles',
    images: [{ path: 'category.png' }, { path: 'candle_01.jpg' }],
  },
  {
    name: 'Diffuser 01',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 0,
    size: 85,
    price: 100,
    sales: 1,
    category: 'Home/Diffusers',
    attrs: [
      {
        key: 'notes',
        value: ['fruity'],
      },
    ],
    images: [{ path: 'category.png' }, { path: 'diffuser_01.jpg' }],
  },
  {
    name: 'Perfume 03',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 1,
    size: 100,
    price: 200,
    sales: 30,
    category: 'Perfume',
    images: [{ path: 'category.png' }, { path: 'perfume_03.jpg' }],
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
    name: 'Perfume 04',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 15,
    size: 100,
    price: 200,
    category: 'Perfume',
    images: [{ path: 'category.png' }, { path: 'perfume_04.jpg' }],
    attrs: [
      {
        key: 'notes',
        value: ['floral'],
      },
    ],
  },
  {
    name: 'Perfume 05',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 20,
    size: 75,
    price: 150,
    category: 'Perfume',
    images: [{ path: 'category.png' }, { path: 'perfume_05.jpg' }],
    attrs: [
      {
        key: 'notes',
        value: ['fruity'],
      },
    ],
  },
  {
    name: 'Bath salt 01',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 25,
    size: 500,
    price: 30,
    category: 'Bath',
    images: [{ path: 'category.png' }, { path: 'bath_salt_01.jpg' }],
  },
  {
    name: 'Bath salt 02',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 5,
    size: 500,
    price: 30,
    category: 'Bath',
    images: [{ path: 'category.png' }, { path: 'bath_salt_02.jpg' }],
  },

  {
    name: 'Bath salt 03',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 5,
    size: 500,
    price: 30,
    category: 'Bath',
    images: [{ path: 'category.png' }, { path: 'bath_salt_03.jpg' }],
  },

  {
    name: 'Bath salt 04',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 5,
    size: 500,
    price: 30,
    category: 'Bath',
    images: [{ path: 'category.png' }, { path: 'bath_salt_04.jpg' }],
  },
  {
    name: 'Candle 02',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 40,
    size: 170,
    price: 5,
    category: 'Home',
    images: [{ path: 'category.png' }, { path: 'candle_02.jpg' }],
  },
  {
    name: 'Candle 03',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 15,
    size: 300,
    price: 5,
    category: 'Home',
    images: [{ path: 'category.png' }, { path: 'candle_03.jpg' }],
  },
  {
    name: 'Perfume 06',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 20,
    size: 100,
    price: 200,
    category: 'Perfume',
    images: [{ path: 'category.jpg' }, { path: 'perfume_06.jpg' }],
    attrs: [{ key: 'notes', value: ['fresh', 'green'] }],
  },
  {
    name: 'Perfume 07',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 25,
    size: 10,
    price: 50,
    category: 'Perfume',
    images: [{ path: 'category.png' }, { path: 'perfume_07.jpg' }],
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
    name: 'Perfume 08',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 5,
    size: 10,
    price: 100,
    category: 'Perfume',
    images: [{ path: 'category.png' }, { path: 'perfume_08.jpg' }],
    attrs: [
      {
        key: 'notes',
        value: ['floral', 'fruity'],
      },
    ],
  },
  {
    name: 'Diffuser 02',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 0,
    size: 85,
    price: 100,
    category: 'Home',
    images: [{ path: 'home.png' }, { path: 'diffuser_02.jpg' }],
    attrs: [
      {
        key: 'notes',
        value: ['woody', 'fruity'],
      },
    ],
  },

  {
    name: 'Diffuser 03',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 0,
    size: 85,
    price: 100,
    category: 'Home',
    images: [{ path: 'home.png' }, { path: 'diffuser_03.jpg' }],
    attrs: [
      {
        key: 'notes',
        value: ['oriental'],
      },
    ],
  },
  {
    name: 'Solid soap 01',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 0,
    size: 75,
    price: 7,
    category: 'Bath',
    images: [{ path: 'category.png' }, { path: 'soap_01.jpg' }],
  },
  {
    name: 'Solid soap 02',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 20,
    size: 75,
    price: 7,
    category: 'Bath',
    images: [{ path: 'category.png' }, { path: 'soap_02.jpg' }],
  },

  {
    name: 'Solid soap 03',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 20,
    size: 75,
    price: 7,
    category: 'Bath',
    images: [{ path: 'category.png' }, { path: 'soap_03.jpg' }],
  },

  {
    name: 'Hand cream 01',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 50,
    size: 50,
    price: 15,
    category: 'Hands',
    images: [{ path: 'category.png' }, { path: 'hand_cream_01.jpg' }],
  },

  {
    name: 'Hand cream 02',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 50,
    size: 50,
    price: 15,
    category: 'Hands',
    images: [{ path: 'category.png' }, { path: 'hand_cream_02.jpg' }],
  },
  {
    name: 'Hand cream 03',
    description:
      'Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.',
    count: 20,
    size: 50,
    price: 15,
    sales: 4,
    category: 'Hands',
    images: [{ path: 'category.png' }, { path: 'hand_cream_03.jpg' }],
  },
]

module.exports = products
