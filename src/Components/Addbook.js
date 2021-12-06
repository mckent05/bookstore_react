import React from 'react';
import PropTypes from 'prop-types';

const Addbook = ({ category }) => (
  <div className="add-book j-center f-col d-flex">
    <h2>Add a New Book</h2>
    <form className="form d-flex a-center">
      <input type="text" className="form-input" placeholder="Add a new book" />
      <select className="select">
        { category.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
      <button type="submit" className="submit-btn"> Add Book</button>
    </form>
  </div>
);

Addbook.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Addbook;
