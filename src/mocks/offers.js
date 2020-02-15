const createPrice = () => {
  const minPrice = 10;
  const maxPrice = 10000;

  return Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
};

export default [
  {
    name: `Room in hotel`,
    picture: `img/apartment-01.jpg`,
    price: createPrice(),
    type: `Private room`
  },
  {
    name: `Wood and stone place`,
    picture: `img/apartment-01.jpg`,
    price: createPrice(),
    type: `Apartment`
  },
  {
    name: `Cozy hostel in the city center`,
    picture: `img/apartment-01.jpg`,
    price: createPrice(),
    type: `Hostel`
  },
  {
    name: `Apartment with beautiful city view`,
    picture: `img/apartment-01.jpg`,
    price: createPrice(),
    type: `Apartment`
  },
];
