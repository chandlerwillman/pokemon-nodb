const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const team = [];

app.use(cors());
app.use(bodyParser.json());

app.post('/api/team', (req, res) => {
    const pokemonID = req.body.id;

    team.push(pokemonID);

    res.status(201).send(team);
});

app.listen(3002, () => {
    console.log('App is up and running at localhost:3002');
})