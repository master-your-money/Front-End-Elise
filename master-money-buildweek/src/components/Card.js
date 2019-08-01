import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
    border: 1px solid;
    width: 400px;
    margin: auto;
    justify-content: center;
    margin-bottom: 10px;
    text-align: -webkit-left;

`;

const Person = ({ props }) => {


    // "id": 1,
    // "user_id": 1,
    // "firstname": "friend",
    // "lastname": "pal",
    // "location": "neverland",
    // "website": "startup.io",
    // "bio": "once again in neverland",
    // "completed": false

    return (
        <div className="wrapper">
            <Info className="person-card">
                <h2>User ID : {props.user_id}</h2>
                <h2>First Name: {props.firstname}</h2>
                <h2>Last Name: {props.lastname}</h2>
                <h2>Location : {props.location}</h2>
                <h2>Website : {props.website}</h2>
                <h2>Bio : {props.bio}</h2>
                <h2>Completed : {props.completed}</h2>
            </Info>
        </div>
    );
}

export default Person;