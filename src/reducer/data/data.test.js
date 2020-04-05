import {reducer, ActionType} from './data.js';
import {offers, cities, reviews} from '../../test-mocks/test-mocks.js';

describe(`Корректная работа reducer`, () => {
  it(`Reducer без параметров возвращает initialState`, () => {
    expect(reducer(void 0, {})).toEqual({
      offers: [],
      cities: [],
      reviews: [],
      neighbors: [],
      favorites: []
    });
  });

  it(`Reducer должен обновить offers путем загрузки данных с сервера`, () => {
    expect(reducer({
      offers: [],
      cities: [],
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: offers
    })). toEqual({
      offers,
      cities: []
    });
  });

  it(`Reducer должен обновить cities путем загрузки данных с сервера`, () => {
    expect(reducer({
      offers,
      cities: [],
    }, {
      type: ActionType.GET_CITIES,
      payload: cities
    })). toEqual({
      offers,
      cities
    });
  });

  it(`Reducer должен обновить reviews путем загрузки данных с сервера`, () => {
    expect(reducer({
      reviews: [],
    }, {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews
    })). toEqual({
      reviews
    });
  });

  it(`Reducer должен обновить neighbors путем загрузки данных с сервера`, () => {
    expect(reducer({
      neighbors: [],
    }, {
      type: ActionType.LOAD_NEIGHBORS,
      payload: offers
    })). toEqual({
      neighbors: offers
    });
  });

  it(`Reducer должен обновить favorites путем загрузки данных с сервера`, () => {
    expect(reducer({
      favorites: [],
    }, {
      type: ActionType.LOAD_FAVORITES,
      payload: offers
    })). toEqual({
      favorites: offers
    });
  });
});
