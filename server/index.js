const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const myPokemon = [];

app.use(cors());
app.use(bodyParser.json());

app.post('/api/myPokemon', (req, res) => {
    const pokemonID = req.body.id;

    myPokemon.push(pokemonID);

    res.status(201).send(myPokemon);
});

app.listen(3002, () => {
    console.log('App is up and running at localhost:3002');
})