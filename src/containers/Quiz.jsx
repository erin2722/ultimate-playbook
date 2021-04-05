import { useState, useEffect } from 'react';
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
    const [correct, setCorrect] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const next = () => {
        if(question + 1 < questions.length) {
            setQuestion(question + 1);
            setSelected(-1);
            setSubmitted(false);
        } else {
            history.push("/quiz-end");
        }
    };

    const submit = () => {
        setCorrect(selected === questions[question].answer);
        if(selected === questions[question].answer) {
            setCorrectAnswers(correctAnswers + 1);
        }
        setSubmitted(true);
    };

    return (
        <Container fluid>
            <Row className="mt-5 px-5">
                <h2>Quiz</h2>
            </Row>
            <Row className="mt-1 px-5">
                <h5>Match the image with the play name describing it</h5>
            </Row>
            {
                submitted && (
                    <Alert variant={correct ? 'success' : 'danger'}>
                        <strong>{correct ? 'Correct!' : 'Incorrect.'} This play is a {questions[question].answer}</strong>
                        <div>{questions[question].explination}</div>
                    </Alert>
                )
            }
            <Row className="mt-5 px-5">
                <Col>
                    <Image src={questions[question].img} alt={questions[question]} />
                </Col>
                <Col className="text-center">
                    {
                        questions[question].options.map((option, index) => (
                            <>
                                <Button 
                                    className="my-3"
                                    variant="outline-dark" 
                                    size="lg"
                                    onClick={() => setSelected(option)}
                                    active={selected===option}
                                >
                                    {option}
                                </Button>
                                <br></br>
                            </>
                        ))
                    }
                </Col>
            </Row>
            <Row className="mt-5 px-5 float-right">
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
            </Row>
        </Container>
    )
}

export default Quiz;