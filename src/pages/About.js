import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Row,Container,Col} from 'react-bootstrap';

const About = ()=>{
    return(
        <>
        <Header/>
        <Container>
            <div className="home">
                <Row>
                    <Col lg={12} md={12}>
                    <div className="about-section">
                        <h2 className="main-title">We're building the metaverse by empowering people to be a part of it.</h2>
                        <p className="para-text">Merit Circle is creating a decentralized autonomous organization (DAO) that develops opportunities to earn through play for people who want to help build the metaverse.</p>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={6}>
                        <img src={process.env.PUBLIC_URL+"images/abou-doa.PNG"}></img>
                    </Col>
                    <Col lg={6} md={6}>
                    <img src={process.env.PUBLIC_URL+"images/about-a.PNG"}></img>
                    </Col>
                </Row>
            </div>    
        </Container>
        <Footer/>
        </>
    )
}

export default About;