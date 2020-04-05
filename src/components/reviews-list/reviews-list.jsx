import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review.jsx';
import {sortReviews} from '../../utils.js';

const MAX_REVIEWS_COUNT = 10;

const ReviewsList = (props) => {
  const {reviews} = props;
  const sorted = sortReviews(reviews).slice(0, MAX_REVIEWS_COUNT);

  return (
    <ul className="reviews__list">
      {sorted.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }),
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })).isRequired
};

export default ReviewsList;
