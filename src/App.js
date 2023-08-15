import React, { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WelcomePage from "./components/pages/WelcomePage";
import Root from "./components/pages/Root";
import "./App.css";
const ProfilePage = lazy(() => import("./components/pages/ProfilePage"));
const ExpensePage = lazy(() => import("./components/pages/ExpensePage"));
const LoginPage = lazy(() => import("./components/pages/LoginPage"));
const NotFoundPage = lazy(() => import("./components/pages/NotFoundPage"));
const ChangePassword = lazy(() =>
  import("./components/Authentication/ChangePassword")
);
const ForgotPassword = lazy(() =>
  import("./components/Authentication/ForgotPassword")
);
const UpdateItem = lazy(() => import("./components/Tracker/UpdateItem"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <WelcomePage /> },
      {
        path: "profile",
        element: (
          <Suspense fallback={<p>Loading... Please Wait!</p>}>
            <ProfilePage />
          </Suspense>
        ),
      },
      {
        path: "expense",
        element: (
          <Suspense fallback={<p>Loading... Please Wait!</p>}>
            <ExpensePage />
          </Suspense>
        ),
      },
      {
        path: "updateExpense",
        element: (
          <Suspense fallback={<p>Loading... Please Wait!</p>}>
            <UpdateItem />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<p>Loading... Please Wait!</p>}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: "changePassword",
        element: (
          <Suspense fallback={<p>Loading... Please Wait!</p>}>
            <ChangePassword />
          </Suspense>
        ),
      },
      {
        path: "forgotPassword",
        element: (
          <Suspense fallback={<p>Loading... Please Wait!</p>}>
            <ForgotPassword />
          </Suspense>
        ),
      },
      {
        path: "/*",
        element: (
          <Suspense fallback={<p>Loading... Please Wait!</p>}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
