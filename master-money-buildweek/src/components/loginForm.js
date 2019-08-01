import React, { Component } from 'react';
import { login } from '../actions';
import { connect } from 'react-redux';
import '../css/login.css';

class loginForm extends Component {
	state = {
		username: '',
		password: ''
	};

	handleChanges = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onLogin = (e) => {
		e.preventDefault();
		this.props.login(this.state);
	};

	render() {
		return (
			<div className="outline">
				<form onSubmit={this.onLogin} className="box">
					<input
						type="text"
						name="username"
						onChange={this.handleChanges}
						value={this.state.username}
						placeholder="Username"
					/>

					<input type="password" name="password" onChange={this.handleChanges} placeholder="Password" />

					<button type="submit">Login</button>
				</form>
			</div>
		);
	}
}

export default connect(null, { login })(loginForm);
