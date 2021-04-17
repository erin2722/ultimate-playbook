import { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import questions from '../data/quiz_questions';

const Image = styled.img`
    width: 30rem;
`;

const Quiz= ({ correctAnswers, setCorrectAnswers }) => {
    const history = useHistory();
    const [question, setQuestion] = useState(0);
    const [selected, setSelected] = useState(-1);
    const [playerNum, setPlayerNum] = useState('');
    const [correct, setCorrect] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const next = () => {
        if(question + 1 < questions.length) {
            setQuestion(question + 1);
            setSelected(-1);
            setPlayerNum('');
            setSubmitted(false);
        } else {
            history.push("/quiz-end");
        }
    };

    const submit = () => {
        setCorrect(selected === questions[question].answer && playerNum === questions[question].firstMover);
        if(selected === questions[question].answer && playerNum === questions[question].firstMover) {
            setCorrectAnswers(correctAnswers + 1);
        }
        setSubmitted(true);
    };

    return (
        <Container fluid>
            <Row className="mt-4 px-5">
                <h3>Test Your Knowledge</h3>
            </Row>
            {
                submitted && (
                    <Alert variant={correct ? 'success' : 'danger'} className="mt-1 mx-5">
                        <strong>{correct ? 'Correct! ' : 'Incorrect. '} 
                            This play is a {questions[question].answer}. 
                            Player {questions[question].firstMover} makes the first cut.
                        </strong>
                        <div>{questions[question].explination}</div>
                    </Alert>
                )
            }
            <Row className="mt-2 px-5">
                <Col md="auto">
                    <Image src={questions[question].img} alt={questions[question]} />
                </Col>
                <Col className="text-center">
                    <h4>Which play is this?</h4>
                    {
                        questions[question].options.map((option) => (
                            <>
                                <Button 
                                    className="my-3 mx-3"
                                    variant="outline-dark" 
                                    size="lg"
                                    onClick={() => setSelected(option)}
                                    active={selected===option}
                                >
                                    {option}
                                </Button>
                            </>
                        ))
                    }
                    <h4 className="mt-4 mb-2">
                        Which player cuts first?
                    </h4>
                    Enter their number here:{" "}
                    <input 
                        type='text' 
                        placeholder='3'
                        value={playerNum}
                        onChange={e => setPlayerNum(e.target.value)}
                    />
                    <br></br>
                    <div className="float-right my-5">
                        {
                            submitted ? (
                                <Button 
                                    className="my-3" 
                                    variant="success" 
                                    size="lg"
                                    onClick={() => next()}
                                >
                                    Next Question
                                </Button>
                            ) : (
                                <Button 
                                    className="my-3" 
                                    variant="success" 
                                    size="lg"
                                    onClick={() => submit()}
                                >
                                    Submit
                                </Button>
                            )
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Quiz;