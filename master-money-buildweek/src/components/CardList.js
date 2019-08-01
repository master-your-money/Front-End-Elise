import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Person from './Card';
import styled from 'styled-components';

const PageWrapper = styled.div`
    display: flex;
    flex-flow: wrap column;
    justify-content: space-between;
`;

export default function MemberList() {
    const [member, setMember] = useState([]);

    useEffect(() => {

        axios
            .get(`http://master-your-money.herokuapp.com/home/user`) // new api by backend for users
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
            {member.map((char, i) => <Person props={char} key={i} />)}
        </PageWrapper>
    );

}