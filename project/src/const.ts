import {City} from './types/offer';

export const CITY: City = {
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 10,
  },
  name: 'Amsterdam',
};

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

export const CITIES:City[] = [
  {
    location: {
      latitude: 48.86,
      longitude: 2.35,
      zoom: 12
    },
    name: 'Paris'
  },
  {
    location: {
      latitude: 50.94,
      longitude: 6.96,
      zoom: 12
    },
    name: 'Cologne'
  },
  {
    location: {
      latitude: 50.85,
      longitude: 4.35,
      zoom: 12
    },
    name: 'Brussels'
  },
  {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12
    },
    name: 'Amsterdam'
  },
  {
    location: {
      latitude: 53.55,
      longitude: 9.99,
      zoom: 12
    },
    name: 'Hamburg'
  },
  {
    location: {
      latitude: 51.23,
      longitude: 6.77,
      zoom: 12
    },
    name: 'Dusseldorf'
  }
];
