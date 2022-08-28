import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({videos,onSelectedVideo})=>{
  const renderedVideosList = videos.map((video)=>{
    return  <VideoItem key={video.id.videoId}  video={video} onSelectedVideo={onSelectedVideo}/>
  })
  return <>
  
  <div className="ui relaxed divided list " >
 {renderedVideosList}
  </div>
  
  </>
}
export default VideoList