import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import ExpensePage from "./components/pages/ExpensePage";
import LoginPage from "./components/pages/LoginPage";
import ProfilePage from "./components/pages/ProfilePage";
import MainNavigation from "./components/header/MainNavigation";
import WelcomePage from "./components/pages/WelcomePage";
import Root from "./components/pages/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <WelcomePage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "user", element: <ProfilePage /> },
      { path: "expense", element: <ExpensePage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
