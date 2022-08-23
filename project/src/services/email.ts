export type Email = string;

export const getEmail = (): Email => {
  const email = localStorage.getItem('email');
  return email ?? '';
};

export const saveEmail = (email: Email): void => {
  localStorage.setItem('email', email);
};

export const dropEmail = (): void => {
  localStorage.removeItem('email');
};
