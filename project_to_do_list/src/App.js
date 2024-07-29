import "./App.css";
import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/Control";
import TaskList from "./components/TaskList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      isDisplayForm: false,
      taskEditing: null,
      filter: {
        filtername: "",
        filterstatus: 1,
      },
      keyword: "",
      sort: {
        by: "name",
        value: 1,
      },
    };
  }
  componentDidMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks,
      });
    }
  }

  render() {
    var { tasks, isDisplayForm, taskEditing, filter, keyword, sort } =
      this.state;
    if (filter) {
      if (filter.filtername) {
        tasks = tasks.filter((task) => {
          return (
            task.name.toLowerCase().indexOf(filter.filtername.toLowerCase()) !==
            -1
          );
        });
      }
      tasks = tasks.filter((task) => {
        if (filter.filterstatus === 1) return task;
        else {
          return task.status === (filter.filterstatus === 2 ? true : false);
        }
      });
    }
    if (keyword) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      });
    }
    if (sort.by === "name") {
      tasks.sort((a, b) => {
        if (a.name > b.name) return sort.value;
        else if (a.name < b.name) return -sort.value;
        else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) return sort.value;
        else if (a.status < b.status) return -sort.value;
        else return 0;
      });
    }
    const s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    const CreateId = () => {
      return s4() + s4() + s4() + "-" + s4() + s4() + s4() + "-" + s4();
    };
    const ShowTaskForm = () => {
      this.setState({
        isDisplayForm: true,
        taskEditing: null,
      });
    };
    const closeForm = () => {
      this.setState({
        isDisplayForm: false,
      });
    };
    const saveData = (data) => {
      var { tasks } = this.state;
      if (data.id !== "") {
        var index = findIndex(data.id);
        if (index !== -1) {
          var taskIndex = {
            id: data.id,
            name: data.txtname,
            status: data.slcstatus,
          };
          tasks[index] = taskIndex;
        }
      } else {
        var task = {
          id: CreateId(),
          name: data.txtname,
          status: data.slcstatus === "true" ? true : false,
        };
        tasks.push(task);
      }
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
      this.setState({
        isDisplayForm: false,
        taskEditing: null,
      });
    };
    const onUpdateStatus = (id) => {
      var index = findIndex(id);
      if (index !== -1) {
        var { tasks } = this.state;
        tasks[index].status = !tasks[index].status;
        this.setState({
          tasks: tasks,
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
    };
    const findIndex = (id) => {
      var result = -1;
      tasks.forEach((task, index) => {
        if (task.id === id) {
          result = index;
        }
      });
      return result;
    };
    const onDeleteTask = (id) => {
      var index = findIndex(id);
      if (index !== -1) {
        var { tasks } = this.state;
        tasks.splice(index, 1);
        this.setState({
          tasks: tasks,
          isDisplayForm: false,
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
    };
    const onUpdateTask = (id) => {
      var index = findIndex(id);
      if (index !== -1) {
        var { tasks } = this.state;
        this.setState({
          isDisplayForm: true,
          taskEditing: tasks[index],
        });
      }
    };
    const onResetUpdate = () => {
      this.setState({
        taskEditing: null,
      });
    };

    const onFilter = (filtername, filterstatus) => {
      this.setState({
        filter: {
          filtername: filtername,
          filterstatus: filterstatus,
        },
      });
    };
    const onSearh = (keyword) => {
      this.setState({
        keyword: keyword,
      });
    };
    const onSort = (name, value) => {
      this.setState({
        sort: {
          by: name,
          value: value,
        },
      });
    };
    return (
      <div className="container">
        <div className="row">
          <h2 className="d-flex justify-content-center">QUẢN LÝ CÔNG VIỆC</h2>
        </div>
        <div className="row">
          <div className="col-4">
            {isDisplayForm ? (
              <TaskForm
                oncloseForm={closeForm}
                onSubmit={saveData}
                taskEditing={taskEditing}
                resetUpdate={onResetUpdate}
              ></TaskForm>
            ) : (
              ""
            )}
          </div>
          <div className={isDisplayForm ? "col-8" : "col-12"}>
            <button className="btn btn-primary mb-3" onClick={ShowTaskForm}>
              <i className="fa-solid fa-plus me-1"></i>Thêm công việc
            </button>
            <div>
              <TaskControl search={onSearh} sort={onSort}></TaskControl>
              <label>
                {JSON.stringify(this.state.filter)}
                {JSON.stringify(this.state.test)}
              </label>
              <label className="bg-primary text-white ms-2">
                {JSON.stringify(this.state.sort)}
              </label>
            </div>
            <div className="row">
              <TaskList
                tasks={tasks}
                updateStatus={onUpdateStatus}
                deleteTask={onDeleteTask}
                updateTask={onUpdateTask}
                filter={onFilter}
              ></TaskList>
            </div>
          </div>
        </div>
        <label className="bg-danger">{JSON.stringify(this.state.tasks)}</label>
      </div>
    );
  }
}
export default App;
