import React, { useState, useEffect, useRef } from "react";
import "../App.css";

type VideoProps = {
  src: string;
};

const VideoComponent: React.FC<VideoProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showLeftText, setShowLeftText] = useState(false);
  const [showRightText, setShowRightText] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play();
        }
      },
      { threshold: 0.1 }
    );

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
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", () => {
        setShowLeftText(true);
        setShowRightText(true);
      });
    }
  }, []);

  return (
    <div>
      <video ref={videoRef} src={src} autoPlay muted loop />
      <div className="text-container">
        {showLeftText && <p className="left-text">Hey there</p>}
        {showRightText && <p className="right-text">I'm Haqeem Wan</p>}
      </div>
    </div>
  );
};

export default VideoComponent;
