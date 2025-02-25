import { useState } from "react";
import ListRender from "./ListRender";

const ManagerData = () => {
  let someData = 10;

  console.log(someData);

  const [number, setNumber] = useState(10);
  console.log(number);
  return (
    <div>
      <p>Valor: {someData}</p>
      <button onClick={() => (someData = 15)}>Mudar Variável</button>

      <div>
        <p>Valor: {number}</p>

        <button onClick={() => setNumber(15)}>Mudar o State</button>
      </div>

      
    </div>
  );
};

export default ManagerData;
