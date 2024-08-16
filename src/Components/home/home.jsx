import { signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../../firebase/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import styles from "./home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [isMemeber, setMemeber] = useState(false);

  const user = auth.currentUser;

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        console.log("logged in");
        setLogin(user);
      } else {
        console.log("not logged in");
        setLogin(false);
      }
    });
  }, []);

  const handleMemeber = () => {
    setMemeber(true); // create seperate database for members and seperate authentication with the help of firebase
    //get user data form firebase
  };

  const handleLogout = async () => {
    await signOut(auth)
      .then(() => {
        console.log("signout success");
        setMemeber(false);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  return (
    <>
      <div className={styles.home}>
        {login ? (
          <div>
            <nav>
              <ul className={styles.nav}>
                <div className={styles.logo}>LOGO</div>
                <li>home</li>
                <li>about</li>
                <li>Shop</li>
                <div className={styles.left}>
                  <button onClick={handleLogout} className={styles.btn}>
                    Signout
                  </button>
                  <button onClick={handleMemeber} className={styles.btn}>
                    Become Member
                  </button>
                </div>
              </ul>
            </nav>
            <section>
              <h1 className={styles.heading}>welcome {user.displayName}</h1>
            </section>
          </div>
        ) : (
          <div>
            <nav>
              <ul className={styles.nav}>
                <div className={styles.logo}>LOGO</div>
                <li>home</li>
                <li>about</li>
                <li>Shop</li>
                <div className={styles.left}>
                  <button className={styles.btn}>
                    <Link className={styles.link} to={"/login"}>
                      login
                    </Link>
                  </button>
                  <button className={styles.btn}>
                    <Link className={styles.link} to={"/register"}>
                      Register
                    </Link>
                  </button>
                </div>
              </ul>
            </nav>
            <h1 className={styles.heading}>Welcome Guest</h1>
          </div>
        )}
      </div>
    </>
  );
};
export default Home;
