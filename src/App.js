import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import DataUpload from './components/DataUpload';
import Visualization from './components/Visualization';
import ModelSelection from './components/ModelSelection';
import './App.css'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<DataUpload />} />
        <Route path="/visualization" element={<Visualization />} />
        <Route path="/model" element={<ModelSelection />} />
      </Routes>
    </Router>
  );
}

export default App;
