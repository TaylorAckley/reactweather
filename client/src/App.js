import React, { Component } from 'react';
import './App.css';
import Datetime from './datetime/Datetime';

class App extends Component {

  constructor() {
    super();
    this.state = {
      location: {
        lat: 47.608013,
        long: -122.335167
      },
      error: null
    };
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          location: { lat: position.coords.latitude, long: position.coords.longitude }
        });
      });
    } else {
      this.setState({
        error: 'Location information is not available'
      });
    }
  }


  render() {
    return (
      <div className="App">
        <header>
          <nav><h1>Current Weather Information For:</h1></nav>
        </header>
        <div className="container">
          <div className="row content-section">
            <div className="col">
              As of: <Datetime />>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
