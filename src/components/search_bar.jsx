import React, { Component } from 'react';

class SearchBar extends Component {
  shouldComponentUpdate() {
    return false;
  }

  handleChange = (event) => {
    if (event.target.value) {
      this.props.searchFunction(event.target.value);
    }
  }

  render() {
    return (
      <input type="text" className="form-search" onChange={this.handleChange} />
    );
  }
}

export default SearchBar;
