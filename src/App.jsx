/* eslint-disable no-unused-vars */
import React from "react";
import GreetingCard from "./Components/GreetingCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GreetingCard recipient="John" occasion="Birthday" />
      <GreetingCard recipient="Mark" occasion="Marriage" />
      <GreetingCard recipient="David" occasion="Party" />
    </div>
  );
}

export default App;
