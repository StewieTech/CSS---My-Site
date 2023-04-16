import React, { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleSearch = () => {
    fetch(`/search?title=${searchTerm}`)
      .then(res => res.json())
      .then(data => {
        setStatus(data.status);
        setMessage(data.message);
        if (data.status === 'failure') {
          // if movie is not available on Netflix, get recommendations
          fetch(`/recommendations?title=${searchTerm}`)
            .then(res => res.json())
            .then(data => {
              setRecommendations(data.recommendations);
            });
        }
      });
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {status === 'success' && <p>{message}</p>}
      {status === 'failure' && <p>{message}</p>}
      {recommendations.length > 0 && (
        <div>
          <h2>Recommendations:</h2>
          <ul>
            {recommendations.map(movie => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
