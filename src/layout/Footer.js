import React from "react";
import { Link } from "react-router-dom";
import { Row,Container,Col} from 'react-bootstrap';
import { FaTwitter,FaDiscord,FaMedium,FaTelegramPlane } from "react-icons/fa";
const Footer = ()=>{
    return(
        <footer className="footer">
        <Container>
            <Row>
                <Col lg={2} md={2} sm={6} xs={6}>
                    <ul className="site-map">
                        <h3>Misc</h3>
                        <li><a href="http://growingorbit.com/">Staking</a></li>
                        <li><a href="http://growingorbit.com/">Uniswap</a></li>
                        <li><a href="http://growingorbit.com/">Pancake Swap</a></li>
                        <li><a href="http://growingorbit.com/">Binance</a></li>
                        <li><a href="http://growingorbit.com/">Press Kit</a></li>
                    </ul>
                </Col>
                <Col lg={2} md={2} sm={6} xs={6}>
                    <ul className="site-map">
                        <h3>About</h3>
                        <li><Link to='/about'>Overview</Link></li>
                        <li><Link to='/about'>About GrowingOrbit</Link></li>
                        <li><Link to='/team'>Our Team</Link></li>
                    </ul>
                </Col>
                <Col lg={2} md={2} sm={6} xs={6}>
                    <ul className="site-map">
                        <h3>Games</h3>
                        <li><Link to='/games'>Overview</Link></li>
                        <li><a href="http://growingorbit.com/">Plateform</a></li>
                        <li><a href="http://growingorbit.com/">Partnership</a></li>
                    </ul>
                </Col>
                <Col lg={2} md={2} sm={6} xs={6}>
                    <ul className="site-map">
                        <h3>Governance</h3>
                        <li><a href="http://growingorbit.com/">The DAO</a></li>
                        <li><a href="http://growingorbit.com/">Snapshot</a></li>
                        <li><a href="http://growingorbit.com/">Gov Forum</a></li>
                    </ul>
                </Col>
                <Col lg={2} md={2} sm={6} xs={6}>
                    <ul className="site-map">
                        <h3>Docs</h3>
                        <li><a href="http://growingorbit.com/">FAQs</a></li>
                        <li><a href="http://growingorbit.com/">Medium</a></li>
                        <li><a href="http://growingorbit.com/">Substack</a></li>
                        <li><a href="http://growingorbit.com/">Gitbook</a></li>
                    </ul>
                </Col>
                <Col lg={2} md={2} sm={6} xs={6}>
                    <ul className="site-map">
                        <h3>Contact</h3>
                        <li><Link to='/contact'>Contact Us</Link></li>
                        <li><Link to='/contact'>Get Support</Link></li>
                        <li><a href="http://growingorbit.com/">Twitter</a></li>
                        <li><a href="http://growingorbit.com/">Telegram</a></li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col lg={12} md={12}>
                    <ul className="social-icons">
                        <li><a href="http://growingorbit.com/"><FaTwitter/></a></li>
                        <li><a href="http://growingorbit.com/"><FaDiscord/></a></li>
                        <li><a href="http://growingorbit.com/"><FaTelegramPlane/></a></li>
                        <li><a href="http://growingorbit.com/"><FaMedium/></a></li>
                    </ul>
                    <ul className="copyrights">
                        <li>2022 GrowingOrbit</li>
                        <li>hello@Growingorbit.com</li>
                        <li><a href="http://growingorbit.com/">Terms and Condition</a></li>
                        <li><a href="http://growingorbit.com/">Privacy Policy</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
        </footer>
    )
}

export default Footer;