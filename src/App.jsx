import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddMovie from './components/AddMovie'; // Import the AddMovie component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-movie" element={<AddMovie />} /> {/* Add the route for the AddMovie component */}
      </Routes>
    </Router>
  );
};

export default App;