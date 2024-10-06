import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../src/components/sidebar'; // Adjust the path if necessary
import About from './pages/about';
import CongressWhiteHouseMap from './pages/congressWhiteHouseMap';
import Dashboard from './pages/dashboard';
import EdResources from './pages/edResources';
import ElectedOfficials from './pages/electedOfficials';
import ErrorPage from './pages/error';
import Home from './pages/home';
import LegislationDetails from './pages/legislationDetails';
import LegislationList from './pages/legislationList';
import Login from './pages/login';
import OfficialDetails from './pages/officialDetails';
import UserDistMap from './pages/userDistMap.jsx';

function App() {
  return (
    <>
      <Sidebar />
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
      </>
  );
}

export default App;
