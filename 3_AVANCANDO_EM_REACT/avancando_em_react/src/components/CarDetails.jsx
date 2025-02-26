import React from "react";

const CarDetails = ({ name, brand, km, color, newCar }) => {
  return (
    <div>
      <h2>Detalhes do carro {name}</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && (
        <p>
          <strong>Este Carro é NOVO!</strong>
        </p>
      )}
    </div>
  );
};

export default CarDetails;
