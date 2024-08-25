import React, { useState } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import "./styles/index.css";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="app">
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Sidebar isOpen={isDrawerOpen} handleDrawerToggle={handleDrawerToggle} />
      <main className="content">
        <h1>Welcome to Policy Explained</h1>
        <p>Your source for reliable federal government information.</p>
      </main>
    </div>
  );
}

export default App;

