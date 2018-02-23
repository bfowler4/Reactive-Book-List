import React from 'react';

export default ({ applyFilter }) => {
  let filter = ``;

  function handleFilterChange(event) {
    filter = event.target.value;
    return applyFilter(filter);
  }

  return (
    <input type='text' onChange={handleFilterChange} placeholder='Search by title'/>
  );
};