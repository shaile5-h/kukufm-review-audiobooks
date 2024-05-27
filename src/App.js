import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AudiobookList from './components/AudiobookList';
import AudiobookDetails from './components/AudiobookDetails';
import ReviewForm from './components/ReviewForm';
import Login from './components/Login'; // Import the Login component
import './App.css';

const sampleAudiobooks = [
  {
    _id: "1",
    title: "Sample Audiobook 1",
    author: "Author 1",
    coverImage: "images/img1.png",
    description: "Description of Audiobook 1",
    genre: "Fiction",
    rating: 1,
    reviews: [],
  },
  {
    _id: "2",
    title: "Sample Audiobook 2",
    author: "Author 2",
    coverImage: "images/img2.png",
    description: "Description of Audiobook 2",
    genre: "Mystery",
    rating: 2,
    reviews: [],
  },
  {
    _id: "3",
    title: "Sample Audiobook 3",
    author: "Author 3",
    coverImage: "images/img3.png",
    description: "Description of Audiobook 3",
    genre: "Fiction",
    rating: 3,
    reviews: []
  },
  {
    _id: "4",
    title: "Sample Audiobook 4",
    author: "Author 4",
    coverImage: "images/img4.png",
    description: "Description of Audiobook 4",
    genre: "Non-Fiction",
    rating: 4,
    reviews: []
  },
  {
    _id: "5",
    title: "Sample Audiobook 5",
    author: "Author 5",
    coverImage: "images/img5.png",
    description: "Description of Audiobook 5",
    genre: "Fiction",
    rating: 5,
    reviews: []
  },
  {
    _id: "6",
    title: "Sample Audiobook 6",
    author: "Author 6",
    coverImage: "images/img6.png",
    description: "Description of Audiobook 6",
    genre: "Non-Fiction",
    rating: 5,
    reviews: []
  },
  {
    _id: "7",
    title: "Sample Audiobook 7",
    author: "Author 7",
    coverImage: "images/img7.png",
    description: "Description of Audiobook 7",
    genre: "Non-Fiction",
    rating: 5,
    reviews: []
  },
  {
    _id: "8",
    title: "Sample Audiobook 8",
    author: "Author 8",
    coverImage: "images/img8.png",
    description: "Description of Audiobook 8",
    genre: "Non-Fiction",
    rating: 4,
    reviews: []
  },
  {
    _id: "9",
    title: "Sample Audiobook 9",
    author: "Author 9",
    coverImage: "images/img9.png",
    description: "Description of Audiobook 9",
    genre: "Non-Fiction",
    rating: 5,
    reviews: []
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter audiobooks based on the search term
  const filteredAudiobooks = sampleAudiobooks.filter(audiobook =>
    audiobook.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <div className="header-left">
            <img src="logo.png" alt="KukuReview" className="logo" />
            <h1>KukuReview</h1>
          </div>
          <div className="header-center">
            <input
              type="text"
              placeholder="Search for an audiobook..."
              className="search-bar"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="header-right">
            <nav>
              <Link to="/">Home</Link>
              <Link to="/login">Log in</Link> {/* Link the login button */}
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<AudiobookList audiobooks={filteredAudiobooks} />} />
          <Route path="/audiobooks/:id" element={<AudiobookDetails audiobooks={sampleAudiobooks} />} />
          <Route path="/audiobooks/:id/review" element={<ReviewForm />} />
          <Route path="/login" element={<Login />} /> {/* Route for the Login page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;