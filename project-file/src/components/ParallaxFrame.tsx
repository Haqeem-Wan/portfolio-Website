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
    <MouseParallaxContainer className="image-container">
      <MouseParallaxChild factorX={0.03} factorY={0.05}>
        <img className="scaledImage" src={fieldImage} alt="Field Background" style={{zIndex: 1}} />
      </MouseParallaxChild>

      <MouseParallaxChild factorX={0.07} factorY={0.08}>
        <img className="scaledImage" src={skyDiversImage} alt="Skydivers" style={{zIndex: 2}}/>
      </MouseParallaxChild>

      <MouseParallaxChild factorX={0.1} factorY={0.12}>
        <img className="scaledImage" src={birdsImage} alt="Birds" style={{zIndex: 3}}/>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
}

export default ParallaxFrame;
