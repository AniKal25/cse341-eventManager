const Location = require("../models/location");

const getAllLocations = async(req, res) =>  {
    
    try {
        // Get all locations from the database
        const result = await Location.find()
        console.log(result)
        //Return the response
        res.json(result)
    } catch (error) {
        console.log(error)
        
    }    
 }

 const getLocationById = async(req, res) => {
    try {
        // Get all location id from the database
        const result = await Location.findById(req.params.id)
        //Return the response
        res.json(result)
    } catch (error) {
        console.log(error)
        
    }    

}

const newLocation = async(req, res) => {
    try {
        // Add location to the database
        const location = new Location(req.body);
        //console.log(contact);
        const result = await location.save()
        //console.log(result)
        //Return the response
        res.status(201).send(result._id)
    } catch (error) {
        console.log(error)
        
    }   
} 

const updateLocation = async(req, res) => {
    try {
        const id = req.params.id;
        // Update location from the database
        const location = req.body;
        console.log(location);
        const result = await Location.findByIdAndUpdate(id, location)
        //Return the response
        res.status(204).send('The location has been updated')
    } catch (error) {
        console.log(error)
        
    }   
}

const deleteLocation = async(req, res) => {
    try {
        const id = req.params.id;
        // Delete event from the database
        const location = req.body;
        console.log(location);
        const result = await Location.findByIdAndDelete(id, location)
        //Return the response
        res.status(200).send('The location has been deleted')
    } catch (error) {
        console.log(error)
        
    }   
}




module.exports = {getAllLocations, getLocationById, newLocation, updateLocation, deleteLocation}