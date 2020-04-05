import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Header = (props) => {
  const {userInfo, isAuth} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className="header__logo-link"
              to={`/`}
            >
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={isAuth ? `/favorites` : `/login`}
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    {isAuth ? <img
                      className="user__avatar"
                      src={userInfo.avatarUrl}
                      alt="User avatar" width="20" height="20"
                    /> : ``}
                  </div>
                  {isAuth ? <span className="header__user-name user__name">{userInfo.email}</span> : <span className="header__login">Sign in</span>}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  userInfo: PropTypes.oneOfType([
    PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired
    }),
    PropTypes.object
  ])
};

export default Header;
