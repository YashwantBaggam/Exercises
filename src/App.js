import "./styles.css";
import React, { Component } from "react";
import Counter from "./Counter";
import Image from "./image";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Api from "./Api";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={Counter} />
          <Route path="/" exact component={Api} />
          <Route path="/i" component={Image} />
        </Router>
      </div>
    );
  }
}

export default App;
