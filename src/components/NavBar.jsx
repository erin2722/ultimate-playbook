import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


const NavBar = () => {
    return (
        <>
          <Navbar>
                <Link to="/">
                    <Navbar.Brand href="/">Ultimate Frisbee Playbook</Navbar.Brand>
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
        </>
    )
}

export default NavBar;
