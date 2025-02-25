import "./App.css";

import Pikachu from "./assets/Pikachu.png";
import ListRender from "./components/ListRender";
import ManagerData from "./components/ManagerData";
function App() {
  return (
    <div>
      <h1>Avançando em React</h1>

      {/* Imagem em public*/}
      <div>
        <img src="super-mario-mario-14.png" alt="Mario" width="150px" />
      </div>

      {/* Imagem em ASSETS*/}
      <div>
        <img src={Pikachu} alt="pikachu" width="150px" />
      </div>


      <ManagerData />
      <ListRender />
    </div>
  );
}

export default App;
