const express = require('express');
const routes = require('express').Router();
const event = require('../routes/event');
const location = require('../routes/location');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const { ensureAuth, ensureGuest } = require('../middleware/auth')

// @desc    Login/Landing page
// @route   GET /
routes.get('/', ensureGuest, (req, res) => {
    res.render('login', {
    layout: 'login',})    
  })

routes.use('/', require('./swagger'));
routes.use('/event', event);
routes.use('/location', location);

//routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.get('/', (req, res) => {
    res.send('This is working as it should! => We will move forward to the project now 💀');

});



module.exports = routes;