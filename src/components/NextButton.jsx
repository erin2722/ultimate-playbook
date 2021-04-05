import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Wrap = styled.div`
    .hvr-icon-forward {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.1s;
        transition-duration: 0.1s;
    }
    .hvr-icon-forward .hvr-icon {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-transition-duration: 0.1s;
        transition-duration: 0.1s;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }
    .hvr-icon-forward:hover .hvr-icon, .hvr-icon-forward:focus .hvr-icon, .hvr-icon-forward:active .hvr-icon {
        -webkit-transform: translateX(4px);
        transform: translateX(4px);
    }

    .hvr-icon-back {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.1s;
        transition-duration: 0.1s;
    }
    .hvr-icon-back .hvr-icon {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-transition-duration: 0.1s;
        transition-duration: 0.1s;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }
    .hvr-icon-back:hover .hvr-icon, .hvr-icon-back:focus .hvr-icon, .hvr-icon-back:active .hvr-icon {
        -webkit-transform: translateX(-4px);
        transform: translateX(-4px);
    }
`;

const Text = styled.span`
    margin: 0 1rem;
`;

const NextButton = ({text, link, forward}) => {
    return (
        <Wrap>
            <Link to={link}>
                {
                    forward ? (
                        <Button variant="success" className="hvr-icon-forward">
                            <Text>{text}</Text>
                            <i className="fas fa-arrow-right hvr-icon"></i>
                        </Button>
                    ): (
                        <Button variant="success" className="hvr-icon-back">
                            <i className="fas fa-arrow-left hvr-icon"></i>
                            <Text>{text}</Text>
                        </Button>
                    )
                }
            </Link>
        </Wrap>
    )
}

export default NextButton;