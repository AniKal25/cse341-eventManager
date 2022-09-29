const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const cors = require('cors');
require('dotenv/config');
const port = process.env.PORT || 8080;



mongoose.connect(
    process.env.MONGODB_URI,
    {useNewUrlParser: true},
    () => console.log('Connected to database!')
 );

 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());

app.use('/', require('./routes/index'))
app.listen(port, () => {
   console.log(`Server is listening on ${port}`)
})