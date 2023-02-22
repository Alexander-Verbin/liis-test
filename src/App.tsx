import React from 'react';
import { useSelector } from 'react-redux';
import {Login} from "./components/Login/Login";
import { getAuthState } from './store/auth/authSlice';
import {MainPage} from "./components/MainPage/MainPage";

const App: React.FC = () =>{
	const isAuth = useSelector(getAuthState);
	return (
		<div className="App">
			{!isAuth
				? <Login/>
				: <MainPage/>}
		</div>
	);
}

export default App;
