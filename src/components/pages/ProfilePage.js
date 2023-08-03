import React, { useContext, useEffect } from "react";
import "./ProfilePage.css";
import { useNavigate } from "react-router-dom";
import imgToUse from "./../../images/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png";
import AuthContext from "../../data_room/auth-context";
const ProfilePage = () => {
  const autCtx = useContext(AuthContext);
  const isLogIn = autCtx.isLoggedIn;
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogIn) {
      alert("Please Login First!");
      navigate("/login");
    }
  }, []);
  const openPasswordForm = (event) => {
    event.preventDefault();
    navigate("/changePassword");
  };
  const logOut = () => {
    autCtx.logOut();
    navigate("/login");
  };
  const user = localStorage.getItem("userEmail");
  return (
    <div className="container mt-2 profile">
      <h1>User Profie</h1>
      <div className="row mt-3 row1">
        <div className="col-md-4">
          <p>
            <img src={imgToUse} width="200px" height="200px" />
          </p>
          <p className="ms-4">User: {user}</p>
          <p>
            <input type="file" />
            <input type="submit" value="Change Profile Photo" />
          </p>
          <p>
            <button
              className="btn btn-info btn-md ms-4"
              onClick={openPasswordForm}
            >
              Change Password
            </button>
          </p>
        </div>

        <div className="col-md-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorem
          inventore omnis consequatur reiciendis, voluptate, tenetur recusandae
          ipsa nobis, ipsum perferendis enim porro error voluptates neque
          excepturi nemo veniam. Molestias! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Ut sunt quis error nulla, autem sequi
          ipsam consequatur facere doloremque delectus repellendus incidunt odit
          ea iste dolorum quae repellat praesentium veniam repudiandae animi.
          Voluptates quo unde obcaecati laboriosam enim illum quod quis eaque
          perspiciatis assumenda vitae, in, itaque dignissimos ipsa quidem
          numquam cum architecto. Nesciunt aperiam asperiores in iste voluptate.
          Quisquam sunt, eveniet recusandae tempora ea consequuntur repudiandae
          velit quas sint maxime eum eius eaque, sequi, laborum quos!
          Reprehenderit soluta magni dolorem, est iusto qui sit ducimus ratione!
          Aliquid eos quidem eius error tempora reiciendis corporis, deserunt
          quibusdam. Dolor, officiis molestiae! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Pariatur quae tempora, error magnam
          aspernatur laborum recusandae dicta distinctio numquam fuga. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Aperiam magnam
          impedit quisquam aut velit. Ullam eveniet voluptates neque sunt culpa
          repellat, aspernatur voluptas est adipisci, natus necessitatibus qui.
          Iste itaque alias, a error fuga voluptates. Voluptas facere quam eum
          a, assumenda reiciendis doloribus quis facilis beatae, magni illum
          autem eius!
          <div className="row justify-content-center">
            <div className="col-4 mt-3">
              <button className="btn btn-danger btn-lg" onClick={logOut}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
