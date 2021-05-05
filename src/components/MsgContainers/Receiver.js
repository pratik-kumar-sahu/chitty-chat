import React from "react";

function Receiver() {
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
          <p>Sent messages will appear here</p>
          <div
            style={{
              color: "var(--gray-light)",
              fontSize: "1.2rem",
              float: "right",
            }}
          >
            1:42
          </div>
        </div>
      </div>
    </>
  );
}

export default Receiver;
