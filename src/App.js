import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';
import BookDetailsPage from './components/BookDetails';
import { LibraryProvider } from './components/LibraryContext';
import MyLibraryPage from './components/MyLibraryPage.js';


function App() {
  return (
    <LibraryProvider>
      <Router>
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route path="/book/:id" component={BookDetailsPage} />
          <Route path="/my-library" component={MyLibraryPage} />
        </Routes>
      </Router>
    </LibraryProvider>
  );
}

export default App;
