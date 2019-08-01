import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Budget from './Budget';
import styled from 'styled-components';

const PageWrapper = styled.div`
    display: flex;
    flex-flow: wrap column;
    justify-content: space-between;
`;

export default function BudgetCard() {
    const [member, setMember] = useState([]);

    useEffect(() => {

        axios
            .get(`http://master-your-money.herokuapp.com/home/budget`) // new api by backend for budget
            .then(data => {
                console.log(data)
                setMember([...data.data]);
                console.log(member)
            })
            .catch(error => {
                console.log('Error occurred -->', error);
            })

    }, [])

    return (
        <PageWrapper>
            <h3>Budget Information</h3>
            {member.map((char, i) => <Budget props={char} key={i} />)}
        </PageWrapper>
    );

}