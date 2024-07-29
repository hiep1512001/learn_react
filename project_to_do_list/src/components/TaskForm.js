import React, { Component } from "react";
class TaskForm extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      txtname: "",
      slcstatus: false,
    };
  }
  componentDidMount() {
    if (this.props.taskEditing) {
      this.setState({
        id: this.props.taskEditing.id,
        txtname: this.props.taskEditing.name,
        slcstatus: this.props.taskEditing.status,
      });
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.taskEditing) {
      this.setState({
        id: nextProps.taskEditing.id,
        txtname: nextProps.taskEditing.name,
        slcstatus: nextProps.taskEditing.status,
      });
    } else {
      this.setState({
        id: "",
        txtname: "",
        slcstatus: false,
      });
    }
  }
  componentDidUpdate() {}
  render() {
    const getValue = (event) => {
      var target = event.target;
      var name = target.name;
      var value = target.type === "checkbox" ? target.checked : target.value;
      this.setState({
        [name]: value,
      });
    };
    const onColseForm = () => {
      this.props.oncloseForm();
      onResetUpdate();
    };
    const onSave = (event) => {
      event.preventDefault();
      this.props.onSubmit(this.state);
      onClear();
    };
    const onClear = () => {
      this.setState({
        txtname: "",
        slcstatus: false,
      });
    };
    const onResetUpdate = () => {
      this.props.resetUpdate();
    };
    return (
      <div className="card">
        <div className="card-header bg-primary text-white d-flex justify-content-between ">
          <span>
            {this.state.id === "" ? "Thêm công việc" : "Sửa công việc"}
          </span>
          <span
            className="fa-sharp fa-solid fa-xmark mt-1"
            onClick={onColseForm}
          ></span>
        </div>
        <div className="card-body">
          <form onSubmit={onSave}>
            <div className="mb-3">
              <label className="form-label">Tên:</label>
              <input
                type="text"
                className="form-control"
                name="txtname"
                value={this.state.txtname}
                onChange={getValue}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Trạng thái:</label>
              <select
                className="form-select"
                name="slcstatus"
                value={this.state.slcstatus}
                onChange={getValue}
              >
                <option value={true}>Kích hoạt</option>
                <option value={false}>Ẩn</option>
              </select>
            </div>
            <button
              className={
                this.state.id === ""
                  ? "btn btn-success ms-1"
                  : "btn btn-warning ms-1"
              }
              type="submit"
            >
              {this.state.id === "" ? "Lưu lại" : "Sửa"}
            </button>
            <button
              type="button"
              className="btn btn-danger ms-1"
              onClick={onClear}
            >
              <span className="fa-sharp fa-solid fa-xmark me-2"></span>
              Hủy bỏ
            </button>
          </form>
        </div>
        <label className="bg-danger"> {JSON.stringify(this.state)}</label>
      </div>
    );
  }
}
export default TaskForm;
