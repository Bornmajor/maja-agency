import React, { useContext,useEffect,useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import MyContext from '../context/context';
import appLogo from '../assets/images/maja-agency-logo.png';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';


const TopBar = () => {
  const { toggleNavbar, navBarIsOpen } = useContext(MyContext);
  const location = useLocation();

  // Update active navigation when you are on the current page
  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'navlink active-nav-link' : 'navlink';
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change state based on scroll position
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" id='navbar' sticky="top"
       style={{backgroundColor: isScrolled ? '#accabcf8' : 'transparent'}}>
        <Container fluid>
          <Navbar.Brand to='/' as={Link} className='navlink'>
            <img src={appLogo} alt='App logo' width={80} />
            <span className='navbar-app-title'>Maja Agency</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleNavbar} />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            className="offcanvas-fullwidth"
            placement="end"
            show={navBarIsOpen}
            onHide={toggleNavbar}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >

              <Nav className='justify-content-end flex-grow-1 pe-3'>

               
              

              {/* <Nav.Link to="/" id="nav-home-link" className={getNavLinkClass('/')} as={Link}>Home</Nav.Link> */}
                <Nav.Link to="#" className={getNavLinkClass('/home')} as={Link}>Services</Nav.Link>
                <Nav.Link to="#" className={getNavLinkClass('/staff')} as={Link}>About</Nav.Link>
                <Nav.Link to="#" className={getNavLinkClass('/staff')} as={Link}>Projects</Nav.Link>
                <Nav.Link to="#" className={getNavLinkClass('/staff')} as={Link}>Our Team</Nav.Link>
               
          
             
              </Nav>
              <Nav className=' justify-content-end flex-grow-1 pe-3'>

     
                 
                <Link to="#" className='btn btn-success btn-nav-talk-us'>Talk to us</Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default TopBar;
