import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';

const Wrap = styled.div`
    a {
        color: #212529;
        text-transform: uppercase;
    }

    a:hover {
        font-weight: bold;
        text-decoration: none;
    }

    .navbar-brand {
        font-size: 2rem;
        font-family: 'Bebas Neue', cursive;
    }

    background: whitesmoke;
`;


const NavBar = () => {
    return (
        <Wrap>
          <Navbar>
                <Link to="/">
                    <Navbar.Brand href="/">
                        {/* <img 
                            src="https://thumbs.dreamstime.com/t/flying-frisbee-vector-flying-frisbee-sports-activity-vector-107166029.jpg" 
                            width="100" 
                            alt="frisbee" 
                            className="pr-4"
                        /> */}
                        
                        Ultimate Frisbee Playbook
                    </Navbar.Brand>
                </Link>
                <Navbar.Collapse className="justify-content-end">
                    <Link to="/learn">
                        <Nav.Link href="/">Learn</Nav.Link>
                    </Link>
                    <Link to="/quiz">
                        <Nav.Link href="/">Quiz</Nav.Link>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        </Wrap>
    )
}

export default NavBar;
