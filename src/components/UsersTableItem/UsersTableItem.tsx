import './UsersTableItem.scss';
import { IUser } from '../../types/users.type';

type Props = {
  user: IUser;
  windowWidth: number;
};

export default function UsersTableItem({ user, windowWidth }: Props) {
  const userItems: (keyof IUser)[] = Object.keys(user) as (keyof IUser)[];

  if (windowWidth > 768)
    return (
      <div className="UsersTableItem">
        {userItems.map((userItem) => (
          <p
            className="UsersTableItem__item"
            key={userItem}
            data-testid="user-item"
          >
            {user[userItem]}
          </p>
        ))}
      </div>
    );

  return (
    <div className="UsersTableItem">
      <p className="UsersTableItem__item">{user.name}</p>
      <p className="UsersTableItem__item">{user.age}</p>
      <p className="UsersTableItem__item">{user.country}</p>
    </div>
  );
}
