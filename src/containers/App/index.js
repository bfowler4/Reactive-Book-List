import React, { Component } from 'react';
import './styles.css';
import BookListAppTitle from '../../components/BookListAppTitle';
import BookFilterInput from '../../components/BookFilterInput';
import BookListComponent from '../../containers/BookList';
import NewBookForm from '../../containers/NewBookForm';
import { getBooksFromFakeXHR } from '../../lib/books.db';

import { connect } from 'react-redux';
import { loadBooks, addBook, applyFilter } from '../../actions/booksActions';

class App extends Component {
  componentWillMount() {
    getBooksFromFakeXHR()
    .then(books => this.props.loadBooks(books));
  }

  render() {
    return (
      <div className="App">
        <BookListAppTitle title="Brandon's Book List App" />
        <BookFilterInput applyFilter={this.props.applyFilter}/>
        <BookListComponent books={this.props.books} filter={this.props.filter}/>
        <NewBookForm loadBooks={this.props.loadBooks}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books.books,
    filter: state.books.filter
  }
}

const mapDispatchToProps = {
  loadBooks,
  addBook,
  applyFilter
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
