const event = require("../models/event");

const getAllEvents = async(req, res) =>  {
    
    try {
        // Get all events from the database
        const result = await event.find()
        //Return the response
        res.json(result)
    } catch (error) {
        console.log(error)
        
    }    
 }




module.exports = {getAllEvents}