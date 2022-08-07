import { Component } from "react";
import "./Home.css";
import chris from "../assets/chris.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container bg-white min-vh-100 text-center justify-content-center d-flex pt-5 mt-2 ">
          <div className="imageContainer">
            <img
              alt="profile-img"
              className="roundImage shadow-lg"
              src={chris}
            />
          </div>
          <div className="home-text text-wrap" as="p">
            <h1 className="display-1 fw-bold">Christian Nunez</h1>
            <p style={{ fontSize: 25 }} className="text-muted">
              Full Stack Developer
            </p>
          </div>
        </div>

        <div className="text-center pt-4 mb-5 aboutMeContainer ">
          <h2 className="pb-3">About me</h2>
          <p className="aboutMeChild">
            I'm an art major from Los Angeles who recently graduated from a coding bootcamp. Although I enjoy front-end development using MERN, I like the challenge of being a back-end developer. When I'm not coding I enjoy traveling and going to concerts.  
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
