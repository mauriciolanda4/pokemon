import React from 'react';
import './App.css';
import PokemonForm from './components/PokemonForm';
import PokemonData from './components/PokemonData';
import PokemonList from './components/PokemonList';

class App extends React.Component {
  state = {
    pokemon: {},
    list: [],
  };

  handlePokemonFound = pokemon => {
    this.setState({
      pokemon,
    });
  };

  handleCatch = () => {
    const { pokemon, list } = this.state;

    list.push(pokemon);

    this.setState({
      pokemon: {},
      list,
    });
  };

  render() {
    const { pokemon, list } = this.state;

    return (
      <div className="App">
        <section className="data">
          <PokemonForm onPokemonFound={this.handlePokemonFound} />
          <PokemonData
            name={pokemon.name}
            image={pokemon.image}
            onCatch={this.handleCatch}
          />
        </section>
        <section className="list">
          <PokemonList list={list} />
        </section>
      </div>
    );
  }
}

export default App;
