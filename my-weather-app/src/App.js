import React, { useState } from 'react';
import CalendarComponent from './Calendar';
import './App.css';


function WebsiteLogo() {
  return (
    <div>
      <img src="weather-logo.png" alt="Logo" className="WebsiteLogo" />
    </div>
  );
}

function WebsiteDescription({ description }) {
  return (
    <div className="WebsiteDescription">
      <div className="LogoAndDescription">
        <WebsiteLogo />
        <h2>{description}</h2>
      </div>
    </div>
  );
}

function ActivityPlannerForm() {
  const [date, setDate] = useState('');
  const [activityName, setActivityName] = useState('');
  const [activityDescription, setActivityDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ date, activityName, activityDescription });
  };

  return (
    <div>
      <WebsiteDescription description="A place for you to plan your everyday activities while staying up to date with the daily weather! You can input your activity and the calendar will show the weather corresponding to the date selected." />
      <div>
        <CalendarComponent />
      </div>
    </div>
  );
}

export default ActivityPlannerForm;

