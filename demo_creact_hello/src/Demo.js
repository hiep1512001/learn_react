import React, { Component } from "react";

class Demo extends Component {
  constructor() {
    super();
    this.state = [
      {
        value: "",
      },
    ];
  }
  render() {
    const onValue = () => {
      this.setState({ value: "Hello" });
      console.log(this.state.value);
    };
    return (
      <div>
        <h1>Hello ReactJs</h1>
        <p>Chào mừng đến với khóa học lập trình reactjs</p>
        <button onClick={onValue}>click</button>
        <label>Value: {this.state.value}</label>
      </div>
    );
  }
}

export default Demo;
