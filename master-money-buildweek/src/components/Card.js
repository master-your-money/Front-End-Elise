import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
    border: 1px solid;
    width: 100px;
    margin: auto;
    justify-content: center;
    margin-bottom: 10px;
`;

const Person = ({ props }) => {


    // annual_income: 57
    // expensies: 6000
    // region: "West"
    // yaer: 2019

    return (
        <div className="wrapper">
            <Info className="person-card">
                <h2>User ID : {props.id}</h2>
                <h2>Profile ID : {props.profile_id}</h2>
                <h2>Annual Income: {props.Income}</h2>
                <h2>Expenditure : {props.Expenditure}</h2>
                <h2>Region : {props.Region}</h2>
                <h2>completed : {props.completed}</h2>
            </Info>
        </div>
    );
}

export default Person;