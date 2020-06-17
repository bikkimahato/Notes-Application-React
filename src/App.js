import React, { Component } from "react";

import Form from "./Form";

class App extends Component {
  state = { notes: [], filter: "none" };
  render() {
    return (
      <>
        <Form />
      </>
    );
  }
}

export default App;
