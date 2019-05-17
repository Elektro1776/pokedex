import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      type: false,
      weakness: false
    };
  }
  componentDidUpdate(prevProps, prevState) {
    // const { type, weakness } = this.state;
    //
    // if (!type && !weakness) {
    //   this.props.resetFilters();
    // }
  }
  onChange = e => {
    if (e.target.value === '') {
      this.props.resetPokemonList();
    }
    this.setState({ value: e.target.value });
  };
  setFilter = e => {
     const target = e.target;
    const value = target.checked
    const name = target.name;
    console.log('GO AGAIN:');
    this.setState({
      [name]: value
    });
      this.props.handleFilters(name);
  }
  handleSubmit = e => {
    const { value } = this.state;
    e.preventDefault();
    this.props.filterPokemon(value);
  };
  render() {
    const { type, weakness } = this.state;
    const { handleFilters } = this.props;
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search">Find your !</label>
          <input type="text" onChange={this.onChange} value={this.state.value} />
          {this.props.filters.map((filter, idx) => {
            return (
              <div key={idx} className="search__checkboxes">
                <label htmlFor={filter}>
                  {filter}
                </label>
                  <input
                    type="checkbox"
                    name={filter}
                    checked={filter === 'type' ? type : weakness}
                    onChange={this.setFilter}
                   />
              </div>
            );
          })}
          <div className="btn btn-submit" onClick={this.handleSubmit}>
            Submit
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
