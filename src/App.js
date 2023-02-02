import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { AuthContext } from "./contexts/AuthContext";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import MyPets from "./components/MyPets";
import Create from "./components/Create";
import Details from "./components/Deatails";

import "./App.css";

function App() {
	const [user, setUser] = useState({
		accessToken: '',
		email: '',
		_id: '',
	});


	const login = (authData) => {
		setUser(authData);
	};	
	
	const onLogout = () => {
	
	};

	return (
		<AuthContext.Provider value={{user, login}}>
			<div className="App">
				<div id="container">
					<Header />

					<main id="site-content">
						<Routes>
							<Route path="/dashboard/*" element={<Dashboard />} />
							<Route path="/login" element={<Login />} />
							<Route path="/logout" element={<Logout />} />
							<Route path="/register" element={<Register />} />
							<Route path="/my-pets" element={<MyPets />} />
							<Route path="/create" element={<Create />} />
							<Route path="/details/:petId" element={<Details />} />
						</Routes>
					</main>

					<footer id="site-footer">
						<p>@PetMyPet</p>
					</footer>
				</div>
			</div>
		</AuthContext.Provider>
	);
}

export default App;
