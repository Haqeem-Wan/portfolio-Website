import React, { useEffect } from "react";
import "./App.css";
import ParallaxFrame from "./components/ParallaxFrame";
import IntroVideo from "./components/IntroVideo";

function App() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    console.log("Scrolling to top");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  return (
    <div className="background-colour-website">
      <ParallaxFrame />
      <IntroVideo />
    </div>
  );
}

export default App;
