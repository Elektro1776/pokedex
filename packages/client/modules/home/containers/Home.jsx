import React, { Component } from 'react';
import { connect } from 'react-redux'
import { map, filter, reduce, compose } from 'ramda';
import HomeView from '../components/HomeView';
import SearchBar from './SearchBar';
import { PageLayout }  from '../../common/components';
import { getAllPokemon, selectFilters, resetFilters } from '../actions';

import '../styles/home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      originalPokemonList: [],
      filteredPokemon: []
    }
  }
  componentDidMount() {
    this.props.getPokemon()
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.pokemon.length !== nextProps.pokemon.length) {
      this.setState({ pokemon: nextProps.pokemon, originalPokemonList: nextProps.pokemon });
    }
  }
  filterPokemon = name => {
      const { pokemon, originalPokemonList } = this.state;
      const regex = /^(\b\w*)/gm
      console.log('FITRE FILTER', );

      const filteredPokemon = filter((data) => {
        // console.log('TESET::', data.name.includes(name));
        const dataName = data.name.toLowerCase();
        if (dataName.includes(name.toLowerCase())) {
          return data;
        }
      }, originalPokemonList);
      this.setState({ pokemon: filteredPokemon, originalPokemonList: pokemon });
  }
  resetPokemonList = () => {
    const { originalPokemonList } = this.state;
    console.log('The state:::', this.state);
    console.log('Reset', originalPokemonList);
    this.setState({ pokemon: originalPokemonList });
  }
  render() {
    console.log('THE STATE::', this.props);
    return <PageLayout>
      <SearchBar
        filters={this.props.filters}
        filterPokemon={this.filterPokemon}
        handleFilters={this.props.selectFilters}
        resetFilters={this.props.resetFilters}
        resetPokemonList={this.resetPokemonList} />
      <HomeView {...this.state} />
    </PageLayout>
  }
}

export default connect(
   state => ({
    pokemon: state.home.pokemon,
    filters: state.home.filters,
    activeFilters: state.home.activeFilters
   }),
   dispatch => ({
     getPokemon: () => dispatch(getAllPokemon()),
     selectFilters: filters => dispatch(selectFilters(filters)),
     resetFilters: () => dispatch(resetFilters())
   }))(Home);
