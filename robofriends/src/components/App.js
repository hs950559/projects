import React, { Component } from "react";
import { robots } from "../data/robots";
import CardList from "./card-list/CardList";
import SearchBox from "./SearchBox";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid mt-2">
<<<<<<< HEAD
        <h1 className="text-center display-1 text-success">ROBOFRIENDS</h1>
=======
        <h1 className="text-center">ROBOFRIENDS</h1>
>>>>>>> 34799ea768ddd64c325ba3acd129e6dfca52c2c0
        <SearchBox />
        <CardList robots={robots} />
      </div>
    );
  }
}

export default App;
