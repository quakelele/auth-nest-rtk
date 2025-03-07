import { useDispatch, useSelector } from "react-redux";
import $ from "./UserPage.module.scss";
import { Link, Navigate } from "react-router-dom";
import { logout } from "app/shared/api/UserSlice";
import { ROUTES } from "app/shared/config";
import { useUpdateFavoritesMutation } from "app/shared/api/LoginApi";

export const UserPage = () => {
  const [sendProductId] = useUpdateFavoritesMutation();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
    localStorage.removeItem("acessToken");
  };

  return (
    <div className={$.wrapper}>
      {user.user ? (
        <div className={$.inner}>
          <p>{user.user?.email}</p>
          <p>{user.user?.id}</p>
          <button onClick={() => sendProductId({productId: null})}> send product ID</button>
          <button onClick={logOut}>logout</button>
        </div>
      ) : (
        <p>
          u need to <Link to={ROUTES.LOGIN}>relogin</Link>{" "}
        </p>
      )}
    </div>
  );
};


  // if (!token) {
  //   // Если токен отсутствует, перенаправьте на страницу входа
  //   return <Navigate to="/login" />;
  // }
