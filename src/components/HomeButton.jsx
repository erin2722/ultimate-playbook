import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const HomeButton = ({text, link}) => {
    return (
        <Link to="/learn">
            <Button variant="success" size="lg">
                {text}
            </Button>
        </Link>
    )
}

export default HomeButton;