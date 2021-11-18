import React from "react";

const Person = ({ firstname, lastname, deleted }) => {
  return (
    <div
      onClick={deleted}
      style={{ cursor: "pointer" }}
    >{`${firstname} ${lastname}`}</div>
  );
};

export default Person;
