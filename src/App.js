import React, { useState, createContext } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ExpensePage from "./components/pages/ExpensePage";
import LoginPage from "./components/pages/LoginPage";
import ProfilePage from "./components/pages/ProfilePage";
import WelcomePage from "./components/pages/WelcomePage";
import Root from "./components/pages/Root";
import NotFoundPage from "./components/pages/NotFoundPage";
import ChangePassword from "./components/Authentication/ChangePassword";
import ForgotPassword from "./components/Authentication/ForgotPassword";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <WelcomePage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "expense", element: <ExpensePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "changePassword", element: <ChangePassword /> },
      { path: "forgotPassword", element: <ForgotPassword /> },
      { path: "/*", element: <NotFoundPage /> },
    ],
  },
]);
export const ThemeChanger = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    //if current theme is light it will switch it too dark and if it's dark it will switch to light.
  };
  return (
    <ThemeChanger.Provider value={{ theme, toggleTheme }}>
      <div id={theme} className="container-fluid App">
        {/* setting id dynamically */}
        <RouterProvider router={router} />
      </div>
    </ThemeChanger.Provider>
  );
}

export default App;
