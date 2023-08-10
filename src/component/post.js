import React, { useState, useEffect } from 'react';
import './post.css';
import Like from './photos/like.png';
import Liked from './photos/liked.png';
import Heart from './photos/heart.png'
import UserProfile from './photos/Profile_icon.png';

function Post() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [liked, setLiked] = useState([]);
  const [likeCounts, setLikeCounts] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/books/');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setBooks(jsonData);
        setLoading(false);
        setLiked(jsonData.map(() => false));
        setLikeCounts(jsonData.map((book) => book.like_count));
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleLikeClick = (index) => {
    const newLiked = [...liked];
    const newLikeCounts = [...likeCounts];

    if (newLiked[index]) {
      newLikeCounts[index] -= 1;
    } else {
      newLikeCounts[index] += 1;
    }

    newLiked[index] = !newLiked[index];

    setLikeCounts(newLikeCounts);
    setLiked(newLiked);
  };

  return (
    <div className="card-container">
      {books.map((book, index) => (
        <div key={book.id} className="card small-card">
          <div className="card-body">
            <img src={book.cover} alt={book.title} className="card-img" />

            <div className='detail-profile'>
              <div className='user-info'>
                <img src={UserProfile} alt='userprofile' />

                <div className='detail-name'>
                  <p className='name-user'>Test User</p>
                  <p className="card-text">{book.title}</p>
                </div>
              </div>

              <div className='love-btn d-flex'>
                <button
                  className='like-button'
                  onClick={() => handleLikeClick(index)}>
                  {liked[index] ? (<img src={Heart} alt='like' />)
                    : (<img src={Like} alt='like' />)}
                </button>
                <div className='like-result'>
                  {likeCounts[index]}
                </div>
              </div>

            </div>

            <div className='description-text '>
              <p className="card-text description">{book.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
