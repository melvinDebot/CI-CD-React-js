import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import Text from "../components/Text";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
      <Text text="Melvin" />
      <Link to="/about">Click to view our about page</Link>
    </div>
  );
}

export default Home;
