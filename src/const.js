export const baseURL = `https://htmlacademy-react-3.appspot.com/six-cities`;

export const OfferRenderType = {
  MAIN: {
    type: `main`,
    node: {
      articleClassName: `cities__place-card`,
      imgWrapperClassName: `cities__image-wrapper`,
      infoWrapperClassName: `place-card__info`,
      img: {
        width: 260,
        height: 200
      }
    }
  },
  NEIGHBORHOOD: {
    type: `neighborhood`,
    node: {
      articleClassName: `near-places__card`,
      imgWrapperClassName: `near-places__image-wrapper`,
      infoWrapperClassName: `place-card__info`,
      img: {
        width: 260,
        height: 200
      }
    }
  },
  FAVORITES: {
    type: `favorites`,
    node: {
      articleClassName: `favorites__card`,
      imgWrapperClassName: `favorites__image-wrapper`,
      infoWrapperClassName: `favorites__card-info place-card__info`,
      img: {
        width: 260,
        height: 200
      }
    }
  }
};

export const OfferType = {
  'apartment': `Apartment`,
  'room': `Private Room`,
  'house': `House`,
  'hotel': `Hotel`
};

export const MonthNames = [
  `January`,
  `February`,
  `Mart`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`
];

export const SortTypes = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`
];

export const SortType = {
  POPULAR: `Popular`,
  LOW_TO_HIGH: `Price: low to high`,
  HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

export const Message = {
  401: `You are not authorized. To add offers to your favorites, please log in.`,
  400: `Something went wrong. Try again later`
};
