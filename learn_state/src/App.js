/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./App.css";
//import ProductComponent from "./components/productComponent";
class App extends Component {
  // onAdd = () => {
  //   alert(this.refs.name.value);
  // };
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          name: "iphone 5",
          prices: "2000",
          status: true,
        },
        {
          id: 2,
          name: "iphone 6",
          prices: "3000",
          status: false,
        },
        {
          id: 3,
          name: "iphone 7",
          prices: "4000",
          status: true,
        },
        {
          id: 4,
          name: "iphone 8",
          prices: "5000",
          status: false,
        },
        {
          id: 5,
          name: "iphone 9",
          prices: "6000",
          status: true,
        },
        {
          id: 6,
          name: "iphone 10",
          prices: "7000",
          status: false,
        },
      ],
      isActive: true,
    };
  }
  render() {
    // var textName = "Name";
    // const onInputNamekeyup = () => {
    //   console.log("refs: " + this.refs.name.value);
    //   textName = this.refs.name.value;
    //   console.log("textname: " + textName);
    // };
    var elementProduct = this.state.products.map((product, index) => {
      let result = "";
      if (this.state.isActive) {
        result = (
          <tr key={index}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.prices}</td>
          </tr>
        );
      }
      return result;
    });
    const onSetState = () => {
      if (this.state.isActive) {
        this.setState({
          isActive: false,
        });
      } else {
        this.setState({
          isActive: true,
        });
      }
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
          {/* <div className="row mb-3 mt-2">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="mb-3">
                    <label className="form-label">{textName}</label>
                    <input
                      onKeyUp={onInputNamekeyup}
                      type="text"
                      className="form-control"
                      name=""
                      ref="name"
                      placeholder="Nhập tên"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                      type="text"
                      className="form-control"
                      name=""
                      placeholder="Nhập tên"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select className="form-select ">
                      <option value="true">Đúng</option>
                      <option value="false">Sai</option>
                    </select>
                  </div>
                  <button className="btn btn-success" onClick={this.onAdd}>
                    Nhập
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">{elementProduct}</div>
          <div className="row mt-2">
            <button className="btn btn-warning" onClick={() => this.onAdd}>
              Click!
            </button>
          </div> */}
          <div className="row mt-2">
            <div className="table-responsive">
              <table className="table ">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Giá</th>
                  </tr>
                </thead>
                <tbody>{elementProduct}</tbody>
              </table>
              <button className="btn btn-primary" onClick={onSetState}>
                Active: {this.state.isActive ? "true" : "false"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
