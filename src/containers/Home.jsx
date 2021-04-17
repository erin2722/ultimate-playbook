import HomeButton from '../components/HomeButton';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Wrap = styled.div`
    h1 {

    }

    h3 {
        font-weight: 300;
    }
`;

const Home = () => {
    return (
        <Wrap>
            <Container fluid>
                <Row className="text-center mt-5">
                    <h1 className="mx-auto my-4">Ultimate Frisbee Playbook</h1>
                    <h3 className="mx-auto my-1">Learn about 5 common frisbee plays, and take an interactive quiz to assess your knowledge</h3>
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
        </Wrap>
    )
}

export default Home;