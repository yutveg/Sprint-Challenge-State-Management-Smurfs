import React, { useState } from "react";

const SmurfForm = props => {
  const [input, setInput] = useState({
    name: "",
    age: 0,
    height: ""
  });

  const handleChanges = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, age, height } = { ...input };
    props.postSmurf(name, age, height);
    setInput({ name: "", age: 0, height: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="smurf-form">
      <input
        type="text"
        name="name"
        placeholder="name.."
        value={input.name}
        onChange={handleChanges}
        required
      />
      <input
        type="text"
        name="age"
        placeholder="age.."
        value={input.age}
        onChange={handleChanges}
        required
      />
      <input
        type="text"
        name="height"
        placeholder="height.."
        value={input.height}
        onChange={handleChanges}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SmurfForm;
