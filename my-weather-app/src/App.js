import React, { useState } from 'react';
import CalendarComponent from './Calendar';

function WebsiteTitle({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

function WebsiteDescription({ description }) {
  return (
    <div>
      <h2>{description}</h2>
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
      <WebsiteTitle title="Weather Buddy" />
      <WebsiteDescription description="A place for you to plan your everyday activities while staying up to date with the daily weather!"/>
      <div>
      <CalendarComponent />
    </div>
    </div>
  );
}

export default ActivityPlannerForm;

