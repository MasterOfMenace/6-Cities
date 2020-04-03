import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card.jsx';
import {OfferRenderType} from '../../const.js';

Enzyme.configure({
  adapter: new Adapter()
});

const mockOffer = {
  id: 1,
  city: {
    name: `City`
  },
  title: `Offer1`,
  isFavorite: false,
  isPremium: true,
  previewImage: `img/apartment-01.jpg`,
  images: [`img/apartment-01.jpg`, `img/apartment-01.jpg`],
  description: `Description`,
  goods: [`good1`, `good2`],
  price: 100,
  rating: 4,
  type: `Private room`,
  maxAdults: 2,
  bedrooms: 1,
  location: [52.369553943508, 4.85309666406198],
  host: {
    avatarUrl: `avatar`,
    id: 1,
    isPro: true,
    name: `host-name`
  }
};


it(`При наведении курсора на карточку предложения в обработчик попадает информация об объекте недвижимости`, () => {
  const offer = mockOffer;
  const onMouseOver = jest.fn();
  const onMouseLeave = jest.fn();
  const titleClickHandler = jest.fn();

  const offerCard = shallow(
      <OfferCard
        type={OfferRenderType.MAIN}
        offer={offer}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        titleClickHandler={titleClickHandler}
        onFavoriteButtonClick={()=>{}}/>
  );

  const card = offerCard.find(`.place-card`);
  card.simulate(`mouseover`, {id: offer.id});

  expect(onMouseOver).toHaveBeenCalledTimes(1);

  expect(onMouseOver.mock.calls[0][0].id).toBe(offer.id);
});

it(`При клике на заголовок предложения срабатывает колбэк`, () => {
  const offer = mockOffer;
  const onMouseOver = jest.fn();
  const onMouseLeave = jest.fn();
  const titleClickHandler = jest.fn();

  const offerCard = shallow(
      <OfferCard
        type={OfferRenderType.MAIN}
        offer={offer}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        isAuth={true}
        titleClickHandler={titleClickHandler}
        onFavoriteButtonClick={()=>{}}/>
  );

  const offerTitleLink = offerCard.find(`.place-card__name a`);
  offerTitleLink.simulate(`click`);

  expect(titleClickHandler).toHaveBeenCalledTimes(1);
});
