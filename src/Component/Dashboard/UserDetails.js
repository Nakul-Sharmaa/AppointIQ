import React, { useState, useEffect } from "react";
import "./userDetails.css";
import Header from "../Header/Header.js/Header";
export default function PatientDetails({ onBack,selectedindex }) {
  const [dataSent, setDataSent] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const title=["New Appointments","Approved Appointments","Cancelled Appointments","Total Appointments"]
  const api=["https://49d5-2409-40d1-88-9031-6d86-8eda-c27c-e0e2.ngrok-free.app/api/appointments/doctor/8/pending",
    "https://49d5-2409-40d1-88-9031-6d86-8eda-c27c-e0e2.ngrok-free.app/api/appointments/doctor/8/approved",
    "https://49d5-2409-40d1-88-9031-6d86-8eda-c27c-e0e2.ngrok-free.app/api/appointments/doctor/8/denied",
  "https://49d5-2409-40d1-88-9031-6d86-8eda-c27c-e0e2.ngrok-free.appp/api/appointments/doctor/8/all"]
 const token="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJiYXJsZWVua2F1cjY1QGdtYWlsLmNvbSIsInJvbGVzIjpbIlJPTEVfRE9DVE9SIl0sImlhdCI6MTc0ODAwOTAyNX0.pjgc3GWeZRCbG3clFg2sLar3XopNrJnvjeH2Abv6V-M"
  const fetchData = async () => {
    try {
      const response = await fetch(
        api[selectedindex],
        {
          method: "GET",
          headers: {
            "ngrok-skip-browser-warning": "true",
            Accept: "application/json",
          },
        }
      );
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        setDataSent(data);
        console.log(data)
      } else {
        const text = await response.text();
        console.warn("Expected JSON but got:", text);
      }
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  };

  if (!dataSent || dataSent.length === 0) {
    return <div className="container">
      <Header title={title[selectedindex]} onBack={onBack}/>
      No pending patient data found.</div>;
  }
   const approve=async(id)=>
   {
    try {
      const response = await fetch(`https://49d5-2409-40d1-88-9031-6d86-8eda-c27c-e0e2.ngrok-free.app/api/appointments/confirm/${id}`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,  // <-- Add this line
          "Content-Type": "application/json", // If sending JSON data (optional here if no body)
        },
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const result = await response.json();
      console.log(result)
   
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit registration. Please try again.");
    }
  };
  const done=async(id)=>
  {
try {
    const response = await fetch(
      `https://767e-2409-40d1-88-9031-6d86-8eda-c27c-e0e2.ngrok-free.app/api/appointments/done/${id}?isDone=true`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,  // <-- Add this line
          "Content-Type": "application/json", // If sending JSON data (optional here if no body)
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    alert("Appointment approved!");
  } catch (error) {
    console.error("Submission error:", error);
    alert("Failed to submit registration. Please try again.");
  }
  }

  return (
    <div className="container">
      <Header title={title[selectedindex]} onBack={onBack} />
      <div className="head">
        <h1>Patient Details</h1>
      </div>
     <div className="details-scroll-container">
      {dataSent.map((patient, index) => (
        <div className="details" key={index}>
            <div className="photo-container">
              <img
                  src={`data:image/jpeg;base64,${patient.patientImage}`}
                alt="Doctor"
                className="user-photo"
              />
            </div>
          <div className="info-content">
            <div className="details-text">
              <p><strong>Name:</strong> {patient.patientName}</p>
              <p><strong>Age:</strong> {patient.patientAge}</p>
              <p><strong>Email:</strong> {patient.patientEmail}</p>
              <p><strong>Contact:</strong> {patient.patientContact}</p>
            </div>

            <div className="details-text">
              <p><strong>Symptoms:</strong> {patient.symptoms}</p>
              <p><strong>Date:</strong> {patient.date}</p>
              <p><strong>Time:</strong> {patient.time}</p>
            </div>
          </div>
{selectedindex===0&&(
<div className="action-buttons">
           <button className="approve-btn" onClick={()=>approve(patient.id)}>Approve</button>

            <button className="disapprove-btn" >Disapprove</button>
            <button className="done-btn" onClick={()=>done(patient.id)}>Checked</button>
          </div>
        
)}
       </div>   
      ))}
    </div>
    </div>
  );
}
