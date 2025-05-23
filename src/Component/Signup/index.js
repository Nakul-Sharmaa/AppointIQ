import React from 'react';
import './index.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="gradient-overlay"></div>
        <img
          src="/Images/drimageee.jpg"
          alt="signup"
          className="signup-image"
        />
      </div>
      <div className="signup-right">
        <form className="signup-form">
          <h2>Sign Up</h2>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email address..." />
          <input type="text" placeholder="Username..." />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Repeat Password" />
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to the <span>Terms of User</span>
            </label>
          </div>
          <button type="submit" className="btn-signup">Sign Up</button>
          <p className="signin-link">Sign in →</p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
