import { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';
import './UsersTable.scss';
import { IUser } from '../../types/users.type';
import UsersTableItem from '../UsersTableItem/UsersTableItem';

type Props = {
  userList: IUser[];
};
const userPerPage = 8;
const calculateNumberOfPages = (userList: IUser[]) => {
  return Math.ceil(userList.length / userPerPage);
};

export default function UsersTable({ userList }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [pageUsers, setPageUsers] = useState<IUser[]>([]);
  const [tableHeadings, setTableHeadings] = useState<string[]>(['']);

  // used to control the amount of data shown in the table on small screen size
  // #region window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWidthResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWidthResize);

    return () => {
      window.removeEventListener('resize', handleWidthResize);
    };
  }, []);
  // #endregion

  // Calculates both numberOfPages and the users in the first page
  useEffect(() => {
    const calculatedNumberOfPages = calculateNumberOfPages(userList);
    setNumberOfPages(() => calculatedNumberOfPages);
    if (calculatedNumberOfPages < 2) setCurrentPage(1);

    setPageUsers(() => userList.slice(userPerPage));
    // table headings also added to list not to hardcode
    if (userList[0]) setTableHeadings(Object.keys(userList[0]));
  }, [userList]);

  // It brings users according to page number
  useEffect(() => {
    const start = (currentPage - 1) * userPerPage;
    const end = userPerPage + (currentPage - 1) * userPerPage;

    setPageUsers(userList.slice(start, end));
  }, [currentPage, userList]);

  return (
    <div className="UsersTable">
      <div className="UsersTable__results">
        <div className="UsersTable__heading">
          {tableHeadings.map((heading) => {
            if (windowWidth > 768) {
              return (
                <p className="UsersTable__head-item" key={heading}>
                  {heading.toUpperCase()}
                </p>
              );
            } else {
              if (heading === 'phone' || heading === 'email') return null;
              return (
                <p className="UsersTable__head-item" key={heading}>
                  {heading.toUpperCase()}
                </p>
              );
            }
          })}
        </div>
        <div className="UsersTable__table">
          {pageUsers?.map((user) => (
            <UsersTableItem
              user={user}
              key={user.email}
              windowWidth={windowWidth}
            />
          ))}
        </div>
      </div>
      <div className="UsersTable__pagination">
        {numberOfPages < 2 ? null : (
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            numberOfPages={numberOfPages}
          />
        )}
      </div>
    </div>
  );
}
