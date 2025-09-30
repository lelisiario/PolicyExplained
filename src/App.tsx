import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header.js'
import Sidebar from './components/sidebar.js';
import About from './pages/about.js';
import CongressWhiteHouseMap from './pages/congressWhiteHouseMap.js';
import Dashboard from './pages/dashboard.js';
import EdResources from './pages/edResources.js';
import ElectedOfficials from './pages/electedOfficials.js';
import ErrorPage from './pages/error.js';
import Home from './pages/home.js';
import LegislationDetails from './pages/legislationDetails.js';
import LegislationList from './pages/legislationList.js';
import Login from './pages/login.js';
import OfficialDetails from './pages/officialDetails.js';
import UserDistMap from './pages/userDistMap.js';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header
        handleDrawerToggle={handleDrawerToggle}
        onSearch={(query: string) => {
          console.log(`Searching for: ${query}`);
          // Additional search logic here
        }}
      />

      <Sidebar isOpen={isOpen} handleDrawerToggle={handleDrawerToggle} />
      <div style={{ marginTop: '64px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/congress-white-house-map" element={<CongressWhiteHouseMap />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ed-resources" element={<EdResources />} />
          <Route path="/elected-officials" element={<ElectedOfficials />} />
          <Route path="/legislation-details" element={<LegislationDetails />} />
          <Route path="/legislation-list" element={<LegislationList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/official-details" element={<OfficialDetails />} />
          <Route path="/user-dist-map" element={<UserDistMap />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

