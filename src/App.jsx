import { useState } from 'react'
import './App.css'
import ChatbotIcon from './components/ChatbotIcon'
import ChatForm from './components/ChatForm'
import ChatMessage from './components/ChatMessage'

function App() {

  const [chatHistory, setChatHistory] = useState([])

  return (
    <div className="container">
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <div className="logo-text">
              <ChatbotIcon />
              <h2>Chatbot</h2>
              <img className='arrow-symbol' src="/arrow-down-black.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there!! <br /> How can i help you today? 🔥
            </p>
          </div>
          {chatHistory.map((chat, index) => (
            <ChatMessage 
              key={index}
              chat={chat}
            />
          ))}
        </div>

        <div className="chat-footer">
          <ChatForm 
            setChatHistory={setChatHistory}
          />
        </div>

      </div>
    </div>
  )
}

export default App
