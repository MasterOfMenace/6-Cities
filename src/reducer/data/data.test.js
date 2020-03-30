import {reducer, ActionType} from './data.js';
import offers, {Cities} from '../mocks/offers.js';

describe(`Корректная работа reducer`, () => {
  it(`Reducer без параметров возвращает initialState`, () => {
    expect(reducer(void 0, {})).toEqual({
      offers: [],
      cities: [],
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

  it(`Reducer должен обновить offers путем загрузки данных с сервера`, () => {
    expect(reducer({
      offers,
      cities: [],
    }, {
      type: ActionType.GET_CITIES,
      payload: Cities
    })). toEqual({
      offers,
      cities: Cities
    });
  });
});
