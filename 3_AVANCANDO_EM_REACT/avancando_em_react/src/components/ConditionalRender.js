import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name] = useState("João");

  const [age] = useState(15);

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é FALSOOO</p>}

      <h1>IF TERNÁRIO</h1>
      {name == "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome inválido</p>
        </div>
      )}

      {age == 13 ? (
        <h4>Parabens {name}, você tem 13 anos</h4>
      ) : (
        <h4>Olá {name}, Você não tem 13 anos</h4>
      )}
    </div>
  );
};

export default ConditionalRender;
