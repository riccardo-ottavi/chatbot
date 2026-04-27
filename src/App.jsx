import { useState } from 'react'
import './App.css'
import ChatbotIcon from './components/ChatbotIcon'
import ChatForm from './components/ChatForm'

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
          <div className="message user-message">
            <p className="message-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae aspernatur optio facere neque maxime maiores explicabo aliquam sunt ullam nihil at distinctio corporis rem doloremque mollitia, consequatur vero officiis.
            </p>
          </div>
        </div>

        <div className="chat-footer">
          <ChatForm />
        </div>

      </div>
    </div>
  )
}

export default App
