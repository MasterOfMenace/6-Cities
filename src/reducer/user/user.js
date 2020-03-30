export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

export const ActionType = {
  REQUIRE_AUTHORIZATION: `require_authorization`,
};

export const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload
      });
  }

  return state;
};
