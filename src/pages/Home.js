import { Component } from "react";
import "./Home.css";
import chris from "../assets/chris.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container bg-white min-vh-100 text-center justify-content-center d-flex pt-5 mt-2">
          <div className="imageContainer">
            <img className="roundImage" src={chris} />
          </div>
          <div className="home-text text-wrap">
            <h1 className="display-1 fw-bold">Christian Nunez</h1>
            <p style={{ fontSize: 25 }} className="text-muted">
              Full Stack Developer
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
