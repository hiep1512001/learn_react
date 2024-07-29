import "./App.css";
import React, { Component } from "react";
import ChangeColorComponet from "./components/changeColor";
import ChangeSizeComponent from "./components/changeSizeComponent";
import ShowValueComponent from "./components/ShowValueComponent";
import Reset from "./components/ResetComponent";
class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "red",
      size: 8,
    };
  }
  render() {
    const onSetColor = (color) => {
      this.setState({
        color: color,
      });
    };
    const onSetSize = (size) => {
      this.setState({
        size: this.state.size + size,
      });
    };
    const onReset = () => {
      this.setState({
        color: "red",
        size: 8,
      });
    };
    return (
      <div className="App">
        <div className="row ">
          <div className="col-6">
            <ChangeColorComponet
              color={this.state.color}
              onReceiveColor={onSetColor}
            ></ChangeColorComponet>
          </div>
          <div className="col-6">
            <ChangeSizeComponent
              size={this.state.size}
              onReceiveSize={onSetSize}
            ></ChangeSizeComponent>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-6">
            <ShowValueComponent
              color={this.state.color}
              size={this.state.size}
            ></ShowValueComponent>
          </div>
          <div className="col-6 d-flex justify-content-start">
            <Reset onRecieveVale={onReset}></Reset>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
