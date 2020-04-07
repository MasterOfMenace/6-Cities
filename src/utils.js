import {MonthNames, SortType} from './const.js';

const STAR_WIDTH = 20;

export const getCurrentOffers = (offers, city) => offers.filter((offer) => offer.city.name === city.name);

export const sortOffers = (offers, sortType) => {
  switch (sortType) {
    case SortType.POPULAR:
      return offers;

    case SortType.LOW_TO_HIGH:
      return offers.slice().sort((a, b) => a.price - b.price);

    case SortType.HIGH_TO_LOW:
      return offers.slice().sort((a, b) => b.price - a.price);

    case SortType.TOP_RATED:
      return offers.slice().sort((a, b) => b.rating - a.rating);
  }

  return null;
};

export const formatDate = (date) => {
  const month = MonthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
};

export const formatRating = (rating, starWidth = STAR_WIDTH) => {
  return Math.round(rating) * starWidth;
};

export const sortReviews = (reviews) => {
  return reviews.slice().sort((a, b) => {
    const aDate = Date.parse(a.date);
    const bDate = Date.parse(b.date);
    return bDate - aDate;
  });
};
