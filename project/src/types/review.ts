export type Review = {
  id: string;
  avatarReview: {
    src: string;
    alt: string;
  };
  nameUser: string;
  rating: string;
  text: string;
  timeReview: {
    datetime: string;
    time: string;
  };
};
