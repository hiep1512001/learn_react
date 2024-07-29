import React, { Component } from "react";
class ShowValueComponent extends Component {
  render() {
    const setStyle = () => {
      return {
        color: this.props.color,
        "font-size": this.props.size,
      };
    };
    return (
      <div className="card">
        <div className="card-header bg-black text-white">
          Site show value: {this.props.color} - {this.props.size}px
        </div>
        <div className="card-body">
          <label style={setStyle()} className="font-19px">
            Hiển thị kết quả: Nguyễn Hoàng Hiệp
          </label>
        </div>
        <div className="card-footer text-muted">
          <label className="text-danger">Màu mặc định là: đỏ</label>
          <br></br>
          <label>Font mặc định là: 8px</label>
        </div>
      </div>
    );
  }
}
export default ShowValueComponent;
