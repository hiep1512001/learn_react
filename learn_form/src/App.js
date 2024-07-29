import "./App.css";
import React, { useState } from "react";
function App() {
  const [state, setSate] = useState({
    userName: "",
    passWord: "",
    description: "",
    genre: 0,
    lang: "en",
    status: true,
  });
  // const onSetUserName = (event) => {
  //   setSate({
  //     userName: event.target.value,
  //   });
  // };
  // const onSetPassWord = (event) => {
  //   setSate({
  //     passWord: event.target.value,
  //   });
  // };
  const onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    setSate({
      [name]: value,
    });
  };
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="card">
              <div className="bg-primary p-1 text-white">Form</div>
              <form>
                <div className="m-3 ">
                  <label className="form-label d-flex">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    //state và name tên phải giống nhau
                    name="userName"
                    onChange={onHandleChange}
                  />
                  <label>{state.userName}</label>
                </div>
                <div className="m-3">
                  <label className="form-label d-flex">Password</label>
                  <input
                    type="password"
                    //state và name tên phải giống nhau
                    name="passWord"
                    className="form-control"
                    onChange={onHandleChange}
                  />
                  <label>{state.passWord}</label>
                </div>
                <div className="m-3">
                  <label className="form-label d-flex">Mô tả</label>
                  <textarea
                    className="form-control"
                    name="description"
                    onChange={onHandleChange}
                  ></textarea>
                  <label>{state.description}</label>
                </div>
                <div className="m-3">
                  <label className="form-label d-flex">Giới tính</label>
                  <select
                    className="form-select "
                    name="genre"
                    value={state.genre}
                    onChange={onHandleChange}
                  >
                    <option value={1}>Nam</option>
                    <option value={0}>Nữ</option>
                  </select>
                  <label>{state.genre == 0 ? "Nữ" : "Nam"}</label>
                </div>
                <div className="m-3">
                  <label className="form-label d-flex">Ngôn ngữ</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="lang"
                      value="vi"
                      onChange={onHandleChange}
                      defaultChecked={state.lang === "vi"}
                    />
                    <label className="form-check-label d-flex">
                      Tiếng Việt
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="en"
                      name="lang"
                      onChange={onHandleChange}
                      defaultChecked={state.lang === "en"}
                    />
                    <label className="form-check-label d-flex">Tiếng Anh</label>
                  </div>
                  <label>{state.lang}</label>
                </div>
                <div className="m-3">
                  <label className="form-label d-flex">Trạng thái</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="status"
                      defaultChecked={state.status === true}
                      onChange={onHandleChange}
                    />
                    <label className="form-check-label d-flex">Hoạt động</label>
                  </div>
                </div>

                <div className="m-2 d-flex">
                  <button className="btn btn-primary " type="submit">
                    Lưu
                  </button>
                  <button className="btn btn-outline-primary ms-2" type="reset">
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
