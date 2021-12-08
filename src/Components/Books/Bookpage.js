import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Addbook from '../Addbook';
import { genres } from '../data';
import { getAllBooks, removeFromStore } from '../../Redux/books/book';

const Bookpage = () => {
  const dispatch = useDispatch();

  const removeFromBookStore = (id) => {
    dispatch(removeFromStore(id));
  };

  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getAllBooks());
  }, []);
  return (
    <div className="books-cont d-flex f-col j-center a-center">
      {books.map((book) => (
        <Book
          key={book.item_id}
          category={book.category}
          title={book.title}
          progress={book.progress}
          author={book.author}
          chapter={book.chapter}
          removeItem={() => removeFromBookStore(book.item_id)}
        />
      ))}
      <Addbook category={genres} />
    </div>
  );
};

export default Bookpage;
