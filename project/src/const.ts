export const MONTHS = ['January ', 'February ', 'March ', 'April ', 'May ', 'June ', 'July ', 'August ', 'September ', 'October ', 'November ', 'December '];

export const ACTIVE_CITY = 'Paris';

export const AUTH_TOKEN_KEY_NAME = 'six-cities';

export const TIMEOUT_SHOW_ERROR = 3000;

export const REVIEW_MIN_LENGTH = 50;

export const REVIEW_MAX_LENGTH = 300;

export const MAX_REVIEWS_COUNT = 10;

export const MAX_IMAGES_COUNT = 6;

export const OFFERS_NEARBY_COUNT = 3;

export enum NameSpace {
  Data = 'DATA',
  Offer = 'OFFER',
  User = 'USER',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
  OfferById = '/hotels/:id',
  Nearby = '/hotels/:id/nearby',
  Reviews = '/comments/:id',
  NewReview = '/comments/:id',
}

export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Root = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum SortingType {
  Popular = 'Popular',
  PriceToHigh = 'Price: low to high',
  PriceToLow = 'Price: high to low',
  RatingFirst = 'Top rated first',
}

export const sortingTypes = Object.values(SortingType);

export const ratingStars = [
  {
    number: 5,
    title: 'perfect'
  },
  {
    number: 4,
    title: 'good'
  },
  {
    number: 3,
    title: 'not bad'
  },
  {
    number: 2,
    title: 'badly'
  },
  {
    number: 1,
    title: 'terribly'
  },
];

export const cities = {
  'Paris': {
    location: {
      latitude: 48.86,
      longitude: 2.35,
      zoom: 10
    },
    name: 'Paris'
  },
  'Cologne': {
    location: {
      latitude: 50.94,
      longitude: 6.96,
      zoom: 10
    },
    name: 'Cologne'
  },
  'Brussels': {
    location: {
      latitude: 50.85,
      longitude: 4.35,
      zoom: 10
    },
    name: 'Brussels'
  },
  'Amsterdam': {
    location: {
      latitude: 52.38,
      longitude: 4.90,
      zoom: 10
    },
    name: 'Amsterdam'
  },
  'Hamburg': {
    location: {
      latitude: 53.55,
      longitude: 9.99,
      zoom: 10
    },
    name: 'Hamburg'
  },
  'Dusseldorf': {
    location: {
      latitude: 51.23,
      longitude: 6.77,
      zoom: 10
    },
    name: 'Dusseldorf'
  }
};

export const cityObjects = Object.values(cities);
export const cityNames = Object.keys(cities);
