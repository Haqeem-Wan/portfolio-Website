import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import "../App.css";

import fieldImage from "../assets/field.png";
import skyDiversImage from "../assets/skydivers.png";
import birdsImage from "../assets/birds.png";

function ParallaxFrame() {
  return (
    <MouseParallaxContainer className={`image-container`}>
      <div>
        <MouseParallaxChild factorX={-0.03} factorY={-0.05}>
          <img className={"field"} src={fieldImage} alt="Field Background" loading="eager"/>
        </MouseParallaxChild>
      </div>

      <div> 
        <MouseParallaxChild factorX={-0.09} factorY={-0.1}>
          <img className={"skydivers"} src={skyDiversImage} alt="Skydivers" loading="eager"/>
        </MouseParallaxChild>
      </div>

      <div>
        <MouseParallaxChild factorX={-0.2} factorY={-0.22}>
          <img  src={birdsImage} alt="Birds" loading="eager"/>
        </MouseParallaxChild>
      </div>
    </MouseParallaxContainer>
  );
}

export default ParallaxFrame;