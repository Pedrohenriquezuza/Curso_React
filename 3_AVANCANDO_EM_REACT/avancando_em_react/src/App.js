import { useState } from "react";
import "./App.css";

import Pikachu from "./assets/Pikachu.png";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManagerData from "./components/ManagerData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";
function App() {
  //const name = "Matheus";
  const [userName] = useState("Maria Linda");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "BMW", color: "Branca", newCar: false, km: 1500 },
    { id: 3, brand: "Renault", color: "Preta", newCar: false, km: 10258 },
  ];

  function showMessage() {
    console.log("Executando o Evento do componente pai");
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const users = [
    {id:1, name: "Pedro", age: 14, job: "Programador"},
    {id:2, name: "Maria", age: 20, job: "Advogada"},
    {id:3, name: "Eduardo", age: 11, job: "Gamer"},
    {id:4, name: "Clara", age: 19, job: "Reporter"},
  ]

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
      <ConditionalRender />
      {/* Usando Props*/}
      <ShowUserName name={userName} age="17" />
      {/*Destructuring*/}
      <CarDetails
        name="Gol"
        brand="VW"
        km={100000}
        color="Vermelho"
        newCar={false}
      />
      {/* Reaproveitando componentes */}
      <CarDetails
        name="BMW X5"
        brand="BMW"
        km={4500}
        color="Azul"
        newCar={false}
      />
      <CarDetails
        name="Mustang"
        brand="Ford"
        km={0}
        color="Cinza"
        newCar={true}
      />

      {/*Loops em arrays de Objetos*/}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km + " Km/h"}
          newCar={car.newCar}
        />
      ))}

      {/* Fragment */}
      <Fragment />
      <Container myValue="testing">
        <p>Este é o conteúdo</p>
      </Container>
      <Container myValue="Olá Container">
        <h5>Testando Container</h5>
      </Container>

      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/*State lift*/}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>

      {/* Desafio */}
      {users.map((user) => (
        <UserDetails key={user.id} name={user.name} age={user.age} job={user.job}/>
      ))}
    </div>
  );
}

export default App;
