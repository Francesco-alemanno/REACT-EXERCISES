import { useState } from "react";
import { useWhatsapp } from "./useWhatsapp";

export function Whatsapp() {
  const { error, messaggio, sent, ricevuti, scrivendo, handleChange, handleSent, handleKeyPress } = useWhatsapp();

  return (
    <div className="chat-container">
      <div className="utente">
        <h3>Carlo</h3>
        {scrivendo && <p>{scrivendo}</p>}
      </div>

      <div className="messaggi">
        {sent.map((msg, index) => (
          <div key={index}>
            <div className="messaggi-inviati">
              <p className="inviati">{msg}</p>
            </div>
            {ricevuti[index] && (
              <div className="messaggi-ricevuti">
                <p className="ricevuti">{ricevuti[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <input
        type="text"
        value={messaggio}
        onChange={handleChange}
        placeholder="Scrivi il messaggio"
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSent}>✔️</button>

      {/* Visualizzazione errori */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
