import React, { Component } from "react";

import Persons from "./components/person/persons";

class App extends Component {
  state = {
    persons: [
      { id: 1, fullname: "محمد شریعت" },
      { id: 2, fullname: "امیر شریعت" },
      { id: 3, fullname: "علی شریعت" },
      { id: 4, fullname: "مصطفی شریعت" },
      { id: 5, fullname: "مهراد شریعت" },
    ],
    showPersons: false,
  };

  showPersonHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  };

  //* this function delete each person that is clicked
  deletePersonHandler = (id) => {
    //filter
    const persons = [...this.state.persons];
    const filteredPersons = persons.filter((p) => p.id !== id);
    this.setState({ persons: filteredPersons });
  };

  //* this function edit each person from under input
  changePersonHandler = (event, id) => {
    const { persons: allPersons } = this.state;

    const personIndex = allPersons.findIndex((p) => p.id === id);
    const person = allPersons[personIndex];
    person.fullname = event.target.value;

    const persons = [...allPersons];

    persons[personIndex] = person;
    this.setState({ person });
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
    let buttonText = "نمایش";

    if (showPersons) {
      person = (
        <Persons
          persons={persons}
          deletePerson={this.deletePersonHandler}
          changePerson={this.changePersonHandler}
        />
      );
      buttonText = "عدم نمایش";
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
