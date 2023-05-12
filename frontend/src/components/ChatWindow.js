import React, { useState, useEffect } from "react";
/** Importieren von React und der Hooks "useState" sowie "useEffect"
    Diese Hooks werden benötigt, um den Zustand und das Verhalten (der Nachrichten) zu speichern. */
import "./Chat.css";
import {getMessages, sendMessage} from "./ChatAPI";
/** 2Importieren API-Funktionen getMessages und sendMessages.
 *  Diese werden benötigt, um Abfragen an die Datenbank auszuführen. */

function ChatWindow() {

    const [input, setInput] = useState("");
  /** Die Variable input enthält den string-Inhalt einer Nachricht.
      setInput wird von useState zurückgegeben, damit man input mit dem string-Inhalt (aus der Eingabe) ersetzt. */

    const [messages, setMessages] = useState([
          /** Die Variable messages stellt mit useState ein leeres Array dar, welches im
           * Chat eine Liste von Nachrichten enthält.
      setMessages wird von useState zurückgegeben, damit man die Nachrichten im Chat aktualisieren kann. */
        {
            name: "Dominik",
            content: "Hallo, wie geht es dir?",
        },
        {
            content: "Hallo Domi, mir gehts gut.",
        },
    ]);
  /** Die Variable messages stellt mit useState ein leeres Array dar, welches im Chat eine Liste von Nachrichten enthält.
      setMessages wird von useState zurückgegeben, damit man die Nachrichten im Chat aktualisieren kann. */

    const handleSend = async (event) => {
    /** handleSend stellt das Versenden einer Nachricht dar.
     *  Ablauf: API-Aufruf an Server, um Nachricht zu speichern.
     *  Anschließend wird der Chat neu geladen, um die Nachricht anzuzeigen. */
    event.preventDefault();
    /** Unterdrücken des Standard-Verhaltens, hier: Neuladen des Chats */
    await sendMessage(input);
    setInput("");
    /** Erst nachdem eine Nachricht erfolgreich gesendet wurde, wird setText für neue Nachrichten geleert. */
    const messages = await getMessages();
    setMessages(messages);
    /** Abrufen des aktualisierten Chat-Verlaufs */
    };

    return (
        <div className="chat_window">
            <p className="chatWindow_timestamp">Du hast mit Dominik am 10/05/2023 gematcht!</p>
            {messages.map((message) => (
            // Darstellung des Chat-Verlaufs
            // Die map-Funktion iteriert über das message-Array und erstellt für jede Nachricht
            // ein neues div mit der entsprechenden id.
            // HIER FÜGEN WIR EINE LOGIK EIN, DIE ERKENNT OB ES EINE EIGENE NACHRICHT IST
                message.name ? (
                    <div className="chatWindow_message">
                        <div className="chatWindow_message">
                        <p className="chatWindow_content">{message.content}</p>
                        </div>
                    </div>
                ) : (
                        <div className="chatWindow_message">
                        <p className="chatWindow_contentUser">{message.content}</p>
                        </div>
                )
            ))}

            <form className="chatWindow_input">
                <input value={input}
                       onChange={e => setInput(e.target.value)}
                        // Bei einer Änderung des Eingabetextes wird die setInput Funktion aufgerufen, um
                        // den Inhalt zu aktualisieren.
                       className="chatWindow_inputField"
                       placeholder="Schreib eine Nachricht..."
                       type="text"/>
                <button onClick={handleSend}
                        /* Wenn User auf den Button klickt, wird diese handleSend ausgelöst. */
                        type="submit"
                        className="chatWindow_inputButton">Senden</button>
            </form>
        </div>
    );
}

export default ChatWindow