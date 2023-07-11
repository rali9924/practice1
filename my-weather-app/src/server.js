const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
const port = 3000; 


MongoClient.connect('mongodb+srv://gravityfalls:babyyoda@ily.bwa5e4q.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true 
}) 
    .then(client => {
        console.log('Connected to Database')
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
          });
        })
        .catch((err) => {
          console.log('Error connecting to MongoDB:', err);
        });

    