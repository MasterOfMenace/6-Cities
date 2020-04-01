import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review.jsx';
// import ReviewForm from '../review-form/review-form.jsx';

const MAX_REVIEWS_COUNT = 10;

const sortReviews = (reviews) => {
  return reviews.slice().sort((a, b) => {
    const aDate = Date.parse(a.time);
    const bDate = Date.parse(b.time);
    return aDate - bDate;
  });
};

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
  reviews: PropTypes.array.isRequired
};

export default ReviewsList;
