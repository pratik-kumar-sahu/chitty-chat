import ChatScreen from "./components/ChatScreen/ChatScreen";
import ChatSidebar from "./components/ChatSidebar/ChatSidebar";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import "./App.css";

function App() {
  const { user } = useContext(UserContext);

  return user ? (
    <Login />
  ) : (
    <div className="container">
      <Router>
        <ChatSidebar />
        <Switch>
          <Route path="/rooms/:roomId">
            <ChatScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
