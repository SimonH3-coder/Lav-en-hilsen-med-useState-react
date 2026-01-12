import { useState } from "react";

export function Counter() {
  const [navn, setNavn] = useState("");

  return (
    <div>
      <p>Send en hilsen til {navn}</p>

      <input type="text" placeholder="Indtast navn" onChange={(event) => setNavn(event.target.value)} />
    </div>
  );
}
