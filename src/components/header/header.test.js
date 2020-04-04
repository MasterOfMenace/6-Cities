import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history.js';
import Header from './header.jsx';

describe(`Правильное отображение компонента Header`, () => {
  it(`Когда пользователь авторизован`, () => {
    const isAuth = true;

    const mockUserInfo = {
      avatarUrl: `/img/1.png`,
      email: `Oliver.conner@gmail.com`,
      id: 1,
      isPro: false,
      name: `Oliver.conner`
    };
    const tree = renderer
      .create(
          <Router history={history}>
            <Header
              isAuth={isAuth}
              userInfo={mockUserInfo}
            />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Когда пользователь не авторизован`, () => {
    const isAuth = false;

    const mockUserInfo = null;

    const tree = renderer
      .create(
          <Router history={history}>
            <Header
              isAuth={isAuth}
              userInfo={mockUserInfo}
            />
          </Router>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
