import React, { useState } from 'react';

function CreatePotion() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/potions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, price: parseFloat(price), description }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Potion created successfully!');
        setName('');
        setPrice('');
        setDescription('');
      } else {
        setMessage(`Error creating potion: ${data.message || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error('Error creating potion:', error);
      setMessage('Failed to create potion.');
    }
  };

  return (
    <div>
      <h2>Create New Potion</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Potion</button>
      </form>
    </div>
  );
}

export default CreatePotion;