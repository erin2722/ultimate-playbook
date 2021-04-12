import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const DiscDiv = styled.div`
    position: absolute;
    width: 1rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: white;
    top: ${props => `${props.top + 0.75}rem`};
    left: ${props => `${props.left + 1.1}rem`};
    transition: top 3s, left 3s;
`;

const Disc = ({top, left}) => {


    return (
        <>
            <DiscDiv top={top} left={left} />
        </>
    )
};

export default Disc;