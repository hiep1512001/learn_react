import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="col-12">
        <div className="card text-black ">
          <img
            className="card-img-top"
            src="https://benhvien115.com.vn/data/cover-home_mobile-1.jpg"
            alt="Title"
          />
          <div className="card-body">
            <h4 className="card-title">Bệnh viện nhân dân 115</h4>
            <p className="card-text">Xin chào các bạn</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
