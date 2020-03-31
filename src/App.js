import React from "react";
import "./App.css";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        avatar="https://randomuser.me/api/portraits/women/14.jpg"
        name="Mabel Bishop"
        online="online"
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/men/72.jpg"
        name="Bernard Stevens"
        online="offline"
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/47.jpg"
        name="Marily Wagner"
        online="offline"
      />
    </div>
  );
}

export default App;
