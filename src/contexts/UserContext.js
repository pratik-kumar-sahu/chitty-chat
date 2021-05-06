import React, { createContext, useReducer } from "react";
import userReducer from "../reducers/userReducer";

export const UserContext = createContext();

function UserContextProvider(props) {
  const [user, dispatch] = useReducer(userReducer, null);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
