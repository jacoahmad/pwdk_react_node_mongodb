import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import _ from 'lodash';
import InputGroup from '../shared/InputGroup/InputGroup';
import TodoListItem from '../TodoListItem/TodoListItem';
import ListOfBlog from '../ListOfBlog/ListOfBlog';

class TodoList extends Component {
  state = {
    title: '',
    error: {},
    form: {
      // id: '',
      date_created: '', // Date
      date_updated: '', // Date
      title: '',
      subtitle: '',
      text: '',
      active: false
      // images: [],
      // array<{
      //   url: string,
      //   type: string,
      //   id: string
      // }>,]
      // category: [],
      // comments: [],
      // [{
      //   name: string,
      //   message: string,
      //   id: string
      // }]
    },
    list: []
  };
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  validateForm = () => {
    let error = {};
    for (let data in this.state.form) {
      if (
        data !== 'date_created' &&
        data !== 'date_updated' &&
        data !== 'active'
      ) {
        console.log(data);
        if (this.state.form[data].length === 0) {
          error[data] = true;
        }
      }
    }
    return _.isEmpty(error);
  };

  handleAddList = e => {
    e.preventDefault();

    const error = !this.validateForm();
    if (error) {
      return;
    }
    const data = {
      ...this.state.form,
      date_created: Date.now()
    };
    this.setState({
      list: [...this.state.list, data],
      form: {
        // id: '',
        date_created: '', // Date
        date_updated: '', // Date
        title: '',
        subtitle: '',
        text: '',
        active: false
        // images: [],
        // array<{
        //   url: string,
        //   type: string,
        //   id: string
        // }>,]
        // category: [],
        // comments: [],
        // [{
        //   name: string,
        //   message: string,
        //   id: string
        // }]
      }
    });
  };
  handleDeleteList = index => {
    const list = this.state.list.concat();
    delete list[index];
    return this.setState({
      list
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Create Blog</h1>
        <form onSubmit={this.handleAddList}>
          <InputGroup
            label="Blog Title"
            name="title"
            type="text"
            value={this.state.form.title}
            onChange={this.handleChange}
          />
          <InputGroup
            label="Blog Subtitle"
            name="subtitle"
            type="text"
            value={this.state.form.subtitle}
            onChange={this.handleChange}
          />
          <InputGroup
            label="Blog Content"
            name="text"
            type="text"
            value={this.state.form.text}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
        <ListOfBlog blogs={this.state.list} />
      </div>
    );
  }
}

export default TodoList;
