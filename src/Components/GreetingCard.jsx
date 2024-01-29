/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const GreetingCard = ({ recipient, occasion }) => {
  return (
    <div className="greeting-card">
      <h2>Greeting Card</h2>
      <p>Dear {recipient},</p>
      <p>Wishing you a wonderful {occasion}!</p>
      <p>Best regards,</p>
      <p>Your Name</p>
    </div>
  );
};

export default GreetingCard;
