import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  // const d = message.date.toDate().toString();
  // console.log(d);

  // const date = "";
  // for(let i = 0; i < d.length; i++){
  //   if(i >= 4 && i <= 10)date += d[i];
  // } 
  

  // console.log(message);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        {/* <span>Just Now</span> */}
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
