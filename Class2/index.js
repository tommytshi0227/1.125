/* (require packages) */
var express = require('express'); 
var app = express();
var fetch = require('node-fetch');

/* create a route that returns something */ 
app.get('/', (req, res) => res.send('Hello World!!!!!'))

/* now return bus schedule */
app.get('/buses', async (req, res) => {
    var url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
    var response = await fetch(url); /* await will wait for url to come back */
    var json = await response.json(); /* will wait for response */ 
    res.send(json.data); /* send back json data */
})

app.listen('3000', () => console.log('Running on 3000'));

