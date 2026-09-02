import { useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState("Simplicity is the soul of efficiency.");
  const [author, setAuthor] = useState("Austin Freeman");

  return (
    <div className="app-container">
      <div className="quote-card">
        <h1 className="title">Quote of the Day</h1>
        <p className="quote-text">"{quote}"</p>
        <p className="quote-author">- {author}</p>
        
        <div className="env-info">
          <p><strong>Environment:</strong> {import.meta.env.VITE_NODE_ENV || 'local-development'}</p>
          <p><strong>API URL:</strong> {import.meta.env.VITE_API_URL || 'http://localhost:3000'}</p>
        </div>
      </div>
    </div>
  )
}

export default App
