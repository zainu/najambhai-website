import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Row,Container,Col} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {data} from '../data/data';
const Home = ()=>{
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <>
        <Header/>
            <div className="home">
                <div className="hero-section">
                    <Container>
                        <Row>
                            <Col lg={12} md={12}>
                                <h2>Together, we build<br/> the <span>Metaverse</span></h2>
                                <p>We are a decentralized autonomous organization on a mission to revolutionize gaming. Let's build the metaverse by empowering people to be a part of it.</p>
                                {/* <div className="hero-animation">
                                    <svg width="814" height="814" viewBox="0 0 814 814" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-3305b5b3-2 hMVClG"><path fill-rule="evenodd" clip-rule="evenodd" d="M569.795 651.201C703.313 651.201 811.804 544.045 813.96 411.041L813.993 407.003C813.993 631.781 631.774 813.999 406.996 813.999C182.219 813.999 0 631.781 0 407.003H325.597C325.597 541.869 434.928 651.201 569.795 651.201Z" fill="url(#paint0_linear_1024_1042)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M244.205 651.194C110.687 651.194 2.19603 544.039 0.0395641 411.035L0.00683594 406.996C0.00683594 631.774 182.226 813.993 407.004 813.993C631.781 813.993 814 631.774 814 406.996H488.403C488.403 541.863 379.072 651.194 244.205 651.194Z" fill="url(#paint1_linear_1024_1042)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M244.205 162.798C110.687 162.798 2.19603 269.954 0.0395641 402.958L0.00683594 406.996C0.00683594 182.218 182.226 0 407.004 0C631.781 0 814 182.218 814 406.996H488.403C488.403 272.13 379.072 162.798 244.205 162.798Z" fill="url(#paint2_linear_1024_1042)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M569.795 162.805C703.313 162.805 811.804 269.96 813.96 402.964L813.993 407.003C813.993 182.225 631.774 0.00634766 406.996 0.00634766C182.219 0.00634766 0 182.225 0 407.003H325.597C325.597 272.136 434.928 162.805 569.795 162.805Z" fill="url(#paint3_linear_1024_1042)"></path><defs><linearGradient id="paint0_linear_1024_1042" x1="178.061" y1="407.003" x2="190.78" y2="813.999" gradientUnits="userSpaceOnUse"><stop stop-color="#EF9146"></stop><stop offset="1" stop-color="#E0592E"></stop></linearGradient><linearGradient id="paint1_linear_1024_1042" x1="407.004" y1="406.996" x2="407.004" y2="813.993" gradientUnits="userSpaceOnUse"><stop stop-color="#E57722"></stop><stop offset="1" stop-color="#F2B24C"></stop></linearGradient><linearGradient id="paint2_linear_1024_1042" x1="597.447" y1="406.996" x2="597.447" y2="-17.2781" gradientUnits="userSpaceOnUse"><stop stop-color="#E57722"></stop><stop offset="1" stop-color="#DD4A33"></stop></linearGradient><linearGradient id="paint3_linear_1024_1042" x1="165.342" y1="407.003" x2="165.342" y2="0.00634766" gradientUnits="userSpaceOnUse"><stop stop-color="#EF9046"></stop><stop offset="1" stop-color="#F3C44F"></stop></linearGradient></defs></svg>
                                </div> */}
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="content-section">
                    <Container>
                        <Row>
                            <Col className="px-4">
                                <h2 className="main-title">We're changing the rules of the game</h2>
                                <p className="para-text">Explore a variety of games we are playing across the metaverse. Exciting first-person shooters, MMORPGs, MOBAs to competitive card battlers.</p>
                                <button className="btn btn-primary">See all games</button>
                            </Col>
                        </Row>
                    </Container>                    
                </div>
                <div className="showcase-section">
                    <Container>
                        <h2 className="main-title">From play-to-win to play-to-earn</h2>
                        <p className="para-text">Through ownership and rewarding merit, games are now governed by the players. Innovative in-game economics reward players for their performance, creating a new economy in the Metaverse.</p>
                        <Row>
                            <Col lg={4} md={4} className="showcase-card">
                                <h5>Total gamers</h5>
                                <label>3750</label>
                                <p>We are proudly managing gamers from Asia, Africa, Europe, South-America daily earnings rewards through playing various games</p>
                            </Col>
                            <Col lg={4} md={4} className="showcase-card">
                                <h5>Total gamers</h5>
                                <label>3750</label>
                                <p>We are proudly managing gamers from Asia, Africa, Europe, South-America daily earnings rewards through playing various games</p>
                            </Col>
                            <Col lg={4} md={4} className="showcase-card">
                                <h5>Total gamers</h5>
                                <label>3750</label>
                                <p>We are proudly managing gamers from Asia, Africa, Europe, South-America daily earnings rewards through playing various games</p>
                            </Col>        
                        </Row>
                        <Row>
                            <Col lg={4} md={4} className="showcase-card">
                                <h5>Total gamers</h5>
                                <label>3750</label>
                                <p>We are proudly managing gamers from Asia, Africa, Europe, South-America daily earnings rewards through playing various games</p>
                            </Col>
                            <Col lg={4} md={4} className="showcase-card">
                                <h5>Total gamers</h5>
                                <label>3750</label>
                                <p>We are proudly managing gamers from Asia, Africa, Europe, South-America daily earnings rewards through playing various games</p>
                            </Col>
                            <Col lg={4} md={4} className="showcase-card">
                                <h5>Total gamers</h5>
                                <label>3750</label>
                                <p>We are proudly managing gamers from Asia, Africa, Europe, South-America daily earnings rewards through playing various games</p>
                            </Col>        
                        </Row>
                        <Row>
                            <div className="coursel-title d-flex align-item-center">
                                <h2>Games we're playing</h2>
                            </div>
                            <div>
                            <Slider {...settings}>
                                <div>
                                    <h3>1</h3>
                                </div>
                                <div>
                                    <h3>2</h3>
                                </div>
                                <div>
                                    <h3>3</h3>
                                </div>
                                <div>
                                    <h3>4</h3>
                                </div>
                                <div>
                                    <h3>5</h3>
                                </div>
                                <div>
                                    <h3>6</h3>
                                </div>
                                <div>
                                    <h3>7</h3>
                                </div>
                                <div>
                                    <h3>8</h3>
                                </div>
                                </Slider>
                            </div>
                        </Row>
                    </Container>
                </div>
                        <div className="doa-section">
                            <Row>
                                <Col lg={12} md={12}>
                                    <h2>Decentralized Autonomous.</h2>
                                    <p>Merit Circle is a decentralized autonomous organization meaning every single person that holds $MC tokens holds voting rights to decide on the future of the organization.</p>
                                    <button>Learn more abou DAO</button>
                                </Col>
                            </Row>
                        </div>
                        <div className="news-section">
                            <Row>
                                <div className="coursel-title d-flex align-item-center">
                                    <h2>Recent News</h2>
                                </div>
                                <div>
                                
                                </div>
                            </Row>
                        </div>
                    
            </div>    
        <Footer/>
        </>
    )
}

export default Home;