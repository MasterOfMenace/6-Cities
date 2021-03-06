import {reducer, ActionType, AuthorizationStatus} from './user.js';
import {userInfo as mockUserInfo} from '../../test-mocks/test-mocks.js';

describe(`Корректная работа reducer`, () => {
  it(`Reducer без параметров возвращает initialState`, () => {
    expect(reducer(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userInfo: null
    });
  });

  it(`Reducer должен обновить authorizationStatus`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userInfo: null
    }, {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      userInfo: null
    });
  });

  it(`Reducer должен обновить userInfo`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
      userInfo: null
    }, {
      type: ActionType.GET_USER_INFO,
      payload: mockUserInfo
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      userInfo: mockUserInfo
    });
  });
});
