import React, { useContext, useEffect, useState } from "react";
import "./ChatSidebar.scss";
import ChatSidebarItem from "../ChatSidebarItem/ChatSidebarItem";
import { UserContext } from "../../contexts/UserContext";
import { invokeFirestore } from "../../firebase";

function ChatSidebar() {
  const { user, dispatch } = useContext(UserContext);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const unMount = invokeFirestore
      .collection("rooms")
      .onSnapshot((snapshot) => {
        setRooms(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

    return () => unMount();
  }, []);

  return (
    <div className="sidebar">
      <h1 className="sidebar__header">Recent Chats</h1>
      <div className="sidebar__scroll">
        {rooms.map((room) => (
          <ChatSidebarItem key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default ChatSidebar;
