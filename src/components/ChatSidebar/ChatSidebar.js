import React from "react";
import "./ChatSidebar.scss";
import ChatSidebarItem from "../ChatSidebarItem/ChatSidebarItem";

function ChatSidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar__header">Chats</h1>
      <div className="sidebar__scroll">
        <ChatSidebarItem />
        <ChatSidebarItem />
        <ChatSidebarItem />
        <ChatSidebarItem />
        <ChatSidebarItem />
        <ChatSidebarItem />
      </div>
    </div>
  );
}

export default ChatSidebar;
