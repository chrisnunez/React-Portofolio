import { Component } from "react";
import './Contact.css'
import {Container, Row, Col} from 'react-bootstrap'

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="text-center bg-white pt-5 contact">
                    <Container className="">
                        <Row className="justify-content-md-center parent">
                            <Col className="child" xs={2}><a href="https://github.com/chrisnunez" className="text-decoration-none githubIcon child"><i class= "fab fa-github"></i></a></Col>
                            <Col className="child" xs={2}><a href="https://www.linkedin.com/in/christian-nunez-04491818b/" className="linkedinIcon child"><i class="fab fa-linkedin-in"></i></a></Col>
                        </Row>
                    </Container>
                    <h3>Have a question or want to work together?</h3>
                    <a href="mailto:nunezchristian92@gmail.com" class="pb-4">
                        <button type="button" className="btn btn-dark btn-sm">Message me</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default Contact;