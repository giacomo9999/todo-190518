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
    e.preventDefault();
    console.log("Submitting...", e.target.item.value);

    this.setState({
      mockData: [
        ...this.state.mockData,
        {
          id: Date.now(),
          title: e.target.item.value,
          done: false,
          date: new Date()
        }
      ]
    });
    e.target.item.value = "";
  };

  onDeleteHandle = e => {
    console.log("Deleting.");
    console.log(e);
  };

  onEditHandle = e => {
    console.log("Editing.");
    console.log(e);
  };

  onCompleteHandle = e => {
    console.log("Completing.");
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
              <button
                onClick={this.onEditHandle.bind(this, item.id, item.title)}
              >
                Edit
              </button>
              <button onClick={this.onCompleteHandle.bind(this)}>
                Complete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
