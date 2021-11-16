import React, { Component } from "react";

import Persons from "./components/person/persons";

class App extends Component {
  state = {
    persons: [
      { firstname: "محمد", lastname: "شریعت" },
      { firstname: "امیر", lastname: "شریعت" },
      { firstname: "علی", lastname: "شریعت" },
      { firstname: "مصطفی", lastname: "شریعت" },
      { firstname: "مهراد", lastname: "شریعت" },
    ],
  };

  render() {
    const { persons } = this.state;
    return (
      <div className="App">
        <Persons persons={persons} />
      </div>
    );
  }
}

export default App;
