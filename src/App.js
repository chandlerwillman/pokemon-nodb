import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    pokemon: {
      sprites: {
        front_default: ""
      }
    },
    query: ''
  }
  
  render() {

    return (
      <div className="App">

        <form onSubmit={event => this.search(event)}>
          <input 
            type="text"
            value={this.state.query}
            onChange={event => this.handleQueryChange(event)}/>
          <button type="submit">Search</button>
        </form>

        <h2>{this.state.pokemon.name}</h2>
        <img src={this.state.pokemon.sprites.front_default} />

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


}

export default App;
