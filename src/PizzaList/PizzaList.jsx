import React from 'react';
import './PizzaList.css';

// Dados fictícios e temporários de cada pizza para serem exibidos na lista
const pizzasData = [
  {
    id: 1,
    name: "Pizza de Pepperoni",
    description: "Deliciosa pizza de pepperoni com queijo derretido.",
    price: 12.99
  },
  {
    id: 2,
    name: "Pizza de Frango com Catupiry",
    description: "Pizza de frango desfiado com catupiry cremoso.",
    price: 11.99
  },
];

function PizzaList() {
  return (
    <div className="pizza-list">
      {pizzasData.map((pizza, index) => (
        <div key={index} className="pizza-card">
          <h2 className="pizza-name">{pizza.name}</h2>
          <p className="pizza-description">{pizza.description}</p>
          <p className="pizza-price">${pizza.price}</p>
        </div>
      ))}
    </div>
  );
}

export default PizzaList;
