import React from 'react';
import './App.css';
import RegForm from './components/RegForm';
import LoginForm from './components/LoginForm';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<h1>Master That Money </h1>
			<Route path="/login" component={LoginForm} />
			<Route path="/register" component={RegForm} />
		</div>
	);
}

export default App;
