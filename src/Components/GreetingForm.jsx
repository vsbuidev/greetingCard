/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// GreetingForm.js

import React, { useState } from "react";

const GreetingForm = ({ onFormSubmit }) => {
  const [recipient, setRecipient] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ recipient, occasion });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Recipient:
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
      </label>
      <br />
      <label>
        Occasion:
        <input
          type="text"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Generate Card</button>
    </form>
  );
};

export default GreetingForm;
