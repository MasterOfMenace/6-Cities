import {MonthNames} from '../const.js';

const Price = {
  MIN: 10,
  MAX: 10000
};

const ReviewsCount = {
  MIN: 0,
  MAX: 12
};

const Years = {
  MIN: 2017,
  MAX: 2020
};

const Days = {
  MIN: 1,
  MAX: 28
};

const Authors = [`Michael`, `Johnny`, `Derek`, `Peter`, `Anna`, `Dave`, `Susan`, `Maria`, `Helen`, `Jesse`];

export const Cities = [
  {
    name: `Amsterdam`,
    location: [52.38333, 4.9]
  },
  {
    name: `Paris`,
    location: [48.85657, 2.35186]
  },
  {
    name: `Cologne`,
    location: [50.93685, 6.9625]
  },
  {
    name: `Brussels`,
    location: [50.85300, 4.43792]
  },
  {
    name: `Hamburg`,
    location: [53.53539, 9.99371]
  },
  {
    name: `Dusseldorf`,
    location: [51.22977, 6.79138]
  },
];

const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createAuthor = () => {
  return Authors[getRandomValue(0, Authors.length - 1)];
};

const getRandomDate = () => {
  return new Date(`${getRandomValue(Days.MIN, Days.MAX)} ${MonthNames[getRandomValue(0, MonthNames.length - 1)]} ${getRandomValue(Years.MIN, Years.MAX)}`);
};

const createReviews = (count) => {
  const reviews = Array(count);
  reviews.fill({}).forEach((element, index, array) => {
    array[index] = Object.assign({}, element, {
      author: createAuthor(),
      avatar: `img/avatar-max.jpg`,
      text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      time: getRandomDate().toISOString()
    });
  }
  );
  return reviews;
};

export default [
  {
    id: 1,
    city: Cities[0],
    name: `Room in hotel`,
    picture: `img/apartment-01.jpg`,
    price: getRandomValue(Price.MIN, Price.MAX),
    type: `Private room`,
    location: [52.3909553943508, 4.85309666406198],
    reviews: createReviews(getRandomValue(ReviewsCount.MIN, ReviewsCount.MAX))
  },
  {
    id: 2,
    city: Cities[0],
    name: `Wood and stone place`,
    picture: `img/apartment-01.jpg`,
    price: getRandomValue(Price.MIN, Price.MAX),
    type: `Apartment`,
    location: [52.369553943508, 4.85309666406198],
    reviews: createReviews(getRandomValue(ReviewsCount.MIN, ReviewsCount.MAX))
  },
  {
    id: 3,
    city: Cities[1],
    name: `Cozy hostel in the city center`,
    picture: `img/apartment-01.jpg`,
    price: getRandomValue(Price.MIN, Price.MAX),
    type: `Hostel`,
    location: [48.858784, 2.350055],
    reviews: createReviews(getRandomValue(ReviewsCount.MIN, ReviewsCount.MAX))
  },
  {
    id: 4,
    city: Cities[1],
    name: `Apartment with beautiful city view`,
    picture: `img/apartment-01.jpg`,
    price: getRandomValue(Price.MIN, Price.MAX),
    type: `Apartment`,
    location: [48.855441475, 2.35451145],
    reviews: createReviews(getRandomValue(ReviewsCount.MIN, ReviewsCount.MAX))
  },
  {
    id: 5,
    city: Cities[2],
    name: `Apartment with beautiful city view`,
    picture: `img/apartment-01.jpg`,
    price: getRandomValue(Price.MIN, Price.MAX),
    type: `Apartment`,
    location: [50.3809553943508, 6.939309666406198],
    reviews: createReviews(getRandomValue(ReviewsCount.MIN, ReviewsCount.MAX))
  },
  {
    id: 6,
    city: Cities[2],
    name: `Apartment with beautiful city view`,
    picture: `img/apartment-01.jpg`,
    price: getRandomValue(Price.MIN, Price.MAX),
    type: `Apartment`,
    location: [50.3809553943508, 6.939309666406198],
    reviews: createReviews(getRandomValue(ReviewsCount.MIN, ReviewsCount.MAX))
  },
  {
    id: 7,
    city: Cities[3],
    name: `Room in hotel`,
    picture: `img/apartment-01.jpg`,
    price: getRandomValue(Price.MIN, Price.MAX),
    type: `Private room`,
    location: [50.85365165100, 4.45515792],
    reviews: createReviews(getRandomValue(ReviewsCount.MIN, ReviewsCount.MAX))
  },
  {
    id: 8,
    city: Cities[3],
    name: `Wood and stone place`,
    picture: `img/apartment-01.jpg`,
    price: getRandomValue(Price.MIN, Price.MAX),
    type: `Apartment`,
    location: [50.85345165100, 4.48115792],
    reviews: createReviews(getRandomValue(ReviewsCount.MIN, ReviewsCount.MAX))
  },
  {
    id: 9,
    city: Cities[4],
    name: `Cozy hostel in the city center`,
    picture: `img/apartment-01.jpg`,
    price: getRandomValue(Price.MIN, Price.MAX),
    type: `Hostel`,
    location: [53.53522339, 9.9933371],
    reviews: createReviews(getRandomValue(ReviewsCount.MIN, ReviewsCount.MAX))
  },
  {
    id: 10,
    city: Cities[4],
    name: `Apartment with beautiful city view`,
    picture: `img/apartment-01.jpg`,
    price: getRandomValue(Price.MIN, Price.MAX),
    type: `Apartment`,
    location: [53.53511039, 9.99001155371],
    reviews: createReviews(getRandomValue(ReviewsCount.MIN, ReviewsCount.MAX))
  },
  {
    id: 11,
    city: Cities[5],
    name: `Apartment with beautiful city view`,
    picture: `img/apartment-01.jpg`,
    price: getRandomValue(Price.MIN, Price.MAX),
    type: `Apartment`,
    location: [51.20000212977, 6.7459138],
    reviews: createReviews(getRandomValue(ReviewsCount.MIN, ReviewsCount.MAX))
  },
  {
    id: 12,
    city: Cities[5],
    name: `Apartment with beautiful city view`,
    picture: `img/apartment-01.jpg`,
    price: getRandomValue(Price.MIN, Price.MAX),
    type: `Apartment`,
    location: [51.2021212977, 6.74593138],
    reviews: createReviews(getRandomValue(ReviewsCount.MIN, ReviewsCount.MAX))
  },
];
