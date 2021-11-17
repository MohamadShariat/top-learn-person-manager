import React, { Component } from "react";

import Persons from "./components/person/persons";

class App extends Component {
  state = {
    persons: [
      { firstname: "محمد", lastname: "شریعت" },
      { firstname: "مهراد", lastname: "شریعت" },
      { firstname: "امیر", lastname: "شریعت" },
      { firstname: "علی", lastname: "شریعت" },
      { firstname: "مصطفی", lastname: "شریعت" },
    ],
    showPersons: false,
  };

  showPersonHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  render() {
    const { persons, showPersons } = this.state;

    const styles = {
      textAlign: "center",
    };

    const buttonStyle = {
      padding: "1em",
      fontFamily: "BYekan",
      backgroundColor: "pink",
      margin: "2em",
      borderRadius: "10px",
    };

    let person = null;
    let buttonText = "";

    if (showPersons) {
      person = <Persons persons={persons} />;
      buttonText = "عدم نمایش";
    } else {
      buttonText = "نمایش";
    }

    return (
      <div style={styles}>
        <h1>مدیریت کننده اشخاص</h1>
        <h4>تعداد اشخاص {persons.length} نفر می باشد</h4>
        {person}
        <button onClick={this.showPersonHandler} style={buttonStyle}>
          {buttonText}
        </button>
      </div>
    );
  }
}

export default App;
