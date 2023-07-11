import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';

function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activities, setActivities] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    fetchActivities(date);
  };

  const fetchActivities = async (date) => {
    try {
      const response = await fetch(`http://localhost:3000/activities?date=${date.toISOString()}`);
      if (!response.ok) {
        throw new Error('Error retrieving activities. Please try again later.');
      }
      const data = await response.json();
      setActivities(data);
    } catch (error) {
      console.error('Error retrieving activities:', error.message);
      // Display a user-friendly error message to the user
      // For example, you could set a state variable and show an error message in the UI
    }
  };

  const handleAddActivity = async () => {
    const activityInput = document.querySelector('.AddingActivities');
    const activityName = activityInput.value.trim();
  
    if (activityName !== '') {
      try {
        const newActivity = {
          name: activityName,
          date: selectedDate // Pass the activity as an object
        };

        console.log(newActivity);
  
        const response = await fetch('http://localhost:3000/activities', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newActivity)
        });
  
        if (!response.ok) {
          throw new Error('Error adding activity. Please try again later.');
        }
  
        const data = await response.json();
        setActivities([...activities, data]);
        activityInput.value = '';
      } catch (error) {
        console.error('Error adding activity:', error.message);
        // Display a user-friendly error message to the user
        // For example, you could set a state variable and show an error message in the UI
      }
    }
  };

  useEffect(() => {
    fetchActivities(selectedDate);
  }, []);
  
  return (
    <div>
      <h2 className="ActivitiesFor">Activities for {selectedDate.toDateString()}:</h2>
      {activities
        .filter((activity) => new Date(activity.date).toDateString() === selectedDate.toDateString())
        .map((activity, index) => (
          <div className="border-calendar" key={index}>
            <div className="activity-content">
            <div className="the-date">Date: {new Date(activity.date).toDateString()}</div>
            <div className='the-activity' >Activity: {activity.name}</div>
          </div>
        </div>
        ))}

      <input className="AddingActivities" type="text" placeholder="Enter an activity" />
      <button className="AddingActivitiesButton" onClick={handleAddActivity}>Add Activity</button>
      <div className="CalendarComponent">
        <Calendar className="CalendarComponentSize" onChange={handleDateChange} value={selectedDate} />
      </div>
    </div>
  );
}

export default CalendarComponent;