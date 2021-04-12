import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PlayerDiv = styled.div`
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: red;
    border: ${props => props.highlight ? '4px solid yellow' : 'none'};
    top: ${props => `${props.top}rem`};
    left: ${props => `${props.left}rem`};
    transition: top 3s, left 3s;
`;

const Disc = styled.div`
    position: absolute;
    width: 1rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: white;
    top: ${props => `${props.top + 0.75}rem`};
    left: ${props => `${props.left + 1.1}rem`};
    transition: top 3s, left 3s;
`;

const timer = ms => new Promise(res => setTimeout(res, ms));

const Player = ({playerMoves}) => {
    const { initialLeft, initialTop, moves, firstMover, hasDisc } = playerMoves;

    const [top, setTop] = useState(initialTop);
    const [left, setLeft] = useState(initialLeft);
    const [highlight, setHighlight] = useState(firstMover);

    const move = async () => {
        setHighlight(false);
        for (var i = 0; i < moves.length; i++) {
            setTop(moves[i].top);
            setLeft(moves[i].left);
            await timer(3000);
        }
    };

    return (
        <>
            <PlayerDiv top={top} left={left} highlight={highlight} onClick={move} />
            {
                hasDisc && (
                    <Disc top={top} left={left} />
                )
            }
        </>
    )
};

export default Player;