import React from 'react';
import Book from './Book';
import Addbook from '../Addbook';
import data from '../data';

const Bookpage = () => (
  <div className="books-cont d-flex f-col j-center a-center">
    {data.map((book) => (
      <Book
        key={book.title}
        category={book.category}
        title={book.title}
        progress={book.progress}
        author={book.author}
        chapter={book.chapter}
      />
    ))}
    <Addbook category={data.map((book) => book.category)} />
  </div>
);

export default Bookpage;
