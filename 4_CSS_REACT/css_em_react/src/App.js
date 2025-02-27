import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      {/* CSS GLOBAL */}
      <h1>Olá React!</h1>
      {/* CSS DE COMPONENTE */}
      <MyComponent />
      <p>Este </p>
    </div>
  );
}

export default App;
