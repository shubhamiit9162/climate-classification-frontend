import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => (
  <div className="dashboard-container">
    <h2 className="dashboard-title">Dashboard</h2>
    <ul className="dashboard-links">
      <li><Link to="/upload">Upload Data</Link></li>
      <li><Link to="/visualization">View Visualizations</Link></li>
    </ul>
  </div>
);

export default Dashboard;
