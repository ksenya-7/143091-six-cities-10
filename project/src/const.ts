import {City} from './types/offer';

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
      zoom: 10
    },
    name: 'Paris'
  },
  {
    location: {
      latitude: 50.94,
      longitude: 6.96,
      zoom: 10
    },
    name: 'Cologne'
  },
  {
    location: {
      latitude: 50.85,
      longitude: 4.35,
      zoom: 10
    },
    name: 'Brussels'
  },
  {
    location: {
      latitude: 52.38,
      longitude: 4.90,
      zoom: 10
    },
    name: 'Amsterdam'
  },
  {
    location: {
      latitude: 53.55,
      longitude: 9.99,
      zoom: 10
    },
    name: 'Hamburg'
  },
  {
    location: {
      latitude: 51.23,
      longitude: 6.77,
      zoom: 10
    },
    name: 'Dusseldorf'
  }
];

export const ACTIVE_CITY = 'Amsterdam';
