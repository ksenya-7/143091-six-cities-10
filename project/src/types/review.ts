export type Review = {
  id: number;
  rating: number;
  comment: string;
  date: string;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
};
