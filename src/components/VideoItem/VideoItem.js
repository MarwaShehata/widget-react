import React from "react";
import "./VideoItem.css";

const VideoItem =({video,onSelectedVideo})=>{

const handleVideoSelect =()=>{
  onSelectedVideo(video)
}
  return <>
    <div className="item videoItem--container" onClick={handleVideoSelect}> 
         <img
             className="ui image"
            alt={video.snippet.title}
            src={video.snippet.thumbnails.medium.url}           />
          <div className="content videoItem--content">
            <div className="header" href="#c">
               {video.snippet.title}
             </div>
          </div>
       </div>
  </>
}
export default VideoItem;
