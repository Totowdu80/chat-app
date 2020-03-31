import React from 'react';
import './App.css';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact img="https://randomuser.me/api/portraits/women/14.jpg" firstName="Mabel" lastName="Bishop" />
    </div>
  );
}

export default App;
