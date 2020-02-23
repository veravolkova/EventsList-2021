const express = require('express');  
const app = express();
const axios = require('axios');
const CircularJSON = require('circular-json');


const getAllEvents = () => {
    try {
        console.log('fetching events...');
        //search by tag for limiting the number of events ?tags_search=art
        return axios.get('http://open-api.myhelsinki.fi/v1/events/').then(response => CircularJSON.stringify(response.data));
    } catch (error) {
        console.error('Error: ', error);
    }
};

// Get events happenning on the following week
const getFilteredEvents = (events = {}) => {
    let startDate = new Date();
    let endDate = new Date();
    //setting time period: from now till the last day of the following week 23:59
    startDate.setHours(startDate.getHours() + 2);
    endDate.setDate(endDate.getDate() + 7);
    endDate.setHours(01, 59, 59, 999);
    console.log('Start date: ',startDate);
    console.log('End date: ',endDate);

    let eventsOnWeek = events
        .map(event => {
            let eventDate = new Date(event.event_dates.starting_day);
            if (eventDate <= endDate && eventDate >= startDate) {
                return event;
            }
        })
        .filter(event => event);
    return eventsOnWeek;
};

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/api/events/', async (req, res, next) => {
    try {
        let events = await getAllEvents();
        events = JSON.parse(events);
        events.data = getFilteredEvents(events.data);
        res.json(events);
    } catch (error) {
        next(error);
    }
});

const server = app.listen(5000, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log('App listening at http://', host, port);
});

module.exports = server


