import React, { Component } from "react";
import { robots } from "../data/robots";
import CardList from "./card-list/CardList";
import SearchBox from "./SearchBox";

class App extends Component {
  state = {
    robots,
    searchTerm: "",
  };

  onSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  render() {
    const filteredRobos = this.state.robots.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase());
    });

    return (
      <div className="container-fluid mt-2">
        <h1 className="text-center display-1 text-success">ROBOFRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobos} />
      </div>
    );
  }
}

export default App;
