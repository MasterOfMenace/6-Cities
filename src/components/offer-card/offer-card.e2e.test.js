import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

const mockOffer = {
  name: `Room in hotel`,
  picture: `img/apartment-01.jpg`,
  price: 100,
  type: `Private room`
};


it(`При наведении курсора на карточку предложения в обработчик попадает информация об объекте недвижимости`, () => {
  const offer = mockOffer;
  const onMouseOver = jest.fn();
  const onMouseLeave = jest.fn();
  const titleClickHandler = jest.fn();
  const hoveredOffer = {
    name: `Room in hotel`,
    picture: `img/apartment-01.jpg`,
    price: 100,
    type: `Private room`
  };

  const offerCard = shallow(
      <OfferCard
        offer={offer}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        titleClickHandler={titleClickHandler}/>
  );

  const card = offerCard.find(`.place-card`);
  card.simulate(`mouseover`, {target: offer});

  expect(onMouseOver).toHaveBeenCalledTimes(1);

  expect(onMouseOver.mock.calls[0][0].target).toMatchObject(hoveredOffer);
});

it(`При клике на заголовок предложения срабатывает колбэк`, () => {
  const offer = mockOffer;
  const onMouseOver = jest.fn();
  const onMouseLeave = jest.fn();
  const titleClickHandler = jest.fn();

  const offerCard = shallow(
      <OfferCard
        offer={offer}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        titleClickHandler={titleClickHandler}/>
  );

  const offerTitleLink = offerCard.find(`.place-card__name a`);
  offerTitleLink.simulate(`click`);

  expect(titleClickHandler).toHaveBeenCalledTimes(1);
});
