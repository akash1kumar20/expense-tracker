import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ExpensePage from "./components/pages/ExpensePage";
import LoginPage from "./components/pages/LoginPage";
import ProfilePage from "./components/pages/ProfilePage";
import WelcomePage from "./components/pages/WelcomePage";
import Root from "./components/pages/Root";
import NotFoundPage from "./components/pages/NotFoundPage";
import ChangePassword from "./components/Authentication/ChangePassword";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import UpdateItem from "./components/Tracker/UpdateItem";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <WelcomePage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "expense", element: <ExpensePage /> },
      { path: "updateExpense", element: <UpdateItem /> },
      { path: "login", element: <LoginPage /> },
      { path: "changePassword", element: <ChangePassword /> },
      { path: "forgotPassword", element: <ForgotPassword /> },
      { path: "/*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
