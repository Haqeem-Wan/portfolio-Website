import "./App.css";

import ListGroup from "./components/ListGroup";
import ParallaxFrame from "./components/ParallaxFrame";
import IntroVideo from "./components/IntroVideo";

function App() {
  return (
    <div className="background-colour-website">
      <ParallaxFrame />
      <ListGroup />
      <IntroVideo src={"../assets/testVideo1.mp4"} />
    </div>
  );
}

export default App;
