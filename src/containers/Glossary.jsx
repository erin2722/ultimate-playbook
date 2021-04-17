import styled from 'styled-components';
import NextButton from '../components/NextButton';

const Wrap = styled.main`
    padding: 1rem 5rem;
`;

const Glossary = () => {
    return (
        <Wrap>
            <h3 className="my-4">Glossary of Ultimate Frisbee Terms</h3>
            <p><strong>Stack:</strong> A line of players ready to make cuts</p>
            <p><strong>Handler:</strong> Person who throws the disk</p>
            <p><strong>Cutter:</strong> Person who receives the disk</p>
            <p><strong>Cut:</strong> Sharp movement out to the spot in the field where the player expects to receive the disk</p>
            <p><strong>Force:</strong> Forcing means to make the opposing thrower throw a certain way. For example to force 
                backhand would mean to stand on their right side completely giving them the ability to backhand</p>
            <p><strong>Open Side:</strong> The side of the field that the handler can throw to (so the force)</p>
            <p><strong>Break Side:</strong> The side of the field that throws are being guarded against</p>
            <p><strong>Huck:</strong> A deep throw</p>
            <div className="mt-5">
                <NextButton link="/learn" text="Back to Learn" forward={false} />
            </div>
        </Wrap>
    )
}

export default Glossary;