export type OfferImages = {
  src: string;
  alt: string;
};

export type City = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
};

export type Offer = {
  id: number;
  city: City;
  previewImage: OfferImages;
  images: OfferImages[];
  mark: string;
  isPremium: boolean;
  title: string;
  isFavorite: boolean;
  rating: {
    width: string;
    value: number;
  };
  entire: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: {
    avatarUrl: string;
    name: string;
    id: number;
    isPro: boolean;
  };
  descriptions: string[];
};
