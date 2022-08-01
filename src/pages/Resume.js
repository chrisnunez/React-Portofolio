import { Component } from "react";
import './Resume.css'

class Resume extends Component {
    render() {
        return (
            <div>
                <div class="text-center resume">
                    <h1>You can download my resume here.</h1>
          <a href="./assets/Resume-2022.pdf" download="Christian_Nunez_Resume">
        <button type="button" class="btn btn-dark mt-5 text-center">Download Resume</button>
         </a>
      </div>
            </div>
        )
    }
}

export default Resume;