import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Row,Container,Col} from 'react-bootstrap';


const Games = ()=>{
    
    return(
        <>
        <Header/>
            <div className="games">
                <div className="games-section">
                    <Container>
                        <Row>
                            <Col lg={12} md={12}>
                                <h2 className="main-title">We’re changing the rules of the game</h2>
                                <p className="para-text">Explore a variety of games we are playing across the metaverse. Exciting first-person shooters, MMORPGs, MOBAs to competitive card battlers.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="games-detail-section">
                    <Container>
                        <Row>
                            <Col className="px-4">
                                <h2 className="main-title">From play-to-win to<br/> play-to-earn</h2>
                                <p className="para-text">Through ownership and rewarding merit, games are now governed by the players. Innovative in-game economics reward players for their performance, creating a new economy in the Metaverse.</p>
                            </Col>
                        </Row>
                        <Row className="games-card">
                            <Col lg={12} md={12} sm={12}>
                                <h2 className="main-title text-left">Axie Infinity<span className="games-label">Live</span></h2>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <img src={process.env.PUBLIC_URL+"images/games/axieinfiniy-1.png"}/>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <img src={process.env.PUBLIC_URL+"images/games/axie-infiniy2.png"}/>
                            </Col>
                            <Col lg={12} md={12} sm={12} className="games-detail">
                                <p className="para-text">Players of Axie Infinity collect and mint NFTs which represent axolotl-inspired digital pets known as Axies.[4] These creatures can be bred and battled with each other within the game.</p>
                            </Col>    
                        </Row>
                        <Row className="games-card">
                            <Col lg={12} md={12} sm={12}>
                                <h2 className="main-title text-left">Syncity<span className="games-label">Upcoming</span></h2>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <img src={process.env.PUBLIC_URL+"images/games/syncity1.png"}/>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <img src={process.env.PUBLIC_URL+"images/games/syncity2.png"}/>
                            </Col>
                            <Col lg={12} md={12} sm={12} className="games-detail">
                                <p className="para-text">SYN CITY is the first ever Mafia Metaverse. The Mafia is simply nothing without its members, and for that reason, they are introducing the revolutionary MAFIA as a DAO (MaaD) system.</p>
                            </Col>    
                        </Row>
                        <Row className="games-card">
                            <Col lg={12} md={12} sm={12}>
                                <h2 className="main-title text-left">Illuvium <span className="games-label">Upcoming</span></h2>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <img src={process.env.PUBLIC_URL+"images/games/illuvium-1.png"}/>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <img src={process.env.PUBLIC_URL+"images/games/illuvium2.png"}/>
                            </Col>
                            <Col lg={12} md={12} sm={12} className="games-detail">
                                <p className="para-text">lluvium is an open-world exploration, NFT creature collector and autobattler game built on the Ethereum Blockchain, Play-to-earn and conquer the wilderness to help your crash-landed crew flourish.</p>
                            </Col>    
                        </Row>
                    </Container>                    
                </div>
            </div>    
        <Footer/>
        </>
    )
}

export default Games;