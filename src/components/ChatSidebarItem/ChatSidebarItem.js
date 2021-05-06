import React from "react";
import "./ChatSidebarItem.scss";

function ChatSidebarItem({ name }) {
  return (
    <div className="sidebar-item">
      <div className="sidebar-item__container">
        <img
          className="sidebar-item__container--img"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
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
  );
}

export default ChatSidebarItem;
