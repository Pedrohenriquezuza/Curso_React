import { useState } from "react";
import "./App.css";

import Pikachu from "./assets/Pikachu.png";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManagerData from "./components/ManagerData";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

function App() {
  const name = "Matheus";
  const [userName] = useState("Maria Linda");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "BMW", color: "Branca", newCar: false, km: 1500 },
    { id: 3, brand: "Renault", color: "Preta", newCar: false, km: 10258 },
  ];
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
        <CarDetails brand={car.brand} color={car.color} km={car.km + " Km/h"} newCar={car.newCar}/>
      ))}
    </div>
  );
}

export default App;
