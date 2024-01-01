import "./App.css";

import ListGroup from "./components/ListGroup";
import ParallaxFrame from "./components/ParallaxFrame";
import IntroVideo from "./components/IntroVideo";

function App() {
  return (
    <div className="background-colour-website">
      <ParallaxFrame />
      <IntroVideo />
    </div>
  );
}

export default App;
