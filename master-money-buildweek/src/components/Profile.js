import React, { Component } from 'react';
import { deleteProfile } from '../actions';
import { connect } from 'react-redux';

class Profile extends Component {
	render() {
		return (
			<div>
				{props.firstname}
				{props.lastname}
				{props.location}
				{props.website}
				{props.bio}
				<button>Edit</button>
				<button>Delete</button>
			</div>
		);
	}
}

export default connect(null, { deleteProfile })(Profile);
