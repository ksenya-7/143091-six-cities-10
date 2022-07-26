export type OfferImages = {
  src: string;
  alt: string;
};

export type OfferRating = {
  width: string;
  value: number;
};

export type OfferHost = {
  avatar: string;
  name: string;
  status: string;
  isPro: boolean;
};

export type OfferCard = {
  id: string;
  location: string;
  imageSmall: OfferImages;
  images: OfferImages[];
  mark: string;
  isMark: boolean;
  title: string;
  isActiveButton: boolean;
  rating: OfferRating;
  entire: string;
  bedroomsAmount: string;
  adultsAmount: string;
  price: number;
  insideList: string[];
  host: OfferHost;
  descriptions: string[];
};

export type OfferCards = OfferCard[];
