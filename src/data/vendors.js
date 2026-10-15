
//tambah 8 menu setiap mahallah, ubah location, masa semua
const vendors = [
 {
 id: 'kafe-ali',
 name: 'Kafe Mahallah Ali',
 location: 'Mahallah Ali, Central facilities',
 openHours: '7:00 am - 10:00 pm',
 isOpen: true,
 menu: [
      {
        id: 'ali-1',
        name: 'Nasi Lemak Ayam',
        description: 'Coconut rice with chicken',
        price: 7.0,
        category: 'Rice',
        available: true
      },
      {
        id: 'ali-2',
        name: 'Nasi Goreng Kampung',
        description: 'Fried rice with vegetables and egg',
        price: 6.0,
        category: 'Rice',
        available: true
      },
      {
        id: 'ali-3',
        name: 'Nasi Ayam',
        description: 'Rice served with chicken and soup',
        price: 7.5,
        category: 'Rice',
        available: true
      },
      {
        id: 'ali-4',
        name: 'Mee Goreng',
        description: 'Stir-fried noodles with vegetables and egg',
        price: 6.0,
        category: 'Noodles',
        available: true
      },
      {
        id: 'ali-5',
        name: 'Maggi Goreng',
        description: 'Fried instant noodles with egg',
        price: 5.0,
        category: 'Noodles',
        available: true
      },
      {
        id: 'ali-6',
        name: 'Roti Canai',
        description: 'Flatbread served with dhal curry',
        price: 2.0,
        category: 'Bread',
        available: true
      },
      {
        id: 'ali-7',
        name: 'Kopi ais',
        description: 'Iced coffee',
        price: 2.5,
        category: 'Drinks',
        available: true
      },
      {
        id: 'ali-8',
        name: 'Milo Ais',
        description: 'Iced chocolate malt drink',
        price: 3.0,
        category: 'Drinks',
        available: true
      }
    ]
 },

 {
 id: 'kafe-siddiq',
 name: 'Kafe Mahallah Siddiq',
 location: 'Mahallah Siddiq, Central facilities',
 openHours: '8:00 am - 11:00 pm',
 isOpen: true,
 
 menu: [
    {
      id: 'siddiq-1',
      name: 'Nasi Goreng Kampung',
      description: 'Fried rice with vegetables, anchovies and egg',
      price: 6.0,
      category: 'Rice',
      available: true
    },
    {
      id: 'siddiq-2',
      name: 'Nasi Ayam',
      description: 'Chicken rice served with soup and chilli sauce',
      price: 7.5,
      category: 'Rice',
      available: true
    },
    {
      id: 'siddiq-3',
      name: 'Mi Tarik',
      description: 'Pulled noodle with beef',
      price: 8.0,
      category: 'Noodles',
      available: true
    },
    {
      id: 'siddiq-4',
      name: 'Mee Goreng',
      description: 'Stir-fried noodles with vegetables and egg',
      price: 6.0,
      category: 'Noodles',
      available: true
    },
    {
      id: 'siddiq-5',
      name: 'Kuey Teow Goreng',
      description: 'Stir-fried flat rice noodles with vegetables',
      price: 6.5,
      category: 'Noodles',
      available: true
    },
    {
      id: 'siddiq-6',
      name: 'Roti Canai',
      description: 'Flaky flatbread served with dhal curry',
      price: 2.0,
      category: 'Bread',
      available: true
    },
    {
      id: 'siddiq-7',
      name: 'Teh Tarik',
      description: 'Traditional pulled milk tea',
      price: 2.5,
      category: 'Drinks',
      available: true
    },
    {
      id: 'siddiq-8',
      name: 'Sirap Bandung Ais',
      description: 'Iced rose syrup drink with milk',
      price: 3.0,
      category: 'Drinks',
      available: true
    }
  ]
 },

 {
 id: 'kafe-faruq',
 name: 'Kafe Mahallah Faruq',
 location: 'Mahallah Faruq, Central facilities',
 openHours: '7:00 am - 11:00 pm',
 isOpen: true,
 
 menu: [
    {
      id: 'faruq-1',
      name: 'Nasi Goreng Cina',
      description: 'Chinese-style fried rice with vegetables and egg',
      price: 6.0,
      category: 'Rice',
      available: true
    },
    {
      id: 'faruq-2',
      name: 'Nasi Ayam Gepuk',
      description: 'Fried chicken with rice, sambal and vegetables',
      price: 9.0,
      category: 'Rice',
      available: true
    },
    {
      id: 'faruq-3',
      name: 'Nasi Goreng Pattaya',
      description: 'Fried rice wrapped in an omelette',
      price: 7.0,
      category: 'Rice',
      available: true
    },
    {
      id: 'faruq-4',
      name: 'Spaghetti Bolognese',
      description: 'Spaghetti served with tomato meat sauce',
      price: 8.0,
      category: 'Western',
      available: true
    },
    {
      id: 'faruq-5',
      name: 'Chicken Chop',
      description: 'Chicken chop served with fries and black pepper sauce',
      price: 12.0,
      category: 'Western',
      available: true
    },
    {
      id: 'faruq-6',
      name: 'Chicken Burger',
      description: 'Chicken burger with lettuce and sauce',
      price: 6.0,
      category: 'Western',
      available: true
    },
    {
      id: 'faruq-7',
      name: 'Iced Lemon Tea',
      description: 'Refreshing iced tea with lemon',
      price: 3.0,
      category: 'Drinks',
      available: true
    },
    {
      id: 'faruq-8',
      name: 'Chocolate Milkshake',
      description: 'Creamy chocolate-flavoured milkshake',
      price: 5.0,
      category: 'Drinks',
      available: true
    }
  ]
 },
]
export default vendors
