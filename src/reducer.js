import offers, {Cities} from './mocks/offers.js';

const getCurrentOffers = (city) => offers.filter((offer) => offer.city.name === city);

const initialState = {
  city: Cities[0],
  currentOffers: getCurrentOffers(Cities[0]),
};

export const ActionType = {
  CHANGE_CITY: `change_city`,
  GET_OFFERS: `get_offers`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),

  getOffers: () => ({
    type: ActionType.GET_OFFERS
  })
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
  }

  return state;
};
