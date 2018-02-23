import React, { Component } from 'react';
import './styles.css';
import BookListAppTitle from '../../components/BookListAppTitle';
import BookFilterInput from '../../components/BookFilterInput';
import BookListComponent from '../../containers/BookList';
import NewBookForm from '../../containers/NewBookForm';

import { connect } from 'react-redux';
import { loadBooks, addBook, applyFilter } from '../../actions/booksActions';

class App extends Component {
  componentWillMount() {
    this.props.loadBooks();
  }

  render() {
    return (
      <div className="App">
        <BookListAppTitle title="Brandon's Book List App" />
        <BookFilterInput applyFilter={this.props.applyFilter}/>
        <BookListComponent books={this.props.books} filter={this.props.filter}/>
        <NewBookForm addBook={this.props.addBook}/>
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

const mapDispatchToProps = dispatch => {
  return {
    loadBooks: () => {
      loadBooks()
      .then(books => {
        dispatch(books);
      });
    },
    addBook: book => {
      addBook(book)
      .then(books => {
        dispatch(books);
      });
    },
    applyFilter: (filter) => {
      dispatch(applyFilter(filter));
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
