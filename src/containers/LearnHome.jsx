import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import plays_data from '../data/learn_plays';

const Wrap = styled.div`
    .container {
        max-width: 90%;
    }

    h4 {
        font-weight: 300;
    }

    a {
        color: black;

        i {
            font-size: 1rem;
        }
    }
`;

const LearnHome = () => {
    return (
        <Wrap>
            <Container>
                <Row className="mt-5">
                    <h1>Click on a Play to Learn More</h1>
                </Row>
                <Row>
                    <h4>Or go to the {" "}
                    <strong>
                        <Link to='/glossary'>
                            glossary of terms <i class="fas fa-external-link-alt"></i>
                        </Link>
                    </strong>
                        {" "}to brush up on your ultimate terms.
                    </h4>
                </Row>
                <Row className="mt-5">
                    {
                        plays_data.map((play, index) => {
                            return (
                                <Col>
                                    <Link to={`/learn/${index}`}>
                                        <Card className="m-auto">
                                            <Card.Img variant="top" src={play.img} />
                                            <Card.Body>
                                                <Card.Title>{play.name}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </Wrap>
    )
}

export default LearnHome;