import React, { Component } from "react";
class TaskItem extends Component {
  render() {
    const onDelete = () => {
      this.props.deleteTask(this.props.tasks.id);
    };
    const updateStatus = () => {
      this.props.updateStatus(this.props.tasks.id);
    };
    const onUpdate = () => {
      this.props.updateTask(this.props.tasks.id);
    };
    return (
      <tr>
        <td>{this.props.index + 1}</td>
        <td>{this.props.tasks.name}</td>
        <td>
          <label
            onClick={updateStatus}
            className={
              this.props.tasks.status
                ? "text-white lable bg-success"
                : "text-white lable bg-danger"
            }
          >
            {this.props.tasks.status ? "Kích hoạt" : "Ẩn"}
          </label>
        </td>
        <td>
          <button className="btn btn-warning ms-1" onClick={onUpdate}>
            Sửa
          </button>
          <button className="btn btn-danger ms-1" onClick={onDelete}>
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}
export default TaskItem;
