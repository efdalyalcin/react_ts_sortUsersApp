import './SearchBar.scss';
import { IUser } from '../../types/users.type';

const categories = ['name', 'age', 'email', 'phone', 'country'];

type Props = {
  setSelectedSortBy: (value: keyof IUser) => void;
  handleSortButton: () => void;
  setSearchInput: (name: string) => void;
  searchInput: string;
};

export default function SearchBar({
  setSelectedSortBy,
  handleSortButton,
  setSearchInput,
  searchInput,
}: Props) {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // this prevents the white space in the beginning
    const value = e.target.value.replace(/^\s+/, '');
    setSearchInput(value);
  };

  const handleCategoriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSortBy(e.target.value as keyof IUser);
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar__bar">
        <div className="SearchBar__magnifier" />
        <input
          type="text"
          className="SearchBar__input"
          placeholder="Search"
          value={searchInput}
          onChange={handleInput}
        />
      </div>

      <div className="SearchBar__select-wrapper">
        <label htmlFor="sortTypeId" className="SearchBar__label">
          SORT BY:
        </label>
        <select
          onChange={(e) => handleCategoriesChange(e)}
          id="sortTypeId"
          className="SearchBar__select"
        >
          {categories?.map((category, i) => {
            return (
              <option key={`${i}.${category}`} value={category}>
                {category.toUpperCase()}
              </option>
            );
          })}
        </select>
      </div>

      <button
        type="button"
        className="SearchBar__button"
        onClick={handleSortButton}
      >
        Sort
      </button>
    </div>
  );
}
