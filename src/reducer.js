import {Adapter} from "./adapter/adapter.js";

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const initialState = {
  cities: [],
  city: {},
  currentSortType: `Popular`,
  offers: [],
  hoveredOffer: null,
  selectedOffer: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH
};

export const ActionType = {
  CHANGE_CITY: `change_city`,
  CHANGE_SORT_TYPE: `change_sort_type`,
  SELECT_OFFER: `select_offer`,
  HOVER_OFFER: `hover_offer`,
  BLUR_OFFER: `blur_offer`,
  REQUIRE_AUTHORIZATION: `require_authorization`,
  LOAD_OFFERS: `load_offers`,
  GET_CITIES: `get_cities`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),

  getCities: (cities) => ({
    type: ActionType.GET_CITIES,
    payload: cities
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

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status
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
        dispatch(ActionCreator.changeCity(cities[0].name));
      });
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      const cityName = action.payload;
      const city = state.cities.find((it) => it.name === cityName);

      if (!state.city || cityName !== state.city.name) {
        return Object.assign({}, state, {
          city
        });
      }
      break;

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

    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload
      });

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
