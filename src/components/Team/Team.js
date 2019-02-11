import React, { Component } from 'react';
import axios from 'axios';

class Team extends Component {
    state = {
        pokemon: [],
    }

    componentWillReceiveProps(props) {
        Promise.all(props.team.map(id => (
            axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
                .then(response => response.data)
        )))
            .then(pokemon => {
                this.setState({
                    pokemon,
                });
             });
    }

    render() {
        const pokemon = this.state.pokemon
            .map(pokemon => (
                <div className="card" key={pokemon.id}>
                    <h3>{pokemon.name}</h3>
                    <button type="button">Release</button>
                </div>
            ));

        return (
            <div>
                <h2>Your Team</h2>

                {pokemon}
            </div>
        );
    }
}

export default Team;