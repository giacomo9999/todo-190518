import React, { Component } from "react";
import Todo from "./Todo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { show: false };
  }

  render() {
    return (
      <div className="container">
        <h1> App here</h1>
        <Todo />
      </div>
    );
  }
}

export default App;
