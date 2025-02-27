import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title"
function App() {
  const n = 1;
  const [name] = useState("Matheus");
  const redTitle = true;

  return (
    <div className="App">
      {/* CSS GLOBAL */}
      <h1>Olá React!</h1>
      {/* CSS DE COMPONENTE */}
      <MyComponent />
      {/* INLINE CSS */}
      <p
        style={{
          color: "blue",
          padding: "10px",
          fontSize: "21px",
          textDecoration: "underline",
        }}
      >
        Este elemento foi estilizado de forma inline
      </p>

      {/* CSS INLINE DINÂMICO - COM CONDICIONAL */}
      <h2 style={n > 10 ? { color: "red" } : { color: "green" }}>
        CSS DINÂMICO
      </h2>
      <h2
        style={
          name === "Matheus"
            ? { color: "purple", backgroundColor: "black" }
            : null
        }
      >
        Teste nome
      </h2>

      {/* Classe dinâmica*/}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este titulo vai ter uma classe de estilização
      </h2>

      {/* CSS MODULES*/}
      <Title />
      
    </div>
  );
}

export default App;
