const initialState = {
  city: {},
  currentSortType: `Popular`,
  hoveredOffer: null,
  formIsSending: false,
  isPopupShow: false,
  errMessage: null,
};

export const ActionType = {
  CHANGE_CITY: `change_city`,
  CHANGE_SORT_TYPE: `change_sort_type`,
  SELECT_OFFER: `select_offer`,
  HOVER_OFFER: `hover_offer`,
  BLUR_OFFER: `blur_offer`,
  CHANGE_FORM_STATUS: `change_form_status`,
  CHANGE_POPUP_STATUS: `change_popup_status`,
  CHANGE_ERR_MESSAGE: `change_err_message`
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
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

  changeFormStatus: (status) => ({
    type: ActionType.CHANGE_FORM_STATUS,
    payload: status
  }),

  changePopupStatus: (status) => ({
    type: ActionType.CHANGE_POPUP_STATUS,
    payload: status
  }),

  changeErrMessage: (message) => ({
    type: ActionType.CHANGE_ERR_MESSAGE,
    payload: message
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload
      });

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

    case ActionType.CHANGE_FORM_STATUS:
      return Object.assign({}, state, {
        formIsSending: action.payload
      });

    case ActionType.CHANGE_POPUP_STATUS:
      return Object.assign({}, state, {
        isPopupShow: action.payload
      });

    case ActionType.CHANGE_ERR_MESSAGE:
      return Object.assign({}, state, {
        errMessage: action.payload
      });
  }

  return state;
};
