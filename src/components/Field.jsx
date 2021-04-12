import React, { useState } from 'react';
import styled from 'styled-components';
import Player from './Player';

const FieldWrap = styled.div`
    width: 30rem;
    height: 40rem;
    background-color: green;
`;


const Field = ({ playData }) => {
    const [play, setPlay] = useState(playData);

    function pass() {
        const tempPlay = play;

        tempPlay.players[tempPlay.discMove[0]].hasDisc = false;
        tempPlay.players[tempPlay.discMove[1]].hasDisc = true;

        console.log(tempPlay);
        
        setPlay(tempPlay);
    }

    return (
        <FieldWrap>
            {
                play.players.map(player => (
                    <Player playerMoves={player} pass={pass} />
                ))
            }
        </FieldWrap>
    )
};

export default Field;