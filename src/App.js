import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './components/Home/Home';
import About from './components/About/About';
import ForgotPassword from './components/Auth/ForgotPassword';

import './App.css';


const App = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
		});

		return unsubscribe;
	}, []);

	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home user={user} />} />
					<Route path="/forgotPassword" element={<ForgotPassword />} />
					<Route path="/about" element={user ? <About /> : <Navigate to="/login" />} />
					<Route path="/login" element={user ? <Navigate to="/about" /> : <Login />} />
					<Route path="/register" element={user ? <Navigate to="/login" /> : <Register />} />
				</Routes>
			</BrowserRouter>
		</div>

	);
};

export default App;
