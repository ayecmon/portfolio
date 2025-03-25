import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import react from "../assets/img/react.svg";
import aws from "../assets/img/aws.svg";
import postgre from "../assets/img/postgresql.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
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
        <section className = "skill" id= "skills">
            <Container>
                <Row>
                    <Col>
                        <div className ="skill-bx">
                            <h2 style={{ marginBottom: '30px' }}>
                                Tools
                            </h2>
                            {/* <p> vLorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text</p> */}
                            <Carousel responsive={responsive} infinite = {true} className = "skill-slider">
                                <div className = "item">
                                    <img src = {react} alt ="Image" />
                                    <h5>React</h5>
                                </div>
                                <div className = "item">
                                    <img src = {postgre} alt ="Image" />
                                    <h5>Postgresql</h5>
                                </div>
                                <div className = "item">
                                    <img src = {bootstrap} alt ="Image" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className = "item">
                                    <img src = {aws} alt ="Image" />
                                    <h5>AWS</h5>
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