import React, { useState } from "react";
import useSWR from "swr";

// Funzione fetcher per SWR
const fetcher = (url) => fetch(url).then((res) => res.json());

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input) return;

    setMessages([...messages, { text: input, sender: "user" }]);

    const { data, error } = useSWR(
      "https://mocki.io/v1/793a02fb-8e48-4d67-a435-d9888cbaac94", // Endpoint mocki.io
      fetcher
    );

    if (error) {
      console.error("Errore nel recupero della risposta dal bot.");
    }

    if (data) {
      
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: data.message, sender: "bot" },
      ]);
    }

   
    setInput("");
  };

  return (
    <div>
      <div className="chat-window">
        <div className="messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={msg.sender}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Scrivi un messaggio"
        />
        <button onClick={handleSendMessage}>Invia</button>
      </div>
    </div>
  );
};

export default ChatApp;
