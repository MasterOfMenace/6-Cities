import NameSpace from '../name-space.js';

export const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

export const getCities = (state) => {
  return state[NameSpace.DATA].cities;
};

export const getReviews = (state) => {
  return state[NameSpace.DATA].reviews;
};
