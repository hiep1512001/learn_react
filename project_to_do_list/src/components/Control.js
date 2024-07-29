import React from "react";
import Search from "./Search";
import Sort from "./Sort";
const TaskControl = (props) => {
  return (
    <div className="row">
      <div className="col-6">
        <Search search={props.search}></Search>
      </div>
      <div className="col-6">
        <Sort sort={props.sort}></Sort>
      </div>
    </div>
  );
};
export default TaskControl;
