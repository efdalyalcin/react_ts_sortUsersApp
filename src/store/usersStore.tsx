import React, { useContext, useState, createContext } from 'react';
import { IUser } from '../types/users.type';

type TUserContext = {
  users: IUser[];
  storeUsers: (userData: IUser[]) => void;
  clearUsers: () => void;
};

const UserContext = createContext<TUserContext>({
  users: [],
  storeUsers: () => {},
  clearUsers: () => {},
});

type Children = {
  children: React.ReactNode;
};

export default function UserProvider({ children }: Children) {
  const [users, setUsers] = useState<IUser[]>([]);

  const storeUsers = (userData: IUser[]) => {
    setUsers(() => [...userData]);
  };

  const clearUsers = () => setUsers([]);

  return (
    <UserContext.Provider value={{ users, storeUsers, clearUsers }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUsers() {
  return useContext(UserContext);
}
