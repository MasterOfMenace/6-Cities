const Price = {
  MIN: 10,
  MAX: 10000
};

const ReviewsCount = {
  MIN: 0,
  MAX: 12
};

const Authors = [`Michael`, `Johnny`, `Derek`, `Peter`, `Anna`, `Dave`, `Susan`, `Maria`, `Helen`, `Jesse`];

const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createAuthor = () => {
  return Authors[getRandomValue(0, Authors.length - 1)];
};

const createReviews = (count) => {
  const reviews = Array(count);
  reviews.fill({}).forEach((element, index, array) => {
    array[index] = Object.assign({}, element, {
      author: createAuthor(),
      avatar: `img/avatar-max.jpg`,
      text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      time: new Date().toISOString()
    });
  }
  );
  return reviews;
};

export default [
  {
    id: 1,
    name: `Room in hotel`,
    picture: `img/apartment-01.jpg`,
    price: getRandomValue(Price.MIN, Price.MAX),
    type: `Private room`,
    location: [52.3909553943508, 4.85309666406198],
    reviews: createReviews(getRandomValue(ReviewsCount.MIN, ReviewsCount.MAX))
  },
  {
    id: 2,
    name: `Wood and stone place`,
    picture: `img/apartment-01.jpg`,
    price: getRandomValue(Price.MIN, Price.MAX),
    type: `Apartment`,
    location: [52.369553943508, 4.85309666406198],
    reviews: createReviews(getRandomValue(ReviewsCount.MIN, ReviewsCount.MAX))
  },
  {
    id: 3,
    name: `Cozy hostel in the city center`,
    picture: `img/apartment-01.jpg`,
    price: getRandomValue(Price.MIN, Price.MAX),
    type: `Hostel`,
    location: [52.3909553943508, 4.929309666406198],
    reviews: createReviews(getRandomValue(ReviewsCount.MIN, ReviewsCount.MAX))
  },
  {
    id: 4,
    name: `Apartment with beautiful city view`,
    picture: `img/apartment-01.jpg`,
    price: getRandomValue(Price.MIN, Price.MAX),
    type: `Apartment`,
    location: [52.3809553943508, 4.939309666406198],
    reviews: createReviews(getRandomValue(ReviewsCount.MIN, ReviewsCount.MAX))
  },
];
