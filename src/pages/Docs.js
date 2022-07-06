import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { Row,Container,Col,Card,CardImg} from 'react-bootstrap';
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedin } from "react-icons/fa";
const Docs = ()=>{
    return(
        <>
        <Header/>
            <div>
                Documentation
            </div>    
        <Footer/>
        </>
    )
}

export default Docs;