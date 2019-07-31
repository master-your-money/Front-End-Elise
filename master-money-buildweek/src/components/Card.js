import React from 'react';

const Person = (props) => {


    // annual_income: 57
    // expensies: 6000
    // region: "West"
    // yaer: 2019

    return (
        <div className="wrapper">
            <div className="person-card">
                <h2>{props.yaer}</h2>
                <h2>{props.region}</h2>
                <h2>{props.annual_income}</h2>
                <h2>{props.expensies}</h2>
            </div>
        </div>
    );
}

export default Person;