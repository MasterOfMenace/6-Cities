const Price = {
  MIN: 10,
  MAX: 10000
};

const createPrice = () => {
  return Math.floor(Math.random() * (Price.MAX - Price.MIN + 1)) + Price.MIN;
};

export default [
  {
    id: 1,
    name: `Room in hotel`,
    picture: `img/apartment-01.jpg`,
    price: createPrice(),
    type: `Private room`,
    location: [52.3909553943508, 4.85309666406198]
  },
  {
    id: 2,
    name: `Wood and stone place`,
    picture: `img/apartment-01.jpg`,
    price: createPrice(),
    type: `Apartment`,
    location: [52.369553943508, 4.85309666406198]
  },
  {
    id: 3,
    name: `Cozy hostel in the city center`,
    picture: `img/apartment-01.jpg`,
    price: createPrice(),
    type: `Hostel`,
    location: [52.3909553943508, 4.929309666406198]
  },
  {
    id: 4,
    name: `Apartment with beautiful city view`,
    picture: `img/apartment-01.jpg`,
    price: createPrice(),
    type: `Apartment`,
    location: [52.3809553943508, 4.939309666406198]
  },
];
