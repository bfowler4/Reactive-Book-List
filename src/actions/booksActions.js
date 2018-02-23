export const LOAD_BOOKS = `LOAD_BOOKS`;
export const ADD_BOOK = `ADD_BOOK`;
export const APPLY_FILTER = `APPLY_FILTER`;

export const loadBooks = (books) => {
  return {
    type: LOAD_BOOKS,
    books: books
  }
}

export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    book: book
  }
}

export const applyFilter = (filter) => {
  return {
    type: APPLY_FILTER,
    filter: filter
  }
}