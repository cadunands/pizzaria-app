import React, { useState } from "react";
import "./Styles.css";

function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email-line"
						value={email}
						onChange={handleEmailChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={handlePasswordChange}
						required
					/>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

export default LoginForm;
