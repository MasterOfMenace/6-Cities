import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

const Mocks = {
  OFFER_COUNT: 10,
  PLACES_NAME: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `SandalWood and RollingStone place`
  ],
};

Enzyme.configure({
  adapter: new Adapter()
});

it(`Должно сработать нажатие на ссылку`, () => {
  const titleClickHandler = jest.fn();

  const main = shallow(
      <Main
        offerCount={Mocks.OFFER_COUNT}
        placesName={Mocks.PLACES_NAME}
        titleClickHandler={titleClickHandler}
      />
  );

  const title = main.find(`.place-card__name a`);

  title.forEach((it) => it.props().onClick());

  expect(titleClickHandler.mock.calls.length).toBe(Mocks.PLACES_NAME.length);
});
