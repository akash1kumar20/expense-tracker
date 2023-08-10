import React, { useEffect, useRef, useState } from "react";
import "./ProfilePage.css";
import { useNavigate } from "react-router-dom";
import imgToUse from "./../../images/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProfilePage = () => {
  const [showUpdatedData, setShowUpdatedData] = useState([]);
  const [showMessage, setShowMessage] = useState("");
  const nameRef = useRef();
  const urlRef = useRef();
  const isLogIn = localStorage.getItem("token");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLogIn) {
      alert("Please Login First!");
      navigate("/login");
    }
  });
  const userEmail = localStorage.getItem("email");
  let changeEmail;
  if (userEmail === null) {
    changeEmail = 0;
  } else {
    changeEmail = userEmail.replace("@", "").replace(".", "");
  }
  const openPasswordForm = (event) => {
    event.preventDefault();
    navigate("/changePassword");
  };
  const logOut = () => {
    dispatch(authActions.logout());
    toast.success("Logout Successfully!", {
      position: "top-center",
      theme: "light",
      autoClose: 2000,
    });
    setTimeout(() => {
      navigate("/login");
    }, 2500);
  };
  const updateProfile = async (event) => {
    event.preventDefault();
    const urlValue = urlRef.current.value;
    const nameValue = nameRef.current.value;
    const token = localStorage.getItem("token");
    try {
      let res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBO9Xsnbl9K9s08ibLhXEx-rOOcuCk1bF4",
        {
          idToken: token,
          displayName: nameValue,
          photoUrl: urlValue,
          returnSecureToken: false,
        }
      );
      let updateData = res.data;
      try {
        let data = await axios.post(
          `https://expense-tracker-887e6-default-rtdb.firebaseio.com/updatedData${changeEmail}.json`,
          updateData
        );
        console.log(data);
        alert("Success!!");
        navigate("/expense");
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
    urlRef.current.value = "";
    nameRef.current.value = "";
  };
  const verifyEmail = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      let res = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBO9Xsnbl9K9s08ibLhXEx-rOOcuCk1bF4",
        {
          requestType: "VERIFY_EMAIL",
          idToken: token,
        }
      );
      console.log(res);
      setShowMessage("Please check your mail to verify email!");
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get(
          `https://expense-tracker-887e6-default-rtdb.firebaseio.com/updatedData${changeEmail}.json`
        );
        let obj = Object.values(res.data);
        setShowUpdatedData(obj);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container mt-2 profile">
        <h1>User Profie</h1>
        <div className="row mt-3 row1">
          {showUpdatedData.length > 0 &&
            showUpdatedData.map((data) => (
              <div className="col-md-4" key={data.localId}>
                <p>
                  <img src={`${data.photoUrl}`} className="profileImage" />
                </p>
                <p className="ms-4">Id: {data.email}</p>
                <p className="ms-4">User: {data.displayName}</p>
                <p className="ms-4 updated ps-2 pe-2">Profile Updated</p>
              </div>
            ))}
          {!showUpdatedData.length > 0 && (
            <div className="col-md-4">
              <p>
                <img src={imgToUse} width="200px" height="200px" />
              </p>
              <p className="ms-4">User: {userEmail}</p>
              <p className="danger ps-2 pe-2 ms-2">
                Please Complete Your Profile
              </p>
              <form onSubmit={updateProfile}>
                <p>
                  <input
                    type="text"
                    placeholder="Enter Your Full Name"
                    required
                    ref={nameRef}
                  />
                  <input
                    type="text"
                    placeholder="Enter Your Picture Url"
                    required
                    ref={urlRef}
                  />
                  <input
                    type="button"
                    className="bg-secondary text-white"
                    value="Verify Your Email"
                    onClick={verifyEmail}
                    required
                  />
                  <span>{showMessage}</span>

                  <input
                    type="submit"
                    value="Update Profile"
                    className="bg-primary text-white"
                  />
                </p>
              </form>
            </div>
          )}

          <div className="col-md-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolorem
            inventore omnis consequatur reiciendis, voluptate, tenetur
            recusandae ipsa nobis, ipsum perferendis enim porro error voluptates
            neque excepturi nemo veniam. Molestias! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Ut sunt quis error nulla, autem sequi
            ipsam consequatur facere doloremque delectus repellendus incidunt
            odit ea iste dolorum quae repellat praesentium veniam repudiandae
            animi. Voluptates quo unde obcaecati laboriosam enim illum quod quis
            eaque perspiciatis assumenda vitae, in, itaque dignissimos ipsa
            quidem numquam cum architecto. Nesciunt aperiam asperiores in iste
            voluptate. Quisquam sunt, eveniet recusandae tempora ea consequuntur
            repudiandae velit quas sint maxime eum eius eaque, sequi, laborum
            quos! Reprehenderit soluta magni dolorem, est iusto qui sit ducimus
            ratione! Aliquid eos quidem eius error tempora reiciendis corporis,
            deserunt quibusdam. Dolor, officiis molestiae! Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Pariatur quae tempora, error
            magnam aspernatur laborum recusandae dicta distinctio numquam fuga.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            magnam impedit quisquam aut velit. Ullam eveniet voluptates neque
            sunt culpa repellat. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Nemo voluptates ex omnis et deleniti quod at qui
            inventore aspernatur est! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corporis laborum hic, corrupti maiores omnis harum
            ipsum voluptate cum eos placeat quod laboriosam officiis amet
            exercitationem tenetur maxime accusamus sint pariatur!
            <div className="row justify-content-center">
              <div className="col-5 mt-3">
                <button
                  className="btn btn-info btn-md ms-4"
                  onClick={openPasswordForm}
                >
                  Change Password
                </button>
              </div>
              <div className="col-4 mt-3">
                <button className="btn btn-danger btn-lg" onClick={logOut}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
