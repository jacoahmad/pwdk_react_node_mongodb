import React, { Component } from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

class TodoList extends Component {
  state = {
    title: '',
    list: []
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleAddList = e => {
    e.preventDefault();
    this.setState({
      list: this.state.list.concat(this.state.title),
      title: ''
    });
  };
  handleDeleteList = index => {
    const list = this.state.list.concat();
    delete list[index];
    return this.setState({
      list
    })
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Todo List App</h1>
        <form onSubmit={this.handleAddList}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.list.map((item, index) => {
            const onDeleteList = () => {
              this.handleDeleteList(index)
            }
            return (
              <TodoListItem key={index} 
                onDeleteList={onDeleteList}
              >
                {item}
              </TodoListItem>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
