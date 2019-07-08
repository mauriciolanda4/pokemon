import React from 'react';
import axios from 'axios';

import './index.css';

const API = 'https://pokeapi.co/api/v2/pokemon/';

class Form extends React.Component {
  state = {
    search: '',
  };

  handleChange = event => {
    this.setState({
      search: event.target.value,
    });
  };

  handleSearch = () => {
    const { search } = this.state;
    const { onPokemonFound } = this.props;

    axios(`${API}${search}`)
      .then(res => {
        const { data } = res;

        onPokemonFound({
          name: search,
          image: data.sprites.front_default,
        });
      })
      .catch(error => {
        console.log(error);
        if (error.status === 404) {
          alert('No existe el pokemon');
          return;
        }

        alert('Error Desconocido');
      });
  };

  render() {
    const { search } = this.state;

    return (
      <div className="Form">
        <input type="text" onChange={this.handleChange} value={search} />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default Form;
