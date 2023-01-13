import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AuthDetails from "./components/AuthDetails";

import "./App.css";

function App() {
	return (
		<div>
			<SignIn />
			<SignUp />
			<AuthDetails />
		</div>
	);
}

export default App;
