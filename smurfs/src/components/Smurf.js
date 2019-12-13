import React from "react";

const Smurf = props => {
  return (
    <div className="smurf-card">
      <button onClick={() => props.deleteSmurf(props.smurf.id)}>X</button>
      <h1>{props.smurf.name}</h1>
      <h2>{props.smurf.age}</h2>
      <h2>{props.smurf.height}</h2>
    </div>
  );
};

export default Smurf;
