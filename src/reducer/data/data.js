import {Adapter} from '../../adapter/adapter.js';
import {ActionCreator as AppActionCreator} from '../app-reducer/app-reducer.js';
import {Message} from '../../const.js';

const initialState = {
  offers: [],
  cities: [],
  reviews: [],
  neighbors: [],
  favorites: []
};

export const ActionType = {
  LOAD_OFFERS: `load_offers`,
  GET_CITIES: `get_cities`,
  LOAD_REVIEWS: `load_reviews`,
  LOAD_NEIGHBORS: `load_neighbors`,
  TOGGLE_FAVORITE: `toggle_favorite`,
  LOAD_FAVORITES: `load_favorites`
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
  }),

  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites
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
      })
      .catch((err) => {
        const code = err.response.status;
        dispatch(AppActionCreator.changeErrMessage(Message[code]));
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
        dispatch(Operation.loadFavorites());
      });
  },

  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const favoriteOffers = Adapter.getOffers(response.data);
        dispatch(ActionCreator.loadFavorites(favoriteOffers));
      })
      .catch(()=>{});
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

    case ActionType.LOAD_FAVORITES:
      return Object.assign({}, state, {
        favorites: action.payload
      });
  }

  return state;
};
