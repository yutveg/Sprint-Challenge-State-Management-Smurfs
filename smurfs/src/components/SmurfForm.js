import React, { useState } from "react";

const SmurfForm = props => {
  const [input, setInput] = useState({
    name: "",
    age: null,
    height: ""
  });

  const handleChanges = e => {
    setInput({ [e.target.name]: e.target.value });
    console.log(input[e.target.name]);
  };

  return (
    <form className="smurf-form">
      <input
        type="text"
        name="name"
        placeholder="name.."
        onChange={handleChanges}
        required
      />
      <input
        type="text"
        name="age"
        placeholder="age.."
        onChange={handleChanges}
        required
      />
      <input
        type="text"
        name="height"
        placeholder="height.."
        onChange={handleChanges}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SmurfForm;
