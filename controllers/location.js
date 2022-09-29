const location = require("../models/location");

const getAllLocations = async(req, res) =>  {
    
    try {
        // Get all locations from the database
        const result = await location.find()
        //Return the response
        res.json(result)
    } catch (error) {
        console.log(error)
        
    }    
 }




module.exports = {getAllLocations}