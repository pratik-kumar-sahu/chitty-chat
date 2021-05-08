import React, { useEffect, useState } from "react";
import { invokeFirestore } from "../../firebase";
import { Link } from "react-router-dom";
import "./ChatSidebarItem.scss";

function ChatSidebarItem({ name, id, roomImage, clickHandler }) {
  const [chats, setChats] = useState("");
  let time;

  if (chats.length > 0) {
    const today = new Date(chats[0].timestamp?.toDate());
    time = today.getHours() + ":" + today.getMinutes();
  }

  useEffect(() => {
    invokeFirestore
      .collection("rooms")
      .doc(id)
      .collection("chats")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChats(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);

  return (
    <Link
      onClick={clickHandler}
      style={{ textDecoration: "inherit", color: "inherit" }}
      to={`/rooms/${id}`}
    >
      <div className="sidebar-item">
        <div className="sidebar-item__container">
          <img
            className="sidebar-item__container--img"
            src={roomImage}
            alt="chat-room"
          />
          <div className="sidebar-item__container--column">
            <div className="sidebar-item__container--row">
              <div className="sidebar-item__container--row-name">{name}</div>
              <div className="sidebar-item__container--row-time">{time}</div>
            </div>
            <div className="sidebar-item__container--column-message">
              {chats[0] ? chats[0].message.substring(0, 50) + "..." : "..."}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ChatSidebarItem;
