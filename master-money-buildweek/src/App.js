import React from 'react';
import './css/App.css';
import RegForm from './components/RegForm';
import LoginForm from './components/LoginForm';
import { Route } from 'react-router-dom';
import ProfileForm from './components/ProfileForm';

function App() {
	return (
		<div className="App">
			<Route path="/login" component={LoginForm} />
			<Route path="/register" component={RegForm} />
			<Route path="/create/profile" component={ProfileForm} />
		</div>
	);
}

export default App;
