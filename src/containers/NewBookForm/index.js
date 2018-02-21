import React from 'react';

export default ({ addBook }) => {
  let title = ``;
  let author = ``;
  let newBookForm = document.getElementById(`new_book_form`);

  function handleChangeTitle(event) {
    title = event.target.value;
  }

  function handleChangeAuthor(event) {
    author = event.target.value;
  }

  function handleSubmit(event) {
    addBook({ title, author });
    newBookForm.reset();
    title = ``;
    author = ``;
    event.preventDefault();
  }

  return (
    <form id='new_book_form' onSubmit={handleSubmit}>
      <input type='text' onChange={handleChangeTitle} placeholder='Title' />
      <br />
      <input type='text' onChange={handleChangeAuthor} placeholder='Author' />
      <br />
      <button type='submit'>Submit</button>
    </form>
  );
};