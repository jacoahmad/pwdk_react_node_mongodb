import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';

const ListOfBlog = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog, index) => {
        return (
          <Card key={index}>
            <CardContent>
              <h2>{blog.title}</h2>
              <h5>{blog.subtitle}</h5>
              <p>{blog.text}</p>
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
      text: PropTypes.string
    })
  )
};

export default ListOfBlog;
