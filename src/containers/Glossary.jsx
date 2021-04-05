import styled from 'styled-components';
import NextButton from '../components/NextButton';

const Wrap = styled.main`
    padding: 2rem 5rem;
`;

const Glossary = () => {
    return (
        <Wrap>
            <h3>Glossary of Ultimate Frisbee Terms</h3>
            <p>Stack: A line of players ready to make cuts</p>
            <p>Handler: Person who throws the disk</p>
            <p>Cutter: Person who receives the disk</p>
            <p>Cut: Sharp movement out to the spot in the field where the player expects to receive the disk</p>
            <p>Force: Forcing means to make the opposing thrower throw a certain way. For example to force 
                backhand would mean to stand on their right side completely giving them the ability to backhand</p>
            <p>Open Side: The side of the field that the handler can throw to (so the force)</p>
            <p>Break Side: The side of the field that throws are being guarded against</p>
            <p>Huck: A deep throw</p>
            <div className="mt-5">
                <NextButton link="/learn" text="Back to Learn" forward={false} />
            </div>
        </Wrap>
    )
}

export default Glossary;