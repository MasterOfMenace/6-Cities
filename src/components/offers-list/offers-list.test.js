import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {offers as mockOffers} from '../../test-mocks/test-mocks.js';
import {OffersList} from './offers-list';
import {OfferRenderType} from '../../const.js';
import history from '../../history.js';

it(`Правильное отображение компонента OffersList с OfferRenderType.MAIN`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <OffersList
            type={OfferRenderType.MAIN}
            offers={mockOffers}
            onMouseOver={()=>{}}
            onMouseLeave={()=>{}}
            titleClickHandler={()=>{}}
            onFavoriteButtonClick={()=>{}}
            isAuth={true}/>
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Правильное отображение компонента OffersList с OfferRenderType.NEIGHBORHOOD`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <OffersList
            type={OfferRenderType.NEIGHBORHOOD}
            offers={mockOffers}
            onMouseOver={()=>{}}
            onMouseLeave={()=>{}}
            titleClickHandler={()=>{}}
            onFavoriteButtonClick={()=>{}}
            isAuth={true}/>
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
