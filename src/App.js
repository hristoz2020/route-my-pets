import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import * as authService from './services/authService';
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import MyPets from "./components/MyPets";
import Create from "./components/Create";

import "./App.css";

function App() {
    const [userInfo, setUserInfo] = useState({isAutenticated:false, username: ''});

    useEffect(() => {
        let user = authService.getUser();

        setUserInfo({
            isAutenticated: Boolean(user),
            user: user
        })
    }, []);

    const onLogin = (username) => {
        setUserInfo({
            isAutenticated: true,
            user: username
        })
    }

	return (
		<div className="App">
			<div id="container">
				<Header {...userInfo} />

				<main id="site-content">
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/login' element={<Login onLogin={onLogin}/>} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/my-pets' element={<MyPets />} />
                        <Route path='/create' element={<Create />} />
                    </Routes>
                </main>

				<footer id="site-footer">
					<p>@PetMyPet</p>
				</footer>
			</div>
		</div>
	);
}

export default App;
