import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/app/app.jsx';
import {Operation as DataOperation} from './reducer/data/data.js';
import {Operation as UserOperation, ActionCreator as UserActionCreator, AuthorizationStatus} from './reducer/user/user.js';
import {ActionCreator as AppActionCreator} from './reducer/app-reducer/app-reducer.js';
import reducer from './reducer/reducer.js';
import {createApi} from './api.js';

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const onError = () => {
  store.dispatch(AppActionCreator.changePopupStatus(true));
  store.dispatch(AppActionCreator.changeFormStatus(false));
};

const api = createApi(onUnauthorized, onError);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(DataOperation.loadOffers());
store.dispatch(UserOperation.checkAuth());
store.dispatch(DataOperation.loadFavorites());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
