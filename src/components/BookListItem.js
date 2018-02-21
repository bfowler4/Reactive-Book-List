import React from 'react';

export default ({ title, author }) => {
  return (
    <li>
      <h3>{title}</h3>
      <h4>{author}</h4>
    </li>
  );
}