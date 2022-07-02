import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Row,Container,Col,Form,Button} from 'react-bootstrap';

const Contact = ()=>{
    return(
        <>
        <Header/>
        <Container>
            <div className="contact-page">
                <Row>
                    <Col lg={12} md={12}>
                    <div className="contact-section">
                        <h2 className="main-title">Contact us.</h2>
                        <p className="para-text">Merit Circle is an open and transparent organization happy to receive suggestions and feedback of all sorts. Thus, if you have any questions, ideas or suggestions, don't hesitate to reach out!</p>
                    </div>
                    </Col>
                </Row>
                <Form className="contact-form">
                    <Row>
                        <Col lg={6} md={6}>
                        <Form.Group className="mb-3" controlId="formFName">
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>    
                        </Col>
                        <Col lg={6} md={6}>
                        <Form.Group className="mb-3" controlId="formLName">
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                        </Col>
                        <Col lg={12} md={12}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                        </Col>
                        <Col lg={12} md={12}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" placeholder="Message" rows={6} />
                        </Form.Group>
                        </Col>
                        <Col lg={12} md={12} className="d-flex justify-content-end">
                            <Button variant="primary" type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </div>    
        </Container>
        <Footer/>
        </>
    )
}

export default Contact;