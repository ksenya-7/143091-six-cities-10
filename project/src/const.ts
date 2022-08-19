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

export const MONTHS = [ 'January ', 'February ', 'March ', 'April ', 'May ', 'June ', 'July ', 'August ', 'September ', 'October ', 'November ', 'December '];

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

export const ACTIVE_CITY = 'Paris';

export const AUTH_TOKEN_KEY_NAME = 'six-cities';

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export const typesOfSorting = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

export enum Sorting {
  Popular = 'Popular',
  PriceToHigh = 'Price: low to high',
  PriceToLow = 'Price: high to low',
  TopFirst = 'Top rated first',
}

export const ACTIVE_SORTING = 'Popular';
