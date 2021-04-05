import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import plays_data from '../data/learn_plays';


const LearnHome = () => {
    return (
        <Container>
            <Row className="mt-5">
                <h1>Click on a play to learn more!</h1>
                <h4>Or go to the {" "}
                    <Link to='/glossary'>
                        glossary of terms
                    </Link>
                    {" "}to brush up on your ultimate terms!
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
    )
}

export default LearnHome;