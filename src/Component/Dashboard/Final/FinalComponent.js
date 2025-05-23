
import React, { useEffect, useState } from 'react';
import Sidebar from '../SideBar/sideBar';
import Dashboard from '../Dashboard';
import './Final.css'
import SetAvailability from '../../Schedule/Schedule';
function Final() {
 
  return (
 <div>
     <div className="app-container">
      <Sidebar />
      <SetAvailability/>
    </div>
 </div>
  
  );
}

export default Final;
