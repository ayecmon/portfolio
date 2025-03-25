import { Container, Navbar } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import { Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon4.svg";
import navIcon3 from "../assets/img/nav-icon5.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          {/* <div className="form">
            <MailchimpForm />
          </div> */}
          <Col sm={6}>
            <Navbar.Brand href="/">
              <h1 style={{ color: "white" }}>&lt;&gt;ACM&lt;/&gt;</h1>
            </Navbar.Brand>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/aye-c-mon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/ayecmon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="GitHub" />
              </a>
              <a
                href="mailto:ayechanmon.acm1@gmail.com?subject=Hello&body=I would like to connect!"
                target="_blank"
              >
                <img src={navIcon3} alt="Email" />
              </a>
            </div>
            <p>CopyRight 2025. All Right Reserved by Aye Mon</p>
            <p>Credit: Icons by <a target="_blank" href="https://icons8.com">Icons8</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
