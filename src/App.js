// src/App.js
import React, { useState } from 'react';
import './App.css';
import ChatBox from './components/ChatBox';
import ChatInput from './components/ChatInput';

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message, sender) => {
    setMessages(prevMessages => [...prevMessages, { text: message, sender }]);
  };

  return (
    <div className="App">
      <div className='navbar'></div>
      <h1>Malayalam ChatBot</h1>
      <div className="chat-container">g
        <ChatBox messages={messages} />
        <ChatInput addMessage={addMessage} />
      </div>
    </div>
  );
}

export default App;
