import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
    border: 1px solid;
    width: 200px;
    margin: auto;
    justify-content: center;
    margin-bottom: 10px;
`;

const Budget = ({ props }) => {


    // "id": 1,
    // "profile_id": 1,
    // "Income": 20,
    // "Expenditure": 1,
    // "Region": "DE",
    // "completed": false

    return (
        <div className="wrapper">
            <Info className="budget-card">
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

export default Budget;
