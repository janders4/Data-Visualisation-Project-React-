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
    const breweries = await axios.get(
      "https://sandbox-api.brewerydb.com/v2/location/aqLvLE/?key=9bd58cfb195eb16aacb3aa71c6d287ba"
    );
    return breweries.data;
  };
}

App.propTypes = {};

export default App;
