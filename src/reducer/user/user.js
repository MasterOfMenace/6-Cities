import {Adapter} from '../../adapter/adapter.js';
import {ActionCreator as AppActionCreator} from '../app-reducer/app-reducer.js';
import {Message} from '../../const.js';

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const ResponseStatus = {
  OK: 200
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: null
};

export const ActionType = {
  REQUIRE_AUTHORIZATION: `require_authorization`,
  GET_USER_INFO: `get_user_info`
};

export const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status
  }),

  getUserInfo: (authData) => ({
    type: ActionType.GET_USER_INFO,
    payload: authData
  })
};

export const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`login`)
      .then((response) => {
        if (response.status === ResponseStatus.OK) {
          const userInfo = Adapter.getUserInfo(response.data);
          dispatch(ActionCreator.getUserInfo(userInfo));
        }
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        const code = err.response.status;
        dispatch(AppActionCreator.changeErrMessage(Message[code]));
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        const userInfo = Adapter.getUserInfo(response.data);
        dispatch(ActionCreator.getUserInfo(userInfo));
      })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      });
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload
      });

    case ActionType.GET_USER_INFO:
      return Object.assign({}, state, {
        userInfo: action.payload
      });
  }

  return state;
};
