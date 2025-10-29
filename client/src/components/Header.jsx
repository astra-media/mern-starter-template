import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3">
      <Container>
        <Navbar.Brand href="#home">Challenges and Example</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Challenges" id="basic-nav-dropdown">
              <NavDropdown.Item href="/?params=searchBar">Search Bar</NavDropdown.Item>
              <NavDropdown.Item href="?params=modal">Modal</NavDropdown.Item>
              <NavDropdown.Item href="?params=dragDrop">Drag & Drop</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Examples" id="basic-nav-dropdown">
              <NavDropdown.Item href="?params=scrollSpyNav">ScrollSpyNav</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header