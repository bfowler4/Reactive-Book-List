import { LOAD_BOOKS, ADD_BOOK, APPLY_FILTER } from '../actions/booksActions';

const initialState = {
  books: [],
  filter: ``
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return { ...state, books: action.books.concat([]) };
    case ADD_BOOK:
      return { ...state, books: state.books.concat(action.book) };
    case APPLY_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}