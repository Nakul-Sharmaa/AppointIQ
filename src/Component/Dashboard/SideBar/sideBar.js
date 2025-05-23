import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">DAMS</h2>
      <div className="profile-icon">👤</div>
      <ul>
        <li>📊 Dashboard</li>
        <li>📅 Appointment</li>
        <li>🔍 Search</li>
        <li>📁 Report</li>
      </ul>
    </div>
  );
}
