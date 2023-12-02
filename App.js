// client/src/App.js
import React, { useState } from 'react';
 
function getRandomResponse() {
  const responses = [
    'Im here to help!',
    'What can I do for you today?',
    'Ask me anything!',
    'Im your friendly chatbot.',
    'How can I assist you?',
  ];
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}
 
function App() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
 
  const handleQuery = async () => {
    try {
      // For testing, generate a random response
      const randomResponse = getRandomResponse();
      setResponse(randomResponse);
      setError('');
    } catch (error) {
      console.error('Error fetching response:', error.message);
      setResponse('');
      setError('Error fetching response. Please try again.');
    }
  };
 
  return (
<div>
<h1>Chatbot WebApp</h1>
<div>
<input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
<button onClick={handleQuery}>Submit</button>
</div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {response && (
<div>
<p>User: {query}</p>
<p>Chatbot: {response}</p>
</div>
      )}
</div>
  );
}
 
export default App;