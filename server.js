const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser =require('body-parser'); //req.body
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
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
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
   );
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
   next();
 })
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', require('./routes'))
app.listen(port, () => {
   console.log(`Server is listening on ${port}`)
})