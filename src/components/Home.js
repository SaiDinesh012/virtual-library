// src/pages/HomePage.js
import React, { useState } from 'react';
import BookList from './BookList';
import booksData from './BookData';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = booksData.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.genre.toLowerCase().includes(query)
    );
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <h1>Book Library</h1>
      <input
        type="text"
        placeholder="Search by title, author, or genre..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <BookList books={filteredBooks} />
    </div>
  );
};

export default HomePage;
