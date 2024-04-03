import React, { useState } from "react";
import "./App.css";
import LoginForm from "./LoginForm/LoginForm";
import PizzaList from "./PizzaList/PizzaList";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = () => {
		setIsLoggedIn(true);
	};

	return (
		<div className="App">
			<header className="App-header">
				{!isLoggedIn ? (
					<LoginForm onLogin={handleLogin} />
				) : (
					<PizzaList />
				)}
			</header>
		</div>
	);
}

export default App;
