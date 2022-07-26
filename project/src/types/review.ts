export type ReviewImages = {
  src: string;
  alt: string;
};

export type ReviewTime = {
  datetime: string;
  time: string;
};

export type OfferCardReview = {
  id: string;
  avatarReview: ReviewImages;
  nameUser: string;
  rating: string;
  text: string;
  timeReview: ReviewTime;
};

export type OfferCardReviews = OfferCardReview[];
