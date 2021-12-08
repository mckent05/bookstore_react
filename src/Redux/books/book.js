import { generateChapter, generateCompletion } from '../../Components/data';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookStore/books/FETCH_BOOK';
const initialState = [];

const addBook = (newItem) => ({
  type: ADD_BOOK,
  payload: {
    ...newItem, progress: generateCompletion(), chapter: generateChapter(), author: 'gbenga',
  },
});

const removeBook = (newItem) => ({
  type: REMOVE_BOOK,
  payload: newItem,
});

const fetchBook = (allBooks) => ({
  type: FETCH_BOOK,
  payload: allBooks,
});

export const addNewBook = (newItem) => async (dispatch) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/aWBfup2VaaGqFRWVe1S7/books/',
    {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  dispatch(addBook(newItem));
};

export const getAllBooks = () => async (dispatch) => {
  const books = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/aWBfup2VaaGqFRWVe1S7/books/');
  const bookData = await books.json();
  dispatch(fetchBook(bookData));
};

export const removeFromStore = (itemId) => async (dispatch) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/aWBfup2VaaGqFRWVe1S7/books/${itemId}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ item_id: itemId }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  dispatch(removeBook(itemId));
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return ([
        ...state,
        action.payload,
      ]);
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case FETCH_BOOK:
      return Object.entries(action.payload).map(([key, value]) => {
        const [book] = value;
        return {
          item_id: key,
          ...book,
          chapter: generateChapter(),
          progress: generateCompletion(),
          author: 'gbenga',
        };
      });
    default:
      return state;
  }
};

export default booksReducer;
