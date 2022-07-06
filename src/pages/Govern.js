import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Row,Container,Col} from 'react-bootstrap';


const Govern = ()=>{
    return(
        <>
        <Header/>
            <Container>
                <div className="govern-page">
                    <Row>
                        <Col lg={12} md={12}>
                        <div className="py-4">
                            <h2 className="main-title">Governance forum will <br/>come online  in a few weeks.</h2>
                        </div>
                        </Col>
                    </Row>     
                </div>
            </Container>    
        <Footer/>
        </>
    )
}

export default Govern;