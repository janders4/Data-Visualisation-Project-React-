import React, { Component } from "react";
import Header from "./components/Header";
import PropTypes from "prop-types";
import axios from "axios";
import Chart from "./components/Chart";

class App extends Component {
  state = {
    asteroids: []
  };
  render() {
    console.log(this.state.asteroids);
    return (
      <div className="App">
        <Header />
        <Chart />
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchAsteroids().then(asteroids => {
      this.setState({ asteroids });
    });
  };

  fetchAsteroids = async () => {
    const { asteroids } = await axios.get(
      // "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DSsW4f2Eg7GNAQzeDhthoylJpLfLnV8ux7qwrf42"
      "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-01-01&end_date=2015-01-08&api_key=DEMO_KEY"
    );
    return asteroids;
  };
}

App.propTypes = {};

export default App;
