const routes = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const { ensureAuth, ensureGuest } = require('../middleware/auth')

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', ensureAuth, swaggerUi.setup(swaggerDocument));

module.exports = routes;