
import React, { useEffect, useState } from 'react';
import Sidebar from '../SideBar/sideBar';
import Dashboard from '../Dashboard';
import './Final.css'
import SetAvailability from '../../Schedule/Schedule';
function Final() {
  const [selectedIndex,setSelectedIndex]=useState(0)
 
  return (
 <div>
     <div className="app-container">
      <Sidebar setSelectedIndex={setSelectedIndex}/>
      {selectedIndex===0 &&<Dashboard/>}
      { selectedIndex===2&&<SetAvailability/>}
    </div>
 </div>
  
  );
}

export default Final;
