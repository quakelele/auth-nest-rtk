import { createRoot } from "react-dom/client";
import "./styles/global.scss";
import { RouterProvider } from "react-router-dom";
import { router, store } from "./providers";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
