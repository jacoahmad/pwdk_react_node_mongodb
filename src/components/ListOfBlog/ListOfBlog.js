import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';

function dateToDisplay(date) {
  // 14-10-2018
}
const ListOfBlog = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog, index) => {
        const dateCreated = new Date(blog.date_created);
        return (
          <Card key={index}>
            <CardContent>
              <h2>{blog.title}</h2>
              <h5>{blog.subtitle}</h5>
              <p>{blog.text}</p>
              <div>{`${dateCreated.getDate()}-${dateCreated.getMonth() + 1}-${dateCreated.getFullYear()}`}</div>
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
