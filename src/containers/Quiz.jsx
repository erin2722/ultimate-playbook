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
    const [playerNum, setPlayerNum] = useState('');
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
        setCorrect(selected === questions[question].answer && playerNum === questions[question].firstMover);
        setPlayerNum('');
        if(selected === questions[question].answer && playerNum === questions[question].firstMover) {
            setCorrectAnswers(correctAnswers + 1);
        }
        setSubmitted(true);
    };

    return (
        <Container fluid>
            <Row className="mt-2 px-5">
                <h2>Quiz</h2>
            </Row>
            {
                submitted && (
                    <Alert variant={correct ? 'success' : 'danger'}>
                        <strong>{correct ? 'Correct!' : 'Incorrect.'} 
                            This play is a {questions[question].answer}. 
                            Player {questions[question].firstMover} makes the first cut.
                        </strong>
                        <div>{questions[question].explination}</div>
                    </Alert>
                )
            }
            <Row className="mt-2 px-5">
                <Col>
                    <Image src={questions[question].img} alt={questions[question]} />
                </Col>
                <Col className="text-center">
                    <h5>Match the image with the play name describing it</h5>
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
                    <h5 className="mt-4">
                        Which player cuts first? Enter their number here:
                    </h5>
                    <input 
                        type='text' 
                        value={playerNum}
                        onChange={e => setPlayerNum(e.target.value)}
                    />
                </Col>
            </Row>
            <Row className="px-5 float-right">
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