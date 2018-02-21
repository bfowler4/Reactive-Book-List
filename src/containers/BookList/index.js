import React from 'react';
import BookListItem from '../../components/BookListItem';

export default ({ books, filter }) => {
  if (filter) {
    filter = new RegExp(filter, `i`);
    books = books.filter(book => {
      return book.title.match(filter);
    });
  }

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