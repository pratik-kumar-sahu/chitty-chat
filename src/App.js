import ChatScreen from "./components/ChatScreen/ChatScreen";
import ChatSidebar from "./components/ChatSidebar/ChatSidebar";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "./contexts/UserContext";
import "./App.css";

function App() {
  const { user } = useContext(UserContext);
  const [show, setShow] = useState(true);

  const clickHandler = () => {
    setShow(!show);
  };

  return !user ? (
    <Login />
  ) : (
    <div className="container">
      <Router>
        <ChatSidebar show={show} clickHandler={clickHandler} />
        <Switch>
          <Route path="/rooms/:roomId">
            <ChatScreen show={show} clickHandler={clickHandler} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
