const mongoose = require('mongoose');


//connect to DB
mongoose.connect('mongodb://localhost/hospital_API', { useNewUrlParser: true ,useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', function () {
    console.log("Successfully connected to db");
});