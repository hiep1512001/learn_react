/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./App.css";
import ProductComponent from "./components/productComponent";
class App extends Component {
  render() {
    var products = [
      {
        id: 1,
        name: "iphone 5",
        prices: "2000",
        status: true,
      },
      {
        id: 2,
        name: "iphone 6",
        prices: "2000",
        status: false,
      },
      {
        id: 3,
        name: "iphone 7",
        prices: "2000",
        status: true,
      },
      {
        id: 4,
        name: "iphone 8",
        prices: "2000",
        status: false,
      },
      {
        id: 5,
        name: "iphone 9",
        prices: "2000",
        status: true,
      },
      {
        id: 6,
        name: "iphone 10",
        prices: "2000",
        status: false,
      },
    ];
    var elementProduct = products.map((product, index) => {
      let result = "";
      if (product.status) {
        result = (
          <div key={product.id} className="col-xs-6 col-sm-4 col-xl-2 mt-2">
            <ProductComponent priceValue={product.prices}>
              {product.name}
            </ProductComponent>
          </div>
        );
      }
      return result;
    });
    var onClick = () => {
      alert("Đây là thông báo");
    };
    return (
      <div>
        <nav className="navbar navbar-expand-xl navbar-light bg-success ">
          <div className="container">
            <a className="navbar-brand text-white" href="#">
              Bệnh viện nhân dân 115
            </a>
            <button
              className="navbar-toggler d-lg-none bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    href="#"
                    aria-current="page"
                  >
                    Home
                    <span className="visually-hidden">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    id="dropdownId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownId">
                    <a className="dropdown-item" href="#">
                      Action 1
                    </a>
                    <a className="dropdown-item" href="#">
                      Action 2
                    </a>
                  </div>
                </li>
              </ul>
              <form className="d-flex my-2 my-lg-0">
                <input
                  className="form-control me-sm-2"
                  type="text"
                  placeholder="Search"
                />
                <button
                  className="btn btn-outline-light my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">{elementProduct}</div>
          <div className="row mt-2">
            <button className="btn btn-warning" onClick={onClick}>
              Click!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
<div class="mb-3">
  <label for="" class="form-label">
    Name
  </label>
  <input type="text" class="form-control" name="" placeholder="Nhập tên" />
</div>;
