import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


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
          <h2>Activities for {selectedDate.toDateString()}:</h2>
          {activities.map((activity, index) => (
            <div key={index}>{activity}</div>
          ))}
        </div>
        <input type="text" placeholder="Enter an activity" />
        <button onClick={handleAddActivity}>Add Activity</button>
        <div>
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>
      </div>
    );
  }

export default CalendarComponent;

