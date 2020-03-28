import {reducer, ActionType, ActionCreator} from './app-reducer.js';
import offers, {Cities} from '../mocks/offers.js';

describe(`Корректная работа reducer`, () => {
  it(`Reducer без параметров возвращает initialState`, () => {
    expect(reducer(void 0, {})).toEqual({
      city: {},
      currentSortType: `Popular`,
      hoveredOffer: null,
      selectedOffer: null,
    });
  });

  it(`Reducer должен изменять город в соответствии с переданным значением`, () => {
    expect(reducer({
      city: {},
      currentSortType: `Popular`,
      hoveredOffer: null,
      selectedOffer: null,
    }, {
      type: ActionType.CHANGE_CITY,
      payload: Cities[1]
    })).toEqual({
      city: Cities[1],
      currentSortType: `Popular`,
      hoveredOffer: null,
      selectedOffer: null,
    });
  });

  it(`Reducer должен изменять id hoveredOffer в соответствии с переданным значением id`, () => {
    expect(reducer({
      city: Cities[0],
      currentSortType: `Popular`,
      hoveredOffer: null,
      selectedOffer: null,
    }, {
      type: ActionType.HOVER_OFFER,
      payload: 2
    })).toEqual({
      city: Cities[0],
      currentSortType: `Popular`,
      hoveredOffer: 2,
      selectedOffer: null,
    });
  });

  it(`Reducer должен изменять id hoveredOffer на null`, () => {
    expect(reducer({
      city: Cities[0],
      currentSortType: `Popular`,
      hoveredOffer: 2,
      selectedOffer: null,
    }, {
      type: ActionType.BLUR_OFFER
    })).toEqual({
      city: Cities[0],
      currentSortType: `Popular`,
      hoveredOffer: null,
      selectedOffer: null,
    });
  });

  it(`Reducer должен изменять id selectdOffer в соответствии со значением id hoveredOffer`, () => {
    expect(reducer({
      city: Cities[0],
      currentSortType: `Popular`,
      hoveredOffer: 2,
      selectedOffer: null,
    }, {
      type: ActionType.SELECT_OFFER,
    })).toEqual({
      city: Cities[0],
      currentSortType: `Popular`,
      hoveredOffer: 2,
      selectedOffer: 2,
    });
  });
});

describe(`Корректная работа ActionCreator`, () => {
  it(`ActionCreator.changeCity возвращает корректный action`, () => {
    expect(ActionCreator.changeCity(Cities[1]))
      .toEqual({
        type: ActionType.CHANGE_CITY,
        payload: Cities[1]
      });
  });

  it(`ActionCreator.hoverOffer возвращает корректный action`, () => {
    expect(ActionCreator.hoverOffer(offers[2]))
      .toEqual({
        type: ActionType.HOVER_OFFER,
        payload: offers[2].id
      });
  });

  it(`ActionCreator.blurOffer возвращает корректный action`, () => {
    expect(ActionCreator.blurOffer())
      .toEqual({
        type: ActionType.BLUR_OFFER
      });
  });

  it(`ActionCreator.selectOffer возвращает корректный action`, () => {
    expect(ActionCreator.selectOffer())
      .toEqual({
        type: ActionType.SELECT_OFFER
      });
  });
});
