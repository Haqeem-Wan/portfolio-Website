import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import "../App.css";

import fieldImage from "../assets/field.png";
import nameImage from "../assets/nameImage.png";
import skyDiversImage from "../assets/skydivers.png";
import birdsImage from "../assets/birds.png";

function ParallaxFrame() {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    console.error(`Failed to load image at ${e.currentTarget.src}`);
    e.currentTarget.src = "../assets/birds.png"; // replace with path to default image
  };

  return (
    <MouseParallaxContainer className={`image-container`}>
      <div>
        <MouseParallaxChild factorX={-0.03} factorY={-0.05}>
          <img
            className={"field"}
            src={fieldImage}
            alt="Field Background"
            draggable="false"
          />
        </MouseParallaxChild>
      </div>

      <div>
        <MouseParallaxChild factorX={-0.05} factorY={-0.07}>
          <img
            className={"nameImage"}
            src={nameImage}
            alt="Name Image"
            draggable="false"
          />
        </MouseParallaxChild>
      </div>

      <div>
        <MouseParallaxChild factorX={-0.09} factorY={-0.1}>
          <img
            className={"skydivers"}
            src={skyDiversImage}
            alt="Skydivers"
            draggable="false"
          />
        </MouseParallaxChild>
      </div>

      <div>
        <MouseParallaxChild factorX={-0.2} factorY={-0.22}>
          <img
            className={"birds"}
            src={birdsImage}
            alt="Birds"
            onError={handleImageError}
            draggable="false"
          />
        </MouseParallaxChild>
      </div>
    </MouseParallaxContainer>
  );
}

export default ParallaxFrame;
