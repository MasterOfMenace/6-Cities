import React from 'react';
import renderer from 'react-test-renderer';
import Review from './review.jsx';

const DATE = `10 July 2019 00:00:00Z`;

const mockReview = {
  author: {
    avatar: `author-avatar`,
    id: 1,
    isPro: false,
    name: `author`
  },
  id: 1,
  rating: 3,
  text: `Review text`,
  date: new Date(DATE).toISOString()
};

it(`Правильное отображение компонента Review`, () => {
  const tree = renderer
    .create(<Review
      review={mockReview}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
