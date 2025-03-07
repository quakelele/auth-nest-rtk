import { createBrowserRouter } from "react-router-dom";

import { RegisterPage } from "app/pages/RegisterPage/RegisterPage";
import { UserPage } from "app/pages/UserPage/UserPage";
import { LoginPage } from "app/pages/LoginPage/LoginPage";
import { Layout } from "app/widgets/Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/user",
        element: <UserPage />,
      },
    ],
  },
]);
