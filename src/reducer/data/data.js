import {Adapter} from '../../adapter/adapter.js';
import {ActionCreator as AppActionCreator} from '../app-reducer/app-reducer.js';

const initialState = {
  offers: [],
  cities: [],
  reviews: [],
  neighbors: []
};

export const ActionType = {
  LOAD_OFFERS: `load_offers`,
  GET_CITIES: `get_cities`,
  LOAD_REVIEWS: `load_reviews`,
  LOAD_NEIGHBORS: `load_neighbors`,
  TOGGLE_FAVORITE: `toggle_favorite`,
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
  }),

  loadNeighbors: (neighbors) => ({
    type: ActionType.LOAD_NEIGHBORS,
    payload: neighbors
  }),

  toggleFavorite: (offer) => ({
    type: ActionType.TOGGLE_FAVORITE,
    payload: offer
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
  },

  postReview: (id, form, reviewData) => (dispatch, getState, api) => {
    dispatch(AppActionCreator.changeFormStatus(true));
    return api.post(`/comments/${id}`, {
      comment: reviewData.comment,
      rating: reviewData.rating
    })
      .then((response) => {
        const reviews = Adapter.getReviews(response.data);
        dispatch(ActionCreator.loadReviews(reviews));
        dispatch(AppActionCreator.changeFormStatus(false));
        form.reset();
      });
  },

  loadNeighbors: (id) => (dispatch, getState, api) => {
    return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        const nearOffers = Adapter.getOffers(response.data);
        dispatch(ActionCreator.loadNeighbors(nearOffers));
      });
  },

  toggleFavorite: (id, isFavorite) => (dispatch, getState, api) => {
    return api.post(`/favorite/${id}/${isFavorite ? 0 : 1}`)
      .then((response) => {
        const updatedOffer = Adapter.getOffer(response.data);
        dispatch(ActionCreator.toggleFavorite(updatedOffer));
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

    case ActionType.LOAD_NEIGHBORS:
      return Object.assign({}, state, {
        neighbors: action.payload
      });

    case ActionType.TOGGLE_FAVORITE:
      const updatedId = action.payload.id;
      const newOffers = state.offers.map((offer) => offer.id === updatedId ? action.payload : offer);

      return Object.assign({}, state, {
        offers: newOffers
      });
  }

  return state;
};
