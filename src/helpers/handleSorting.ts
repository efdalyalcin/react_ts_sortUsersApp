import { IUser, TSortOption } from '../types/users.type';

const checkAsc = (first: string, second: string) => {
  const firstUpperCase = first.toUpperCase();
  const secondUpperCase = second.toUpperCase();

  if (firstUpperCase < secondUpperCase) return -1;
  if (firstUpperCase > secondUpperCase) return 1;
  return 0;
};

const checkDsc = (first: string, second: string) => {
  const firstUpperCase = first.toUpperCase();
  const secondUpperCase = second.toUpperCase();

  if (firstUpperCase < secondUpperCase) return 1;
  if (firstUpperCase > secondUpperCase) return -1;
  return 0;
};

export const handleSorting = (
  sortOption: TSortOption,
  sortBy: keyof IUser,
  users: IUser[]
) => {
  switch (sortOption) {
    case 'asc':
      return users.sort((a, b) => {
        if (sortBy === 'age') return a.age - b.age;
        if (sortBy === 'name') return checkAsc(a.name, b.name);
        if (sortBy === 'email') return checkAsc(a.email, b.email);
        if (sortBy === 'phone') return checkAsc(a.phone, b.phone);
        if (sortBy === 'country') return checkAsc(a.country, b.country);
        return 0;
      });
    case 'dsc':
      return users.sort((a, b) => {
        if (sortBy === 'age') return b.age - a.age;
        if (sortBy === 'name') return checkDsc(a.name, b.name);
        if (sortBy === 'email') return checkDsc(a.email, b.email);
        if (sortBy === 'phone') return checkDsc(a.phone, b.phone);
        if (sortBy === 'country') return checkDsc(a.country, b.country);
        return 0;
      });
    default:
      return;
  }
};
