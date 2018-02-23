import React from 'react';
import { addBookToFakeXHR } from '../../lib/books.db';

export default ({ loadBooks }) => {
  let inputs = {
    title: ``,
    author: ``
  }
  let newBookForm = document.getElementById(`new_book_form`);

  function addBook(book) {
    addBookToFakeXHR(book)
    .then(books => loadBooks(books));
  }

  function handleChange(event) {
    inputs[event.target.name] = event.target.value;
  }

  function handleSubmit(event) {
    addBook(Object.assign({}, inputs));
    newBookForm.reset();
    event.preventDefault();
  }

  return (
    <form id='new_book_form' onSubmit={handleSubmit}>
      <input 
        type='text' 
        onChange={handleChange}
        name='title'
        placeholder='Title'
      />
      <br />
      <input 
        type='text' 
        onChange={handleChange} 
        name='author'
        placeholder='Author' 
      />
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
};