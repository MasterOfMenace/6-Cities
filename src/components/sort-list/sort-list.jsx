import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {SortTypes} from '../../const.js';
import {ActionCreator} from '../../reducer.js';

class SortList extends React.PureComponent {
  render() {
    const {current, onSortTypeClickHandler, isOpen, openClickHandler} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={() => openClickHandler()}>
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
              onClick={() => {
                openClickHandler();
                onSortTypeClickHandler(it);
              }}>
              {it}
            </li>
          ))}
        </ul>
      </form>
    );
  }
}

SortList.propTypes = {
  current: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  openClickHandler: PropTypes.func.isRequired,
  onSortTypeClickHandler: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  current: state.currentSortType
});

const mapDispatchToProps = (dispatch) => ({
  onSortTypeClickHandler(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  }
});

export {SortList};
export default connect(mapStateToProps, mapDispatchToProps)(SortList);
