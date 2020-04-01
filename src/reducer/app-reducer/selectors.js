import NameSpace from '../name-space.js';

export const getCity = (state) => {
  return state[NameSpace.APP].city;
};

export const getCurrentSortType = (state) => {
  return state[NameSpace.APP].currentSortType;
};

export const getHoveredOffer = (state) => {
  return state[NameSpace.APP].hoveredOffer;
};

export const getSelectedOffer = (state) => {
  return state[NameSpace.APP].selectedOffer;
};

export const getFormStatus = (state) => {
  return state[NameSpace.APP].formIsSending;
};
