import React, { Component } from "react";
// const ProductComponent = (props) => {
//   return (
//     <div>
//       <div className="card">
//         <div className="card-header">Mô tả sản phẩm: {props.nameValue}</div>
//         <div className="card-body">
//           <h4 className="card-title">Tên sản phẩm: {props.nameValue}</h4>
//           <p className="card-text">Giá: {props.priceValue}</p>
//         </div>
//         <div className="card-footer d-flex justify-content-end">
//           <button className="btn btn-outline-primary">Mua</button>
//         </div>
//       </div>
//     </div>
//   );
// };
class ProductComponent extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header">
            Mô tả sản phẩm: {this.props.children}
          </div>
          <div className="card-body">
            <h4 className="card-title">Tên sản phẩm: {this.props.children}</h4>
            <p className="card-text">Giá: {this.props.pricesValue}</p>
          </div>
          <div className="card-footer d-flex justify-content-end">
            <button className="btn btn-outline-primary">Mua</button>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductComponent;
