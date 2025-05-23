import React, { useState, useEffect } from "react";
import "./userDetails.css";

export default function PatientDetails() {
  const [dataSent, setDataSent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://70d2-2409-40d1-88-a191-c868-551-4f84-87b0.ngrok-free.app/api/appointments/doctor/8/pending",
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
    return <div>No pending patient data found.</div>;
  }

  return (
    <div className="container">
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

          <div className="action-buttons">
            <button className="approve-btn">Approve</button>
            <button className="disapprove-btn">Disapprove</button>
            <button className="done-btn">Checked</button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
