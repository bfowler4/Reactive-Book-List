import React, { Component } from 'react';
import './styles.css';
import BookListAppTitle from '../../components/BookListAppTitle';
import BookFilterInput from '../../components/BookFilterInput';
import BookListComponent from '../../containers/BookList';
import NewBookForm from '../../containers/NewBookForm';
import { getBooksFromFakeXHR, getBookByIdFromFakeXHR, addBookToFakeXHR } from '../../lib/books.db';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    }

    this.getBooks = this.getBooks.bind(this);
    this.getBookById = this.getBookById.bind(this);
    this.addBook = this.addBook.bind(this);
  }

  componentWillMount() {
    getBooksFromFakeXHR()
    .then(books => {
      this.setState({ books: books });
    });
  }

  getBooks() {
    return getBooksFromFakeXHR()
    .then(books => {
      this.setState({ books: books });
    });
  }

  getBookById(id) {
    return getBookByIdFromFakeXHR(id)
    .then(book => {
      this.setState({ books: [ book ] });
    })
    .catch(err => {
      this.setState({ books: [] });
    });
  }

  addBook(book) {
    return addBookToFakeXHR(book)
    .then(books => {
      this.setState({ books: books });
    });
  }

  render() {
    return (
      <div className="App">
        <BookListAppTitle title="Brandon's Book List App" />
        <BookFilterInput getBooks={this.getBooks} getBookById={this.getBookById}/>
        <BookListComponent books={this.state.books} />
        <NewBookForm addBook={this.addBook}/>
      </div>
    );
  }
}

export default App;
