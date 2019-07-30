import React, { Component } from 'react';
import { register} from '../actions';
import { connect } from 'react-redux';


class regForm extends Component {
    state = {
        username: '',
        password: '',
        email: ''
        
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onRegister = e => {
        e.preventDefault()
        this.props.register(this.state)
    }

    render() {
        return (
            <form onSubmit={this.onRegister}>
                <input name='username' onChange={this.handleChanges} value={this.state.username}/>
                <input name='password' onChange={this.handleChanges} value={this.state.password}/>
                <input name='email' onChange={this.handleChanges} value={this.state.email}/>
                <button>Push This shit </button>
            </form>
        );
    }
}

export default connect(null, {register})(regForm);