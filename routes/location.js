const routes = require('express').Router();

const mongoose = require('mongoose')

const bodyParser = require("body-parser");
routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

const location = require('../models/location')

//Get ALL
routes.get("/", (req, res) => {
    location.find({})
    .then((data) => {
      res.status(200).send(data);
      console.log("returned all");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving location.'
      });
    });
  });