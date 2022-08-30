import {name, datatype, system, internet} from 'faker';
import {DataProcess} from '../store/data-process/data-process';


export const makeFakeDataState = (): DataProcess => ({
  city: name.title(),
  sorting: name.title(),
  reviews: [],
  error: null,
});

export const fakeOffer = {
  'bedrooms': datatype.number(),
  'city': {
    'location': {
      'latitude': datatype.number(),
      'longitude': datatype.number(),
      'zoom': datatype.number()
    },
    'name': name.title()
  },
  'description': name.title(),
  'goods': [name.title(), name.title(), name.title()],
  'host': {
    'avatarUrl': system.filePath(),
    'id': datatype.number(),
    'isPro': true,
    'name': name.title()
  },
  'id': datatype.number(),
  'images': [internet.avatar(), internet.avatar()],
  'isFavorite': true,
  'isPremium': true,
  'location': {
    'latitude': datatype.number(),
    'longitude': datatype.number(),
    'zoom': datatype.number()
  },
  'maxAdults': datatype.number(),
  'previewImage': internet.avatar(),
  'price': datatype.number(),
  'rating': datatype.number(),
  'title': name.title(),
  'type': name.title()
};

export const fakeReview = {
  'id': datatype.number(),
  'rating': datatype.number(),
  'comment': name.title(),
  'date': 'July 2022',
  'user': {
    'avatarUrl': internet.avatar(),
    'id': datatype.number(),
    'isPro': true,
    'name': name.title()
  }
};
