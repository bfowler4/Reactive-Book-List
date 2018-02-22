import React from 'react';

export default ({ addBook }) => {
  let inputs = {
    title: ``,
    author: ``
  }
  let newBookForm = document.getElementById(`new_book_form`);

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