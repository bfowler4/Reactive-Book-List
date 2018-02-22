import React, { Component } from 'react';
import './styles.css';
import BookListAppTitle from '../../components/BookListAppTitle';
import BookFilterInput from '../../components/BookFilterInput';
import BookListComponent from '../../containers/BookList';
import NewBookForm from '../../containers/NewBookForm';
import { getBooksFromFakeXHR, addBookToFakeXHR } from '../../lib/books.db';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      filter: ``
    }

    this.filterBooks = this.filterBooks.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  componentWillMount() {
    getBooksFromFakeXHR()
    .then(books => this.setState({ books: books }));
  }

  filterBooks(filter) {
    return this.setState({ filter: filter });
  }

  addBook(book) {
    return addBookToFakeXHR(book)
    .then(books => this.setState({ books: books }));
  }

  render() {
    return (
      <div className="App">
        <BookListAppTitle title="Brandon's Book List App" />
        <BookFilterInput filterBooks={this.filterBooks}/>
        <BookListComponent books={this.state.books} filter={this.state.filter} />
        <NewBookForm addBook={this.addBook}/>
      </div>
    );
  }
}

export default App;
