import { useState } from "preact/hooks";

export default function Greetings({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting} ¡Gracias por tu visita!</h3>
      <button className="btn btn-primary" onClick={() => setGreeting(randomMessage())}>Nuevo Saludo</button>
    </div>
  );
}
