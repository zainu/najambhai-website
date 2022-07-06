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
                </Container>
            </div>    
        <Footer/>
        </>
    )
}

export default About;