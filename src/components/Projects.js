import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp from '../assets/img/color-sharp.png';
import project1 from '../assets/img/project-1.png';
import project2 from '../assets/img/project-2.png';
import project3 from '../assets/img/project-3.png';

const projects = [
  {
    title: 'Project 1',
    description: 'Description 1',
    image: project1,
  },
  {
    title: 'Project 2',
    description: 'Description 2',
    image: project2,
  },
  {
    title: 'Project 3',
    description: 'Description 3',
    image: project3,
  },
];

export const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard key={index} {...project} />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second"></Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp} alt="Background" />
    </section>
  );
};
