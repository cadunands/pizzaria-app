import React, { useState } from "react";
import "./App.css";
import LoginForm from "./LoginForm/LoginForm";
import PizzaList from "./PizzaList/PizzaList";
import Cart from "./Cart";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	const handleLogin = () => {
		setIsLoggedIn(true);
	};

	const addToCart = (pizza) => {
		const existingCartItemIndex = cartItems.findIndex(
			(item) => item.pizza.id === pizza.id
		);

		if (existingCartItemIndex !== -1) {
			const updatedCartItems = [...cartItems];
			updatedCartItems[existingCartItemIndex].quantity++;
			setCartItems(updatedCartItems);
		} else {
			setCartItems([...cartItems, { pizza: pizza, quantity: 1 }]);
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				{!isLoggedIn ? (
					<LoginForm onLogin={handleLogin} />
				) : (
					<>
						<PizzaList addToCart={addToCart} />
						<Cart cartItems={cartItems} />
					</>
				)}
			</header>
		</div>
	);
}

export default App;
