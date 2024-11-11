import { createBrowserRouter } from "react-router-dom";
import MainRootLayout from "./layouts/MainRootLayout";
import LoginLayout from "./layouts/Loginlayout/LoginLayout";
import LoginForm from "./layouts/Loginlayout/LoginForm";
import Check from "./layouts/Loginlayout/Check";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import Favourite from "./pages/Favourite";
import ProfileEdit from "./pages/Profile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainRootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "form", element: <FormPage /> },
      { path: "favourite", element: <Favourite /> },
      { path: "profile", element: <ProfileEdit /> },
    ],
  },
  {
    path: "login",
    element: <LoginLayout />,
    children: [
      { index: true, element: <LoginForm /> },
      {
        path: "check",
        element: <Check />,
      },
    ],
  },
]);

export default routes;
