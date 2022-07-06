import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Row,Container,Col,Card,CardImg} from 'react-bootstrap';
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedin } from "react-icons/fa";
const About = ()=>{
    return(
        <>
        <Header/>
            <div className="about-page">
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                        <div className="about-section">
                            <h2 className="main-title">We're building the metaverse by empowering people to be a part of it.</h2>
                            <p className="para-text">Merit Circle is creating a decentralized autonomous organization (DAO) that develops opportunities to earn through play for people who want to help build the metaverse.</p>
                        </div>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col lg={6} md={6}>
                            <img src={process.env.PUBLIC_URL+"images/abou-doa.PNG"}></img>
                        </Col>
                        <Col lg={6} md={6}>
                        <img src={process.env.PUBLIC_URL+"images/about-a.PNG"}></img>
                        </Col>
                    </Row> */}
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="team-section">
                                <h2 className="main-title"><span>GrowingOrbit</span> Team</h2>
                                <p className="para-text">Our team professionals</p>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={12}>
                            <Card className="team-cards">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL+"images/profile/najam.png"} />
                                <Card.Body>
                                    <h3>Najam Saeed</h3>
                                    <h5>CEO/Ops & GTM.</h5>
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><FaFacebookF/></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><FaInstagram/></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/feed/" target="_blank"><FaLinkedin/></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank"><FaTwitter/></a>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={3} sm={12}>
                            <Card className="team-cards">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL+"images/profile/affan.png"} />
                                <Card.Body>
                                    <h3>Affan Ahmed khan</h3>
                                    <h5>Blockchain Developer</h5>
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><FaFacebookF/></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><FaInstagram/></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/feed/" target="_blank"><FaLinkedin/></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank"><FaTwitter/></a>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={3} sm={12}>
                            <Card className="team-cards">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL+"images/profile/omar.png"} />
                                <Card.Body>
                                    <h3>Omer Shafiq</h3>
                                    <h5>Graphic Designer</h5>
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><FaFacebookF/></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><FaInstagram/></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/feed/" target="_blank"><FaLinkedin/></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank"><FaTwitter/></a>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={3} sm={12}>
                            <Card className="team-cards">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL+"images/profile/zain.png"} />
                                <Card.Body>
                                    <h3>Zain Zahoor</h3>
                                    <h5>Front-end Developer</h5>
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank"><FaFacebookF/></a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank"><FaInstagram/></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/feed/" target="_blank"><FaLinkedin/></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank"><FaTwitter/></a>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>    
        <Footer/>
        </>
    )
}

export default About;