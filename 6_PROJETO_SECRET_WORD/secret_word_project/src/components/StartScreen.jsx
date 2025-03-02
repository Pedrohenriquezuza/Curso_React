import "./StartScreen.css";

const StartScreen = ({startGame}) => {
  return (
    <div className="startProject">
      <div className="startGame">
        <h1>Secret Word</h1>
        <p>Clique no botão abaixo para começar</p>
        <button onClick={startGame}>Começar o jogo</button>
      </div>

      <div>
        <p className="copyright">
          &copy; 2025 Secret Word. Desenvolvido por Pedro Zuza. Todos os
          direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default StartScreen;
