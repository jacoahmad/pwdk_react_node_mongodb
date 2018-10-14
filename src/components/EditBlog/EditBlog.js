import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import InputGroup from '../shared/InputGroup/InputGroup';
import Loading from '@material-ui/core/LinearProgress/LinearProgress';
import Button from '@material-ui/core/Button/Button';

class EditBlog extends React.Component {
  state = {
    title: '',
    subtitle: '',
    text: '',
    isLoading: true,
    editSuccess: false,
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:8000/blog/${id}`).then(res => {
      this.setState({
        ...res.data.data,
        isLoading: false,
      });
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/blog/${this.props.match.params.id}`, {
        title: this.state.title,
        subtitle: this.state.subtitle,
        text: this.state.text,
      })
      .then(() => {
        this.props.history.push('/');
      });
  };
  handleChange = e => {
    return this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <InputGroup onChange={this.handleChange} label="Title" name="title" value={this.state.title} />
        <InputGroup onChange={this.handleChange} label="Subtitle" name="subtitle" value={this.state.subtitle} />
        <InputGroup onChange={this.handleChange} label="Text" name="text" value={this.state.text} />
        <Button type="submit">Submit Edit</Button>
      </form>
    );
  }
}

export default withRouter(EditBlog);
