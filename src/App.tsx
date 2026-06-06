import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';

// Active MVP Pages (Matching your sidebar perfectly)
import Dashboard from './pages/DashboardPage';
import ElectedOfficials from './pages/ElectedOfficialsPage';
import ErrorPage from './pages/error';
import Home from './pages/HomePage';
import LegislationList from './pages/LegislationListPage';
import Login from './pages/LoginPage';
import SearchResults from './pages/SearchResultsPage';

// Post-MVP / Missing Pages (Commented out for later)
// import About from './pages/about';
// import CongressWhiteHouseMap from './pages/congressWhiteHouseMap';
// import EdResources from './pages/edResources';
// import LegislationDetails from './pages/legislationDetails';
// import OfficialDetails from './pages/officialDetails';
// import UserDistMap from './pages/userDistMap';

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
          {/* Active MVP Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/elected-officials" element={<ElectedOfficials />} />
          <Route path="/legislation-list" element={<LegislationList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<SearchResults />} /> {/* Added this so the import is used! */}
          <Route path="*" element={<ErrorPage />} />

          {/* Post-MVP / Missing Routes (Safely commented out for JSX) */}
          {/* 
          <Route path="/about" element={<About />} />
          <Route path="/congress-white-house-map" element={<CongressWhiteHouseMap />} />
          <Route path="/ed-resources" element={<EdResources />} />
          <Route path="/legislation-details" element={<LegislationDetails />} />
          <Route path="/official-details" element={<OfficialDetails />} />
          <Route path="/user-dist-map" element={<UserDistMap />} /> 
          */}
        </Routes>
      </div>
    </>
  );
}

export default App;

