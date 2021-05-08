import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { auth, provider } from "../../firebase";
import panda from "./panda.gif";
import "./Login.scss";

function Login() {
  const { dispatch } = useContext(UserContext);
  const [toggle, setToggle] = useState(false);

  const loginHandler = () => {
    auth
      .signInWithPopup(provider)
      .then((resp) =>
        dispatch({
          type: "VERIFY_USER",
          user: resp.user,
        })
      )
      .then(console.log("user sign in successfull"))
      .catch((err) => console.log(err));
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div className="login">
      {toggle ? (
        <img className="login__image" src={panda} alt="chitty-chat" />
      ) : null}
      <button className="login__btn" onClick={toggleHandler}>
        Toggle me 🙃
      </button>
      <button className="login__btn" onClick={loginHandler}>
        Login with Google ➡️
      </button>
      {/* {user && <p>{user.user.displayName}</p>} */}
    </div>
  );
}

export default Login;
