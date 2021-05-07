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

  const addRoom = async () => {
    let roomName = await prompt("Give room a name: ");
    if (roomName) {
      roomName = roomName.charAt(0).toUpperCase() + roomName.slice(1);
      invokeFirestore.collection("rooms").add({
        name: roomName,
        pic: `https://ui-avatars.com/api/?name=${roomName}`,
      });
    }
  };

  return (
    <div className="sidebar">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <h1 className="sidebar__header">Recent Chats</h1>
        <button onClick={addRoom}>Add Room</button>
      </div>
      <div className="sidebar__scroll">
        {rooms.map((room) => (
          <ChatSidebarItem
            key={room.id}
            id={room.id}
            name={room.data.name}
            roomImage={room.data.pic}
          />
        ))}
      </div>
    </div>
  );
}

export default ChatSidebar;
