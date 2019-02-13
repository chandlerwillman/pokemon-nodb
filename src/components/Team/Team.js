import React, { Component } from 'react';
import axios from 'axios';

class Team extends Component {
    state = {
        pokemon: [],
    }

    componentWillReceiveProps(props) {
        this.fetchPokemon(props.team);
    }

    render() {
        const pokemonArr = this.state.pokemon
            .map(pokemon => (
                <div className="card" key={pokemon.id}>
                    <h3>{pokemon.name}</h3>
                    <p>{pokemon.level}</p>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    {/* <div>
                        <button
                            type="button"
                            onClick={() => this.levelUp(pokemon.id)}
                        >
                            Train
                        </button>
                    </div> */}
                    <div>
                        <button
                            type="button"
                            onClick={() => this.removeFromTeam(pokemon.id)}
                        >
                            Release
                        </button>
                    </div>
                </div>
            ));

        return (
            <div>
                <h2>Your Team</h2>

                {pokemonArr}

            </div>
        );
    }

    // levelUp(id) {
    //     // axios.patch('http://localhost:3002/api/team/' + id)
    //     //     .then(response => {
    //     //         this.fetchPokemon(response.data)
    //     //     })
    // }

    removeFromTeam(id) {
        axios.delete('http://localhost:3002/api/team/' + id)
            .then(response => {
                this.fetchPokemon(response.data)
            })
    }

    fetchPokemon(pokemon) {
        Promise.all(pokemon.map(id => (
            axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
                .then(response => response.data)
        )))
            .then(pokemon => {
                this.setState({
                    pokemon,
                });
            });
    }
}

export default Team;