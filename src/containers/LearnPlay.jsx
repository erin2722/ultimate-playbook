import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import NextButton from '../components/NextButton';

import plays_data from '../data/learn_plays';

const Image = styled.img`
    width: 30rem;
`;

const LearnPlay= () => {
    const { id } = useParams();
    const play = plays_data[id];

    return (
        <Container fluid>
            <Row className="mt-5 px-5">
                <h2>{play.name}</h2>
            </Row>
            <Row className="mt-5 px-5">
                <Col>
                    <Image src={play.img} alt={play.name} />
                </Col>
                <Col>
                    <h4>Description:</h4>
                    <p>
                        {play.description}
                    </p>
                    <h4>Frequently asked questions</h4>
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
                </Col>
            </Row>
            <Row className="mt-5 px-5">
                <NextButton link="/learn" text="Back to Plays" forward={false} />
            </Row>
        </Container>
    )
}

export default LearnPlay;