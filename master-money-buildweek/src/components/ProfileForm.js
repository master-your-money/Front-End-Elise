import React, { Component } from 'react';
import { createProfile } from '../actions';
import { connect } from 'react-redux';

class ProfileForm extends Component {
	state = {
		firstname: '',
		lastname: '',
		location: '',
		website: '',
		bio: ''
	};

	handleChanges = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	createProfile = (e) => {
		e.preventDefault();
		this.props.createProfile(this.state);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.createProfile}>
					<input
						type="text"
						name="firstname"
						onChange={this.handleChanges}
						value={this.state.firstname}
						placeholder=" First Name"
					/>
					<input
						type="text"
						name="lastname"
						onChange={this.handleChanges}
						value={this.state.lastname}
						placeholder="Last Name"
					/>
					<input
						type="text"
						name="location"
						onChange={this.handleChanges}
						value={this.state.location}
						placeholder="Location"
					/>
					<input
						type="link"
						name="website"
						onChange={this.handleChanges}
						value={this.state.website}
						placeholder="Website"
					/>
					<input
						type="text"
						name="bio"
						onChange={this.handleChanges}
						value={this.state.bio}
						placeholder="Bio"
					/>
					<button>Create Profile</button>
				</form>
			</div>
		);
	}
}

export default connect(null, { createProfile })(ProfileForm);
