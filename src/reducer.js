import offers, {Cities} from './mocks/offers.js';

export const getCurrentOffers = (city) => offers.filter((offer) => offer.city.name === city.name);

const initialState = {
  city: Cities[0],
  offers,
  currentOffers: getCurrentOffers(Cities[0]),
  hoveredOffer: null,
  selectedOffer: null,
};

export const ActionType = {
  CHANGE_CITY: `change_city`,
  GET_OFFERS: `get_offers`,
  SELECT_OFFER: `select_offer`,
  HOVER_OFFER: `hover_offer`,
  BLUR_OFFER: `blur_offer`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),

  getOffers: () => ({
    type: ActionType.GET_OFFERS
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
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      const cityName = action.payload;
      const city = Cities.find((it) => it.name === cityName);

      if (cityName !== state.city.name) {
        return Object.assign({}, state, {
          city
        });
      }
      break;

    case ActionType.GET_OFFERS:
      const currentOffers = getCurrentOffers(state.city);

      return Object.assign({}, state, {
        currentOffers
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
