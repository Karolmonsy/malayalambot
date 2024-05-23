// src/components/ChatInput.js
import React, { useState } from 'react';
import './ChatInput.css';

const ChatInput = ({ addMessage }) => {
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      addMessage(input, 'user');
      setIsSending(true);
      setInput('');

      // Simulate bot response after a delay
      setTimeout(() => {
        addMessage('This is a bot response.', 'bot');
        setIsSending(false);
      }, 1000);
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && !isSending && handleSend()}
        placeholder="Type a message..."
      />
      <button onClick={handleSend} disabled={isSending}>
        Send
      </button>
    </div>
  );
};

export default ChatInput;
