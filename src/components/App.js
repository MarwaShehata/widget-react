import React ,{useState,useEffect} from "react";
 import SearchBar from "./SearchBar/SearchBar";
 //import axiosConfig from "./../apis/youtube";
import VideoList from "./VideoList/VideoList";
import VideoDetailes from "./VideoDetailes/VideoDetailes";
import useVideos from './../hooks/useVideos'
const App =()=>{
  
  const [selectedVideo,setselectedVideo] =useState(null)
 
 const [videos,onSearchSubmit]=useVideos("Architecture")
 useEffect(()=>{
  setselectedVideo(videos[0])
 },[videos])
  return <>
  <div className="ui container" style={{ marginTop: "10px" }}>
  <SearchBar onSearchSubmit ={onSearchSubmit}/>
  <div className="ui grid">
         <div className="ui row">
<div className="eleven wide column">
<VideoDetailes video={selectedVideo}/>
</div>
<div className="five wide column">
 <VideoList videos={videos} 
 onSelectedVideo={setselectedVideo}  />
 </div>
 </div>
 </div>
 </div>
  </>
}
export default App;
