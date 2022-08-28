import React from "react";
const VideoDetailes=({video})=>{
  const videoSrc=` https://www.youtube.com/embed/${video?.id?.videoId} `
    if (!video) {
      return <div>Loading.....</div>;
    }
  console.log(video);
  return <>
      <div>
        <div className="ui embed">
          <iframe
            src={videoSrc}
            
            title="video player"
          ></iframe>
        </div>
        <div className="ui segment">
          <h4 className="ui header"> {video?.snippet?.title}</h4>
          <p>{video?.snippet?.description}</p>
        </div>
      </div>
  </>
}
export default VideoDetailes;
