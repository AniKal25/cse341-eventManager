const Event = require("../models/event");

const getAllEvents = async(req, res) =>  {
    
    try {
        // Get all events from the database
        const result = await Event.find()
        console.log(result)
        //Return the response
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Some error occurred while retrieving event.'
          });
        
        
    }    
}

const getEventById = async(req, res) => {
    try {
        // Get all events by id from the database
        const result = await Event.findById(req.params.id)
        //Return the response
        res.json(result)
    } catch (error) {
        console.log(error)
        
    }    

}

const newEvent = async(req, res) => {
    try {
        //Add event to the database
        const event = new Event(req.body);
        //console.log(contact);
        const result = await event.save()
        //console.log(result)
        //Return the response
        res.status(201).send(result._id)
    } catch (error) {
        console.log(error)
        
    }   
} 

const updateEvent = async(req, res) => {
    try {
        const id = req.params.id;
        // Update events from the database
        const event = req.body;
        console.log(event);
        const result = await Event.findByIdAndUpdate(id, event)
        //Return the response
        res.status(204).send('The event has been updated')
    } catch (error) {
        console.log(error)
        
    }   
}

const deleteEvent = async(req, res) => {
    try {
        const id = req.params.id;
        // Delete events from the database
        const event = req.body;
        console.log(event);
        const result = await Event.findByIdAndDelete(id, event)
        //Return the response
        res.status(200).send('The event has been deleted')
    } catch (error) {
        console.log(error)
        
    }   
}

module.exports = {getAllEvents, getEventById, newEvent, updateEvent, deleteEvent}