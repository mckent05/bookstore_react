const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const initialState = [];

export const addBook = (newItem) => ({
  type: ADD_BOOK,
  payload: newItem,
});

export const removeBook = (newItem) => ({
  type: REMOVE_BOOK,
  payload: newItem,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return ([
        ...state,
        action.payload,
      ]);
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
