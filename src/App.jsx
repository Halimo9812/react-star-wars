//import { useState } from 'react'//
import React, { useEffect, useState } from 'react';
import StarShipCard from './StarShipCard'
import axios from 'axios';
import './App.css'



const App = () => {
  const [starships, setStarships] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/starships/');
        setStarships(response.data.results); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStarships();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>STAR WARS STARSHIPS</h1>
      <div className="starship-list">
        {starships.map(starship => (
          <StarShipCard key={starship.name} starship={starship} />
        ))}
      </div>
    </div>
  );
};

export default App;