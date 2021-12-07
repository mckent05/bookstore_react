import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Addbook from '../Addbook';
import { genres } from '../data';
import { removeBook } from '../../Redux/books/book';

const Bookpage = () => {
  const dispatch = useDispatch();

  const removeFromBookStore = (id) => {
    dispatch(removeBook(id));
  };

  const books = useSelector((state) => state.books);
  return (
    <div className="books-cont d-flex f-col j-center a-center">
      {books.map((book) => (
        <Book
          key={book.id}
          category={book.category}
          title={book.title}
          progress={book.progress}
          author={book.author}
          chapter={book.chapter}
          removeItem={() => removeFromBookStore(book.id)}
        />
      ))}
      <Addbook category={genres} />
    </div>
  );
};

export default Bookpage;
