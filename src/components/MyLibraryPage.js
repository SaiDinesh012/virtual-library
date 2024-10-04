import React, { useContext } from 'react';
import { LibraryContext } from './LibraryContext';
import BookCard from '../components/BookCard';

const MyLibraryPage = () => {
  const { myLibrary, removeFromLibrary } = useContext(LibraryContext);

  if (myLibrary.length === 0) {
    return <div>Your library is empty!</div>;
  }

  return (
    <div>
      <h1>My Library</h1>
      <div className="book-list">
        {myLibrary.map(book => (
          <div key={book.id}>
            <BookCard book={book} />
            <button onClick={() => removeFromLibrary(book.id)}>Remove from Library</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyLibraryPage;
