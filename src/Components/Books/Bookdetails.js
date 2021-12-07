import React from 'react';
import PropTypes from 'prop-types';

const Bookdetails = ({ category, author, title }) => (
  <section className="book-details">
    <h5 className="book-category">{category}</h5>
    <h2 className="book-title">{title}</h2>
    <h3 className="book-author">{author}</h3>
  </section>
);

Bookdetails.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Bookdetails;
