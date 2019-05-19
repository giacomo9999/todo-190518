import React, { Component } from "react";

class Todo extends Component {
  state = {
    edit: false,
    tempId: null,
    tempTitle: "",
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

  onDeleteHandle() {
    console.log("Deleting.");
    let id = arguments[0];
    this.setState({
      mockData: this.state.mockData.filter(item => item.id !== id)
    });
  }

  onEditHandle = (id, title) => {
    // opens renderEditForm, submits data to onUpdateHandle
    console.log("Editing...", id, title);
    this.setState({
      edit: true,
      tempId: id,
      tempTitle: title
    });
    console.log(this.state);
  };

  onUpdateHandle = e => {
    e.preventDefault();
    this.setState({
      mockData: this.state.mockData.map(item => {
        if (item.id === this.state.tempId) {
          item.title = e.target.updatedItem.value;
        }
        return item;
      })
    });
    this.setState({ edit: false });
  };

  onCompleteHandle = id => {
    console.log("Completing.");
    this.setState({
      mockData: this.state.mockData.map(item => {
        if (item.id === id) {
          item.done = true;
        }
        return item;
      })
    });
  };

  renderEditForm() {
    if (this.state.edit) {
      return (
        <form onSubmit={this.onUpdateHandle.bind(this)}>
          <input
            type="text"
            name="updatedItem"
            className="item"
            defaultValue={this.state.tempTitle}
          />
          <button className="update-add-item">Update</button>
        </form>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderEditForm()}
        <form onSubmit={this.onSubmitHandle.bind(this)}>
          <input type="text" name="item" className="item" />
          <button className="btn-add-item">Add</button>
        </form>
        <ul>
          {this.state.mockData.map(item => (
            <li key={item.id} className={item.done ? "done" : "hidden"}>
              {item.title}
              <button onClick={this.onDeleteHandle.bind(this, item.id)}>
                Delete
              </button>
              <button
                onClick={this.onEditHandle.bind(this, item.id, item.title)}
              >
                Edit
              </button>
              <button onClick={this.onCompleteHandle.bind(this, item.id)}>
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
