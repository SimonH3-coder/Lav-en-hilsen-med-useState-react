import { useState } from "react";

export function Taellercomponent() {
  const [taeller, setTaeller] = useState(0);
  return (
    <div>
      <p>Du klikker på knappen {taeller} antal gange</p>
      <button onClick={() => setTaeller(taeller + 1)}>Klik her på knappen</button>
    </div>
  );
}
