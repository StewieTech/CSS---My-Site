import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import recommendation from "./recommendation";


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [result, setResult] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSearch = async () => {
//     setIsLoading(true);
//     const response = await fetch(`/search?title=${searchTerm}`);
//     const data = await response.json();
//     setResult(data);
//     setIsLoading(false);
//   };

//   return (
//     <div className="App">
//       <h1>Movie Search</h1>
//       <input
//         type="text"
//         placeholder="Enter movie title"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//       {isLoading && <p>Loading...</p>}
//       {result && result.status === 'success' && (
//         <p>{result.message}</p>
//       )}
//       {result && result.status === 'failure' && (
//         <div>
//           <p>{result.message}</p>
//           <ul>
//             {result.recommendations.map((movie) => (
//               <li key={movie}>{movie}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }


function App() {
  const [movieTitle, setMovieTitle] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/search?title=${movieTitle}`);
    const data = await response.json();
    setSearchResult(data);
    setMovieTitle("");
  };

  return (
    <div className="App">
      <h1>Check if a Movie is on Netflix</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          placeholder="Enter a movie title"
        />
        <button type="submit">Search</button>
      </form>
      {searchResult && searchResult.status === "success" ? (
        <p>{searchResult.message}</p>
      ) : searchResult && searchResult.status === "failure" ? (
        <>
          <p>{searchResult.message}</p>
          <recommendation recommendations={searchResult.recommendations} />
        </>
      ) : (
        ""
      )}
    </div>
  );
}


export default App;
