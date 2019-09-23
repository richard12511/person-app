import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";

class App extends Component {
  state = {
    persons: [
      { id: "p1", name: "Ted", age: 24 },
      { id: "p2", name: "Steve", age: 26 },
      { id: "p3", name: "Mary", age: 31 }
    ],
    showPersons: true
  };

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  addPersonHandler = () => {};

  render() {
    const persons = this.state.showPersons ? (
      <div id="persons">
        <Persons
          persons={this.state.persons}
          click={this.deletePersonHandler}
        />{" "}
      </div>
    ) : (
      <div id="persons"></div>
    );

    console.log(classes);

    return (
      <div className={classes.App}>
        {persons}
        <button
          className={classes.toggleButton}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
      </div>
    );
  }
}

export default App;
