import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Forms em React</h2>
      <MyForm user={{name: "Pedro", email: "pedro@gmail.com", bio: "Desempregado, 17 anos e Gosto de jogos", role:"Usuário"}}/>
    </div>
  );
}

export default App;
