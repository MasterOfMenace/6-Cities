import {Adapter} from '../../adapter/adapter.js';
import {ActionCreator as AppActionCreator} from '../app-reducer/app-reducer.js';

const initialState = {
  offers: [],
  cities: [],
};

export const ActionType = {
  LOAD_OFFERS: `load_offers`,
  GET_CITIES: `get_cities`,
};

export const ActionCreator = {
  getCities: (cities) => ({
    type: ActionType.GET_CITIES,
    payload: cities
  }),

  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  })
};

export const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
        const cities = Adapter.getCities(response.data);
        dispatch(ActionCreator.getCities(cities));
        dispatch(AppActionCreator.changeCity(cities[0]));
      });
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload
      });

    case ActionType.GET_CITIES:
      return Object.assign({}, state, {
        cities: action.payload
      });
  }

  return state;
};
