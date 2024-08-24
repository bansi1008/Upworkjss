import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dogImage, setDogImage] = useState(''); // State to store dog image URL

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Fetch random dog image from Dog CEO's Dog API
    try {
      const dogResponse = await fetch('https://dog.ceo/api/breeds/image/random');
      if (dogResponse.ok) {
        const dogData = await dogResponse.json();
        setDogImage(dogData.message); // Store the dog image URL in state
        console.log('Dog image URL:', dogData.message);
      } else {
        console.error('Failed to fetch dog image');
      }
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }

    // Submit form data to your PHP backend
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);

    try {
      const response = await fetch('http://localhost/react_form/submit_form.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.text();
        console.log(result); // Handle success response
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setName('');
    setEmail('');
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', padding: '20px' }}>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>

      {/* Display dog image if available */}
      {dogImage && (
        <div style={{ marginTop: '20px' }}>
          <h3>Here's a Random Dog!</h3>
          <img src={dogImage} alt="Random Dog" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
      )}
    </div>
  );
}

export default Form;
