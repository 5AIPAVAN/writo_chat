import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavScrollExample() {
  return (
    <div className="outer" style={{display:'flex',justifyContent:'center'}} >

<div className="inner" style={{width:'80%'}}>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" className =" titlee mx-4">Writo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 mx-4"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  className="mx-2" href="#" style={{color:'black',fontWeight:450}}>Services</Nav.Link>
            <Nav.Link  className="mx-2"href="#" style={{color:'black',fontWeight:450}}>Products</Nav.Link>
            <Nav.Link  className="mx-2"href="#" style={{color:'black',fontWeight:450}}>Events</Nav.Link>
          
          </Nav>
          <Form className="d-flex mx-2">
            <Form.Control
              type="search"
              placeholder="Search Class"
              className="me-2 custom-search-input"
              aria-label="Search"
              style={{width:'60%'}}
            />
            <Button variant="success mx-3" style={{width:'47%'}}>View plans</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </div>
  );
}

export default NavScrollExample;
