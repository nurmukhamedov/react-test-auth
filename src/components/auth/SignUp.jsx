import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signUp = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((useCredentials) => {
				console.log(useCredentials);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="sign-in-container">
			<form onSubmit={signUp}>
				<h1>Create an Account</h1>
				<input
					type="email"
					placeholder="Enter you email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Enter you password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default SignUp;
