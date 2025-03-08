import { useDispatch } from "react-redux";
import { logout } from "app/shared/api/UserSlice";

export const useLogout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("acessToken");
  };
  return { handleLogout };
};

