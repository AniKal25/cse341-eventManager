const routes = require('express').Router();
const {getAllEvents} = require('../controllers/event');

routes.get('/', getAllEvents);

module.exports = routes;