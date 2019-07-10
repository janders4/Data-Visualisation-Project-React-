import React, { Component } from "react";
import Header from "./components/Header";
import PropTypes from "prop-types";
import axios from "axios";
import Chart from "./components/Chart";
import { dataCleanse } from "./utils";

class App extends Component {
  state = {
    breweries: []
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Chart breweries={this.state.breweries} />
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchBreweries().then(breweries => {
      const cleansedData = dataCleanse(breweries);
      this.setState({ breweries: cleansedData });
    });
  };

  fetchBreweries = async () => {
    const { data } = await axios.get(
      "https://brewery-data-visualisation.herokuapp.com/locations"
    );
    return data.data;
  };
}

App.propTypes = {};

export default App;
