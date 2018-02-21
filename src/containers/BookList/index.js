import React from 'react';
import BookListItem from '../../components/BookListItem';

export default ({ books }) => {
  return (
    <div>
      <ol>
        {books.length ? books.map((book, index) => {
          return <BookListItem key={index} title={book.title} author={book.author} />;
        }) : <h3>(No books found)</h3>}
      </ol>
    </div>
  );
}