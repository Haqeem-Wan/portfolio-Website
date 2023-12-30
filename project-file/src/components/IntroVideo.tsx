import React, { useEffect, useRef } from "react";
import "../App.css";

interface IntroVideoProps {
  videoUrl: string;
}

const IntroVideo: React.FC<IntroVideoProps> = ({ videoUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
        }
      });
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (leftTextRef.current) {
        leftTextRef.current.classList.add("fade-in");
      }
      if (rightTextRef.current) {
        rightTextRef.current.classList.add("fade-in");
      }
    }, 2000); // Delay of 2 seconds
  }, []);

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <div ref={leftTextRef} className="left-text">
        Hey there
      </div>
      <div ref={rightTextRef} className="right-text">
        I'm Haqeem Wan
      </div>
    </div>
  );
};

export default IntroVideo;
