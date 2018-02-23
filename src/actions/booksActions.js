import { getBooksFromFakeXHR, addBookToFakeXHR } from '../lib/books.db';


export const LOAD_BOOKS = `LOAD_BOOKS`;
export const ADD_BOOK = `ADD_BOOK`;
export const APPLY_FILTER = `APPLY_FILTER`;

export const loadBooks = (books) => {
  return getBooksFromFakeXHR()
  .then(books => {
    return {
      type: LOAD_BOOKS,
      books: books
    }
  });
}

export const addBook = (book) => {
  return addBookToFakeXHR(book)
  .then(books => {
    return {
      type: ADD_BOOK,
      books: books
    }
  });
}

export const applyFilter = (filter) => {
  return {
    type: APPLY_FILTER,
    filter: filter
  }
}