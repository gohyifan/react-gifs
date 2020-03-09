import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import giphy from 'giphy-api';

import SearchBar from './components/search_bar';
import GifList from './components/gif_list';
import Gif from './components/gif';

import '../assets/stylesheets/application.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "a93jwI0wkWTQs"
    };

    this.search('homer');
  }

  search = (query) => {
    giphy('6ArxhXWZnk5SPNyJ4TTK7chrN1f2UXGG').search(query, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
