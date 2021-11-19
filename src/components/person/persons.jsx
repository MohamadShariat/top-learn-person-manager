import React from "react";

import Person from "./Person";

const persons = ({ persons, deletePerson, changePerson }) => {
  return (
    <div>
      {persons.map((person) => (
        <Person
          key={person.id}
          fullname={person.fullname}
          deleted={() => deletePerson(person.id)}
          changed={(event) => changePerson(event, person.id)}
        />
      ))}
    </div>
  );
};

export default persons;
