export const getRatingPercentage = (item: number) => (item >= 0 && item <= 5) ? Math.round(item) * 20 : 0;
