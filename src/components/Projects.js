import { Row, Col, Container, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const webProject = [
    {
      title: "New Space",
      description:
        "New Space is a dynamic social media platform that blends the visual engagement of Instagram with the community-driven discussions of Reddit.\nIt allows users to connect with friends, share content, and engage in meaningful conversations, creating an interactive and engaging social experience.",
      imgUrl: projImg1,
    },
  ];

  const aiProject = [
    {
      title: "AI Anime Face Dectector",
      description:
        " AI Anime Face Detector is a deep learning-based program designed to identify and recognize anime-style faces in images. It utilizes a Convolutional Neural Network (CNN) trained on a dataset of anime faces to accurately detect and classify facial features unique to anime characters.",
      imgUrl: projImg3,
    },
  ];

  const mobileProject = [
    {
      title: "We Lift",
      description:
        "WeLift, is an AI-powered workout generator designed to help users create personalized fitness routines based on their goals, preferences, and fitness level. Built with Flutter, the app provides a sleek and user-friendly interface, allowing users to generate tailored workout plans, track progress, and stay motivated.",
      imgUrl: projImg2,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <div className="project-bx">
              <h2 style={{ marginBottom: "30px" }}>Projects</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5  justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">New Space: Web App</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">We Lift</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">AI Anime-face dector</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {webProject.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                      <Col xl={3}>
                        <div className="proj-link">
                          <a
                            href="https://new-space.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit Live App
                          </a>
                        </div>
                        <div className="git-link">
                          <a
                            href="https://github.com/FutureWave-Technologies-LLC/DummyWebsiteReact2.git"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Git Repo
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {mobileProject.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                      <Col xl={3}>
                        <div className="proj-link">
                          <a
                            href="https://play.google.com/store/apps/details?id=com.ayecmon.welift"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit Live App
                          </a>
                        </div>
                        <div className="git-link">
                          <a
                            href="https://github.com/ayecmon/We_Lift.git"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Git Repo
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {aiProject.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                      <Col xl={3}>
                        <div className="proj-link">
                          <a
                            href="https://github.com/ayecmon/AI-animeFaceDetector.git"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit Live App
                          </a>
                        </div>
                        <div className="git-link">
                          <a
                            href="https://github.com/ayecmon/AI-animeFaceDetector.git"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Git Repo
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
