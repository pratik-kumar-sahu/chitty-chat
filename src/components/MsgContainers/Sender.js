import React from "react";

function Sender({ chat }) {
  return (
    <>
      <div className="screen__container-message">
        <img
          className="screen__container-message--img"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt="user-pic"
        />
        <div className="screen__container-message--content">
          <div
            style={{ color: "var(--gray-medium)", fontSize: "1.2rem" }}
            className="sender-name"
          >
            {chat.author}
          </div>
          <div className="sender-message">{chat.message}</div>
          <div
            style={{
              color: "var(--gray-medium)",
              fontSize: "1.2rem",
              float: "right",
            }}
          >
            {new Date(chat.timestamp?.toDate()).toUTCString()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sender;
