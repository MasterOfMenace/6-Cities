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

export const getFormStatus = (state) => {
  return state[NameSpace.APP].formIsSending;
};

export const getPopupStatus = (state) => {
  return state[NameSpace.APP].isPopupShow;
};
