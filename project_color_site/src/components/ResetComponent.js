import React from "react";
const Reset = (props) => {
  const OnReset = () => {
    props.onRecieveVale();
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={OnReset}>
        Reset
      </button>
    </div>
  );
};
export default Reset;
