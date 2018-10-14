import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import _ from 'lodash';
import axios from 'axios';
import Heading from '@material-ui/core/';
import InputGroup from '../shared/InputGroup/InputGroup';
import TodoListItem from '../TodoListItem/TodoListItem';
import ListOfBlog from '../ListOfBlog/ListOfBlog';
import Loading from '@material-ui/core/LinearProgress/LinearProgress';

class TodoList extends Component {
  state = {
    title: '',
    error: {},
    isLoading: true,
    isSubmiting: false,
    form: {
      title: '',
      subtitle: '',
      text: '',
      active: false,
    },
    list: [],
  };

  componentDidMount() {
    this.fetchBlogs();
  }

  fetchBlogs = () => {
    this.setState({
      isLoading: true,
    });
    axios.get('http://localhost:8000/blogs').then(res => {
      if (res.data.status === 'ERROR') {
        return false;
      }
      return this.setState({ list: res.data.blogs, isLoading: false });
    });
  };
  handleClickBlog = id => this.props.history.push(`/edit/${id}`);
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleDeleteBlog = id => {
    axios
      .post('http://localhost:8000/blog/delete', {
        id,
      })
      .then(() => {
        this.fetchBlogs();
        alert('Blog successfully deleted');
      });
  };
  validateForm = () => {
    let error = {};
    for (let data in this.state.form) {
      if (data !== 'date_created' && data !== 'date_updated' && data !== 'active') {
        if (this.state.form[data].length === 0) {
          error[data] = true;
        }
      }
    }
    return _.isEmpty(error);
  };

  handleAddList = e => {
    e.preventDefault();
    this.setState({
      isSubmiting: true,
    });
    const error = !this.validateForm();
    if (error) {
      return alert('All fields are required');
    }

    axios
      .post('http://localhost:8000/blog', this.state.form)
      .then(() => {
        this.fetchBlogs();
        this.setState({
          isSubmiting: false,
          form: {
            title: '',
            subtitle: '',
            text: '',
            active: false,
          },
        });
      })
      .catch(err => console.error(err));
  };
  handleDeleteList = index => {
    const list = this.state.list.concat();
    delete list[index];
    return this.setState({
      list,
    });
  };
  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
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
          {this.state.isSubmiting && 'Loading, posting blog'}
          <button type="submit" disabled={this.state.isSubmiting}>
            Add
          </button>
        </form>
        <ListOfBlog blogs={this.state.list} onDelete={this.handleDeleteBlog} onClick={this.handleClickBlog} />
      </div>
    );
  }
}

export default TodoList;
