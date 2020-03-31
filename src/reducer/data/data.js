import {Adapter} from '../../adapter/adapter.js';
import {ActionCreator as AppActionCreator} from '../app-reducer/app-reducer.js';

const initialState = {
  offers: [],
  cities: [],
  reviews: []
};

export const ActionType = {
  LOAD_OFFERS: `load_offers`,
  GET_CITIES: `get_cities`,
  LOAD_REVIEWS: `load_reviews`
};

export const ActionCreator = {
  getCities: (cities) => ({
    type: ActionType.GET_CITIES,
    payload: cities
  }),

  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),

  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews
  })
};

export const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const offers = Adapter.getOffers(response.data);
        dispatch(ActionCreator.loadOffers(offers));
        const cities = Adapter.getCities(response.data);
        dispatch(ActionCreator.getCities(cities));
        dispatch(AppActionCreator.changeCity(cities[0]));
      });
  },

  loadReviews: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        const reviews = Adapter.getReviews(response.data);
        dispatch(ActionCreator.loadReviews(reviews));
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

    case ActionType.LOAD_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.payload
      });
  }

  return state;
};
