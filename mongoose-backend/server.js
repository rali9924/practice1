require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Activity = require('./models/Activity');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes
// mongodb+srv://shellymasih22:babyyoda@finalproject.rme7wlq.mongodb.net/test?retryWrites=true&w=majority
//mongodb+srv://rali9924:UrZjvbCnMutTiLCq@gama.xo1jhuq.mongodb.net/?retryWrites=true&w=majority
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });


app.get('/', (req, res) => {
  res.redirect('/activities');
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