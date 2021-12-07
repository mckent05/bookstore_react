import React from 'react';
import PropTypes from 'prop-types';
import Bookchapter from './Bookchapter';
import Bookprogress from './Bookprogress';
import Bookdetails from './Bookdetails';
import Bookcontrols from './Bookcontrols';
import './book.css';

const Book = ({
  category, author, chapter, title, progress, removeItem,
}) => (
  <article className="book-card d-flex a-center">
    <div className="book-details-control">
      <Bookdetails title={title} author={author} category={category} />
      <Bookcontrols removeItem={removeItem} />
    </div>
    <div>
      <Bookprogress progress={progress} />
    </div>
    <div>
      <Bookchapter chapter={chapter} />
    </div>
  </article>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  chapter: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,

};

export default Book;
