import './UsersTableItem.scss';
import { IUser } from '../../types/users.type';

type Props = {
  user: IUser;
  windowWidth: number;
};

export default function UsersTableItem({ user, windowWidth }: Props) {
  if (windowWidth > 768)
    return (
      <div className="UsersTableItem">
        <p className="UsersTableItem__item">{user.name}</p>
        <p className="UsersTableItem__item">{user.age}</p>
        <p className="UsersTableItem__item">{user.email}</p>
        <p className="UsersTableItem__item">{user.country}</p>
        <p className="UsersTableItem__item">{user.phone}</p>
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
