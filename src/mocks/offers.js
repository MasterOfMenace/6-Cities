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
    type: `Private room`
  },
  {
    id: 2,
    name: `Wood and stone place`,
    picture: `img/apartment-01.jpg`,
    price: createPrice(),
    type: `Apartment`
  },
  {
    id: 3,
    name: `Cozy hostel in the city center`,
    picture: `img/apartment-01.jpg`,
    price: createPrice(),
    type: `Hostel`
  },
  {
    id: 4,
    name: `Apartment with beautiful city view`,
    picture: `img/apartment-01.jpg`,
    price: createPrice(),
    type: `Apartment`
  },
];
