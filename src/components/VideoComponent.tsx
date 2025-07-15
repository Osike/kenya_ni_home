import React from "react";  
import myVideo from "../assets/video.mp4";


function VideoComponent() {
    return (
     <div>
        <video src={myVideo} autoPlay muted loop></video>
     </div>
    )  
}      
export default VideoComponent;
