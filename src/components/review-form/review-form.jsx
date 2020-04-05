import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getFormStatus} from '../../reducer/app-reducer/selectors.js';

class ReviewForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.formRef = React.createRef();
    this.ratingContainerRef = React.createRef();
    this.commentTextRef = React.createRef();
    this.submitButtonRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this._validateForm = this._validateForm.bind(this);
  }

  componentDidMount() {
    this._validateForm();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.formIsSending !== this.props.formIsSending) {
      this._toggleForm(this.props.formIsSending);
    }
  }

  handleSubmit(evt) {
    const {onSubmit, id} = this.props;

    evt.preventDefault();

    onSubmit(id, this.formRef.current, {
      comment: this.commentTextRef.current.value,
      rating: this._getRating()
    });
  }

  _getRating() {
    const checked = Array.from(this.ratingContainerRef.current.querySelectorAll(`.form__rating-input`))
    .find((it) => it.checked);

    if (!checked) {
      return null;
    }
    const rating = checked.value;
    return rating;
  }

  _validateForm() {
    const commentText = this.commentTextRef.current.value;
    const rating = this._getRating();

    if (commentText.length < 50) {
      this.submitButtonRef.current.disabled = true;
      return;
    }

    if (!rating) {
      this.submitButtonRef.current.disabled = true;
      return;
    }

    this.submitButtonRef.current.disabled = false;
  }

  _toggleForm(isSending) {
    const formElements = Array.from(this.formRef.current.elements);

    formElements.forEach((it) => {
      it.disabled = isSending;
    });
  }

  render() {
    return (
      <form
        className="reviews__form form"
        action="#"
        method="post"
        ref={this.formRef}
        onSubmit={this.handleSubmit}
        onChange={this._validateForm}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div
          className="reviews__rating-form form__rating"
          ref={this.ratingContainerRef}
        >
          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          minLength="50"
          maxLength="300"
          ref={this.commentTextRef}
        ></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled=""
            ref={this.submitButtonRef}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

ReviewForm.propTypes = {
  id: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  formIsSending: PropTypes.bool.isRequired,
};

const mapStateToPRops = (state) => ({
  formIsSending: getFormStatus(state)
});

export {ReviewForm};
export default connect(mapStateToPRops, null)(ReviewForm);
