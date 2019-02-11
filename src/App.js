import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header/Header';
import Team from './components/Team/Team';

class App extends Component {
  state = {
    pokemon: {
      sprites: {
        front_default: ""
      }
    },
    pokemonTeamIds: [],
    query: ''
  }
  
  render() {

    return (
      
      <div className="App">
        <Header />

        <form onSubmit={event => this.search(event)}>
          <input 
            type="text"
            placeholder="Choose your pokemon"
            value={this.state.query}
            onChange={event => this.handleQueryChange(event)}/>
          <button type="submit">Search</button>
        </form>

        <h2>{this.state.pokemon.name}</h2>
        <img src={this.state.pokemon.sprites.front_default} />
        <button
          type="button"
          onClick={() => this.addToTeam(this.state.pokemon.id)}
        >
          I Choose You!
        </button>

        <Team team={this.state.pokemonTeamIds} />
      </div>
    );
  }

  handleQueryChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  search(event) {
    event.preventDefault();

    axios.get('https://pokeapi.co/api/v2/pokemon/' + this.state.query)
      .then(response => {
        this.setState({
          pokemon: response.data,
        });
      });
  }

  addToTeam(id) {
    axios.post('http://localhost:3002/api/team', { id })
      .then(response => {
        this.setState({
          pokemonTeamIds: response.data,
        });
      });
  }
}

export default App;
