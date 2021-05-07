import React from "react";

function Sender({ chat }) {
  const today = new Date(chat.timestamp?.toDate());
  const time = today.getHours() + ":" + today.getMinutes();

  return (
    <>
      <div className="screen__container-message">
        <img
          className="screen__container-message--img"
          src={chat.pic}
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
            {time}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sender;
