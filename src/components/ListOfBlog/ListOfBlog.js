import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button/Button';
import PropTypes from 'prop-types';
import moment from 'moment';

function dateToDisplay(date) {
  return moment(date).format('ddd, Do MMM YYYY'); //`${x.getDate()} ${x.getMonth() + 1} ${x.getFullYear()}`;
}
const ListOfBlog = ({ blogs, onDelete, onClick }) => {
  return (
    <div>
      {blogs.map((blog, index) => {
        const handleDelete = () => onDelete(blog._id);
        const handleClick = () => onClick(blog._id);
        return (
          <Card key={index}>
            <CardContent>
              <h2>{blog.title}</h2>
              <h5>{blog.subtitle}</h5>
              <p>{blog.text}</p>
              <div>{dateToDisplay(blog.date_created)}</div>
              <Button onClick={handleClick}>Edit</Button>
              <Button onClick={handleDelete}>Delete Blog</Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

ListOfBlog.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default ListOfBlog;
