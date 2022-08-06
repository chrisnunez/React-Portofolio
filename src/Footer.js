import { Container } from "react-bootstrap";
import {Row, Col} from 'react-bootstrap'
import './Footer.css'

function Footer () {
    return (
        <div>
<div bg="dark" expand="lg" className="bg-dark pt-4">
       
            <Row className="text-center m-0 p-0 footerContainer pb-3 ">
                <Col className=""><a href="https://github.com/chrisnunez" className="text-decoration-none"><i class= "fab fa-github fa-xl"></i></a></Col>
                <Col><a href="https://www.linkedin.com/in/christian-nunez-04491818b/" className="text-decoration-none"><i class="fab fa-linkedin-in fa-xl"></i></a></Col>
                <Col><a href="https://twitter.com/chrissnnunez" className="text-decoration-none"><i class="fab fa-twitter fa-xl"></i></a></Col>
            </Row>
      
</div>
        </div>
    )
}

export default Footer;