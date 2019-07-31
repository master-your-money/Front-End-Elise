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
                <h2>Year : {props.yaer}</h2>
                <h2>Region : {props.region}</h2>
                <h2>Annual Income: {props.annual_income}</h2>
                <h2>Expensies : {props.expensies}</h2>
            </Info>
        </div>
    );
}

export default Person;