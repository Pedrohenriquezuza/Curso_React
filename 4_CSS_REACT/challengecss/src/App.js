import "./App.css";
import Cars from "./components/Cars";

function App() {
  const carDetails = [
    { id: 1, name: "mitsubshi", color: "black", km: 450 },
    { id: 2, name: "Ferrari", color: "yellow", km: 20033 },
    { id: 3, name: "BMW", color: "blue", km: 7230 },
    { id: 4, name: "Lamborghini", color: "green", km: 1000 },
  ];

  return (
    <div>
      <h1>Lista De Carrões</h1>
      {carDetails.map((car) => (
        <Cars
          key={car.id}
          name={car.name}
          color={car.color}
          km={car.km + "KM/h"}
        />
      ))}
    </div>
  );
}

export default App;
