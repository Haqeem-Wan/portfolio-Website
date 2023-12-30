import ListGroup from "./components/ListGroup";
import ParallaxFrame from "./components/ParallaxFrame";
import IntroVideo from "./components/IntroVideo";

function App() {
  return (
    <div>
      <ParallaxFrame />
      <ListGroup />
      <IntroVideo videoUrl={"https://www.youtube.com/watch?v=SqcY0GlETPk&t=1300s"} />
    </div>
  );
}

export default App;
