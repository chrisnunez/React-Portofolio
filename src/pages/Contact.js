import { Component } from "react";
import './Contact.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Contact extends Component {
    render() {
        
        return (
            <div className="contactContainer"> 
                <div className="text-center">
                    <h1 className="contact-title ">Contact</h1>
                </div>
                {/* Name input */}
                <div>
                <Form className="container w-25 form-container">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                    {/* Email input */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    {/* Message input */}
                    <Form.Control
                        as="textarea"
                        placeholder="Message"
                        style={{ height: '100px' }}
                    />
                    <div className="text-center mt-3">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
            </div>
        );

    }
}

export default Contact;