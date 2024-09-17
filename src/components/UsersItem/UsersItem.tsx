import { UserDate } from "../../types/UserType";
import style from "./usersItem.module.scss";

type Props = {
  user: UserDate;
};

export const UserItem: React.FC<Props> = ({ user }) => {
  return (
      <tr>
        <td className={style.td}>{user.name}</td>
        <td className={style.td}>{user.username}</td>
        <td className={style.td}>{user.email}</td>
        <td className={style.td}>{user.phone}</td>
      </tr>
  );
};
