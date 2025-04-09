import React, { useState, useEffect } from 'react';
import BACKEND_URL from '../config';
function PotionList() {
  const [potions, setPotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(BACKEND_URL+'potions') // Adjusted the endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPotions(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading potions...</p>;
  }

  if (error) {
    return <p>Error fetching potions: {error.message}</p>;
  }

  return (
    <div style={styles.container}>
      <h2>Available Potions</h2>
      <div style={styles.cardContainer}>
        {potions.map((potion) => (
          <div key={potion._id} style={styles.card}>
            <img
              src={potion.imageURL} // Assuming imageURL is part of your potion data
              alt={potion.name}
              style={styles.image}
            />
            <h3>{potion.name}</h3>
            <p>${potion.price.toFixed(2)}</p>
            <p>{potion.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Styles for the component
const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#1c1d25', // Set background color for the content area
    marginTop: '60px', // Adjust for the navbar height (you can tweak this)
    minHeight: '100vh', // Ensure full viewport height for content area
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap', // Allows wrapping of cards to the next line
    justifyContent: 'space-around', // Centers the cards and spaces them evenly
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px',
    width: '220px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  },
};

export default PotionList;
