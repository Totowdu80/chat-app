import React from 'react';
import "./Contact.css"

const Contact = ({ firstName, lastName, img }) => {

    return (
        <div className="Contact">
            <img className="avatar" src={img} />
            <div>
                <h2 className ="name">{firstName} {lastName}</h2>
                <div className="status">
                    <div className ="status-online"></div>
                    <div className ="status-text">online</div>
                </div>
            </div>
            
        </div>
    )
}
   
export default Contact;