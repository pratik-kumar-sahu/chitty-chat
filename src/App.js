import "./App.css";
import ChatScreen from "./components/ChatScreen/ChatScreen";
import ChatSidebar from "./components/ChatSidebar/ChatSidebar";

function App() {
  return (
    <div className="container">
      <ChatSidebar />
      <ChatScreen />
    </div>
  );
}

export default App;
