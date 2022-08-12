import {Review} from '../types/review';

export const reviews: Review[] = [
  {
    id: 1,
    rating: 4,
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'Fri May 12 2022 12:56:37 GMT+0300 (Москва, стандартное время)',
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: true,
      name: 'Oliver.conner',
    },
  },
  {
    id: 2,
    rating: 4,
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'Fri Aug 05 2022 10:11:37 GMT+0300 (Москва, стандартное время)',
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: true,
      name: 'Max',
    },
  },
];
