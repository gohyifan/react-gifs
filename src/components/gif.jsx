/* eslint jsx-a11y/alt-text: off */
/* eslint jsx-a11y/no-noninteractive-element-interactions: off */

import React, { Component } from 'react';

class Gif extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  }

  handleClick = () => {
    const { selectGif, id } = this.props;
    if (selectGif) {
      selectGif(id);
    }
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
