// /components/WelcomeScreen.js
import React,{useState} from "react";
import "./welcome.css";
import DoctorRegistrationForm from "./Step1";

const WelcomeScreen = () => {
   const [showForm, setShowForm] = useState(false);
  return (
    <div className="welcome-container">
      <div style={{flex:1,height:"100%",width:"30%",alignContent:"center",justifyContent:"center"}}>
        {showForm ? (
          <DoctorRegistrationForm />
        ) : (
          <div className="welcome-content">
            <h1>CHAMPIONS CLUB</h1>
            <p className="subtitle">Hello there!</p>
            <p className="description">
              Please fill the details in this doctor registration form.
            </p>
            <button className="cta-button" onClick={() => setShowForm(true)}>
              SURE <span role="img" aria-label="smile">😊</span> <span className="arrow">➔</span>
            </button>
            <div className="Login">
              Already have an account? Login
              </div>
          </div>
        )}
      </div>

      <div
        className="Welcome-img"
        style={{
          flex: 1,
          height: '100%',
          backgroundImage: `linear-gradient(to bottom right, rgba(225, 0, 255, 0.4), rgba(233, 201, 241, 0.4)), url('/Images/drimageee.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '8px',
        }}
      ></div>
    </div> 
  );
};

export default WelcomeScreen;
