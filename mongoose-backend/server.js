const express = require('express');
const mongoose = require('mongoose');
const Activity = require('./models/Activity');
const cors = require('cors'); // Import the cors package

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Connect to MongoDB
mongoose.connect('mongodb+srv://shellymasih22:babyyoda@finalproject.rme7wlq.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB Atlas:', error);
    });
  
// Define routes
app.get('/activities', async (req, res) => {
try {
    const activities = await Activity.find();
    res.json(activities);
} catch (error) {
    res.status(500).json({ error: 'Error retrieving activities' });
}
});

app.post('/activities', async (req, res) => {
  try {
    const { name, date } = req.body;
    const newActivity = new Activity({ name, date });
    const savedActivity = await newActivity.save();
    console.log(savedActivity);
    res.json(savedActivity);
  } catch (error) {
    res.status(500).json({ error: 'Error adding activity' });
  }
});

// Start the server
app.listen(3000, () => {
console.log('Server listening on port 3000');
});