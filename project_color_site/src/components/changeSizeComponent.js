import React, { Component } from "react";
class ChangeSizeComponent extends Component {
  render() {
    const onTang = () => {
      if (this.props.size < 36) {
        this.props.onReceiveSize(1);
      }
    };
    const onGiam = () => {
      if (this.props.size > 8) {
        this.props.onReceiveSize(-1);
      }
    };
    return (
      <div className="card">
        <div className="card-header bg-black text-white">Size</div>
        <div className="card-body">
          <label className="d-flex ms-3">Font-size: {this.props.size}px</label>
          <div className="d-flex ">
            <button className="btn btn-success m-3" onClick={onGiam}>
              Giảm
            </button>
            <button className="btn btn-success m-3" onClick={onTang}>
              Tăng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ChangeSizeComponent;
