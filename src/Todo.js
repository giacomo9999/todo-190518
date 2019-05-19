import React, { Component } from "react";

class Todo extends Component {
  state = {
    edit: false,
    tempId: null,
    mockData: [
      { id: 1, title: "Pay Bills", done: false, date: new Date() },
      { id: 2, title: "Find True love", done: false, date: new Date() },
      { id: 3, title: "Achieve Enlightenment", done: false, date: new Date() },
      { id: 4, title: "Finish Novel", done: false, date: new Date() }
    ]
  };

  onSubmitHandle = e => {
    console.log(e);
  };

  onDeleteHandle = e => {
    console.log(e);
  };


  onEditHandle = e => {
    console.log(e);
  };

  onCompleteHandle = e => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandle.bind(this)}>
          <input type="text" name="item" className="item" />
          <button className="btn-add-item">Add</button>
        </form>
        <ul>
          {this.state.mockData.map(item => (
            <li key={item.id}>
              {item.title}
              <button onClick={this.onDeleteHandle.bind(this, item.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
