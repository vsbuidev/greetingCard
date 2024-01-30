/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import GreetingCard from "./Components/GreetingCard";
import GreetingForm from "./Components/GreetingForm";
import "./App.css";

function App() {
  const [greetingData, setGreetingData] = useState(null);

  const handleFormSubmit = (data) => {
    setGreetingData(data);
  };

  return (
    <div className="App">
      <GreetingForm onFormSubmit={handleFormSubmit} />
      {greetingData && (
        <GreetingCard
          recipient={greetingData.recipient}
          occasion={greetingData.occasion}
        />
      )}
    </div>
  );
}

export default App;
