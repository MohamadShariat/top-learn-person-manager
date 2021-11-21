import React, { Component } from "react";

import Persons from "./components/person/Persons";

class App extends Component {
  state = {
    persons: [],
    person: "",
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
    this.setState({ persons: persons });
  };

  //* this function add person to persons
  newPersonHandler = () => {
    const persons = [...this.state.persons];
    const person = {
      id: Math.floor(Math.random() * 1000),
      fullname: this.state.person,
    };
    persons.push(person);
    this.setState({ persons, person: "" });
  };

  //* this function is for input value
  newPerson = (event) => {
    this.setState({ person: event.target.value });
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
        <div style={{ direction: "rtl" }}>
          <input
            type="text"
            placeholder="ساخت شخص جدید"
            style={{ direction: "rtl" }}
            value={this.state.person}
            onChange={this.newPerson}
          />
          <button onClick={this.newPersonHandler}>اضافه کن</button>
        </div>
        <button onClick={this.showPersonHandler} style={buttonStyle}>
          {buttonText}
        </button>
        {person}
      </div>
    );
  }
}

export default App;
