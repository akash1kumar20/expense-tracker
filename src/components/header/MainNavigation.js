import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./MainNavigation.css";
import { authActions } from "../../redux/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { themeActions } from "../../redux/theme";
const MainNavigation = () => {
  const totalAmount = useSelector((state) => state.expense.totalAmount);
  const themeChanger = useSelector((state) => state.theme.mode);
  let theme = "light";
  if (themeChanger === false || themeChanger === "") {
    theme = "light";
  } else {
    theme = "dark";
  }
  const bodyTag = document.querySelector("body");
  bodyTag.setAttribute("theme", theme);
  const premimumShow = totalAmount >= 10000;
  if (!premimumShow) {
    localStorage.setItem("light", JSON.stringify(false));
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = localStorage.getItem("token");
  const logOutHandler = () => {
    dispatch(authActions.logout());
    toast.success("Logout Successfully!", {
      position: "top-center",
      theme: "light",
      autoClose: 2000,
    });
    setTimeout(() => {
      navigate("/login");
      window.location.reload(true);
    }, 2500);
  };

  const changeTheme = () => {
    bodyTag.setAttribute("theme", theme);
    dispatch(themeActions.changeTheme());
  };
  return (
    <>
      <ToastContainer />
      <nav className="navbar navbar-expand-md bg-dark text-white navbar-dark ">
        <div className="container-fluid justify-content-between">
          <ul className="navbar-nav">
            <li className="nav-item ms-md-5 me-md-2">
              <NavLink to="/" className="NavLink">
                HOME
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item ms-md-5 me-md-2">
              <NavLink to="expense" className="NavLink">
                EXPENSE
              </NavLink>
            </li>
          </ul>

          {premimumShow && isLoggedIn && (
            <ul className="navbar-nav">
              <li className="nav-item ms-md-5 me-md-2 premium p-2">
                PRIME MEMBER
              </li>
            </ul>
          )}
          <ul className="navbar-nav">
            <li className="nav-item ms-md-5 me-md-2">
              <NavLink to="profile" className="NavLink">
                PROFILE
              </NavLink>
            </li>
          </ul>
          {premimumShow && isLoggedIn && (
            <ul className="navbar-nav">
              <li className="nav-item ms-md-5  " onClick={changeTheme}>
                {themeChanger && " APPLY LIGHT THEME"}
                {!themeChanger && " APPLY DARK THEME"}
              </li>
            </ul>
          )}
          {!isLoggedIn ? (
            <ul className="navbar-nav">
              <li className="nav-item ms-md-5 me-md-5">
                <NavLink to="login" className="NavLink">
                  LOGIN
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item ms-md-5 me-md-5" onClick={logOutHandler}>
                LOGOUT
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default MainNavigation;
