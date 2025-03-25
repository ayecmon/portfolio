import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import java from "../assets/img/java.svg";
import cpp from "../assets/img/cpp.svg";
import js from "../assets/img/js.svg";
import react from "../assets/img/react.svg";
import python from "../assets/img/python.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Languages = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className = "languages" id= "languages">
            <Container>
                <Row>
                    <Col>
                        <div className ="languages-bx">
                            <h2 style={{ marginBottom: '30px' }}>
                                Programming Languages
                            </h2>
                            {/* <p> vLorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text</p> */}
                            <Carousel responsive={responsive} infinite = {true} className = "languages-slider">
                                <div className = "item">
                                    <img src = {java} alt ="Image" />
                                    <h5>Java</h5>
                                </div>
                                <div className = "item">
                                    <img src = {python} alt ="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className = "item">
                                    <img src = {cpp} alt ="Image" />
                                    <h5>C++</h5>
                                </div>
                                <div className = "item">
                                    <img src = {js} alt ="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className = "item">
                                    <img src = {react} alt ="Image" />
                                    <h5>React</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className = "background-image-left" src = {colorSharp} />
        </section>
      )
}