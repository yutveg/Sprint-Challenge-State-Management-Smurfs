import React, { Component } from "react";
import "./App.css";
import SmurfList from "./SmurfList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfList />
      </div>
    );
  }
}

export default App;
