import {getCities} from '../data/selectors.js';

const initialState = {
  city: {},
  currentSortType: `Popular`,
  hoveredOffer: null,
  selectedOffer: null,
};

export const ActionType = {
  CHANGE_CITY: `change_city`,
  CHANGE_SORT_TYPE: `change_sort_type`,
  SELECT_OFFER: `select_offer`,
  HOVER_OFFER: `hover_offer`,
  BLUR_OFFER: `blur_offer`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),

  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType
  }),

  hoverOffer: (offer) => ({
    type: ActionType.HOVER_OFFER,
    payload: offer.id
  }),

  blurOffer: () => ({
    type: ActionType.BLUR_OFFER,
  }),

  selectOffer: () => ({
    type: ActionType.SELECT_OFFER
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload
      });
      // const cityName = action.payload;
      // const city = state.cities.find((it) => it.name === cityName);

      // if (!state.city || cityName !== state.city.name) {
      //   return Object.assign({}, state, {
      //     city
      //   });
      // }
      // break;

    case ActionType.CHANGE_SORT_TYPE:
      return Object.assign({}, state, {
        currentSortType: action.payload
      });

    case ActionType.HOVER_OFFER:
      const hoveredOffer = action.payload;
      return Object.assign({}, state, {
        hoveredOffer
      });

    case ActionType.BLUR_OFFER:

      return Object.assign({}, state, {
        hoveredOffer: null
      });

    case ActionType.SELECT_OFFER:
      const selectedOffer = state.hoveredOffer;

      return Object.assign({}, state, {
        selectedOffer
      });
  }

  return state;
};
