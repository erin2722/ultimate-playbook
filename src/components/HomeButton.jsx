import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Wrap = styled.div`
    button {
        width: 20rem;
        height: 20rem;
        font-size: 2rem;
    }

    i {
        font-size: 4rem;
    }

    /* Icon Grow */
    .hvr-icon-grow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    }
    .hvr-icon-grow .hvr-icon {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    }
    .hvr-icon-grow:hover .hvr-icon, .hvr-icon-grow:focus .hvr-icon, .hvr-icon-grow:active .hvr-icon {
    -webkit-transform: scale(1.3) translateZ(0);
    transform: scale(1.3) translateZ(0);
    }
`;


const HomeButton = ({text, link}) => {
    return (
        <Wrap>
            <Link to={link}>
                <Button variant="outline-success" size="lg" className="hvr-icon-grow">
                    {
                        link==="/learn" ? (
                            <i class="fas fa-book-reader hvr-icon"></i>
                        ) : (
                            <i class="fas fa-school hvr-icon"></i>
                        )
                    }
                    <br></br>
                    {text}
                </Button>
            </Link>
        </Wrap>
    )
}

export default HomeButton;