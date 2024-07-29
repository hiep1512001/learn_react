import React, { Component } from "react";
class ChangeColorComponet extends Component {
  render() {
    var colors = ["red", "green", "blue", "yellow"];
    const setActiveColor = (color) => {
      this.props.onReceiveColor(color);
    };
    const showColor = (color) => {
      return {
        backgroundColor: color,
      };
    };
    var elementColor = colors.map((color, index) => {
      return (
        <span
          className={this.props.color === color ? "active" : ""}
          key={index}
          style={showColor(color)}
          onClick={() => setActiveColor(color)}
        ></span>
      );
    });

    return (
      <div>
        <div className="card">
          <div className="card-header bg-black text-white">Color</div>
          <div className="card-body">{elementColor}</div>
        </div>
      </div>
    );
  }
}
export default ChangeColorComponet;
