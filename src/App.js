import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Plan from "./Plan";
class App extends Component {
  state = {
    items: [],
    text: "",
  };
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  handleAdd = (e) => {
    if (this.state.text != "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
    }
  };
  handleDelete = (i) => {
    console.log("Item deleted", i);
    const oldItems = [...this.state.items];
    const items = oldItems.filter((element, keys) => {
      return i != keys;
    });
    this.setState({ items: items });
  };
  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h1 className="text-center">Today's Plan</h1>
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write Your Plan Here"
                  value={this.state.text}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 m-0.5">
                <button
                  className="btn btn-warning px-5 font-weight-bold"
                  onClick={this.handleAdd}
                >
                  ADD
                </button>
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled row m-5">
                  {this.state.items.map((value, i) => {
                    return (
                      <Plan
                        key={i}
                        id={i}
                        value={value}
                        sendData={this.handleDelete}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
