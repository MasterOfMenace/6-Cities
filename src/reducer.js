import offers, {Cities} from './mocks/offers.js';

const getCurrentOffers = (city) => offers.filter((offer) => offer.city.name === city);

const initialState = {
  city: Cities[0],
  currentOffers: getCurrentOffers(Cities[0]),
  selectedOffer: null,
};

export const ActionType = {
  CHANGE_CITY: `change_city`,
  GET_OFFERS: `get_offers`,
  SELECT_OFFER: `select_offer`,
  UNSELECT_OFFER: `unselect_offer`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),

  getOffers: () => ({
    type: ActionType.GET_OFFERS
  }),

  selectOffer: (offer) => ({
    type: ActionType.SELECT_OFFER,
    payload: offer.id
  }),

  unselectOffer: () => ({
    type: ActionType.UNSELECT_OFFER,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      const city = action.payload;

      if (city !== state.city) {
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

    case ActionType.SELECT_OFFER:
      const selectedOffer = action.payload;

      return Object.assign({}, state, {
        selectedOffer
      });

    case ActionType.UNSELECT_OFFER:

      return Object.assign({}, state, {
        selectedOffer: null
      });
  }

  return state;
};
