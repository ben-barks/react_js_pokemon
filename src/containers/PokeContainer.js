import React, {Component} from 'react';
import PokeSelector from '../components/PokeSelector.js'
import PokeDetail from '../components/PokeDetail.js'

class PokeContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      pokemons: [],
      selectedPokemon: null
    };
    this.selectPokemon = this.selectPokemon.bind(this)


  }

  componentDidMount(){
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=514';
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      this.setState({ pokemons: data.results });
    });
  }

  selectPokemon(selectedIndex) {
    const selectedPokemon = this.state.pokemons[selectedIndex];
    this.setState({selectedPokemon})
  }

  render(){
    return(
      <div>
        <h2>choose your pokemon!</h2>
          <PokeSelector
          pokemons={this.state.pokemons}
          onPokemonSelected={this.selectPokemon}
          />
          <PokeDetail pokemon={this.state.selectedPokemon}/>
      </div>
    )
  }
}

export default PokeContainer;
