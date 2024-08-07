import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of your React application.</p>
    </div>
  );
}

export default App;