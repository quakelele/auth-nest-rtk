import { useDispatch } from "react-redux";
import { setLogout } from "app/shared/api/UserSlice";

export const useLogout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLogout());
    localStorage.removeItem("acessToken");
  };
  return { handleLogout };
};

