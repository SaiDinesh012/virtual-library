// src/context/LibraryContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const LibraryContext = createContext();

// Context provider component
export const LibraryProvider = ({ children }) => {
  const [myLibrary, setMyLibrary] = useState([]);

  const addToLibrary = (book) => {
    setMyLibrary([...myLibrary, book]);
  };

  const removeFromLibrary = (bookId) => {
    setMyLibrary(myLibrary.filter(book => book.id !== bookId));
  };

  return (
    <LibraryContext.Provider value={{ myLibrary, addToLibrary, removeFromLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
};
