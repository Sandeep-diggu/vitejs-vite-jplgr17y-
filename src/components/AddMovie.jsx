import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AddMovie() {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [posterImageUrl, setPosterImageUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMovie = { title, director, genre, releaseYear, synopsis, posterImageUrl };
    console.log('New Movie Data:', newMovie);
    alert('Movie added (hypothetically)!');
    // In a real application, you would send this data to your backend
    navigate('/'); // Navigate back to the Dashboard after submission
  };

  const handleCancel = () => {
    navigate('/'); // Navigate back to the Dashboard
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required style={inputStyle} />

        <label htmlFor="director">Director:</label>
        <input type="text" id="director" value={director} onChange={(e) => setDirector(e.target.value)} required style={inputStyle} />

        <label htmlFor="genre">Genre:</label>
        <select id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} style={selectStyle}>
          <option value="">Select Genre</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="fantasy">Fantasy</option>
          {/* Add more genres as needed */}
        </select>

        <label htmlFor="releaseYear">Release Year:</label>
        <input type="number" id="releaseYear" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} style={inputStyle} />

        <label htmlFor="synopsis">Synopsis:</label>
        <textarea id="synopsis" value={synopsis} onChange={(e) => setSynopsis(e.target.value)} style={textareaStyle} />

        <label htmlFor="posterImageUrl">Poster Image URL:</label>
        <input type="url" id="posterImageUrl" value={posterImageUrl} onChange={(e) => setPosterImageUrl(e.target.value)} style={inputStyle} />

        <div style={{ marginTop: '20px' }}>
          <button type="submit" style={buttonStyle}>Submit</button>
          <button type="button" onClick={handleCancel} style={cancelButtonStyle}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

const inputStyle = { padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' };
const textareaStyle = { ...inputStyle, minHeight: '100px' };
const selectStyle = { ...inputStyle };
const buttonStyle = { padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' };
const cancelButtonStyle = { padding: '10px 15px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' };

export default AddMovie;