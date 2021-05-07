import React, { useEffect, useState } from "react";
import { invokeFirestore } from "../../firebase";
import { Link } from "react-router-dom";
import "./ChatSidebarItem.scss";

function ChatSidebarItem({ name, id, roomImage }) {
  const [chats, setChats] = useState("");

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
    <Link style={{ textDecoration: "none" }} to={`/rooms/${id}`}>
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
              <div className="sidebar-item__container--row-time">17:15</div>
            </div>
            <div className="sidebar-item__container--column-message">
              Last message will appear here... some random content to check the
              alignment of messsages with container
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ChatSidebarItem;
