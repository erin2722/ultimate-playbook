import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import NextButton from '../components/NextButton';

import plays_data from '../data/learn_plays';
import Field from '../components/Field';

const Wrap = styled.div`
    h6 {
        font-weight: 300;
    }
`;


const LearnPlay= () => {
    const { id } = useParams();
    const play = plays_data[id];

    return (
        <Wrap>
            <Container fluid>
                <Row className="mt-3 px-5">
                    <h2>{play.name}</h2>
                </Row>
                <h6 className="px-5">Click on the yellow highlighted dot to see the play in action!</h6>
                <Row className="mt-2 px-5">
                    <Col>
                        <Field playData={play.play_moves} />
                    </Col>
                    <Col>
                        <h4>Description</h4>
                        <p>
                            {play.description}
                        </p>
                        <h4 className="mt-4">Frequently asked questions</h4>
                        {
                            play.faqs.map(faq => {
                                return (
                                    <>
                                        <strong>{faq.question}</strong>
                                        <p>{faq.answer}</p>
                                    </>
                                )
                            })
                        }
                        <div className="mt-5">
                            <NextButton link="/learn" text="Back to Plays" forward={false} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Wrap>
    )
}

export default LearnPlay;