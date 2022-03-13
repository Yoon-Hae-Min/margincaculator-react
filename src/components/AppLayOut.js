import React from 'react';
import {
  Col, Container, Nav, Navbar, Row,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// import { loadData } from '../slice/storeSlice';

function AppLayOut({ children }) {
  const nickName = useSelector((state) => state.user.userInfo.nickName);
  const storeList = useSelector((state) => state.user.storeList);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            {nickName}
          </Navbar.Brand>
          <Nav className="me-auto">
            {storeList && storeList.map((store) => (
              <Nav.Link>
                {store.name}
              </Nav.Link>
            ))}
            <Nav.Link>가게추가</Nav.Link>
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
