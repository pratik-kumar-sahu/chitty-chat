import React, { useContext, useEffect, useRef, useState } from "react";
import direct from "./direct.svg";
import Sender from "../MsgContainers/Sender";
import Receiver from "../MsgContainers/Receiver";
import "./ChatScreen.scss";
import { UserContext } from "../../contexts/UserContext";
import { invokeFirestore, timestamp } from "../../firebase";
import { useParams } from "react-router";

function ChatScreen() {
  const { user } = useContext(UserContext);
  const [chats, setChats] = useState([]);
  const [text, setText] = useState("");
  const [roomName, setRoomName] = useState("");
  const [roomImage, setRoomImage] = useState(null);
  const { roomId } = useParams();
  const containerRef = useRef(null);

  let time;
  if (chats.length > 0) {
    time = new Date(
      chats[chats.length - 1].data.timestamp?.toDate()
    ).toLocaleString();
  }

  useEffect(() => {
    if (containerRef && containerRef.current) {
      const element = containerRef.current;
      element.scroll({
        top: element.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [containerRef, chats]);

  useEffect(() => {
    invokeFirestore
      .collection("rooms")
      .doc(roomId)
      .onSnapshot((snapshot) => {
        setRoomName(snapshot.data().name);
        setRoomImage(snapshot.data().pic);

        invokeFirestore
          .collection("rooms")
          .doc(roomId)
          .collection("chats")
          .orderBy("timestamp", "asc")
          .onSnapshot((snapshot) => {
            setChats(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            );
          });
      });
  }, [roomId]);

  const messageHandler = (e) => {
    e.preventDefault();
    if (text) {
      invokeFirestore
        .collection("rooms")
        .doc(roomId)
        .collection("chats")
        .add({
          message: text,
          pic: `https://ui-avatars.com/api/?name=${user.user.displayName}`,
          author: user.user.displayName,
          timestamp: timestamp(),
        });
    }
    setText("");
  };

  // const logout = () => {};

  return (
    <div className="screen">
      <div className="screen__header">
        <img className="screen__header-image" src={roomImage} alt="chat-room" />
        <div className="screen__header-details">
          <h3 className="screen__header-details--name">{roomName}</h3>
          <p className="screen__header-details--time">Last Seen at {time}</p>
        </div>
        {/* <button onClick={() => logout()} className="screen__header-logout">
          Logout ➡️
        </button> */}
      </div>

      <div ref={containerRef} className="screen__container">
        {chats.map((chat) =>
          chat.data.author === user.user.displayName ? (
            <Receiver key={chat.id} chat={chat.data} />
          ) : (
            <Sender key={chat.id} chat={chat.data} />
          )
        )}
      </div>

      <div className="screen__sendbox">
        <form className="screen__sendbox-form" onSubmit={messageHandler}>
          <input
            className="screen__sendbox-form--inputbox"
            placeholder="Type message"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="screen__sendbox-form--btn">
            <img
              className="screen__sendbox-form--btn__img"
              src={direct}
              alt="send"
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
