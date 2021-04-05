import HomeButton from '../components/HomeButton';
import { Container, Row, Col } from 'react-bootstrap';

const EndQuiz = () => {
    return (
        <Container>
            <Row className="text-center mt-5">
                <h1 className="m-auto">Congratulations, you got {} plays correct.</h1>
            </Row>

            <Row className="mt-5">
                <Col className="text-center">
                    <HomeButton link="/learn" text="Go back to review the plays" />
                </Col>
                <Col className="text-center">
                    <HomeButton link="/quiz" text="Take the quiz again" />
                </Col>
            </Row>
        </Container>
    )
}

export default EndQuiz;