import React from 'react';
import renderer from 'react-test-renderer';
import FavoritesEmpty from './favorites-empty.jsx';

it(`Правильное отображение компонента FavoritesEmpty`, () => {
  const tree = renderer.create(
      <FavoritesEmpty />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
