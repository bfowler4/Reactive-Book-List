import React from 'react';

export default ({ getBooks, getBookById }) => {
  let filter = ``;

  function handleFilterChange(event) {
    filter = event.target.value;

    if (filter) {
      getBookById(parseInt(filter));
    } else {
      getBooks();
    }
  }

  return (
    <input type='text' onChange={handleFilterChange}/>
  );
};