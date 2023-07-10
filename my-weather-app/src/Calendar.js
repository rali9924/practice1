import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';


function CalendarComponent() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [activities, setActivities] = useState([]);
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    const handleAddActivity = () => {
    };
  
    return (
      <div>
        <div>
          <h2 className="ActivitiesFor" >Activities for {selectedDate.toDateString()}:</h2>
          {activities.map((activity, index) => (
            <div key={index}>{activity}</div>
          ))}
        </div>
        <input className="AddingActivities" type="text" placeholder="Enter an activity" />
        <button className="AddingActivitiesButton" onClick={handleAddActivity}>Add Activity</button>
        <div className="CalendarComponent">
        <Calendar className="CalendarComponentSize" onChange={handleDateChange} value={selectedDate} />
      </div>
      </div>
    );
  }

export default CalendarComponent;

