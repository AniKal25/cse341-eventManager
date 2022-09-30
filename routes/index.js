const routes = require('express').Router();
const event = require('../routes/event');
const location = require('../routes/location');


routes.use('/event', event);
routes.use('/location', location);



routes.get('/', (req, res) => {
    res.send('This is working as it should! => We will move forward to the project now 💀');

});



module.exports = routes;