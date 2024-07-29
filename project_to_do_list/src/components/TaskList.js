import React, { Component } from "react";
import TaskItem from "./TaskItem.js";
class TaskList extends Component {
  constructor() {
    super();
    this.state = {
      filtername: "",
      filterstatus: 1,
    };
  }
  onFilter = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === "filterstatus") {
      value = parseInt(value, 10);
    }
    console.log(value);
    console.log(typeof value);
    this.setState({
      [name]: value,
    });
    this.props.filter(this.state);
    // var data = {
    //   [name]: value,
    // };
    this.props.filter(
      name === "filtername" ? value : this.state.filtername,
      name === "filterstatus" ? value : this.state.filterstatus
    );
  };
  render() {
    var { filtername, filterstatus } = this.state;

    var elements = this.props.tasks.map((value, index) => {
      return (
        <TaskItem
          key={value.id}
          index={index}
          tasks={value}
          updateStatus={this.props.updateStatus}
          deleteTask={this.props.deleteTask}
          updateTask={this.props.updateTask}
        ></TaskItem>
      );
    });
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <td>STT</td>
              <td>Tên</td>
              <td>Trạng thái</td>
              <td>Hành động</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="filtername"
                  placeholder=""
                  value={filtername}
                  onChange={this.onFilter}
                />
              </td>
              <td>
                <select
                  className="form-select"
                  name="filterstatus"
                  onChange={this.onFilter}
                  value={filterstatus}
                >
                  <option value={1}>Tất cả</option>
                  <option value={2}>Kích hoạt</option>
                  <option value={3}>Ẩn</option>
                </select>
              </td>
              <td></td>
            </tr>
            {elements}
          </tbody>
        </table>
        <label>{JSON.stringify(this.state)}</label>
      </div>
    );
  }
}
export default TaskList;
