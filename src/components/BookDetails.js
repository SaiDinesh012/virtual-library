import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import booksData from './BookData';
import { LibraryContext } from './LibraryContext';

const BookDetailsPage = () => {
  const { id } = useParams();
  const { addToLibrary, myLibrary } = useContext(LibraryContext);
  const book = booksData.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found!</div>;
  }

  const isInLibrary = myLibrary.some(b => b.id === book.id);

  return (
    <div>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <p><strong>Publication Year:</strong> {book.publication_year}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <button 
        onClick={() => addToLibrary(book)} 
        disabled={isInLibrary}
      >
        {isInLibrary ? 'Already in Library' : 'Add to My Library'}
      </button>
    </div>
  );
};

export default BookDetailsPage;
