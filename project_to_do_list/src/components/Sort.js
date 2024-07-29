import React, { Component } from "react";
class Sort extends Component {
  constructor() {
    super();
    this.state = {
      sort: {
        by: "name",
        value: 1,
      },
    };
  }
  render() {
    const onSort = (sortBy, sortValue) => {
      this.setState({
        by: sortBy,
        value: sortValue,
      });
      this.props.sort(sortBy, sortValue);
    };
    return (
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Sắp xếp
        </button>
        <ul className="dropdown-menu">
          <li
            onClick={() => {
              onSort("name", 1);
            }}
          >
            Tên từ a-z
          </li>
          <li
            onClick={() => {
              onSort("name", -1);
            }}
          >
            Tên từ z-a
          </li>
          <li
            onClick={() => {
              onSort("status", 1);
            }}
          >
            Trạng thái ẩn
          </li>
          <li
            onClick={() => {
              onSort("status", -1);
            }}
          >
            Trạng thái kích hoạt
          </li>
        </ul>
      </div>
    );
  }
}
export default Sort;
