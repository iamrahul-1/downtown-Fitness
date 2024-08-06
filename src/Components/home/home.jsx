import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const isLoggedIn = () => {
    const user = auth.currentUser;
    if (user !== null) {
      console.log(`user is ${user.email}`);
      return user.email;
    } else if (user === null) {
      console.log("not logged in");
      return false;
    }
  };
  const result = isLoggedIn();
  console.log(isLoggedIn());

  const handleLogout = async () => {
    await signOut(auth)
      .then(() => {
        console.log("signout success");
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };
  return (
    <div>
      {result ? (
        <div>
          <h1>Welcome {result.split("@")[0]}</h1>
          <button onClick={handleLogout}>SignOut</button>
        </div>
      ) : (
        <div>
          <h1>Welcome guest</h1>
          <button>
            <Link to={"/login"}>Login</Link>
          </button>
          <button>
            <Link to={"/register"}>Register</Link>
          </button>
        </div>
      )}
    </div>
  );
};
export default Home;
