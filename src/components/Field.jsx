import React, { useState } from 'react';
import styled from 'styled-components';
import Player from './Player';

const FieldWrap = styled.div`
    width: 30rem;
    height: 40rem;
    background-color: green;
`;

const EndzoneLine1 = styled.div`
    position: absolute;
    width: 30rem;
    top: 5rem;
    border-bottom: 1px solid white;
`;

const EndzoneLine2 = styled.div`
    position: absolute;
    width: 30rem;
    top: 35rem;
    border-bottom: 1px solid white;
`;

const timer = ms => new Promise(res => setTimeout(res, ms));

//create your forceUpdate hook
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const Field = ({ playData }) => {
    const [play, setPlay] = useState(playData);
    const forceUpdate = useForceUpdate();

    function pass() {
        const tempPlay = play;

        tempPlay.players[tempPlay.discMove[0]].hasDisc = false;
        tempPlay.players[tempPlay.discMove[1]].hasDisc = true;
        
        setPlay(tempPlay);
    }

    const move = async (index) => {
        const tempPlay = play;

        tempPlay.players[index].firstMover = false;

        setPlay(tempPlay);

        for (var i = 0; i < tempPlay.players[index].moves.length; i++) {
            pass();

            tempPlay.players[index].initialTop = tempPlay.players[index].moves[i].top;
            tempPlay.players[index].initialLeft = tempPlay.players[index].moves[i].left;
            
            setPlay(tempPlay);
            forceUpdate();
            await timer(2000);
        }
    };

    return (
        <FieldWrap>
            <EndzoneLine1 />
            {
                play.players.map((player, index) => (
                    <Player playerMoves={player} pass={pass} move={move} index={index} />
                ))
            }
            <EndzoneLine2 />
        </FieldWrap>
    )
};

export default Field;