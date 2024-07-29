/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import React from "react";
function App() {
  var a = 5;
  var name = "nguyễn hoàng hiệp";
  var b = 7;
  var product = {
    id: 1,
    name: "iphone 12",
    status: true,
    price: 15000000,
  };
  var users = [
    {
      id: 1,
      name: "nguyễn hoàng hiệp",
      old: 20,
    },
    {
      id: 2,
      name: "nguyễn hoàng long",
      old: 22,
    },
    {
      id: 3,
      name: "nguyễn hoàng an",
      old: 23,
    },
  ];

  function showInfoProduuct() {
    if (product.status) {
      return (
        <h4>
          id: {product.id} <br />
          name: {product.name} <br />
          price: {product.price} <br />
          status: {product.status ? " Đúng" : "Sai"}
        </h4>
      );
    }
  }
  var elements = users.map((user, index) => {
    return (
      <div key={user.id}>
        <h2>Tên: {user.name}</h2>
        <p>Tuổi: {user.old}</p>
      </div>
    );
  });
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container">
          <a className="navbar-brand " href="#">
            <h4 className="text-white">Bệnh viện nhân dân 115</h4>
          </a>
          <button
            className="navbar-toggler hidden-lg-up"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse " id="collapsibleNavId">
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
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <h2>
        a: {a} <br />
        b: {b} <br />
        a+b ={a + b}
      </h2>
      <h3 className="ml-30">name={name}</h3>
      {showInfoProduuct()}
      <br />
      {elements}
    </div>
  );
}

export default App;
