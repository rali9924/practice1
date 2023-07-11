import React from 'react';
import { useNavigate } from 'react-router-dom';
import './frontpage.css' 
import './App.css'

function FrontPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/app');
  };

  return (
    <div>
      <img src="weather-logo.png" alt="Logo" className="WebsiteLogo" />
      <h2 className="WeatherTitle">A place for you to plan out your week while staying up to date with the weekly weather!</h2>
      <button className= "AppButton" onClick={handleButtonClick}>Enter Weather Buddy!</button>
    </div>
  );
}

export default FrontPage;