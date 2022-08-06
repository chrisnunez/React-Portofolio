import { Component } from "react";
import './Resume.css'
import Pdf from '../assets/Resume-2022.pdf'

class Resume extends Component {
    render() {
        return (
            <div className="resumeContainer">
                <div class="text-center resume">
                    <h1>You can view and download my resume here.</h1>
          <a href={Pdf} target="_blank" >
        <button type="button" class="btn btn-dark mt-5 text-center">Resume</button>
         </a>
      </div>
            </div>
        )
    }
}

export default Resume;