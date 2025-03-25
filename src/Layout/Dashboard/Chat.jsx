import React, { useState, useEffect, useRef } from "react";
import { FiSend } from "react-icons/fi";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: "ype and scrambled it to make a type specimen book.It has sured not only five centuries, but also the leapinto electronic typesetg, remaining essentially unchanged. It was popularised in",
      sender: "bot",
    },
    {
      text: "ype and scrambled it to make a type specimen book.It has sured not",
      sender: "user",
    },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // Scroll to the bottom of the chat when a new message is added
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Prevent sending empty messages

    // Add user message to the chat
    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput(""); // Clear the input field

    // Simulate a bot response (you can replace this with an API call)
    setTimeout(() => {
      const botResponse = {
        text: "I'm a simple chatbot! How can I help you today?",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  return (
    <div className="p-6 bg-[#1D1B22] text-white h-full flex flex-col">
      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            } mb-4`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg ${
                message.sender === "user"
                  ? "bg-[#A11ED4] text-white"
                  : "bg-[#2C2933] text-gray-300"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSendMessage} className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything"
          className="flex-1 p-3 bg-[#2C2933] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A11ED4] text-white placeholder-gray-500"
        />
        <button
          type="submit"
          className="p-3 bg-[#A11ED4] text-white rounded-lg hover:bg-[#8F1CB5] transition-colors"
        >
          <FiSend />
        </button>
      </form>
    </div>
  );
};

export default Chatbot;