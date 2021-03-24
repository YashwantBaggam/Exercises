import "./styles.css";
import React, { Component } from "react";

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setMessage: false
    };
  }

  displayMessage = () => {
    this.setState({ setMessage: true });
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        Get yout message here
        <button
          onClick={this.displayMessage}
          style={{
            padding: "5px",
            backgroundColor: "green",
            color: "white",
            marginLeft: "10px",
            borderRadius: "12px"
          }}
        >
          Get your custom message
        </button>
        {this.state.setMessage && (
          <div style={{ color: "blue", padding: "20px" }}>Hey Buddy</div>
        )}
        <iframe
          style={{ marginTop: "20px" }}
          src="https://codesandbox.io"
          width="400"
          title="codesandboxwebpage"
        />
      </div>
    );
  }
}

export default Api;
