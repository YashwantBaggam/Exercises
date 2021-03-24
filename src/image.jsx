import React, { Component } from "react";
import car from "../public/car.jpg";
import "./styles.css";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }
  handleClick = () => {
    this.props.history.push(`/`);
  };

  render() {
    // console.log(this.props)
    return (
      <>
        <div className="container">
          <img src={car} alt="car" width="500" height="400" />
          <button
            style={{ backgroundColor: "black" }}
            className="top-left"
            onClick={this.handleClick}
          >
            MUSTANG
          </button>
        </div>
      </>
    );
  }
}

// <div class="container">
//   <img src="img_snow_wide.jpg" alt="Snow" style="width:100%;">
//   <div class="bottom-left">Bottom Left</div>
//   <div class="top-left">Top Left</div>
//   <div class="top-right">Top Right</div>
//   <div class="bottom-right">Bottom Right</div>
//   <div class="centered">Centered</div>
// </div>
//

export default Image;
