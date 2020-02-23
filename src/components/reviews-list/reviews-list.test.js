import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list.jsx';

const Dates = [
  `10 July 2019`,
  `25 April 2018`
];

const mockReviews = [
  {
    author: `author-1`,
    avatar: `author-avatar-1`,
    text: `Review text`,
    time: new Date(Dates[0]).toISOString()
  },
  {
    author: `author-2`,
    avatar: `author-avatar-2`,
    text: `Review text`,
    time: new Date(Dates[1]).toISOString()
  }
];

it(`Правильное отображение компонента ReviewsList`, () => {
  const tree = renderer
    .create(<ReviewsList
      reviews={mockReviews}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
