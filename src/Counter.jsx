import "./styles.css";
import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // this.handleClick=this.handleClick.bind(this)
  }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleClick2 = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <div>
          <h1>
            Hello{" "}
            <a style={{ color: "purple" }} href="mailto:yaishu1996@gmail.com">
              Yashwant!
            </a>
          </h1>
          <h2>
            Start <Link to="/i">editing</Link> to see some magic happen!
          </h2>
          <button
            className="btn btn-warning"
            onClick={this.handleClick}
            style={{ padding: "10px", border: "2px solid #4CAF50" }}
          >
            Click for increment
          </button>
          <button
            className="btn btn-warning"
            onClick={this.handleClick2}
            style={{ padding: "10px", border: "2px solid #4CAF50" }}
          >
            Click for decrement
          </button>
        </div>
        <button
          onClick={this.reset}
          style={{
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "red",
            color: "white",
            borderRadius: "50%"
          }}
        >
          Reset
        </button>
        <p>
          Result is: <b>{this.state.count}</b>
        </p>
      </div>
    );
  }
}

export default Counter;
