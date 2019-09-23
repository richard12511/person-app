import React from "react";
import classes from "./Person.css";

const person = props => {
  return (
    <div className={classes.Person}>
      <p>
        Oh hai, my name is {props.name} and my age is {props.age}
      </p>
      <button className={classes.deleteButton} onClick={props.click}>
        Delete
      </button>
    </div>
  );
};

export default person;
