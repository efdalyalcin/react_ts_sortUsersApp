import { useCallback, useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import { IUser, TSortOption } from '../types/users.type';
import './Home.scss';
import { useUsers } from '../store/usersStore';
import { getUsers } from '../services/getUsers';
import { mockUsers } from '../services/mockData';
import { handleSorting } from '../helpers/handleSorting';
import UsersTable from '../components/UsersTable/UsersTable';

export default function Home() {
  const { users, storeUsers } = useUsers();
  const [selectedSortBy, setSelectedSortBy] = useState<keyof IUser>('name');
  const [sortOption, setSortOption] = useState<TSortOption>('none');
  const [sortedUserList, setSortedUserList] = useState<IUser[]>([...users]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    getUsers(mockUsers).then((res) => {
      storeUsers(res.data);
      setSortedUserList(res.data);
    });
  }, []);

  const filterUsers = (users: IUser[]) => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  // filter the data by name
  useEffect(() => {
    const filteredUsers = filterUsers(users);
    setSortedUserList([...filteredUsers]);
  }, [searchInput]);

  const handleSortButton = useCallback(() => {
    const filteredUsers = searchInput ? filterUsers(users) : users;

    const sortedUsers = handleSorting(
      sortOption,
      selectedSortBy,
      filteredUsers
    );
    if (sortedUsers) setSortedUserList([...sortedUsers]);
  }, [sortOption, selectedSortBy]);

  // Handles the sort order button change
  useEffect(() => {
    handleSortButton();
  }, [sortOption]);

  return (
    <>
      <header className="Home__header">
        <SearchBar
          setSelectedSortBy={setSelectedSortBy}
          handleSortButton={handleSortButton}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </header>
      <main>
        <div className="Home__sort-button">
          <select
            onChange={(e) => setSortOption(e.target.value as TSortOption)}
            className="Home__sort-option"
          >
            <option value="none">Do not sort</option>
            <option value="asc">Sort ascending</option>
            <option value="dsc">Sort descending</option>
          </select>
        </div>
        <UsersTable userList={sortedUserList} />
      </main>
    </>
  );
}
