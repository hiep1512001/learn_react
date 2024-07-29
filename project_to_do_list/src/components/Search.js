import React, { Component } from "react";
class Search extends Component {
  constructor() {
    super();
    this.state = {
      keyword: "",
    };
  }
  render() {
    var { keyword } = this.state;
    const onChange = (event) => {
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
        [name]: value,
      });
    };
    const onSearch = () => {
      this.props.search(this.state.keyword);
    };
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nhập từ khóa..."
          value={keyword}
          onChange={onChange}
          name="keyword"
        ></input>
        <button
          className="btn btn-primary input-group-text "
          onClick={onSearch}
        >
          <i className="fa-solid fa-magnifying-glass me-2"></i>Tìm
        </button>
      </div>
    );
  }
}
export default Search;
