import React from 'react';
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
    transition: top 2s, left 2s;

    text-align: center;
`;

const Disc = styled.div`
    position: absolute;
    width: 1rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: white;
    top: ${props => `${props.top + 0.75}rem`};
    left: ${props => `${props.left + 1.5}rem`};
    transition: top 2s, left 2s;
`;

const Player = ({playerMoves, move, index}) => {
    return (
        <>
            <PlayerDiv top={playerMoves.initialTop} left={playerMoves.initialLeft} 
                highlight={playerMoves.firstMover} onClick={() => move(index)} />
            {
                playerMoves.hasDisc && (
                    <Disc top={playerMoves.initialTop} left={playerMoves.initialLeft} />
                )
            }
        </>
    )
};

export default Player;