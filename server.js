const path = require('path')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser =require('body-parser'); //req.body
const cors = require('cors');
require('dotenv/config');
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const passport =require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const connectDB = require('./config/db')
const port = process.env.PORT || 8080;


// Load config
dotenv.config({ path: './config/config.env'})

//Passport config
require('./config/passport')(passport)

connectDB()

const app = express();

// Logging
if (process.env.NODE_ENV === 'development'){
   app.use(morgan('dev'))
 }

// Handlebars
app.engine('.hbs', exphbs.engine({defaultLayout: 'main', extname: '.hbs',}))
app.set('view engine', '.hbs')


//Session middleware
app.use(
   session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({mongoUrl: process.env.MONGODB_URI,}),
    })
)


//Passport middleware
app.use(passport.initialize())
app.use(passport.session())

//Static folder
app.use(express.static(path.join(__dirname, 'public')))



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


app.use('/', require('./routes'))
app.use('/auth', require('./routes/auth'))


app.listen(port, () => {
   console.log(`Server is listening on ${port}`)
})