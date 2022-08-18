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
  previewImage: string;
  images: string[];
  isPremium: boolean;
  title: string;
  isFavorite: boolean;
  rating: number;
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
  description: string;
};
