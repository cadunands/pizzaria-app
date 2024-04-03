import React from "react";
import "./PizzaList.css";

// Dados fictícios e temporários de cada pizza para serem exibidos na lista
const pizzasData = [
	{
		id: 1,
		name: "Pizza de Pepperoni",
		description: "Deliciosa pizza de pepperoni com queijo derretido.",
		price: 12.99,
	},
	{
		id: 2,
		name: "Pizza de Frango com Catupiry",
		description: "Pizza de frango desfiado com catupiry cremoso.",
		price: 11.99,
	},
];

function PizzaList({ addToCart }) {
	const handleClick = (pizza) => {
		addToCart(pizza);
	};

	return (
		<div className="pizza-list">
			{pizzasData.map((pizza, index) => (
				<button
					key={index}
					className="pizza-card"
					onClick={() => handleClick(pizza)}
				>
					<h2 className="pizza-name">{pizza.name}</h2>
					<p className="pizza-description">{pizza.description}</p>
					<p className="pizza-price">${pizza.price}</p>
				</button>
			))}
		</div>
	);
}

export default PizzaList;
