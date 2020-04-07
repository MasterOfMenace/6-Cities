import React from 'react';
import PropTypes from 'prop-types';

const ErrorPopup = (props) => {
  const {onButtonClick, message} = props;
  return (
    <div
      className="popup popup-error"
      style={
        {
          position: `fixed`,
          left: 0,
          top: 0,
          width: `100%`,
          height: `100%`,
          backgroundColor: `rgba(0,0,0, 0.5)`,
          zIndex: 9999
        }
      }
    >
      <div
        className="popup popup__inner"
        style={
          {
            position: `absolute`,
            font: `inherit`,
            fontSize: `18px`,
            padding: `40px`,
            left: `calc(80px)`,
            top: `40%`,
            width: `calc(100% - 160px)`,
            backgroundColor: `rgb(255, 255, 255)`,
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`
          }
        }>
        <p className="popup__text">
          {message}
          {/* Something went wrong. Try again later */}
        </p>
        <button
          className="popup__close-button button"
          onClick={onButtonClick}
          style={
            {
              padding: `16px 30px 13px`,
              color: `#fff`,
              backgroundColor: `#4481c3`,
              borderRadius: `3px`
            }
          }
        >Close</button>
      </div>
    </div>
  );
};

ErrorPopup.propTypes = {
  message: PropTypes.string,
  onButtonClick: PropTypes.func
};

export default ErrorPopup;
