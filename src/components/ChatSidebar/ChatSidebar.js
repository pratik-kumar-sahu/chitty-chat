import React, { useEffect, useState } from "react";
import "./ChatSidebar.scss";
import ChatSidebarItem from "../ChatSidebarItem/ChatSidebarItem";
import { invokeFirestore } from "../../firebase";

function ChatSidebar({ clickHandler, show }) {
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
    let roomName = await prompt("Give your room a name 🚀");
    roomName = roomName && roomName.trim();
    if (roomName) {
      roomName = roomName.substring(0, 30);
    }
    if (roomName) {
      roomName = roomName.charAt(0).toUpperCase() + roomName.slice(1);

      invokeFirestore.collection("rooms").add({
        name: roomName,
        pic: `https://ui-avatars.com/api/?background=random&name=${roomName}`,
      });
    }
  };

  let styl;
  if (show) {
    styl = { display: "block" };
  } else {
    styl = { display: "none" };
  }

  return (
    <div style={{ display: styl.display }} className="sidebar">
      <div className="sidebar-flex">
        <h1 className="sidebar__header">Recent Chats</h1>
        <button className="sidebar__addRoom" onClick={addRoom}>
          +
        </button>
      </div>
      <div className="sidebar__scroll">
        {rooms.map((room) => (
          <ChatSidebarItem
            key={room.id}
            id={room.id}
            name={room.data.name}
            roomImage={room.data.pic}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default ChatSidebar;
