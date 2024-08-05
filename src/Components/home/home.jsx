import React from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
    } else {
      console.log("user not logged in");
    }
  });
  const handleLogout = async () => {
    await signOut(auth)
      .then(() => {
        console.log("signout success");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };
  return (
    <div>
      <h1>Welcome Home</h1>
      <button className="btn" onClick={handleLogout}>
        SignOut
      </button>
    </div>
  );
};
export default Home;
