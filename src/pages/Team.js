import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Row,Container,Col,Card,CardImg} from 'react-bootstrap';
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedin } from "react-icons/fa";
const Team = ()=>{
    return(
        <>
        <Header/>
            <div className="team-page">
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="team-title">
                                <h2 className="main-title">Founders</h2>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={12}>
                            
                        </Col>
                        <Col lg={3} md={3} sm={12}>
                            <Card className="team-cards">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL+"images/profile/najam.png"} />
                                <Card.Body>
                                    <h3>Najam Saeed</h3>
                                    <h5>CEO/Ops & GTM.</h5>
                                    <p className="general-info">A Multi-disciplinary startup founder with over 12 years of working experience in marketing, business development, operation and start-ups. Extremely passionate about ending poverty and reducing income inequality.</p>
                                    <p  className="company-info">Founder of Smartsoft, Labcloud & Orion.</p>
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
                                    <p className="general-info">Blockchain Engineer from Pakistan, building exciting decentralized applications. Contributing to web3.0 Revolution by building various Dapps. Moreover, previously run startups named BitcoinPK and RetinaVR.And now currently running Blockchain agency named "DAPPOMATICS"</p>
                                    <p className="company-info">BitcoinPK and RetinaVR, DAPPOMATICS</p>
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
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="team-title">
                                <h2 className="main-title">Core Team</h2>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <Card className="team-cards core-team core-team">
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
                        <Col lg={4} md={4} sm={12}>
                            <Card className="team-cards core-team">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL+"images/profile/zain.png"} />
                                <Card.Body>
                                    <h3>Zain Zahoor</h3>
                                    <h5>Front End Developer</h5>
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
                        <Col lg={4} md={4} sm={12}>
                            <Card className="team-cards core-team">
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
                    </Row>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="team-title">
                                <h2 className="main-title">Advisors</h2>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={12}>
                            <Card className="team-cards advisor">
                                <Card.Img variant="top" src={process.env.PUBLIC_URL+"images/profile/bilal-bin-saqib.png"} />
                                <Card.Body>
                                    <h3>Bilal Saqib</h3>
                                    <h5>Marketing & Community</h5>
                                    <p  className="company-info">Founder of tayaba</p>
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
                            <Card className="team-cards advisor">                          
                            <Card.Img variant="top" src={process.env.PUBLIC_URL+"images/profile/sajjad-rehman.png"} />
                                <Card.Body>
                                    <h3>Sajjad Rehman</h3>
                                    <h5>Games & Partnerships</h5>
                                    <p className="company-info">Head of unstoppable domians</p>
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
                            <Card className="team-cards advisor">                          
                            <Card.Img variant="top" src={process.env.PUBLIC_URL+"images/profile/altaf-qureshi.png"} />
                                <Card.Body>
                                    <h3>Altaf Qureshi</h3>
                                    <h5>Legal Advisor</h5>
                                    <p className="company-info">Founder of Paksign</p>
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
                            <Card className="team-cards advisor">                          
                            <Card.Img variant="top" src={process.env.PUBLIC_URL+"images/profile/rehman-rafiq.png"} />
                                <Card.Body>
                                    <h3>Rehman Rafiq</h3>
                                    <h5>Game Advisor</h5>
                                    <p className="company-info">Quixel at, EpicGames</p>
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

export default Team;