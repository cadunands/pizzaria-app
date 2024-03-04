import React, { useState } from "react";
import "./loginForm.css";


const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form className="login-form" onSubmit={handleSubmit}>
			<label htmlFor="username">Usuário:</label>
			<input
				type="text"
				id="username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>

			<label htmlFor="password">Senha:</label>
			<input
				type="password"
				id="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>

			<button type="submit">Login</button>
		</form>
	);
};

export default LoginForm;
