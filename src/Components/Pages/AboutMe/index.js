import React from "react"
import { Jumbotron, Row, Col } from 'reactstrap';
import './style.css';
import skills from "../../Info/skills.js";

class About extends React.Component {

  state = {
    skills
  };

  render() {
    return (
      <Jumbotron className="m-3 text-center">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">I'm Mio Sagawa, a data scientist and software developer.</p>
        <hr className="my-4" />
        <Row className="justify-content-center">
          <Col>
            <p className="">I was born in Tokushima, Japan.
                        After graduating from university, I moved to Tokyo
                        and worked for an IT consulting company as a data
                        scientist for about 12 years.I moved to the United States in January this year.
                        Currently, I am a freelance multi-talented creative
                        who not only analyzes web data but also develops
                        web content.</p>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row className="justify-content-center">
          <Col xs="8">
            <p className="font-weight-bold">Technical Skills</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {this.state.skills.map(skill => (
            <Col>
              <img className="skillsLogo" src={skill.src} alt="Logo"/>
              <hr className="my-2" />
              <p>{skill.skill}</p>
            </Col>
          ))}
        </Row>
      </Jumbotron>
    );
  }

};

export default About;