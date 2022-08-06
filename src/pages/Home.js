import { Component } from "react";
import "./Home.css";
import chris from "../assets/chris.jpg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container bg-white min-vh-100 text-center justify-content-center d-flex pt-5 mt-2 ">
          <div className="imageContainer">
            <img className="roundImage shadow-lg" src={chris} />
          </div>
          <div className="home-text text-wrap" as="p" >
            <h1 className="display-1 fw-bold">Christian Nunez</h1>
            <p style={{ fontSize: 25 }} className="text-muted">
              Full Stack Developer
            </p>
          </div>
        </div>

        {/* <div className='button github text-center mb-5'>
            <a href="https://github.com/chrisnunez" className="text-decoration-none githubIcon"><i class= "fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/christian-nunez-04491818b/" className="linkedinIcon"><i class="fab fa-linkedin-in"></i></a>
          </div> */}


        <section className="about text-center" id="about">
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg text-center w-25 pt-4 mb-5">
          <h2 className="text-center pb-3">About me</h2>
          <p className="w-20">I'm a full stack coding developer from Los Angeles. </p>
          <div className="row p-1 ">
         
        </div>
        
        </div>
    
      </div>
    </div>
  </section>
      </div>
    );
  }
}

export default Home;
