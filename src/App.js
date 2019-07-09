import React, { Component } from "react";
import Header from "./components/Header";
import PropTypes from "prop-types";
import axios from "axios";
import Chart from "./components/Chart";

class App extends Component {
  state = {
    breweries: []
  };
  render() {
    console.log(this.state.breweries);
    return (
      <div className="App">
        <Header />
        <Chart />
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchBreweries().then(breweries => {
      this.setState(breweries);
    });
  };

  fetchBreweries = async () => {
    const breweries = await axios.get("localhost:9090/locations");
    return breweries.data;
  };
}

App.propTypes = {};

export default App;
