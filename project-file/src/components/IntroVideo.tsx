import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useInView } from 'react-intersection-observer';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../App.css";

function IntroVideo() {
 const [playing, setPlaying] = useState(false);
 const [videoEnded, setVideoEnded] = useState(false);

 const { ref, inView } = useInView({
   triggerOnce: true,
 });

 useEffect(() => {
   if (inView) {
     setPlaying(true);
   }
 }, [inView]);

 return (
   <>
     <div className="parent-container">
       <div className={`video-container ${videoEnded ? "show-text" : ""}`} ref={ref}>
         <ReactPlayer
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
