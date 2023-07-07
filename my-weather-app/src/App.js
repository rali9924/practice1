import React, { useState } from 'react';

function ActivityPlannerForm() {
  const [date, setDate] = useState('');
  const [activityName, setActivityName] = useState('');
  const [activityDescription, setActivityDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ date, activityName, activityDescription });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="activityName">Activity Name:</label>
        <input
          type="text"
          id="activityName"
          name="activityName"
          value={activityName}
          onChange={(e) => setActivityName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="activityDescription">Activity Description:</label>
        <textarea
          id="activityDescription"
          name="activityDescription"
          value={activityDescription}
          onChange={(e) => setActivityDescription(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ActivityPlannerForm;
