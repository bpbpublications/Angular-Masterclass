import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.addEventListener(
      "message",
      (event) => {
        const eventData = event.data;
        if (eventData && eventData.type === "SET_MESSAGE") {
          const data = eventData.data;
          setMessage(data.message);
        }
      },
      false,
    );
  }, []);

  const sendMessage = () => {
    const message = "Hello from React app!";
    window.parent.postMessage(
      {
        type: "SET_MESSAGE",
        data: { message },
      },
      "*",
    );
  }

  return (
    <div className="App">
      <h1>This is React app</h1>
      <h2>Message received: { message }</h2>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
