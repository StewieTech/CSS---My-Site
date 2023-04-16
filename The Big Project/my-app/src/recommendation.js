import React, { useState, useEffect } from "react";

function Recommendation({ movieTitle }) {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    async function fetchRecommendations() {
      const response = await fetch(`/recommendations?title=${movieTitle}`);
      const data = await response.json();
      if (data.status === "success") {
        setRecommendations(data.recommendations);
      } else {
        console.log("Failed to fetch recommendations");
      }
    }
    fetchRecommendations();
  }, [movieTitle]);

  return (
    <div>
      <h2>Recommendations for {movieTitle}</h2>
      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index}>{recommendation}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendation;
