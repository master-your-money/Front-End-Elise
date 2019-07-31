import React, { Component } from 'react';
import { login } from '../actions';
import { connect } from 'react-redux';


class loginForm extends Component {
    state = {
        username: '',
        password: ''
        
    };

    handleChnages = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onLogin = e => {
        e.preventDefault()
        this.props.login(this.state)
    }

    render() {
        return (
            <form onSubmit={this.onLogin}>
                <input name='username' onChange={this.handleChnages} value={this.state.username} placeholder='Username'/>
                <input type='password' name='password'onChange={this.handleChnages} placeholder='Password'/>
                <button>Login</button>
                
            </form>
        );
    }
}

export default connect(null,{login})(loginForm);