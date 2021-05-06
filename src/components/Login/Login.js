import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { auth, provider } from "../../firebase";
import "./Login.scss";

function Login() {
  const { user, dispatch } = useContext(UserContext);

  const loginHandler = () => {
    auth
      .signInWithPopup(provider)
      .then((resp) =>
        dispatch({
          type: "VERIFY_USER",
          user: resp.user,
        })
      )
      .then(console.log(user))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={loginHandler}>Login with Google</button>
      {user && <p>{user.user.displayName}</p>}
    </div>
  );
}

export default Login;
