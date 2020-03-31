import React from "react";
import "./Contact.css";

const Contact = ({ name, avatar, online }) => {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="Avatar" />
      <div>
        <h2 className="name">{name}</h2>
        <div className="status">
          <div
            className={online === "online" ? "status-online" : "status-offline"}
          />
          <div className="status-text">{online}</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
