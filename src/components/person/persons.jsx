import React from "react";

import Person from "./Person";

const persons = ({ persons, deletePerson }) => {
  return (
    <div>
      {persons.map((person) => (
        <Person
          key={person.id}
          firstname={person.firstname}
          lastname={person.lastname}
          deleted={() => deletePerson(person.id)}
        />
      ))}
    </div>
  );
};

export default persons;
