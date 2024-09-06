import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/my.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/igithub.svg";

export const Footer = () => {
  return (
    <footer className="footer" style={{ padding: '1px' }}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="mt-4">
            <img src={logo} alt="Logo" style={{ height: '100px', width: '100px' }} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end mt-4">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/thisara-bandara-294773240"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/thisarabandara2"><img src={navIcon4} alt="" /></a>
              <a href="https://www.instagram.com/thisara_b/?hl=en"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
