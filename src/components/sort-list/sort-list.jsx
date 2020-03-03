import React from 'react';
// import PropTypes from 'prop-types';
import {SortTypes} from '../../const.js';

class SortList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      current: `Popular`
    };
  }

  render() {
    const {isOpen, current} = this.state;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={() => this.setState({
          isOpen: !this.state.isOpen
        })}>
          {current}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``}`}>
          {SortTypes.map((it, index) => (
            <li
              key={index}
              className={`places__option ${it === current ? `places__option--active` : ``}`}
              tabIndex="0"
              onClick={() => this.setState({
                current: it,
                isOpen: !this.state.isOpen
              })}>
              {it}
            </li>
          ))}
        </ul>
      </form>
    );
  }
}

export default SortList;
