import {MonthNames} from './const.js';

const STAR_WIDTH = 20;

export const getCurrentOffers = (offers, city) => offers.filter((offer) => offer.city.name === city.name);

export const sortOffers = (offers, sortType) => {
  switch (sortType) {
    case `Popular`:
      return offers;

    case `Price: low to high`:
      return offers.sort((a, b) => a.price - b.price);

    case `Price: high to low`:
      return offers.sort((a, b) => b.price - a.price);

    case `Top rated first`:
      return offers;
  }

  return null;
};

export const formatDate = (date) => {
  const month = MonthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
};

export const formatRating = (rating, starWidth = STAR_WIDTH) => {
  return rating * starWidth;
};
