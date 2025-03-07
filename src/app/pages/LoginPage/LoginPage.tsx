import { Link, useNavigate } from "react-router-dom";
import $ from "./LoginPage.module.scss";
import { ROUTES } from "app/shared/config/routes";
import { Button, Form, Input } from "antd";
import { useLoginUserMutation } from "app/shared/api/LoginApi";
import { UsersType } from "app/shared/config/__types";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "app/shared/api/UserSlice";

export const LoginPage = () => {
  const user = useSelector((state) => state?.user);
  const [loginUser] = useLoginUserMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values: UsersType) => {
    const userData = await loginUser(values).unwrap();
    dispatch(login(userData.user));
    localStorage.setItem("acessToken", userData.acessToken);
  
    navigate(ROUTES.USER);
  };

  const logOut = () => {
    dispatch(logout());
    localStorage.removeItem("acessToken");
  };
console.log(user)
  return (
    <div className={$.wrapper}>
      {user.user ? (
       
          <button onClick={logOut}>Logout</button>
        
      ) : (
       
          <Form
            name="login"
            initialValues={{ remember: true }}
            style={{ maxWidth: 360 }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Log in
              </Button>
              or <Link to={ROUTES.REGISTER}>Register now!</Link>
            </Form.Item>
          </Form>
        
      )}
    </div>
  );
};
