const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const team = [];

let badges = 0;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/team', (req, res) => {
    res.send(team);
})

app.post('/api/team', (req, res) => {
    const pokemonID = req.body.id;

    if(team.indexOf(pokemonID)){
        team.push(pokemonID);
    };

    res.status(201).send(team);
});

app.patch('/api/badges/:count', (req, res) => {
    badges = +req.params.count + 1;

    res.status(201).json(badges);
})

// app.patch('/api/team/:id', (req, res) => {
//     const pokemonID = +req.params.id

//     res.status(201).send()
// })

app.delete('/api/team/:id', (req, res) => {
    const pokemonID = +req.params.id;

    team.splice(team.indexOf(pokemonID), 1);

    res.status(201).send(team);

})

app.listen(3002, () => {
    console.log('App is up and running at localhost:3002');
})