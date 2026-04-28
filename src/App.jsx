import { useState } from 'react'
import './App.css'
import ChatbotIcon from './components/ChatbotIcon'
import ChatForm from './components/ChatForm'
import ChatMessage from './components/ChatMessage'

function App() {

  const [chatHistory, setChatHistory] = useState([])

  const generateBotResponse = async (history) => {

    const updateHistory = (text) => {
      setChatHistory(prev => [
        ...prev.filter(msg => msg.text !== "thinking"),
        { role: "model", text }
      ]);
    };

    const messages = history.map(({ role, text }) => ({
      role: role === "model" ? "assistant" : "user",
      content: text
    }));

    try {
      const response = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3",
          messages: messages,
          stream: false
        })
      });

      const data = await response.json();

      if (!response.ok) throw new Error("Errore Ollama");

      const apiResponseText = data.message.content.trim();

      updateHistory(apiResponseText);

    } catch (error) {
      console.log(error);
      updateHistory("Errore nella risposta 😅");
    }
  };

  const handleBotResponse = (history) => {
  console.log("Wrapper chiamato");
  console.log("FUNZIONE:", generateBotResponse);
  generateBotResponse(history);
};

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
            generateBotResponse={handleBotResponse}
            chatHistory={chatHistory}
          />
        </div>

      </div>
    </div>
  )
}

export default App
