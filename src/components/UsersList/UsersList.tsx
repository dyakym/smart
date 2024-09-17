import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { getAllUsers } from "../../utils/allUsers";
import { User } from "../../types/UserType";
import { createData } from "../../utils/createData";
import { filterUsers } from "../../utils/filterUsers";
import { UserSelected } from '../../types/UserSelectList';
import { UserItem } from "../UsersItem/UsersItem";
import style from "./usersList.module.scss";

export function UsersList() {
   const dispatch: AppDispatch = useDispatch();

   const users = useSelector((state: RootState) => state.users.users);
   const filter = useSelector((state: RootState) => state.users.filter);
   const search = useSelector((state: RootState) => state.users.search);

  const filteredUsers = filterUsers(users, filter, search);

  const usersDate = filteredUsers.map((user: User) =>
    createData(user.id, user.name, user.username, user.email, user.phone, )
  );

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <table className={style.table}>
        <thead className={style.thead}>
          {usersDate.length > 0 ? (
            <tr>
            <th className={style.th}>{UserSelected.NAME}</th>
            <th className={style.th}>{UserSelected.USER_NAME}</th>
            <th className={style.th}>{UserSelected.EMAIL}</th>
            <th className={style.th}>{UserSelected.PHONE}</th>
            </tr>
          ) : (
            <div className="errorMessage">Error! There is no user with such {filter} &#128542;</div>
            )}
          
        </thead>

        <tbody>
          {usersDate.map((item) => (
         <UserItem user={item} key={item.id} />
      ))}
        </tbody>
      </table>
    </div>
  );

  
}