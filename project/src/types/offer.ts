export type OfferImages = {
  src: string;
  alt: string;
};

export type OfferRating = {
  width: string;
  value: number;
};

export type OfferHost = {
  avatarUrl: string;
  name: string;
  id: number;
  isPro: boolean;
};

export type OfferCard = {
  id: number;
  location: string;
  previewImage: OfferImages;
  images: OfferImages[];
  mark: string;
  isPremium: boolean;
  title: string;
  isFavorite: boolean;
  rating: OfferRating;
  entire: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: OfferHost;
  descriptions: string[];
};

export type OfferCards = OfferCard[];
