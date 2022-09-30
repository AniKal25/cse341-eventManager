const routes = require('express').Router();

const {getAllLocations, getLocationById, newLocation, updateLocation, deleteLocation} = require('../controllers/location');

routes.get('/', getAllLocations);
routes.get('/:id', getLocationById);

routes.post('/', newLocation);
routes.put('/:id', updateLocation);
routes.delete('/:id', deleteLocation);


module.exports = routes;
