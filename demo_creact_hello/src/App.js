import logo from "./logo.svg";
import "./App.css";
import React, { components } from "react";
class App extends components {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button>Click</button>
      </div>
    );
  }
}

export default App;
