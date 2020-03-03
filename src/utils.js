export const getCurrentOffers = (offers, city) => offers.filter((offer) => offer.city.name === city.name);
