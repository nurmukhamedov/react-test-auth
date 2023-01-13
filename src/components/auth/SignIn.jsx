import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((useCredentials) => {
				console.log(useCredentials);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="sign-in-container">
			<form onSubmit={signIn}>
				<h1>Log in to your account</h1>
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
				<button type="submit">Log In</button>
			</form>
		</div>
	);
};

export default SignIn;
