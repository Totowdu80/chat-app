import React from "react";
import "./Contact.css";

const Contact = function(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt="Avatar" />
      <div>
        <h2 className="name">{props.name}</h2>
        <div className="status">
          <div>
            {props.online === true ? (
              <div className="status-online" />
            ) : (
              <div className="status-offline" />
            )}
            {props.online === true ? (
              <div className="status-text">Online</div>
            ) : (
              <div className="status-text">Offline</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
