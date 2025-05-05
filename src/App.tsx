import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DeveloperAPI from './pages/DeveloperAPI';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/developer-api" element={<DeveloperAPI />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;