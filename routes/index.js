const routes = require('express').Router();
const event = require('../routes/event')

routes.use('/event', event);

routes.get('/', (req, res) => {
    res.send('This is working as it should! => We will move forward to the project now 💀');

});



module.exports = routes;