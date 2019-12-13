import React from "react";

const Smurf = props => {
  return (
    <div className="smurf-card">
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.height}</h2>
    </div>
  );
};

export default Smurf;
