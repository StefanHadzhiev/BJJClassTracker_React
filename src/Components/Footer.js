import { Container, Row, Col, Stack, Nav, NavLink } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="fixed-bottom">
      <Container fluid>
        <Row className="bg-dark text-white">
          <Col>
            <Stack>
              <h4>Created by Stefan Hadzhiev</h4>
              <p>BJJ Class Tracker Project</p>
            </Stack>
          </Col>
          <Col>
            <Nav className="flex-column fs-5">
              Useful Links
              <NavLink href="#" className="text-white">
                Home
              </NavLink>
              <NavLink href="#" className="text-white">
                About
              </NavLink>
              <NavLink href="#" className="text-white">
                Contact
              </NavLink>
            </Nav>
          </Col>
          <Col>
            <h5>Contact me!</h5>
            <p>Hadzhiev.IT@gmail.com</p>
            <p>Phone: +359 888888888</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
