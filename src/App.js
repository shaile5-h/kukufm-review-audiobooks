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
    coverImage: "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/55fd17366fbd4d599ce5e474b2314ae6.png",
    description: "Description of Audiobook 1",
    genre: "Fiction",
    rating: 1,
    reviews: [],
  },
  {
    _id: "2",
    title: "Sample Audiobook 2",
    author: "Author 2",
    coverImage: "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/bec56fc02eae4a3cbfe7d9596eab1335.jpeg",
    description: "Description of Audiobook 2",
    genre: "Mystery",
    rating: 2,
    reviews: [],
  },
  {
    _id: "3",
    title: "Sample Audiobook 3",
    author: "Author 3",
    coverImage: "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/7ee2df007d7a4961947bd5b76e8e469d.png",
    description: "Description of Audiobook 3",
    genre: "Fiction",
    rating: 3,
    reviews: []
  },
  {
    _id: "4",
    title: "Sample Audiobook 4",
    author: "Author 4",
    coverImage: "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/c164ccfcc3074d919c0f69075084fdd0.png",
    description: "Description of Audiobook 4",
    genre: "Non-Fiction",
    rating: 4,
    reviews: []
  },
  {
    _id: "5",
    title: "Sample Audiobook 5",
    author: "Author 5",
    coverImage: "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/9c71c6c1cc8844f9b692a466c116e2e0.png",
    description: "Description of Audiobook 5",
    genre: "Fiction",
    rating: 5,
    reviews: []
  },
  {
    _id: "6",
    title: "Sample Audiobook 6",
    author: "Author 6",
    coverImage: "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/3a4cd3d180a4435794ef467428e3f848.png",
    description: "Description of Audiobook 6",
    genre: "Non-Fiction",
    rating: 5,
    reviews: []
  },
  {
    _id: "7",
    title: "Sample Audiobook 7",
    author: "Author 7",
    coverImage: "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/cu_icons/10e01b8d24c545bdb5968ee2bf4b12e3.jpg",
    description: "Description of Audiobook 7",
    genre: "Non-Fiction",
    rating: 5,
    reviews: []
  },
  {
    _id: "8",
    title: "Sample Audiobook 8",
    author: "Author 8",
    coverImage: "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/dd1f46d95dcd4692923863a87d035b37.jpg",
    description: "Description of Audiobook 8",
    genre: "Non-Fiction",
    rating: 4,
    reviews: []
  },
  {
    _id: "9",
    title: "Sample Audiobook 9",
    author: "Author 9",
    coverImage: "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/e33cb0f1b2134801b4d4ad93f2ccf95a.jpg",
    description: "Description of Audiobook 9",
    genre: "Non-Fiction",
    rating: 5,
    reviews: []
  },
  {
    _id: "10",
    title: "Sample Audiobook 10",
    author: "Author 10",
    coverImage: "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/515b3c7ab8284d76a415a4f48e6269c4.png",
    description: "Description of Audiobook 10",
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
            <img src="https://cdn3.vectorstock.com/i/1000x1000/27/72/customer-reviews-icon-flat-design-vector-6972772.jpg" alt="KukuReview" className="logo" />
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