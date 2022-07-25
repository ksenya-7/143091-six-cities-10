import {OfferCard} from '../types/offer';

export const offers: OfferCard[] = [
  {
    images: [{
      src: 'img/room.jpg',
      alt: 'Photo studio',
    },
    {
      src: 'img/apartment-01.jpg',
      alt: 'Photo studio',
    },
    {
      src: 'img/apartment-02.jpg',
      alt: 'Photo studio',
    },
    {
      src: 'img/apartment-03.jpg',
      alt: 'Photo studio',
    },
    {
      src: 'img/studio-01.jpg',
      alt: 'Photo studio',
    },
    {
      src: 'img/apartment-01.jpg',
      alt: 'Photo studio',
    }],
    mark: 'Premium',
    isMark: true,
    title: 'Beautiful & luxurious studio at great location',
    isActiveButton: false,
    rating: {
      width: '80%',
      value: 4.8,
    },
    features: [
      'Apartment', '3 Bedrooms', 'Max 4 adults',
    ],
    price: 120,
    insideList: [
      'Wi-Fi',
      'Washing machine',
      'Towels',
      'Heating',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Dishwasher',
      'Cabel TV',
      'Fridge',
    ],
    host: {
      avatar: 'img/avatar-angelina.jpg',
      name: 'Angelina',
      status: 'Pro',
    },
    descriptions: [
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    ],
  },
];
