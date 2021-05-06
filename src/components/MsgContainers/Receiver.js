import React from "react";

function Receiver({ chat }) {
  return (
    <>
      <div
        style={{ justifyContent: "flex-end" }}
        className="screen__container-message"
      >
        <div
          style={{ backgroundColor: "#7c3aed", color: "#fff" }}
          className="screen__container-message--content"
        >
          <p>{chat.message}</p>
          <div
            style={{
              color: "var(--gray-light)",
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

export default Receiver;
