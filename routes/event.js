const routes = require('express').Router();
const {getAllEvents, getEventById, newEvent, updateEvent, deleteEvent} = require('../controllers/event');

routes.get('/', getAllEvents);
routes.get('/:id', getEventById);

routes.post('/', newEvent);
routes.put('/:id', updateEvent);
routes.delete('/:id', deleteEvent);

module.exports = routes;