import React, { useRef, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../App.css";

function IntroVideo() {
  const playerRef = useRef<ReactPlayer | null>(null);
  const [playing, setPlaying] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPlaying(true);
        } else {
          setPlaying(false);
        }
      });
    });

    const currentPlayer = playerRef.current;
    if (currentPlayer) {
      observer.observe(currentPlayer.wrapper);
    }

    return () => {
      if (currentPlayer) {
        observer.unobserve(currentPlayer.wrapper);
      }
    };
  }, []);

  return (
    <>
      <div className="parent-container">
        <div className={`video-container ${videoEnded ? "show-text" : ""}`}>
          <ReactPlayer
            ref={playerRef}
            url="../../public/videos/testVideo2.mp4"
            playing={playing}
            loop={false}
            muted={true}
            controls={false}
            className="react-player"
            onEnded={() => {
              console.log("Video Has Ended");
              setVideoEnded(true);
            }}
          />
          <TransitionGroup>
            {videoEnded && (
              <CSSTransition key="text" timeout={3000} classNames="fade">
                <div className="text-container">
                  <div className="left-text-container">
                    <div className="left-text">Hey there!</div>
                  </div>
                  <div className="right-text-container">
                    <div className="right-text">I'm Haqeem Wan</div>
                  </div>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
      </div>
    </>
  );
}

export default IntroVideo;
