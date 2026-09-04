import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';

// MVP Pages
import Dashboard from './pages/DashboardPage';
import ElectedOfficials from './pages/ElectedOfficialsPage';
import ErrorPage from './pages/error';
import Home from './pages/HomePage';
import LegislationList from './pages/LegislationListPage';
import Login from './pages/LoginPage';
import SearchResults from './pages/SearchResultsPage';

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
        }}
      />

      <Sidebar isOpen={isOpen} handleDrawerToggle={handleDrawerToggle} />
      <div style={{ marginTop: '64px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/elected-officials" element={<ElectedOfficials />} />
          {/* Map both routes so navigating to /legislation works directly */}
          <Route path="/legislation" element={<LegislationList />} />
          <Route path="/legislation-list" element={<LegislationList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
