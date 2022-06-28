import React from "react";
import { Row,Container,Col} from 'react-bootstrap';
import { FaTwitter,FaDiscord,FaMedium,FaTelegramPlane } from "react-icons/fa";
const Footer = ()=>{
    return(
        <footer className="footer">
        <Container>
            <Row>
                <Col lg={3} md={3} sm={12}>
                    <ul className="site-map">
                        <h3>Misc</h3>
                        <li>Staking</li>
                        <li>Uniswap</li>
                        <li>Pancake Swap</li>
                        <li>Binance</li>
                        <li>Press Kit</li>
                    </ul>
                </Col>
                <Col lg={3} md={3} sm={12}>
                    <ul className="site-map">
                        <h3>About</h3>
                        <li>Overview</li>
                        <li>About LightBeem</li>
                        <li>About the Doa</li>
                        <li>Binance</li>
                        <li>Press Kit</li>
                    </ul>
                </Col>
                <Col lg={3} md={3} sm={12}>
                    <ul className="site-map">
                        <h3>Games</h3>
                        <li>Overview</li>
                        <li>Plateform</li>
                        <li>Partnership</li>
                        <li>Binance</li>
                        <li>Press Kit</li>
                    </ul>
                </Col>
                <Col lg={3} md={3} sm={12}>
                    <ul className="site-map">
                        <h3>Contact</h3>
                        <li>Contact US</li>
                        <li>Get Support</li>
                        <li>Twitter</li>
                        <li>Telegram</li>
                        <li>Press Kit</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col lg={12} md={12}>
                    <ul className="social-icons">
                        <li><FaTwitter/></li>
                        <li><FaDiscord/></li>
                        <li><FaTelegramPlane/></li>
                        <li><FaMedium/></li>
                    </ul>
                    <ul className="copytights">
                        <li>2022 LightBeem</li>
                        <li>hello@lightbeem.com</li>
                        <li>Terms and Condition</li>
                        <li>Privacy Policy</li>
                    </ul>
                </Col>
            </Row>
        </Container>
        </footer>
    )
}

export default Footer;