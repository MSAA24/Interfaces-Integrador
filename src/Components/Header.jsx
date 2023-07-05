import "../Estilo/header.css";
import styles from '../Estilo/styles.module.css'
import {NavLink} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = () => {
    return (         
        <div className="header">
            <ul>                
                <li  className={`${styles.headerLi}`}>
                        <img src="LoL_icon.png" alt="LoL icon"  />
                </li>
                <li className={`${styles.headerLi}`}>
                    <NavLink to='/' className={`${styles.headerLink}`}>
                        <h1><strong>League of Legends</strong> </h1>
                    </NavLink>
                </li>

                <Navbar variant="dark" bg="dark" expand="lg">
                    <Container fluid>
                        <Navbar.Toggle aria-controls="navbar-dark-example" />
                        <Navbar.Collapse id="navbar-dark-example">
                            <Nav>
                                <NavDropdown
                                    title="Menu"
                                    menuVariant="dark"
                            >   
                                <NavDropdown.Item href='/apiStatus'>API Key Status</NavDropdown.Item>
                                <NavDropdown.Item href='/randomizer'>Champion Randomizer</NavDropdown.Item>
                                <NavDropdown.Item href='/championsById'>Search Champion</NavDropdown.Item>
                                <NavDropdown.Item href='/summoners'>Search Summoner</NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </ul>
        </div>
    );
}
export default Header;


