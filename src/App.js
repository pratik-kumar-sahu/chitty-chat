import "./App.css";
import ChatScreen from "./components/ChatScreen/ChatScreen";
import ChatSidebar from "./components/ChatSidebar/ChatSidebar";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="container">
      <Login />
      <ChatSidebar />
      <ChatScreen />
    </div>
  );
}

export default App;
