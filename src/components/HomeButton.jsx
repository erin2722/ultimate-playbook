import { Button } from 'react-bootstrap';

const HomeButton = ({text, link}) => {
    return (
        <a href={link}>
            <Button variant="success" size="lg">
                {text}
            </Button>
        </a>
    )
}

export default HomeButton;