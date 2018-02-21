import React from 'react';

export default ({ filterBooks }) => {
  let filter = ``;

  function handleFilterChange(event) {
    filter = event.target.value;
    return filterBooks(filter);
  }

  return (
    <input type='text' onChange={handleFilterChange} placeholder='Search by title'/>
  );
};