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
        return checkAsc(a[sortBy], b[sortBy]);
      });
    case 'dsc':
      return users.sort((a, b) => {
        if (sortBy === 'age') return b.age - a.age;
        return checkDsc(a[sortBy], b[sortBy]);
      });
    default:
      return;
  }
};
