import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { addBook } from '../Redux/books/book';
import { generateCompletion, generateChapter } from './data';

const Addbook = ({ category }) => {
  const [title, setTitle] = useState('');
  const [cat, setCat] = useState('science');
  const disptach = useDispatch();

  const addNewBookToStore = (e) => {
    e.preventDefault();
    const newItem = {
      title, category: cat, id: uuid(), progress: generateCompletion(), author: 'gbenga', chapter: generateChapter(),
    };
    if (title !== '') {
      disptach(addBook(newItem));
      setTitle('');
    } else {
      window.alert('Enter a Book Title');
    }
  };

  return (
    <div className="add-book j-center f-col d-flex">
      <h2>Add a New Book</h2>
      <form className="form d-flex a-center">
        <input
          type="text"
          className="form-input"
          value={title}
          placeholder="Add a new book"
          onChange={(e) => setTitle(e.target.value)}
        />
        <select className="select" onChange={(e) => setCat(e.target.value)}>
          { category.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
        <button type="submit" className="submit-btn" onClick={(e) => addNewBookToStore(e)}> Add Book</button>
      </form>
    </div>
  );
};

Addbook.propTypes = {
  category: PropTypes.arrayOf(addBook).isRequired,
};

export default Addbook;
