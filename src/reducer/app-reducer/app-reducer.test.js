import {reducer, ActionType, ActionCreator} from './app-reducer.js';
import {offers, cities} from '../../test-mocks/test-mocks.js';

describe(`Корректная работа reducer`, () => {
  it(`Reducer без параметров возвращает initialState`, () => {
    expect(reducer(void 0, {})).toEqual({
      city: {},
      currentSortType: `Popular`,
      hoveredOffer: null,
      formIsSending: false,
      isPopupShow: false,
      errMessage: null
    });
  });

  it(`Reducer должен изменять город в соответствии с переданным значением`, () => {
    expect(reducer({
      city: {},
      currentSortType: `Popular`,
      hoveredOffer: null,
    }, {
      type: ActionType.CHANGE_CITY,
      payload: cities[1]
    })).toEqual({
      city: cities[1],
      currentSortType: `Popular`,
      hoveredOffer: null,
    });
  });

  it(`Reducer должен изменять id hoveredOffer в соответствии с переданным значением id`, () => {
    expect(reducer({
      city: cities[0],
      currentSortType: `Popular`,
      hoveredOffer: null,
    }, {
      type: ActionType.HOVER_OFFER,
      payload: 2
    })).toEqual({
      city: cities[0],
      currentSortType: `Popular`,
      hoveredOffer: 2,
    });
  });

  it(`Reducer должен изменять id hoveredOffer на null`, () => {
    expect(reducer({
      city: cities[0],
      currentSortType: `Popular`,
      hoveredOffer: 2,
    }, {
      type: ActionType.BLUR_OFFER
    })).toEqual({
      city: cities[0],
      currentSortType: `Popular`,
      hoveredOffer: null,
    });
  });

  it(`Reducer должен изменять тип сортировки в соответствии с переданным значением`, () => {
    expect(reducer({
      city: cities[0],
      currentSortType: `Popular`,
      hoveredOffer: null,
      selectedOffer: null,
    }, {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: `Price: low to high`
    })).toEqual({
      city: cities[0],
      currentSortType: `Price: low to high`,
      hoveredOffer: null,
      selectedOffer: null,
    });
  });

  it(`Reducer должен изменять состояние отправки формы в соответствии с переданным значением`, () => {
    expect(reducer({
      formIsSending: false
    }, {
      type: ActionType.CHANGE_FORM_STATUS,
      payload: true
    })).toEqual({
      formIsSending: true
    });
  });

  it(`Reducer должен изменять состояние отображения попапа в соответствии с переданным значением`, () => {
    expect(reducer({
      isPopupShow: false
    }, {
      type: ActionType.CHANGE_POPUP_STATUS,
      payload: true
    })).toEqual({
      isPopupShow: true
    });
  });

  it(`Reducer должен изменять сообщение об ошибке в соответствии с переданным значением`, () => {
    expect(reducer({
      errMessage: null
    }, {
      type: ActionType.CHANGE_ERR_MESSAGE,
      payload: `Message`
    })).toEqual({
      errMessage: `Message`
    });
  });
});

describe(`Корректная работа ActionCreator`, () => {
  it(`ActionCreator.changeCity возвращает корректный action`, () => {
    expect(ActionCreator.changeCity(cities[1]))
      .toEqual({
        type: ActionType.CHANGE_CITY,
        payload: cities[1]
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

  it(`ActionCreator.changeFormStatus возвращает корректный action`, () => {
    expect(ActionCreator.changeFormStatus(true))
      .toEqual({
        type: ActionType.CHANGE_FORM_STATUS,
        payload: true
      });
  });

  it(`ActionCreator.changePopupStatus возвращает корректный action`, () => {
    expect(ActionCreator.changePopupStatus(true))
      .toEqual({
        type: ActionType.CHANGE_POPUP_STATUS,
        payload: true
      });
  });

  it(`ActionCreator.changeErrMessage возвращает корректный action`, () => {
    expect(ActionCreator.changeErrMessage(`Message`))
      .toEqual({
        type: ActionType.CHANGE_ERR_MESSAGE,
        payload: `Message`
      });
  });
});
