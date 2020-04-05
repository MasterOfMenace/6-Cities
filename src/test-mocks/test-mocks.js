export const cities = [
  {
    name: `Amsterdam`,
    location: [52.38333, 4.9],
    zoom: 12
  },
  {
    name: `Paris`,
    location: [48.85657, 2.35186],
    zoom: 12
  },
  {
    name: `Cologne`,
    location: [50.93685, 6.9625],
    zoom: 12
  },
  {
    name: `Brussels`,
    location: [50.85300, 4.43792],
    zoom: 12
  },
  {
    name: `Hamburg`,
    location: [53.53539, 9.99371],
    zoom: 12
  },
  {
    name: `Dusseldorf`,
    location: [51.22977, 6.79138],
    zoom: 12
  },
];

export const offers = [
  {
    id: 1,
    city: {
      name: cities[0].name
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
  },
  {
    id: 2,
    city: {
      name: cities[1].name
    },
    title: `Offer2`,
    isFavorite: false,
    isPremium: true,
    previewImage: `img/apartment-01.jpg`,
    images: [`img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `Description`,
    goods: [`good1`, `good2`],
    price: 200,
    rating: 4,
    type: `Apartment`,
    maxAdults: 2,
    bedrooms: 1,
    location: [52.369553943508, 4.85309666406198],
    host: {
      avatarUrl: `avatar`,
      id: 1,
      isPro: true,
      name: `host-name`
    }
  },
  {
    id: 3,
    city: {
      name: cities[2].name
    },
    title: `Offer3`,
    isFavorite: false,
    isPremium: true,
    previewImage: `img/apartment-01.jpg`,
    images: [`img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `Description`,
    goods: [`good1`, `good2`],
    price: 300,
    rating: 4,
    type: `Hostel`,
    maxAdults: 2,
    bedrooms: 1,
    location: [52.369553943508, 4.85309666406198],
    host: {
      avatarUrl: `avatar`,
      id: 1,
      isPro: true,
      name: `host-name`
    }
  },
  {
    id: 4,
    city: {
      name: cities[3].name
    },
    title: `Offer4`,
    isFavorite: false,
    isPremium: true,
    previewImage: `img/apartment-01.jpg`,
    images: [`img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `Description`,
    goods: [`good1`, `good2`],
    price: 400,
    rating: 4,
    type: `Apartment`,
    maxAdults: 2,
    bedrooms: 1,
    location: [52.369553943508, 4.85309666406198],
    host: {
      avatarUrl: `avatar`,
      id: 1,
      isPro: true,
      name: `host-name`
    }
  },
  {
    id: 5,
    city: {
      name: cities[4].name
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
  },
  {
    id: 6,
    city: {
      name: cities[5].name
    },
    title: `Offer2`,
    isFavorite: false,
    isPremium: true,
    previewImage: `img/apartment-01.jpg`,
    images: [`img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `Description`,
    goods: [`good1`, `good2`],
    price: 200,
    rating: 4,
    type: `Apartment`,
    maxAdults: 2,
    bedrooms: 1,
    location: [52.369553943508, 4.85309666406198],
    host: {
      avatarUrl: `avatar`,
      id: 1,
      isPro: true,
      name: `host-name`
    }
  },
  {
    id: 7,
    city: {
      name: cities[1].name
    },
    title: `Offer3`,
    isFavorite: false,
    isPremium: true,
    previewImage: `img/apartment-01.jpg`,
    images: [`img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `Description`,
    goods: [`good1`, `good2`],
    price: 300,
    rating: 4,
    type: `Hostel`,
    maxAdults: 2,
    bedrooms: 1,
    location: [52.369553943508, 4.85309666406198],
    host: {
      avatarUrl: `avatar`,
      id: 1,
      isPro: true,
      name: `host-name`
    }
  },
  {
    id: 8,
    city: {
      name: cities[2].name
    },
    title: `Offer4`,
    isFavorite: false,
    isPremium: true,
    previewImage: `img/apartment-01.jpg`,
    images: [`img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `Description`,
    goods: [`good1`, `good2`],
    price: 400,
    rating: 4,
    type: `Apartment`,
    maxAdults: 2,
    bedrooms: 1,
    location: [52.369553943508, 4.85309666406198],
    host: {
      avatarUrl: `avatar`,
      id: 1,
      isPro: true,
      name: `host-name`
    }
  },
];

export const reviews = [
  {
    author: {
      avatar: `author-avatar-1`,
      id: 1,
      isPro: false,
      name: `author-1`
    },
    id: 1,
    rating: 3,
    text: `Review text 1`,
    date: `date`
  },
  {
    author: {
      avatar: `author-avatar-2`,
      id: 2,
      isPro: false,
      name: `author-2`
    },
    id: 2,
    rating: 5,
    text: `Review text 2`,
    date: `date`
  }
];

export const neighbors = [
  {
    id: 4,
    city: {
      name: `City`,
      location: [52.38333, 4.9]
    },
    title: `Offer4`,
    isFavorite: false,
    isPremium: true,
    previewImage: `img/apartment-01.jpg`,
    images: [`img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `Description`,
    goods: [`good1`, `good2`],
    price: 400,
    rating: 4,
    type: `Apartment`,
    maxAdults: 2,
    bedrooms: 1,
    location: [52.369553943508, 4.85309666406198],
    host: {
      avatarUrl: `avatar`,
      id: 1,
      isPro: true,
      name: `host-name`
    }
  }
];

export const userInfo = {
  avatarUrl: `/img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  isPro: false,
  name: `Oliver.conner`
};
