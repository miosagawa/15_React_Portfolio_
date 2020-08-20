import React from "react";
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Row, Col, NavLink
} from 'reactstrap';
import emailIcon from "../../Pictures/email-logo.png";
import githubIcon from "../../Pictures/github-logo.png";
import linkedInIcon from "../../Pictures/linkedin-logo.png";
import headshot from "../../Pictures/profile.jpg";
import resume from "../../Pictures/Resume_Mio Sagawa_20200707.pdf"
import "./style.css";
import MediaQuery, { useMediaQuery } from 'react-responsive';

const Contact = (props) => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });

    const isTabletOrPhone = useMediaQuery({
        query: '(max-device-width: 1023px)'
    });

    return (
        <div>    
            {isDesktopOrLaptop && <>
                <h3 className="m-5 text-center">Contact Information</h3>
                <hr className="my-4" />
                <Row className="d-flex justify-content-center">
                    <Card className="w-50 mt-3">
                        <CardHeader tag="h3" >
                            <Row>
                                <Col className="ml-4">
                                    Mio Sagawa
                                </Col>
                                <Button color="secondary" className="mr-5" href={resume} target="_blank">Resume</Button>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col xs="5"><img className="headshot shadow bg-white rounded mt-3" src={headshot} alt="Headshot"/></Col>
                                <Col className="text-Left m-3">
                                    <CardTitle className="lead text-center font-weight-bold">Data Scientist and Software Engineer</CardTitle>
                                    <hr className="m-3" />
                                    <NavLink href="mailto:miosagawa721@gmail.com"><img className="logo" src={emailIcon} alt="Logo"/> : miosagawa721</NavLink>
                                    <NavLink href="https://www.linkedin.com/in/mio-leiber/"><img className="logo" src={linkedInIcon} alt="Logo"/> : mio-leiber</NavLink>
                                    <NavLink href="https://github.com/miosagawa"><img className="logo" src={githubIcon} alt="Logo"/> : miosagawa</NavLink>                
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
            </>}
            {isTabletOrPhone && <>
                <h3 className="m-3 text-center">Contact Information</h3>
                <hr className="my-4" />
                <Row className="d-flex justify-content-center">
                    <Card className="m-3">
                        <CardHeader tag="h3" >
                            <Row className="justify-content-center">
                                Mio Sagawa
                            </Row>
                        </CardHeader>
                        <CardBody>
                            <Row className="justify-content-center"><img className="headshot shadow bg-white rounded mt-3" src={headshot} alt="Headshot"/></Row>
                            <Row className="justify-content-center mt-3">
                                <CardTitle className="lead font-weight-bold">Data Scientist and Software Engineer</CardTitle>
                            </Row>
                            <hr/>
                            <Row>
                                <Col className="text-center">
                                    <Button color="secondary" className="mb-3" href={resume} target="_blank">Resume</Button>
                                    <NavLink href="mailto:miosagawa721@gmail.com"><img className="logo" src={emailIcon} alt="Logo"/> : miosagawa721</NavLink>
                                    <NavLink href="https://www.linkedin.com/in/mio-leiber/"><img className="logo" src={linkedInIcon} alt="Logo"/> : mio-leiber</NavLink>
                                    <NavLink href="https://github.com/miosagawa"><img className="logo" src={githubIcon} alt="Logo"/> : miosagawa</NavLink>
                                </Col>                
                            </Row>
                        </CardBody>
                    </Card>
                </Row>
            </>}
        </div>
    );
}

export default Contact;