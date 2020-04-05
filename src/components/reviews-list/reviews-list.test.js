import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list.jsx';
import {reviews as mockReviews} from '../../test-mocks/test-mocks.js';

it(`Правильное отображение компонента ReviewsList`, () => {
  const tree = renderer
    .create(<ReviewsList
      reviews={mockReviews}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
