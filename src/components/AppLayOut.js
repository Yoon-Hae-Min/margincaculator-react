import React from 'react';
import {
  Col, Container, Nav, Navbar, Row,
} from 'react-bootstrap';

function AppLayOut({ children }) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            관리중
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">1번가게</Nav.Link>
            <Nav.Link href="#features">가게추가</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        { children }
      </Container>

    </>
  );
}

export default AppLayOut;
