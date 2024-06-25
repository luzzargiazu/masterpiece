import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import '../../estilos/estilos del programa/Chatbot.css';

const apiKey = process.env.REACT_APP_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [chatInstance, setChatInstance] = useState(null);
  const bottomRef = useRef(null);

  const initialPrompt = `
    Eres el Encargado de resolver dudas para los usuarios.
    En esta pestaña tu trabajo sera resolver dudas a cerca de que acciones pueden realizar los usuarios.
    Tienen 6 servicios disponibles, pueden solicitar un turno haciendo click en alguno de ellos, completar con sus datos y asignar un día y horario disponible.
    Pueden ver los turnos vigentes desde las opciones de arriba a la derecha y el historial de turno.
  `;

  useEffect(() => {
    const initializeChat = async () => {
      const chat = model.startChat({
        history: [
          { role: "user", parts: [{ text: initialPrompt }] },
        ],
        generationConfig: { maxOutputTokens: 100 }
      });
      setMessages([{ text: '¡Hola! ¿En qué puedo ayudarte hoy?', sender: 'bot' }]);
      setChatInstance(chat);
    };

    initializeChat();
  }, []);

  const scrollToBottom = () => bottomRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    if (!loading) scrollToBottom();
  }, [loading]);

  const addMessageToHistory = (role, message) => {
    setMessages((prev) => [...prev, { text: message, sender: role }]);
  };

  const fetchData = async (userInput) => {
    if (!chatInstance) {
      console.error("Chat instance is not ready yet");
      return;
    }
    const result = await chatInstance.sendMessage(userInput);
    const response = await result.response;
    const botMessage = response.text();
    return botMessage;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (input.trim()) {
      setLoading(true);
      const userMessage = input.trim();
      addMessageToHistory("user", userMessage);
      const botResponse = await fetchData(userMessage);
      if (botResponse) {
        addMessageToHistory("bot", botResponse);
      }
      setInput('');
      setLoading(false);
    }
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : 'closed'}`}>
      <div className="chatbot">
        <div className="chatbot-header" onClick={() => setIsOpen(!isOpen)}>
          <h3>Chatbot</h3>
          <span className={`chevron ${isOpen ? 'open' : ''}`}>&#8964;</span>
        </div>
        <div className={`chatbot-body ${isOpen ? 'open' : ''}`} ref={bottomRef}>
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className={`chatbot-footer ${isOpen ? 'open' : ''}`}>
          <form className="chat-form" onSubmit={handleSubmit}>
            <textarea
              className="chat-form-text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
            />
            <button className="chat-form-button" type="submit" disabled={!input.trim()}>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
