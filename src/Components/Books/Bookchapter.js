import React from 'react';
import PropTypes from 'prop-types';

const Bookchapter = ({ chapter }) => (
  <article>
    <div className="chapter d-flex f-col j-center a-center">
      <h1 className="book-chapter">Current Chapter</h1>
      <p>{`chapter ${chapter}`}</p>
      <button type="button" className="chapter-btn">update progress</button>
    </div>
  </article>
);

Bookchapter.propTypes = {
  chapter: PropTypes.number.isRequired,
};

export default Bookchapter;
