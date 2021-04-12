import HomeButton from '../components/HomeButton';
import { Container, Row, Col } from 'react-bootstrap';
import Field from '../components/Field';

const Home = () => {
    return (
        <Container>
            <Row className="text-center mt-5">
                <h1 className="m-auto">Welcome to the Ultimate Frisbee Playbook!</h1>
                <h3>Learn about 5 common frisbee plays, and take an interactive quiz to assess your knowledge</h3>
            </Row>

            <Row className="mt-5">
                <Col className="text-center">
                    <HomeButton link="/learn" text="Learn" />
                </Col>
                <Col className="text-center">
                    <HomeButton link="/quiz" text="Quiz" />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;